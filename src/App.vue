<script setup>
import headerComponent from './components/headerComponent.vue';
import sideBarComponent from './components/sideBarComponent.vue';
import mainComponent from './components/mainComponent.vue'
</script>

<template>
  <header>
    <headerComponent/>
    <sideBarComponent/>
  </header>   

    <div class="main">
      <mainComponent/>
    </div>
</template>

<style lang="scss" src="./assets/scss/style.scss" />


