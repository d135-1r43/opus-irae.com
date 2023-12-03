<script lang="ts">
  import Title from "$lib/components/title.svelte";
  import Heptagram from "$lib/components/icons/heptagram.svelte";

  import { _getImageUrl } from "./+page";
  import type { PageData } from "./$types";

  export let data: PageData;

  function format(info: string): string {
    return info.replace(/\n/g, "<br/>");
  }
</script>

<svelte:head>
  <title>Opus Iræ Band Info</title>
</svelte:head>

<template>
  <aside class="
      w-full pt-4
      md:ml-10 md:p-2xl md:min-w-[480px] md:max-w-[1220px] md:text-white md:divide-white
      flex-col divide-y
      bg-black bg-transparent/30
      ">

    <Title />

    <div>
      <img class="h-auto max-w-full p-10"
           src="{_getImageUrl(data.band.data.hero_image)}"
           alt="Opus Iræ">
      <p class="flex justify-center py-2 p-10 font-krete text-md text-center">
        {@html format(data.band.data.info_text) }
      </p>
      <div class="flex justify-center py-2 mt-10 mb-10">
        <Heptagram />
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-10 border-none">
      <div class="grid gap-4">
        <div>
          <img class="h-auto max-w-full rounded-lg"
               src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
               alt="">
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg"
               src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="">
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg"
               src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img class="h-auto max-w-full rounded-lg"
               src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="">
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg"
               src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="">
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg"
               src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="">
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img class="h-auto max-w-full rounded-lg"
               src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="">
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg"
               src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="">
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg"
               src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="">
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img class="h-auto max-w-full rounded-lg"
               src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="">
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg"
               src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg"
               src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
        </div>
      </div>
    </div>
  </aside>
</template>
