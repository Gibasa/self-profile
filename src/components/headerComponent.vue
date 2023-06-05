<template>
  <nav>
    <div class="nav-logo">
      <router-link :to="{path: '/'}">Gilberto Sá</router-link>
    </div>
  </nav>
</template>
<style scoped lang="scss">

nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    border-bottom: 1px solid rgb(231, 246, 242, 0.1);
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 2rem 1.2rem 2rem;
    justify-content: space-between;
    .nav-logo{
        padding-left:20px ;
        display: flex;        
        justify-content: flex-start;
    }
    
}
</style>