<script  lang="ts">
  import NavMain from "$lib/components/nav-main.svelte";
</script>

<svelte:head>
  <title>Opus Iræ</title>
</svelte:head>

<template>
  <div class="flex w-full h-full">
    <NavMain />
    <div class="h-full v-full flex-grow max-lg:hidden ">
      <div class="absolute font-krete italic bottom-20 right-20 text-2xl max-w-[520px]">
        <p>
          Surely he hath borne our griefs, and carried our sorrows:<br />
          yet we did esteem him stricken, smitten and afflicted.
        </p>
      </div>
    </div>
  </div>
</template>
