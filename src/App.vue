<template>
  <div>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo">
        </router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
           data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" v-if="loggedIn">
            <router-link to="/dashboard">Dashboard</router-link>
          </a>
          <a class="navbar-item" v-else>
            <router-link to="/">Home</router-link>
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link class="button is-light" to="/login" v-if="!loggedIn">Log in</router-link>
              <router-link class="button is-light" to="/signout" v-else>Sign Out</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {Getter} from 'vuex-class';

@Component
export default class App extends Vue {
  @Getter public loggedIn!: boolean;
}
</script>
