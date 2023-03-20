<script lang="ts" setup>
  const props = defineProps({
      label: {
          type: String,
          default: 'Submit'
      },
      color: {
          type: String,
          default: 'primary'
      },
      disabled: {
          type: Boolean,
          default: false
      },
  })

  const emit = defineEmits(['click'])
  const clickButton = () => {
    emit('click')
  }
</script>
<template>
  <button :class="['btn', `btn-${color}`]" :disabled="disabled" @click="clickButton">{{label}}</button>
</template>

<style lang="scss" scoped>
.btn {
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  font-size: 1rem;

  border: none;
  border-radius: 12px;

  cursor: pointer;

  &-primary {
    background-color: var(--primary-color);
    color: var(--white);
    &:enabled:hover {
      background-color: var(--primary-color-hover);
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
}

</style>
