<script lang="ts">
  import type { PageData } from "./$types";

  import NavMain from "$lib/components/nav-main.svelte";
  import { MetaTags } from "svelte-meta-tags";

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
    <NavMain />
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
