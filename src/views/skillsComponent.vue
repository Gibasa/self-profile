<template>
  <div class="skills">
  <div class="skillsCards">
    <div class="skill" v-for="skill in skills" :key="skill.id">
    <a :href=skill.site target="_blank"> <font-awesome-icon :icon=skill.icon class="icons" /> </a>
      <div :class="skill.name">{{ skill.name }}</div>
      <div class="skillLevel">
        <div class="skillProgress" :style="{ width: `${skill.level * 10}%` }"></div>
      </div>
    </div>
  </div>
  <h3>Clique nos icones para saber mais sobre cada um deles.</h3>
</div>
</template>

<script>
export default {
  name: 'skillsComponent',
  data() {
    return {
      skills: [
        { name: 'Html', site: 'https://www.w3schools.com/html/', level: 8, icon: "fa-brands fa-html5" },
        { name: 'CSS', site: 'https://www.w3schools.com/css/default.asp', level: 7, icon: "fa-brands fa-css3-alt" },
        { name: 'Sass', site: 'https://sass-lang.com', level: 8, icon: "fa-brands fa-sass" },
        { name: 'Python', site: 'https://www.python.org', level: 6, icon: "fa-brands fa-python" },
        { name: 'JavaScript', site: 'https://www.w3schools.com/js/', level: 7, icon: "fa-brands fa-js" },
        { name: 'Vue.js', site: 'https://vuejs.org', level: 7, icon: "fa-brands fa-vuejs" },
        { name: 'React', site: 'https://react.dev', level: 3, icon: "fa-brands fa-react" },
        { name: 'Node.js', site: 'https://nodejs.org/en', level: 6, icon: "fa-brands fa-node" },
        { name: 'MySQL', site: 'https://www.mysql.com', level: 6, icon: "fa-solid fa-database" },
        { name: 'Git', site: 'https://git-scm.com', level: 7, icon: "fa-brands fa-git-alt" },
        { name: 'Github', site: 'https://github.com/', level: 7, icon: "fa-brands fa-github"},
      ]
    }
  },   
}
</script>
