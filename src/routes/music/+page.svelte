<script lang="ts">
  import type { PageData } from "./$types";

  import { FormatUtils } from "$lib/format-utils";

  import Heptagram from "$lib/components/icons/heptagram.svelte";
  import Title from "$lib/components/title.svelte";

  import Spotify from "$lib/components/socials/spotify.svelte";
  import Bandcamp from "$lib/components/socials/bandcamp.svelte";
  import Apple from "$lib/components/socials/apple.svelte";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

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
      {#each data.releases.data as { title, type, release_date, label, cover, bandcamp_url, spotify_url, apple_url, slug }}
        <div class="space-y-xl px-0 py-5 md:p-10">
          <a class="block space-y-3 group" href="{'music/' + slug}">
            <img
              alt="{title} Cover" width="500" height="500" decoding="async" data-nimg="1"
              class="w-full aspect-square object-cover border-2 border-gray-600
                    group-hover:scale-[.99] group-hover:brightness-75 transition-transform-filter ease-in-out duration-500"
              style="color: transparent;"
              src="{ getImageUrl(cover)}">
            <div class="text-center group-hover:opacity-60 transition-opacity duration-500">
              <h3 class="font-krete text-xl mt-8">{title}</h3>
              <p class="pt-0.5 font-krete text-m">{type} · {FormatUtils.formatShortDate(release_date)} · {label}</p>
              <p class="pt-3">
                {#if bandcamp_url}<Bandcamp href={bandcamp_url} />{/if}
                {#if spotify_url}<Spotify href={spotify_url} />{/if}
                {#if apple_url}<Apple href={apple_url} />{/if}
              </p>
            </div>
          </a>
        </div>
        <div class="flex justify-center py-2 pb-10">
          <Heptagram />
        </div>
      {/each}
    </div>
  </aside>

  <div class="flex w-full">
    <div class="v-full flex-grow max-xl:hidden ">
      <div class="absolute font-krete italic text-gray-300 bottom-20 right-20 text-2xl max-w-[520px]">
        <p>
          But who may abide the day of His coming?<br />
          And who shall stand when He appeareth?
        </p>
      </div>
    </div>
  </div>

</template>
