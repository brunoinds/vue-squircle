<script setup lang="ts">
import VSquircle from '../src/VSquircle.vue'
</script>

<template>
  <div style="display: flex; gap: 20px; padding: 20px;">
    <v-squircle radius="100px" :smoothing="10" background="tomato">
      <div style="width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; color: white;">
        Content
      </div>
    </v-squircle>

    <v-squircle radius="30px" :smoothing="4" background="cornflowerblue">
      <div style="width: 150px; height: 150px; display: flex; align-items: center; justify-content: center; color: white;">
        Squircle 2
      </div>
    </v-squircle>
  </div>
</template>
