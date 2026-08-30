<script lang="ts">
  import Title from "$lib/components/title.svelte";
  import Heptagram from "$lib/components/icons/heptagram.svelte";
  import { reveal } from "$lib/actions/reveal";

  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  function getFlagEmoji(countryCode: string): string {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }

  function formatDate(datestring: string): string {
    const date: Date = new Date(datestring);
    const userLocale: string = navigator.language || 'en-US';
    return Intl.DateTimeFormat(userLocale).format(date);
  }

  /** Rows arrive one after another, but the stagger tops out so long lists stay brisk. */
  function stagger(index: number): number {
    return Math.min(index, 6) * 70;
  }
</script>

<svelte:head>
  <title>Opus Iræ Live</title>
</svelte:head>

<template>
  <aside class="
      w-full pt-4
      md:ml-10 md:p-2xl md:min-w-[580px] md:max-w-[620px] text-white md:divide-white
      flex-col divide-y
      bg-black/30
      ">

    <Title />

    <div>
      <div class="mt-10 mb-10 font-krete">
        <div class="oi-emerge flex justify-center py-2 font-krete italic text-gray-300 text-2xl"
             style="--oi-delay: 200ms">
          The Joy Of Our Hearts Has Ceased
        </div>
        <div class="flex justify-center py-5">
          <Heptagram delay={400} />
        </div>

        {#if data.futureEvents.length === 0}
          <div class="oi-emerge flex justify-center py-2 font-krete text-white text-lg font-thin mb-20 p-20 text-center"
               style="--oi-delay: 600ms">
            No one knows about that day or hour, not even the angels in heaven, nor the Son, but only the Father.
          </div>
        {/if}

        {#each data.futureEvents as event, i }
          <div class="event flex flex-col md:flex-row justify-between px-4 py-2 pb-10"
               use:reveal={{ delay: stagger(i) }}>
            <p class="event__date text-lg text-white md:min-w-[120px] md:max-w-[120px]">{ formatDate(event.date) }</p>
            <div class="md:min-w-[420px] md:max-w-[420px] overflow-hidden">
              <p class="text-lg text-white break-words">
                {#if event.event_name}
                  { event.event_name }&nbsp;&middot;&nbsp;{ event.location }
                {:else }
                  { event.location }
                {/if}
                {#if event.special}
                  <br/><span class="italic">{ event.special }</span>
                {/if}
              </p>
              <p class="text-lg text-white font-thin">{ event.city }
                <span class="font-thin">{ getFlagEmoji(event.country_code.toLowerCase()) }</span></p>
              {#if event.ticket_link}
                <a href="{event.ticket_link}">
                  <button class="ticket mt-2 mb-3 px-3 py-1 text-white text-sm rounded-sm shadow-sm">
                    Tickets
                  </button>
                </a>
              {/if}
            </div>
          </div>
        {/each}
        <div class="oi-emerge flex justify-center py-2 font-krete italic text-gray-300 text-2xl mt-10"
             style="--oi-delay: 300ms">
          Our Dance Has Turned Into Mourning
        </div>
        <div class="flex justify-center py-2">
          <Heptagram delay={500} />
        </div>
        {#each data.pastEvents as event, i }
          <div class="event event--past flex flex-col md:flex-row justify-between px-4 py-4"
               use:reveal={{ delay: stagger(i) }}>
            <p class="event__date text-lg text-white md:min-w-[120px] md:max-w-[120px]">{ formatDate(event.date) }</p>
            <div class="md:min-w-[420px] md:max-w-[420px] overflow-hidden">
              <p class="text-lg text-white break-words">
                {#if event.event_name}
                  { event.event_name }&nbsp;&middot;&nbsp;{ event.location }
                {:else }
                  { event.location }
                {/if}
                {#if event.special}
                  <br/><span class="italic">{ event.special }</span>
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
    <div class="v-full grow max-xl:hidden ">
      <div class="absolute font-krete italic text-gray-300 bottom-20 right-20 text-2xl max-w-[520px]">
        <p class="oi-emerge" style="--oi-delay: 800ms">
          Blessed Are Those Who Mourn
        </p>
      </div>
    </div>
  </div>
</template>

<style>
  /* A hairline lights along the left edge of the row you are reading. */
  .event {
    position: relative;
    transition: background-color 500ms var(--ease-sacred);
  }

  .event::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6%;
    bottom: 6%;
    width: 1px;
    background: linear-gradient(180deg, transparent, rgb(147 197 253 / 0.8), transparent);
    transform: scaleY(0);
    transition: transform 600ms var(--ease-sacred);
  }

  .event:hover {
    background-color: rgb(255 255 255 / 0.03);
  }

  .event:hover::before {
    transform: scaleY(1);
  }

  .event__date {
    transition: color 500ms var(--ease-sacred);
  }

  .event:hover .event__date {
    color: rgb(191 219 254);
  }

  .event--past {
    opacity: 0.72;
    transition:
      opacity 600ms var(--ease-sacred),
      background-color 500ms var(--ease-sacred);
  }

  .event--past:hover {
    opacity: 1;
  }

  /* The ticket button fills from the left when you reach for it. */
  .ticket {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    background-color: rgb(59 130 246 / 0.28);
    border: 1px solid rgb(147 197 253 / 0.3);
    transition:
      border-color 450ms var(--ease-sacred),
      box-shadow 450ms var(--ease-sacred),
      transform 450ms var(--ease-sacred);
  }

  .ticket::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(90deg, rgb(37 99 235 / 0.95), rgb(59 130 246 / 0.75));
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 450ms var(--ease-sacred);
  }

  .ticket:hover,
  .ticket:focus-visible {
    border-color: rgb(147 197 253 / 0.7);
    box-shadow: 0 0 18px -4px rgb(147 197 253 / 0.5);
  }

  .ticket:hover::before,
  .ticket:focus-visible::before {
    transform: scaleX(1);
  }

</style>
