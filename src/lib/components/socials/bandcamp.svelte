<script lang="ts">
  interface Props {
    href: string;
  }

  let { href }: Props = $props();
</script>

<template>
  <a href="{href}" target="_blank" rel="noopener noreferrer" class="inline-block">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="
    fill-gray-400 text-xl block leading-[55px]
    hover:opacity-60
    mr-4
    transition-opacity duration-300">
      <title>Bandcamp</title>
      <!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
      <path d="M256 8C119 8 8 119 8 256S119 504 256 504 504 393 504 256 393 8 256 8zm48.2 326.1h-181L207.9 178h181z"/>
    </svg>
  </a>
</template>
