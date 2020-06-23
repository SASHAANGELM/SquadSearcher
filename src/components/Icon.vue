<template>
  <i :class="getClass" class="flex justify-center items-center"></i>
</template>

<script>
export default {
  props: {
    icon: {
      require: true,
      type: String
    },
    size: {
      require: false,
      default: 'base',
      type: String
    },
    boxSize: {
      require: false,
      default: '4',
      type: String
    }
  },
  computed: {
    getClass() {
      const boxSize = this.boxSize;
      const size = this.size;
      return {
        [`w-${boxSize}`]: true,
        [`h-${boxSize}`]: true,
        [`text-${size}`]: true,
        [this.icon]: true
      };
    }
  }
};
</script>

<style>

</style>
