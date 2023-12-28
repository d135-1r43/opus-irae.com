<script lang="ts">
  import type { PageData } from "./$types";

  import { MetaTags } from "svelte-meta-tags";
  import Spotify from "$lib/components/socials/spotify.svelte";
  import Bandcamp from "$lib/components/socials/bandcamp.svelte";
  import Footer from "$lib/components/footer.svelte";
  import NavItem from "$lib/components/navitem.svelte";
  import Instagram from "$lib/components/socials/instagram.svelte";

  export let data: PageData;

  function getImageUrl(uuid: string): string {
    return "https://directus.herhoffer.net/assets/" + uuid;
  }
</script>

<MetaTags
  title="{data.band.name}"
  description="{data.band.short_description}"
  openGraph={{
    url: data.band.website,
    title: data.band.name,
    description: data.band.short_description,
    images: [
      {
        url: getImageUrl(data.band.hero_image),
        width: data.hero.width,
        height: data.hero.height,
        alt: data.hero.description
      }
    ],
    siteName: data.band.name
  }}
/>

<template>
  <div class="flex w-full h-full">
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
        <NavItem text="Live" href="/live" />
        <NavItem text="Info" href="/info" />
        <NavItem text="Contact" href="/contact" />
      </nav>
      <div class="flex py-5 pl-7">
        <Spotify href="https://open.spotify.com/artist/3AFQQ6CRoysoxWfUGjnosX?si=lVLIkZ-GRpCJ8PHWAx2X-A" />
        <Bandcamp href="https://opusirae.bandcamp.com/" />
        <Instagram href="https://www.instagram.com/opusirae/" />
      </div>
      <Footer />
    </aside>
    <div class="h-full v-full flex-grow max-lg:hidden ">
      <div class="absolute text-2xl font-krete text-gray-300 italic bottom-20 right-20 max-w-[520px]">
        <p>
          Surely he hath borne our griefs, and carried our sorrows:<br />
          yet we did esteem him stricken, smitten and afflicted.
        </p>
      </div>
    </div>
  </div>
</template>
