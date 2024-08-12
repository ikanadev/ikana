<script setup lang="ts">
import Glep from "./Glep.vue";
</script>

<template>
    <header>
        <div class="header__cont">
            <div class="header__image">
                <Glep />
            </div>
            <div class="header__text">
                <div class="header__logo">
                    <Ikana />
                </div>
                <h2 class="header__slogan">
                    Full stack
                    <span class="header__slogan--primary"> developer </span>
                    focused on building modern, performant and reliable
                    <span class="header__slogan--primary">
                        web applications
                    </span>
                </h2>
            </div>
        </div>
        <div class="gradient">
            <div class="gradient__bg" />
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    position: relative;
}

.gradient {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.gradient__bg {
    width: 90vw;
    height: 20%;
    border-radius: 100%;
    background: linear-gradient(to left, var(--primary) 20%, #2361a4 100%);
    opacity: 1;
    filter: blur(60px);
    transform: rotateZ(-15deg);
    animation: 5s ease-in-out 0s infinite alternate moveGradient;
}
@keyframes moveGradient {
    0% {
        transform: rotateZ(-18deg) rotateX(0deg) rotateY(0deg);
    }
    100% {
        transform: rotateZ(-18deg) rotateX(0deg) rotateY(60deg);
    }
}
.header__cont {
    width: 100%;
    min-height: 90vh;
    max-width: $content-width;
    padding: $content-padding;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.header__text {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $size-2;
}
.header__logo {
    max-width: 300px;
}
.header__slogan {
    margin-top: $size-2;
    font-size: $font-size-2xl;
    font-weight: 700;
    letter-spacing: -0.02em;
    text-align: center;
    line-height: 1.05;
}
.header__slogan--primary {
    font-weight: 800;
    color: var(--primary);
}
.header__image {
    flex: 1;
    padding-left: $size-7;
    padding-right: $size-7;
    padding-top: $size-10;
    animation: 5s linear 0s infinite alternate float-glep;
}
@keyframes float-glep {
    0% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(18px);
    }
}
@media (min-width: $md-breakpoint) {
    .gradient {
        bottom: 0;
    }
    .header__logo {
        max-width: 350px;
    }
    .header__cont {
        flex-direction: row-reverse;
    }
    .header__image {
        flex: 2;
        padding: 0;
    }
    .header__text {
        flex: 3;
        align-items: start;
        gap: $size-7;
    }
    .header__slogan {
        text-align: left;
        max-width: 550px;
        font-size: $font-size-3xl;
    }
    .gradient__bg {
        width: 50vw;
        opacity: 0.6;
        filter: blur(90px);
    }
}
</style>
