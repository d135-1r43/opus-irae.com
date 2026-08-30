<script lang="ts">
  // Get the current year
  const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="fixed bottom-0 border-none">
    <footer class="oi-rise mx-auto max-w-(--breakpoint-xl) p-4 md:flex md:items-center md:justify-between md:pl-10 font-krete z-20"
            style="--oi-delay: 900ms">
      <span class="text-xs text-gray-600 sm:text-center">
        © {currentYear} Opus Iræ & Endtime Productions AB
      </span>
      <span class="flex flex-wrap items-center mt-3 text-xs font-medium text-gray-600 sm:mt-0">
        <a href="impress" class="footer-link oi-rule mr-2 md:mr-2 md:ml-10">Impress & Privacy Policy</a>
      </span>
    </footer>
  </div>
</template>

<style>
  .footer-link {
    transition: color 500ms var(--ease-sacred);
  }

  .footer-link:hover,
  .footer-link:focus-visible {
    color: rgb(209 213 219);
  }
</style>
