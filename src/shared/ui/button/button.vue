<script lang="ts" setup>
  const props = defineProps({
      label: {
          type: String,
          default: ''
      },
      color: {
          type: String,
          default: 'primary'
      },
      disabled: {
          type: Boolean,
          default: false
      },
      type: {
          type: String,
          default: 'square'
      },
      icon: {
          type: String,
          default: ''
      },

  })

  const emit = defineEmits(['click'])
  const clickButton = () => {
    emit('click')
  }
</script>
<template>
  <button :class="['btn', `btn-${color}`, `btn-${type}`]" :disabled="disabled" @click="clickButton"><span v-if="!!icon" class="pi primary" :class="[`${icon}`]"></span>{{label}}</button>
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


  cursor: pointer;

  &-primary {
    background-color: var(--primary-color);
    color: var(--white);
    &:enabled:hover {
      background-color: var(--primary-color-hover);
    }
  }

  &-transparent {
    background: none;
    &:enabled:hover {
      background: rgba($color: #fff, $alpha: 0.2);
    }
  }

  background-color: none;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
  &-square {
    border-radius: 12px;
  }

  &-rounded {
    border-radius: 24px;
  }

  &-circle {
    border-radius: 24px;
    width: 48px;
  }

}

.primary {
  color: var(--primary-color)
}

</style>
