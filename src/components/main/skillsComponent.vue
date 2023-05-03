<template>
  <div class="skills" >
    <div
      class="skillCard"
      v-for="skill in skills"
      :key="skill.id"
      :style="{ '--mouse-x': mouseX, '--mouse-y': mouseY }"
      v-on:mousemove="handleOnMouseMove"
    >
      <div :class="skill.name">{{ skill.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skillsComponent',
  data() {
    return {
      skills: [
        { name: 'Html', site: 'https://www.w3schools.com/html/' },
        { name: 'CSS', site: 'https://www.w3schools.com/css/default.asp' },
        { name: 'Sass', site: 'https://sass-lang.com' },
        { name: 'Python', site: 'https://www.python.org' },
        { name: 'JavaScript', site: 'https://www.w3schools.com/js/' },
        { name: 'Vue.js', site: 'https://vuejs.org' },
        { name: 'Node.js', site: 'https://nodejs.org/en' },
        { name: 'MySQL', site: 'https://www.mysql.com' },
        { name: 'Scrum', site: 'https://www.scrum.org/resources/what-scrum-module' }
      ],
      mouseX: null,
      mouseY: null,
      currentTarget: null
    }
  },
  methods: {
    handleOnMouseMove(e) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      this.mouseX = `${x}px`
      this.mouseY = `${y}px`
      this.currentTarget = e.target
    }
  }
}
</script>
