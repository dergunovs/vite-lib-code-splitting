<template>
  <div :class="$style.container">
    <UiButton color="primary">Primary color</UiButton>
    <UiButton color="gray">Gray color</UiButton>

    <UiInput v-model="message" />
    <UiInput v-model="messageDisabled" isDisabled />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  import "./assets/style.css";

  import { UiButton, UiInput } from "./components";

  const message = ref("");
  const messageDisabled = ref("disabled");
</script>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
</style>
