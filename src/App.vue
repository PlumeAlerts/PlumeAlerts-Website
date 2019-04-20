<template>
  <div>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
           data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/dashboard">Dashboard</router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/alerts">Alerts</router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/bot">Chat Bot</router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/donations">Donations</router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/misc ">Misc</router-link>
          </a>
        </div>
      </div>
    </nav>
    <section class="section">
      <router-view/>
    </section>
  </div>
</template>
