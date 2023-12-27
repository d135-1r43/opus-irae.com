<script lang="ts">
  import type { PageData } from "./$types";

  import Heptagram from "$lib/components/icons/heptagram.svelte";
  import Title from "$lib/components/title.svelte";
  import Spotify from "$lib/components/socials/spotify.svelte";
  import Bandcamp from "$lib/components/socials/bandcamp.svelte";

  export let data: PageData;

  function formatDate(datestring: string): string {
    let date: Date = new Date(datestring);

    const duration = +(new Date()) - +date;
    const aYear = 1000 * 60 * 60 * 24 * 365;
    if (duration < aYear) {
      // less than a year ago
      const prefix: string = (duration < 0) ? "Planned Release: " : "";
      return prefix + date.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
    } else {
      // more than a year ago
      return date.getFullYear().toString();
    }
  }

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
      {#each data.releases.data as { title, type, release_date, label, cover, bandcamp_url, spotify_url }}
        <div class="space-y-xl px-0 py-5 md:p-10">
          <a class="block space-y-3 group" href="/">
            <img
              alt="{title} Cover" width="500" height="500" decoding="async" data-nimg="1"
              class="w-full aspect-square object-cover rounded group-hover:scale-[.99] group-hover:brightness-75 transition-transform-filter ease-in-out duration-500"
              style="color: transparent;"
              src="{ getImageUrl(cover)}">
            <div class="text-center group-hover:opacity-60 transition-opacity duration-500">
              <h3 class="font-krete text-xl mt-8">{title}</h3>
              <p class="pt-0.5 font-krete text-m">{type} · {formatDate(release_date)} · {label}</p>
              <p class="pt-3">
                <Bandcamp href="{bandcamp_url}" />
                <Spotify href="{spotify_url}" />
              </p>
            </div>
          </a>
        </div>
        <div class="flex justify-center py-2">
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
