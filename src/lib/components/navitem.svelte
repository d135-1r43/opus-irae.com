<script lang="ts">
  export let text = 'Default Text'; // Default value is optional
  export let href = '#'; // Default href value
</script>

<template>
  <a class="block text-2xl leading-[55px] font-krete hover:opacity-60 transition-opacity duration-300"
     href="{href}">
    {text}
  </a>
</template>
