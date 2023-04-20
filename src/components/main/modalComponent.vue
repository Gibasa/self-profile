<template>
  <div class="root">
    <button @click="isOpen = true">Open</button>
    <teleport to="body">
    <div class="modal" v-if="isOpen">
      <div>
        <h2>Aberto</h2>
        <button @click="isOpen = false">Close</button>
      </div>
    </div>
  </teleport>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const isOpen = ref(false)
</script>