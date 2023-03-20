<script lang="ts" setup>
  const props = defineProps({
      label: {
          type: String,
          default: ''
      },
      modelValue: {
          type: String,
          default: ''
      },
      type: {
          type: String,
          default: 'text'
      },
      name: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      }

  })
  const emit = defineEmits(['update:modelValue'])
  const updateEvent = (e: any) => {
    if (e) {
      emit('update:modelValue', e.target.value)
    }
  } 
</script>
<template>
  <input :id="name" :type="type" @input="updateEvent($event)" :class="['input']" :placeholder="placeholder"/>  
</template>

<style lang="scss" scoped>
  .input {
    padding: 8px;
    border-radius: 8px;
    outline: none;
    border: 1px solid var(--primary-color);
    font-size: 1rem;
    width: 100%;

    &::placeholder {

    }
  }

</style>
