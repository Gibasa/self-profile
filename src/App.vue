<script setup>
import headerComponent from './components/headerComponent.vue';
import sideBarComponent from './components/sideBarComponent.vue';

</script>

<template>
  <header>
    <headerComponent/>
    <sideBarComponent/>   
  </header>   

    <div class="main">
      <router-view></router-view>
    </div>
</template>

<style lang="scss" src="./assets/scss/style.scss" />


