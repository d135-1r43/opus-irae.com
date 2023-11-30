<script lang="ts">
  import NavItem from '$lib/components/navitem.svelte';
  import Spotify from '$lib/components/socials/spotify.svelte';
  import Bandcamp from '$lib/components/socials/bandcamp.svelte';
  import Instagram from '$lib/components/socials/instagram.svelte';
</script>

<template>
  <aside class="
      h-full w-full ml-10 pt-4 md:p-2xl overflow-auto
      flex-col divide-y
      md:min-w-[480px] md:max-w-[520px] md:text-white md:divide-white">
    <h1
      class="
        p-6 pb-1.5
        md:text-title2
        md:pb-4
        text-6xl font-trajan tracking-wider
        hover:opacity-60
        transition-opacity duration-300
        md:relative md:-left-1
        ">
      <a href="/">Opus Iræ</a>
    </h1>
    <nav class="flex flex-col py-5 pl-7">
      <NavItem text="Discography" href="/"/>
      <NavItem text="Live" href="/"/>
      <NavItem text="Info" href="/"/>
    </nav>
    <div class="flex py-5 pl-7">
      <Spotify href="https://open.spotify.com/artist/3AFQQ6CRoysoxWfUGjnosX?si=lVLIkZ-GRpCJ8PHWAx2X-A"/>
      <Bandcamp href="https://opusirae.bandcamp.com/"/>
      <Instagram href="https://www.instagram.com/opusirae/"/>
    </div>
  </aside>
</template>
