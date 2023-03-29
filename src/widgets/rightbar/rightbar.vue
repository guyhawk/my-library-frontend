<script lang="ts" setup>
  const props = defineProps({
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  })

  const emits = defineEmits(['update:visible'])

  const closeRightBar = () => {
    emits('update:visible', false)    
  }

</script>


<template>
  <div class="right-bar" :class="{'is-open' : visible}">    
    <Button class="right-bar__button-close" type="circle" color="transparent" icon="pi-times" @click="closeRightBar"/>
    <div v-if="title" class="right-bar__title">{{ title }}</div>
    <div class="right-bar__content">
      <slot></slot>
    </div>  
  </div>
</template>

<style lang="scss" scoped>
  .right-bar{
    height: 100vh;
    width: 300px;
    background: var(--white);

    position: fixed;
    top: 0;
    right: -300px;

    transition: all 0.3s ease-in-out;

    opacity: 0;

    box-shadow: 0 -5px 15px #000;

    padding: 24px;

    &.is-open {
      right: 0;
      opacity: 1;

    }

    &__button-close {
      position: absolute;

      top: 4px;
      right: 4px;
    }
    &__title {
      font-size: 1.3rem;
      margin-bottom: 16px;
    }
    &__content {

    }

  }
</style>
