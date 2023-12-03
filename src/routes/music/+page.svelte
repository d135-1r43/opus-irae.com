<script lang="ts">
  import type { PageData } from "./$types";
  import { _getImageUrl } from "./+page";

  export let data: PageData;

  function formatDate(datestring: string): string {
    let date: Date = new Date(datestring);

    var duration = +(new Date()) - +date;
    if (duration < 1000 * 60 * 60 * 24 * 365) {
      // less than a year ago
      var prefix: string = (duration < 0) ? "Release: " : "";
      return prefix + date.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
    } else {
      return date.getFullYear().toString();
    }
  }
</script>


<svelte:head>
  <title>Opus Iræ Discography</title>
</svelte:head>

<template>
  <aside class="
      h-full w-full pt-4
      md:ml-10 md:p-2xl md:min-w-[480px] md:max-w-[820px] md:text-white md:divide-white
      flex-col divide-y
      bg-black bg-transparent/30
      ">
    <h1
      class="
        p-6 pb-1.5
        font-trajan tracking-wider
        text-3xl
        md:text-2xl
        md:pb-4
        hover:opacity-60
        transition-opacity duration-300
        md:relative md:-left-1">
      <a href="/">Opus Iræ</a>
    </h1>
    <!-- nav class="flex flex-col py-5 pl-7">
      <NavItem text="Discography" href="/music"/>
      <NavItem text="Live" href="/"/>
      <NavItem text="Info" href="/"/>
    </nav -->

    <div class="flex flex-col px-5 grow">
      {#each data.releases.data as { title, type, release_date, label, cover }}
        <div class="space-y-xl px-0 py-5 md:p-5">
          <a class="block space-y-3 group" href="/music/the-burden-of-man">
            <img
              alt="The Burden of Man" width="500" height="500" decoding="async" data-nimg="1"
              class="w-full aspect-square object-cover rounded group-hover:scale-[.99] group-hover:brightness-75 transition-transform-filter ease-in-out duration-500"
              style="color: transparent;"
              src="{ _getImageUrl(cover)}">
            <div class="text-center group-hover:opacity-60 transition-opacity duration-500">
              <h3 class="font-krete text-xl">{title}</h3>
              <p class="pt-0.5 font-krete text-m">{type} · {formatDate(release_date)} · {label}</p>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </aside>
</template>
