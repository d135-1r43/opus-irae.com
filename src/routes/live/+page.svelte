<script lang="ts">
  import Title from "$lib/components/title.svelte";
  import Heptagram from "$lib/components/icons/heptagram.svelte";

  import type { PageData } from "./$types";

  export let data: PageData;

  function getFlagEmoji(countryCode: string): string {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }

  function formatDate(datestring: string): string {
    let date: Date = new Date(datestring);
    return Intl.DateTimeFormat().format(date);
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
      <div class="mt-10 mb-10 font-krete">
        <div class="flex justify-center py-2 font-krete italic text-gray-300 text-2xl">
          The Joy Of Our Hearts Has Ceased
        </div>
        <div class="flex justify-center py-5">
          <Heptagram />
        </div>

        {#if data.futureEvents.length == 0 }
          <div class="flex justify-center py-2 font-krete text-white text-lg font-thin mb-20 p-20 text-center">
            No one knows about that day or hour, not even the angels in heaven, nor the Son, but only the Father.
          </div>
        {/if}

        {#each data.futureEvents as event }
          <div class="flex flex-col md:flex-row justify-between px-4 py-2 pb-10">
            <p class="text-lg text-white">{ formatDate(event.date) }</p>
            <div class="md:min-w-[350px]">
              <p class="text-lg text-white">
                {#if event.event_name}
                  { event.event_name }&nbsp;&middot;&nbsp;{ event.location }
                {:else }
                  { event.location }
                {/if}
                {#if event.special}
                  &nbsp;&middot;&nbsp;<span class="italic">{ event.special }</span>
                {/if}
              </p>
              <p class="text-lg text-white font-thin">{ event.city }
                <span class="font-thin">{ getFlagEmoji(event.country_code.toLowerCase()) }</span></p>
              {#if event.ticket_link}
                <a href="{event.ticket_link}">
                  <button
                    class="mt-2 mb-3 px-2 py-1 text-white text-sm bg-blue-500/40 hover:bg-blue-600 rounded shadow">
                    Buy Ticket
                  </button>
                </a>
              {/if}
            </div>
          </div>
        {/each}
        <div class="flex justify-center py-2 font-krete italic text-gray-300 text-2xl mt-10">
          Our Dance Has Turned Into Mourning
        </div>
        <div class="flex justify-center py-2">
          <Heptagram />
        </div>
        {#each data.pastEvents as event }
          <div class="flex flex-col md:flex-row justify-between px-4 py-4">
            <p class="text-lg text-white">{ formatDate(event.date) }</p>
            <div class="md:min-w-[350px]">
              <p class="text-lg text-white">
                {#if event.event_name}
                  { event.event_name }&nbsp;&middot;&nbsp;{ event.location }
                {:else }
                  { event.location }
                {/if}
                {#if event.special}
                  &nbsp;&middot;&nbsp;<span class="italic">{ event.special }</span>
                {/if}
              </p>
              <p class="text-lg text-white font-thin">{ event.city } <span
                class="font-thin">{ getFlagEmoji(event.country_code.toLowerCase()) }</span></p>
            </div>
          </div>
        {/each}
        <div class="flex justify-center pt-2 pb-10">
          <Heptagram />
        </div>
      </div>
    </div>
  </aside>

  <div class="flex w-full">
    <div class="v-full flex-grow max-xl:hidden ">
      <div class="absolute font-krete italic text-gray-300 bottom-20 right-20 text-2xl max-w-[520px]">
        <p>
          Blessed Are Those Who Mourn
        </p>
      </div>
    </div>
  </div>
</template>
