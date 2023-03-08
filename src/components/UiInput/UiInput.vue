<template>
  <input
    type="text"
    :value="props.modelValue"
    :disabled="props.isDisabled"
    :class="$style.input"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
  const props = defineProps<{
    modelValue: string;
    isDisabled?: boolean;
  }>();

  const emit = defineEmits(["update:modelValue"]);
</script>

<style module>
  .input {
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid;
  }
</style>
