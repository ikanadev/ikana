<script setup lang="ts"></script>

<template>
    <div class="item-container">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.item-container {
    padding: $size-4;
    border-radius: $size-5;
    background: var(--surface-2-transp);
    backdrop-filter: blur(5px) saturate(3);
    overflow: hidden;
}
</style>
