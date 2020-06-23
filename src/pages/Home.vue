<template>
  <div class="home flex justify-center items-center">
    <div class="text-center">
      <h1 class="mb-4 text-4xl">New_Template</h1>
      <h1 class="mb-8 text-xl font-thin">
        <span class="px-1 bg-green-800 rounded">Vue</span>
        <span> with </span>
        <span class="px-1 bg-teal-800 rounded">tailwind.css</span>
        <span>, </span>
        <span class="px-1 bg-indigo-800 rounded">PWA</span>
        <span> and </span>
        <span class="px-1 bg-blue-800 rounded">Google Cloud</span>
        <span> integration </span>
      </h1>
      <router-link tag="button" to="/about" class="px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded text-xs uppercase font-bold">Go to About page</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  methods: {

  }
};
</script>
