<script lang="ts">
  import Title from "$lib/components/title.svelte";
  import Heptagram from "$lib/components/icons/heptagram.svelte";

  let statusText: string = $state("");
  let pending: boolean = $state(false);

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    pending = true;
    statusText = "Submitting...";
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();
      statusText = result.success
        ? result.message || "Success"
        : result.message || "Something went wrong. Please try again.";
    } catch {
      statusText = "Something went wrong. Please try again.";
    } finally {
      pending = false;
    }
  };
</script>

<svelte:head>
  <title>Opus Iræ Contact</title>
</svelte:head>

<template>
  <aside class="oi-rise
      w-full h-screen pt-4
      md:ml-10 md:p-2xl md:min-w-[480px] md:max-w-[520px] text-white md:divide-white
      flex-col divide-y
      bg-black/30
      ">

    <Title />

    <div class="oi-rise justify-center p-10 font-krete font-thin" style="--oi-delay: 180ms">
      <p>Contact us directly for matters pertaining to booking.</p>
      <p>For all other inquiries, we kindly request thee to
        engage with us through our social media platforms.</p>
    </div>

    <form onsubmit={handleSubmit} class="oi-rise text-white font-krete p-10"
          style="--oi-delay: 300ms">
      <input type="hidden" name="access_key" value="b04efb2e-092c-4804-986f-18cd57cf1806">
      <div class="mb-4">
        <input class="field w-full p-2 rounded-md focus:outline-hidden"
               type="text" name="name" required placeholder="Your Name" />
      </div>
      <div class="mb-4">
        <input class="field w-full p-2 rounded-md focus:outline-hidden"
               type="email" name="email" required placeholder="Your Email" />
      </div>
      <div class="mb-4">
        <textarea class="field w-full p-2 rounded-md focus:outline-hidden"
                  name="message" required rows="3" placeholder="Your Message"></textarea>
      </div>
      <div class="mb-4">
        <button class="submit py-2 px-5 text-white rounded-md focus:outline-hidden"
                type="submit" disabled={pending}>
          {pending ? "Sending" : "Submit"}
          {#if pending}
            <!-- Three lamps breathing in turn while the message is carried. -->
            <span class="submit__dots" aria-hidden="true">
              <i></i><i></i><i></i>
            </span>
          {/if}
        </button>
      </div>
    </form>
    <div class="text-center font-krete border-none" aria-live="polite">
      {#if statusText}
        {#key statusText}
          <p class="oi-rise p-5 border-0">{ statusText }</p>
        {/key}
      {:else}
        <p class="p-5 border-0"></p>
      {/if}
    </div>
    <div class="flex justify-center py-10">
      <Heptagram delay={600} />
    </div>
  </aside>

  <div class="flex w-full">
    <div class="v-full grow max-xl:hidden ">
      <div class="absolute font-krete italic text-gray-300 bottom-20 right-20 text-2xl max-w-[520px]">
        <p class="oi-emerge" style="--oi-delay: 800ms">
          Ask, and it shall be given you; seek, and ye shall find
        </p>
      </div>
    </div>
  </div>
</template>

<style>
  /* Fields warm as you enter them, rather than snapping to a ring. */
  .field {
    background-color: rgb(255 255 255 / 0.04);
    border: 1px solid rgb(209 213 219 / 0.55);
    transition:
      border-color 450ms var(--ease-sacred),
      background-color 450ms var(--ease-sacred),
      box-shadow 450ms var(--ease-sacred);
  }

  .field::placeholder {
    color: rgb(255 255 255 / 0.4);
    transition: color 450ms var(--ease-sacred);
  }

  .field:hover {
    border-color: rgb(209 213 219 / 0.8);
  }

  .field:focus {
    border-color: rgb(147 197 253 / 0.9);
    background-color: rgb(255 255 255 / 0.07);
    box-shadow: 0 0 22px -6px rgb(147 197 253 / 0.6);
  }

  .field:focus::placeholder {
    color: rgb(255 255 255 / 0.25);
  }

  .submit {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    /* Wide enough for "Sending" plus its lamps, so the box never resizes. */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 8.5rem;
    background-color: rgb(59 130 246 / 0.28);
    border: 1px solid rgb(147 197 253 / 0.3);
    transition:
      border-color 450ms var(--ease-sacred),
      box-shadow 450ms var(--ease-sacred),
      transform 450ms var(--ease-sacred),
      opacity 450ms var(--ease-sacred);
  }

  .submit::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(90deg, rgb(37 99 235 / 0.95), rgb(59 130 246 / 0.75));
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 500ms var(--ease-sacred);
  }

  .submit:hover:not(:disabled),
  .submit:focus-visible:not(:disabled) {
    border-color: rgb(147 197 253 / 0.7);
    box-shadow: 0 0 22px -4px rgb(147 197 253 / 0.5);
  }

  .submit:hover:not(:disabled)::before,
  .submit:focus-visible:not(:disabled)::before {
    transform: scaleX(1);
  }


  .submit:disabled {
    cursor: progress;
    opacity: 0.8;
  }

  .submit__dots {
    display: inline-flex;
    gap: 4px;
    margin-left: 8px;
    vertical-align: middle;
  }

  .submit__dots i {
    width: 4px;
    height: 4px;
    border-radius: 9999px;
    background-color: currentColor;
    animation: oi-pulse-soft 1.2s ease-in-out infinite;
  }

  .submit__dots i:nth-child(2) {
    animation-delay: 0.18s;
  }

  .submit__dots i:nth-child(3) {
    animation-delay: 0.36s;
  }
</style>
