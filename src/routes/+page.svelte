<script lang="ts">
  import NavMain from "$lib/components/nav-main.svelte";
</script>

<svelte:head>
  <title>Opus Iræ</title>
  <meta name="description" content="Symphonic and Black Metal from Germany" />
</svelte:head>

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
