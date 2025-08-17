<template>

    <div>
        <Navigation />
        <slot />

        <Footer />
    </div>
</template>

<script setup lang="ts">

import Navigation from '~/components/layout/Navigation.vue';
import Footer from '~/components/layout/Footer.vue';
</script>