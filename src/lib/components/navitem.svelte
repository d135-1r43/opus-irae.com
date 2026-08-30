<script lang="ts">
  import Externallink from "$lib/components/icons/externallink.svelte";

  interface Props {
    text?: string;
    href?: string;
    /** Staggers the entrance of this item, in ms. */
    delay?: number;
  }

  let { text = "DEFAULT", href = "/", delay = 0 }: Props = $props();
</script>

<template>
  <!--
    The entrance lives on the wrapper and the hover on the anchor, so the two
    never write to the same transform and fight over it mid-animation.
  -->
  <div class="oi-rise" style="--oi-delay: {delay}ms">
    <a class="navitem group block w-fit text-3xl leading-[55px]
      font-trajan font-light tracking-widest text-white/80"
       href="{href}">
      {#if href.startsWith("http")}
        {text}<Externallink />
      {:else}
        {text}
      {/if}
    </a>
  </div>
</template>

<style>
  .navitem {
    position: relative;
    /*
      Colour and shadow only. The link must never move on hover: it carries
      its own :hover, so shifting it slides its edge out from under the
      cursor, which un-hovers it, which snaps it back — a jitter loop.
    */
    transition:
      color 600ms var(--ease-sacred),
      text-shadow 600ms var(--ease-sacred);
  }

  /* The hairline drawn beneath the word. */
  .navitem::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 12px;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left center;
    background: linear-gradient(
      90deg,
      rgb(255 255 255 / 0.7),
      rgb(147 197 253 / 0.45) 55%,
      transparent
    );
    transition: transform 650ms var(--ease-sacred);
  }

  .navitem:hover,
  .navitem:focus-visible {
    color: rgb(255 255 255);
    text-shadow: 0 0 18px rgb(147 197 253 / 0.35);
  }

  .navitem:hover::after,
  .navitem:focus-visible::after {
    transform: scaleX(1);
  }

</style>
