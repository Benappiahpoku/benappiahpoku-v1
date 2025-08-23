<template>
  <div class="benappiahpoku-logo">
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      class="w-10 h-10"
      :class="{ 'text-primary-dark': !white, 'text-white': white }"
    >
      <!-- Main Circle representing Ghana's unity -->
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" stroke-width="2"/>
      
      <!-- ===== [New Feature] START ===== -->
      <!-- Replaced the 'S' path with a simple 'B' glyph drawn as SVG text.
           This keeps the logo simple and avoids font dependencies where possible.
           If you prefer a path-based 'B' later, we can replace this with a custom path. -->
      <text
        x="24"
        y="28"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="28"
        font-weight="700"
        fill="currentColor"
        style="font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;"
      >
        B
      </text>
      <!-- ===== [New Feature] END ===== -->

      <!-- Star removed as requested -->
      <!-- (previous star path removed) -->
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  white?: boolean
}>()
</script>

<style scoped>
.benappiahpoku-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>