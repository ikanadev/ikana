<template>
    <nav class="nav">
        <div class="nav__cont">
            <NuxtLink to="/" class="nav__logo">
                <Logo />
            </NuxtLink>
            <div class="nav__divider" />
            <div class="nav__theme-cont">
                <ThemeToggleBtn />
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.nav {
    position: fixed;
    z-index: 10;
    top: $size-4;
    left: 50%;
    transform: translateX(-50%);
    background: var(--surface-1);
    border: 1px solid var(--surface-3);
    border-radius: $size-3;
    padding: $size-2 $size-3;
    box-shadow: 1px 1px 10px -5px var(--primary);
}
.nav__cont {
    display: flex;
    align-items: center;
}
.nav__divider {
    align-self: stretch;
    border: 1px solid var(--surface-3);
    margin: 0 $size-2;
}
.nav__theme-cont {
    width: $size-6;
    height: $size-6;
    transition: none;
}
.nav__logo {
    width: $size-6;
    height: auto;
    color: var(--primary);
}
</style>
