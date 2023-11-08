<template>
  <div class="textbox">
    <div>
      <span>Profile - </span>
      <span>First Name:</span>
      <span class="name">{{name}}</span>
    </div>
    <input type="text"
           placeholder="Name"
           v-model="name"
    />
  </div>
</template>

<script setup>
import {ref} from "vue";
const name = ref('')
</script>
