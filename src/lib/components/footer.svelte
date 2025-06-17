<script lang="ts">
  // Get the current year
  const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="fixed bottom-0 border-none">
    <footer class="mx-auto max-w-(--breakpoint-xl) p-4 md:flex md:items-center md:justify-between md:pl-10 font-krete z-20">
      <span class="text-xs text-gray-600 sm:text-center">
        © {currentYear} Opus Iræ & Endtime Productions AB
      </span>
      <span class="flex flex-wrap items-center mt-3 text-xs font-medium text-gray-600 sm:mt-0">
        <a href="impress" class="mr-2 hover:underline md:mr-2 md:ml-10">Impress & Privacy Policy</a>
      </span>
    </footer>
  </div>
</template>
