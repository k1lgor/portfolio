<template>
  <nav class="navbar navbar-expand-lg fixed-top" id="header">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbar-supported-content">
        <router-link
          :to="{ name: 'home' }"
          active-class="active"
          exact
          tag="li"
          type="button"
          class="navbar-nav ms-auto"
          >Home
        </router-link>
        <router-link
          :to="{ name: 'about' }"
          active-class="active"
          tag="li"
          type="button"
          class="navbar-nav ms-4"
          >About
        </router-link>
        <router-link
          :to="{ name: 'portfolio' }"
          active-class="active"
          tag="li"
          type="button"
          class="navbar-nav ms-4"
          >Portfolio
        </router-link>
        <router-link
          :to="{ name: 'contacts' }"
          active-class="active"
          tag="li"
          type="button"
          class="navbar-nav ms-4"
          >Contacts
        </router-link>
      </div>
    </div>
  </nav>
</template>