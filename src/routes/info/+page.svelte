<script lang="ts">
  import Title from "$lib/components/title.svelte";
  import Heptagram from "$lib/components/icons/heptagram.svelte";
  import { reveal } from "$lib/actions/reveal";

  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let galleryCols = Array(3).fill(0);
  let galleryRows = Array(4).fill(0);

  function format(info: string): string {
    return info.replace(/\n/g, "<br/>");
  }

  function getImageIdx(rowIndex: number, colIndex: number): number {
    return (rowIndex * (galleryRows.length - 1)) + colIndex;
  }

  function getImageUrl(uuid: string): string {
    return 'https://directus.herhoffer.net/assets/' + uuid;
  }

</script>

<svelte:head>
  <title>Opus Iræ Band Info</title>
</svelte:head>

<template>
  <aside class="
      w-full pt-4 pb-[50px]
      md:ml-10 md:p-2xl md:min-w-[480px] md:max-w-[1220px] text-white md:divide-white
      flex-col divide-y
      bg-black/30
      ">

    <Title />

    <div>
      <img class="oi-unveil h-auto max-w-full p-10"
           src="{getImageUrl(data.band.data.hero_image)}"
           alt="Opus Iræ">
      <p class="oi-rise flex justify-center py-2 p-10 font-krete text-md text-center"
         style="--oi-delay: 300ms">
        {@html format(data.band.data.info_text)}
      </p>
      <div class="flex justify-center py-2 mt-10 mb-10">
        <Heptagram delay={500} />
      </div>
    </div>

    <!-- The gallery develops column by column, like plates coming up in a bath. -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-10 border-none">
      {#each galleryRows as _, rowIndex}
        <div class="grid gap-4">
          {#each galleryCols as _, colIndex}
            <div class="photo overflow-hidden rounded-lg"
                 use:reveal={{ delay: (rowIndex * 60) + (colIndex * 110) }}>
              <img class="photo__img h-auto w-auto rounded-lg object-cover"
                   src="{getImageUrl(data.images[getImageIdx(rowIndex, colIndex)].directus_files_id)}"
                   alt="Opus Iræ Live Foto">
            </div>
          {/each}
        </div>
      {/each}
    </div>

    <div class="flex justify-center py-2 mt-10 mb-[50px]">
      <Heptagram />
    </div>

  </aside>
</template>

<style>
  .photo {
    box-shadow: 0 0 0 0 rgb(147 197 253 / 0);
    transition: box-shadow 700ms var(--ease-sacred);
  }

  .photo__img {
    transform: scale(1);
    filter: grayscale(0.22) brightness(0.93);
    transition:
      transform 900ms var(--ease-sacred),
      filter 900ms var(--ease-sacred);
  }

  .photo:hover {
    box-shadow: 0 0 26px -6px rgb(147 197 253 / 0.45);
  }

  .photo:hover .photo__img {
    transform: scale(1.05);
    filter: grayscale(0) brightness(1);
  }

  @media (prefers-reduced-motion: reduce) {
    .photo:hover .photo__img {
      transform: none;
    }
  }
</style>
