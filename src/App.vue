<script setup>
import headerComponent from './components/headerComponent.vue'
import sideBarComponent from './components/sideBarComponent.vue'
</script>

<template>
  <header>
    <headerComponent />
    <sideBarComponent />
  </header>

  <router-view v-slot="{ Component, route }">
    <transition name="route" mode="out-in">
      <main :key="route.name">
        <component :is="Component"></component>
      </main>
    </transition>
  </router-view>
</template>

<style lang="scss" src="./assets/scss/style.scss" />
