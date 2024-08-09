<template>
    <button class="icon-button">
        <slot />
    </button>
</template>

<style scoped lang="scss">
.icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #495057;
    background: #343a40;
    background: var(--surface-3);
    color: var(--text-3);
    transition: all 350ms ease;
    width: $size-8;
    height: $size-8;
    border-radius: 100%;
    &:hover {
        color: var(--text-1);
    }
    svg {
        width: $size-7;
    }
}
</style>
