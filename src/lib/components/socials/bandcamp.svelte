<script lang="ts">
  interface Props {
    href: string;
  }

  let { href }: Props = $props();
</script>

<template>
  <a href="{href}" target="_blank" rel="noopener noreferrer" class="social">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="
    social__icon
    fill-gray-400 text-xl block leading-[55px]
    mr-4">
      <title>Bandcamp</title>
      <!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
      <path d="M256 8C119 8 8 119 8 256S119 504 256 504 504 393 504 256 393 8 256 8zm48.2 326.1h-181L207.9 178h181z"/>
    </svg>
  </a>
</template>

<style>
  .social {
    display: inline-block;
    transition: transform 500ms var(--ease-sacred);
  }

  .social__icon {
    transition:
      fill 500ms var(--ease-sacred),
      filter 500ms var(--ease-sacred);
  }

  .social:hover .social__icon,
  .social:focus-visible .social__icon {
    fill: #ffffff;
    filter: drop-shadow(0 0 9px rgb(147 197 253 / 0.55));
  }

</style>
