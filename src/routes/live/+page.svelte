<script lang="ts">
  import Title from "$lib/components/title.svelte";
  import Heptagram from "$lib/components/icons/heptagram.svelte";

  import { _getImageUrl } from "./+page";

  export let data: PageData;
  export let tourDates: TourDate[];

  let galleryCols = Array(3).fill(0);
  let galleryRows = Array(4).fill(0);

  function format(info: string): string {
    return info.replace(/\n/g, "<br/>");
  }

  function getImageIdx(rowIndex: number, colIndex: number): number {
    return (rowIndex * (galleryRows.length - 1)) + colIndex;
  }
</script>
<svelte:head>
  <title>Opus Iræ Live</title>
</svelte:head>

<template>
  <aside class="
      w-full pt-4
      md:ml-10 md:p-2xl md:min-w-[480px] md:max-w-[520px] text-white md:divide-white
      flex-col divide-y
      bg-black bg-transparent/50
      ">

    <Title />

    <div>
      <!-- Tour dates list -->
      <div class="mt-10 mb-10 font-krete">
        <span>The Joy of our Hearts has ceased</span>
        <div class="flex flex-col md:flex-row justify-between px-4 py-2 border-b border-white">
          <p class="text-4xl text-white">21.02.23</p>
          <div>
            <p class="text-lg text-white">Blast of Eternity Festival</p>
            <p class="text-lg text-white font-thin">Heilbronn <span class="font-thin">DE</span></p>
            <button class="mt-2 mb-3 px-2 py-1 text-white text-sm bg-blue-500/40 hover:bg-blue-600 rounded shadow">Buy Ticket</button>
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between px-4 py-2 border-b border-white">
          <p class="text-lg text-white">21.02.23</p>
          <div>
            <p class="text-lg text-white">Blast of Eternity Festival</p>
            <p class="text-lg text-white">Heilbronn DE</p>
            <button class="mt-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded shadow">Buy Ticket</button>
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between px-4 py-2 border-b border-white">
          <p class="text-lg text-white">21.02.23</p>
          <div>
            <p class="text-lg text-white">Blast of Eternity Festival</p>
            <p class="text-lg text-white">Heilbronn DE</p>
            <button class="mt-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded shadow">Buy Ticket</button>
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between px-4 py-2 border-b border-white">
          <p class="text-lg text-white">21.02.23</p>
          <div>
            <p class="text-lg text-white">Blast of Eternity Festival</p>
            <p class="text-lg text-white">Heilbronn DE</p>
            <button class="mt-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded shadow">Buy Ticket</button>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
