<script lang="ts">
  import type { PageData } from "./$types";

  import { FormatUtils } from "$lib/format-utils";
  import { reveal } from "$lib/actions/reveal";

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
      bg-black/30
      ">
    <Title />

    <div class="flex flex-col px-5 grow">
      {#each data.releases.data as { title, type, release_date, label, cover, bandcamp_url, spotify_url, apple_url, slug }}
        <!-- Each release rises out of the dark as it comes into view. -->
        <div class="space-y-xl px-0 py-5 md:p-10" use:reveal>
          <a class="release group block space-y-3" href="{'music/' + slug}">
            <span class="release__frame block overflow-hidden border-2 border-gray-600">
              <img
                alt="{title} Cover" width="500" height="500" decoding="async" data-nimg="1"
                class="release__cover w-full aspect-square object-cover"
                style="color: transparent;"
                src="{ getImageUrl(cover)}">
            </span>
            <div class="text-center">
              <h3 class="release__title font-krete text-xl mt-8">{title}</h3>
              <p class="release__meta pt-0.5 font-krete text-m">{type}
                · {FormatUtils.formatShortDate(release_date)} · {label}</p>
              <p class="pt-3">
                {#if bandcamp_url}<Bandcamp href={bandcamp_url} />{/if}
                {#if spotify_url}<Spotify href={spotify_url} />{/if}
                {#if apple_url}<Apple href={apple_url} />{/if}
              </p>
            </div>
          </a>
        </div>
        <div class="flex justify-center py-2 pb-10" use:reveal>
          <Heptagram />
        </div>
      {/each}
    </div>
  </aside>

  <div class="flex w-full">
    <div class="v-full grow max-xl:hidden ">
      <div class="absolute font-krete italic text-gray-300 bottom-20 right-20 text-2xl max-w-[520px]">
        <p class="oi-emerge" style="--oi-delay: 700ms">
          But who may abide the day of His coming?
        </p>
        <p class="oi-emerge" style="--oi-delay: 1300ms">
          And who shall stand when He appeareth?
        </p>
      </div>
    </div>
  </div>

</template>

<style>
  .release__frame {
    transition:
      border-color 700ms var(--ease-sacred),
      box-shadow 700ms var(--ease-sacred);
  }

  /* The cover leans in and lifts its shadows as you approach it. */
  .release__cover {
    transform: scale(1);
    transition:
      transform 900ms var(--ease-sacred),
      filter 900ms var(--ease-sacred);
  }

  .release__title,
  .release__meta {
    transition:
      color 700ms var(--ease-sacred),
      text-shadow 700ms var(--ease-sacred);
  }

  .release:hover .release__frame,
  .release:focus-visible .release__frame {
    border-color: rgb(147 197 253 / 0.55);
    box-shadow: 0 0 34px -6px rgb(147 197 253 / 0.35);
  }

  .release:hover .release__cover,
  .release:focus-visible .release__cover {
    transform: scale(1.04);
    filter: brightness(1.08) saturate(1.05);
  }

  .release:hover .release__title,
  .release:focus-visible .release__title {
    text-shadow: 0 0 20px rgb(147 197 253 / 0.4);
  }

  .release:hover .release__meta,
  .release:focus-visible .release__meta {
    color: rgb(191 219 254);
  }

  @media (prefers-reduced-motion: reduce) {
    .release:hover .release__cover,
    .release:focus-visible .release__cover {
      transform: none;
    }
  }
</style>
