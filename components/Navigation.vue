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
.nav__cont {
    width: 100%;
    max-width: $content-width;
    margin-left: auto;
    margin-right: auto;
    display: flex;
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
