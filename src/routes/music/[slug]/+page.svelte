<script lang="ts">
  import type { PageData } from "./$types";

  import { FormatUtils } from "$lib/format-utils";

  import Heptagram from "$lib/components/icons/heptagram.svelte";
  import Title from "$lib/components/title.svelte";
  import Spotify from "$lib/components/socials/spotify.svelte";
  import Bandcamp from "$lib/components/socials/bandcamp.svelte";
  import Apple from "$lib/components/socials/apple.svelte";

  export let data: PageData;

  function getImageUrl(uuid: string): string {
    return "https://directus.herhoffer.net/assets/" + uuid;
  }
</script>

<svelte:head>
  <title>Opus Iræ Discography</title>
</svelte:head>

<template>
  <aside class="
      w-full pt-4
      md:ml-10 md:p-2xl md:min-w-[480px] md:max-w-[820px] text-white md:divide-white
      flex-col divide-y
      bg-black bg-transparent/80
      ">
    <Title />

    <div class="flex flex-col px-5 grow">
      <div class="space-y-xl px-0 py-5 md:p-10">
          <img
            alt="{data.release.title} Cover" width="500" height="500" decoding="async" data-nimg="1"
            class="w-full aspect-square object-cover rounded group-hover:scale-[.99] group-hover:brightness-75 transition-transform-filter ease-in-out duration-500"
            style="color: transparent;"
            src="{ getImageUrl(data.release.cover)}">
          <div class="text-center group-hover:opacity-60 transition-opacity duration-500">
            <h3 class="font-krete text-xl mt-8">{data.release.title}</h3>
            <p class="pt-0.5 font-krete text-m">{data.release.type}
              · {FormatUtils.formatFullDate(data.release.release_date)} · {data.release.label}</p>
            <p class="pt-3 pb-10">
              <Bandcamp href="{data.release.bandcamp_url}" />
              <Spotify href="{data.release.spotify_url}" />
              <Apple href="{data.release.apple_url}" />
            </p>
          </div>
          {#if data.release.bandcamp_id}
            <iframe title="{data.release.title} on Bandcamp" style="border: 0; width: 100%; height: 406px;"
                    src="https://bandcamp.com/EmbeddedPlayer/album=2167011037/size=large/bgcol=000000/linkcol=0687f5/artwork=none/transparent=true/"
                    seamless>
              <a href="https://vrsnsmv.bandcamp.com/album/vade-retro">{data.release.title}</a>
            </iframe>
          {/if}
      </div>
      <div class="flex justify-center py-2 mb-20">
        <Heptagram />
      </div>
    </div>
  </aside>

  <div class="flex w-full">
    <div class="v-full flex-grow max-xl:hidden ">
      <div class="absolute font-krete italic text-gray-300 bottom-20 right-20 text-2xl max-w-[520px]">
        <p>
          The Frontline is bleeding as the Emperor watches.<br />
          Who are You, now Stranger?
        </p>
      </div>
    </div>
  </div>

</template>
