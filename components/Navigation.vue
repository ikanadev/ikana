<template>
    <nav>
        <div class="nav__cont">
            <div class="nav__logo">
                <Logo />
            </div>
            <div class="nav__spacer" />
            <div class="nav__theme-cont">
                <ThemeToggleBtn />
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
nav {
    position: fixed;
    z-index: 10;
    top: $size-4;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
}
.nav__cont {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    background: var(--surface-1);
}
.nav__spacer {
    flex: 1;
}
.nav__theme-cont {
    width: $size-7;
}
.nav__logo {
    width: $size-6;
    height: auto;
    color: var(--primary);
}
</style>
