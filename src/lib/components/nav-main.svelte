<script lang="ts" xmlns="http://www.w3.org/1999/html">
  import NavItem from "$lib/components/navitem.svelte";
  import Spotify from "$lib/components/socials/spotify.svelte";
  import Bandcamp from "$lib/components/socials/bandcamp.svelte";
  import Instagram from "$lib/components/socials/instagram.svelte";
  import Footer from "$lib/components/footer.svelte";
</script>

<template>
  <aside class="
      h-full w-full pt-4
      md:ml-10 md:p-2xl md:min-w-[480px] md:max-w-[520px] text-white md:divide-white
      overflow-auto
      flex-col divide-y
      bg-black bg-transparent/30
      ">
    <h1
      class="
        p-6 pb-1.5
        font-trajan tracking-wider
        text-3xl
        md:text-6xl
        md:pb-4
        hover:opacity-60
        transition-opacity duration-300
        md:relative md:-left-1">
      <a href="/">Opus Iræ</a>
    </h1>
    <nav class="flex flex-col py-5 pl-7">
      <NavItem text="Discography" href="/music" />
      <NavItem text="Live" href="/" />
      <NavItem text="Info" href="/info" />
    </nav>
    <div class="flex py-5 pl-7">
      <Spotify href="https://open.spotify.com/artist/3AFQQ6CRoysoxWfUGjnosX?si=lVLIkZ-GRpCJ8PHWAx2X-A" />
      <Bandcamp href="https://opusirae.bandcamp.com/" />
      <Instagram href="https://www.instagram.com/opusirae/" />
    </div>
    <Footer />
  </aside>
</template>
