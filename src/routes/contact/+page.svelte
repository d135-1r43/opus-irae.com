<script lang="ts">
  import Title from "$lib/components/title.svelte";
  import Heptagram from "$lib/components/icons/heptagram.svelte";

  let statusText: string = "";

  const handleSubmit = async data => {
    statusText = "Submitting...";
    const formData = new FormData(data.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
      statusText = result.message || "Success";
    }

  };
</script>

<svelte:head>
  <title>Opus Iræ Contact</title>
</svelte:head>

<template>
  <aside class="
      w-full pt-4
      md:ml-10 md:p-2xl md:min-w-[480px] md:max-w-[520px] text-white md:divide-white
      flex-col divide-y
      bg-black bg-transparent/50
      ">

    <Title />

    <div class="justify-center p-10 font-krete font-thin">
      <p>Contact us directly for matters pertaining to booking.</p>
      <p>For all other inquiries, we kindly request thee to
        engage with us through our social media platforms.</p>
    </div>

    <form on:submit|preventDefault={handleSubmit} class="text-black font-krete p-10">
      <input type="hidden" name="access_key" value="b04efb2e-092c-4804-986f-18cd57cf1806">
      <div class="mb-4">
        <input class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
               type="text" name="name" required placeholder="Your Name" />
      </div>
      <div class="mb-4">
        <input class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
               type="email" name="email" required placeholder="Your Email" />
      </div>
      <div class="mb-4">
        <textarea
          class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          name="message" required rows="3" placeholder="Your Message"></textarea>
      </div>
      <div class="mb-4">
        <input class="py-2 px-4 bg-blue-500/40 text-white rounded-md hover:bg-blue-700 focus:outline-none" type="submit"
               value="Submit" />
      </div>
    </form>
    <div class="text-center font-krete border-none">
      <p class="p-5 border-0">{ statusText }</p>
    </div>
    <div class="flex justify-center py-10">
      <Heptagram />
    </div>
  </aside>

  <div class="flex w-full">
    <div class="v-full flex-grow max-xl:hidden ">
      <div class="absolute font-krete italic text-gray-300 bottom-20 right-20 text-2xl max-w-[520px]">
        <p>
          Ask, and it shall be given you; seek, and ye shall find
        </p>
      </div>
    </div>
  </div>
</template>
