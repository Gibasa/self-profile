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
<style lang="scss" scoped>

.sideBar {
  position: absolute;
  right: 0;
  width: 180px;
  height: 100%;
  border-left: 1px solid rgb(231, 246, 242, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 2;
  .side-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-grow: 6;
  }
  .side-language {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    button {
      height: 30%;
    }
  }
  .side-socials {
    display: flex;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    .icons {
      color: white;
      font-size: larger;
    }
  }
}

</style>