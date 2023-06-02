<template>
  <div class="sideBar">  
    <div class="side-socials">
      <font-awesome-icon icon="fa-brands fa-github fa-6x" class="icons" />
      <font-awesome-icon icon="fa-brands fa-linkedin" class="icons" />
    </div>  
    <div class="side-menu">      
        <router-link :to="{path: '/about'}">Sobre mim</router-link>
        <a href="#">Projetos</a>
        <routerLink :to="{path: '/skills'}">Competências</routerLink>
        <a href="#">Contate-me</a>
    </div>
    <div class="side-language">
        <a href="#">EN/PT</a>
    </div>     
    
  </div>
</template>
<script scoped>

</script>