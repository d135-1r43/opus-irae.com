<script lang="ts">
  import Title from "$lib/components/title.svelte";
  import Heptagram from "$lib/components/icons/heptagram.svelte";

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
      <img class="h-auto max-w-full p-10"
           src="{getImageUrl(data.band.data.hero_image)}"
           alt="Opus Iræ">
      <p class="flex justify-center py-2 p-10 font-krete text-md text-center">
        {@html format(data.band.data.info_text)}
      </p>
      <div class="flex justify-center py-2 mt-10 mb-10">
        <Heptagram />
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-10 border-none">
      {#each galleryRows as _, rowIndex}
        <div class="grid gap-4">
          {#each galleryCols as _, colIndex}
            <div>
              <img class="h-auto w-auto rounded-lg object-cover"
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
