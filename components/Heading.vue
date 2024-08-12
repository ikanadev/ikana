<script setup lang="ts"></script>

<template>
    <div class="heading">
        <h2 class="heading__text">
            <slot />
        </h2>
    </div>
</template>
<style scoped lang="scss">
.heading {
    text-align: center;
    max-width: $content-width;
    padding: $content-padding;
    margin: auto;
    margin-top: $size-10;
    gap: $size-3;
    &__text {
        font-size: $font-size-xl;
        color: var(--text-1);
        font-weight: 600;
    }
}
</style>
