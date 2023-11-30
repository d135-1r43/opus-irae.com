<script lang="ts">
  import NavItem from '$lib/components/navitem.svelte';
  import Spotify from '$lib/components/socials/spotify.svelte';
  import Bandcamp from '$lib/components/socials/bandcamp.svelte';
  import Instagram from '$lib/components/socials/instagram.svelte';
</script>

<template>
  <aside class="h-full flex p-5 pt-4 md:p-2xl items-center overflow-auto bg-black-400">
    <div
      class="w-full md:min-w-[480px] md:max-w-[520px] h-full md:text-white flex flex-col divide-y divide-foreground md:divide-white">
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
      <nav class="flex flex-col py-5 pl-7 z-10">
        <NavItem text="Discography" href="/music"/>
        <NavItem text="Live" href="/music"/>
        <NavItem text="Info" href="/music"/>
      </nav>
      <div class="flex py-5 z-10 pl-7">
        <Spotify href="https://open.spotify.com/artist/3AFQQ6CRoysoxWfUGjnosX?si=lVLIkZ-GRpCJ8PHWAx2X-A"/>
        <Bandcamp href="https://opusirae.bandcamp.com/"/>
        <Instagram href="https://www.instagram.com/opusirae/"/>
      </div>
    </div>
  </aside>
</template>
