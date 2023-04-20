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
    

    <div>
      <mainComponent/>
    </div>
</template>

<style lang="scss" src="./assets/scss/style.scss" />


