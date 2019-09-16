<template>
  <div class="section">
    Login
    {{error}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Login from '@/network/v1/login';

@Component
export default class LoginTwitch extends Vue {
    private error: string = '';

    public created() {
        Login.getTwitchAuth()
            .then((value) => {
                window.location.href = value.data.url;
            })
            .catch((reason) => {
                this.error = 'Failed to login ' + reason; // TODO move to localization file
            });
    }
}
</script>
