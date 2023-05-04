import { createApp } from 'vue'
import App from './App.vue'
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faHtml5, faCss3Alt, faSass, faPython, faJs, faVuejs, faNode, faGitAlt, faReact } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin, faDatabase, faHtml5, faCss3Alt, faSass, faPython, faJs, faVuejs, faNode, faGitAlt, faReact)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
