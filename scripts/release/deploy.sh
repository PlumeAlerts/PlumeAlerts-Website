#!/bin/sh
set -ev

# Deploy B2
pip install --user --upgrade b2
b2 authorize-account $B2_KEY_ID $B2_APPLICATION_KEY
b2 sync --keepDays 14 --replaceNewer dist/ b2://plumealerts/staging/

# Deploy SSH
echo "$SFTP_KEY" | base64 --decode >/tmp/deploy_rsa
eval "ssh-agent -s"
ssh-keyscan $SFTP_HOST >> ~/.ssh/known_hosts
chmod 600 /tmp/deploy_rsa
ssh-add /tmp/deploy_rsa

rsync -r --delete-after dist/ $SFTP_USER@$SFTP_HOST:$SFTP_PATH
