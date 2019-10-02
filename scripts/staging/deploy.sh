#!/bin/sh
set -ev

# Deploy B2
pip install --user --upgrade b2
b2 authorize-account $B2_STAGING_KEY_ID $B2_STAGING_APPLICATION_KEY
b2 sync --keepDays 14 --replaceNewer dist/ b2://plumealerts/staging/

# Deploy SSH
echo "$SFTP_STAGING_KEY" | base64 --decode >/tmp/deploy_rsa
eval $(ssh-agent -s)
ssh-keyscan $SFTP_STAGING_HOST >> ~/.ssh/known_hosts
chmod 600 /tmp/deploy_rsa
ssh-add /tmp/deploy_rsa

rsync -r --delete-after dist/ $SFTP_STAGING_USER@$SFTP_STAGING_HOST:$SFTP_STAGING_PATH
