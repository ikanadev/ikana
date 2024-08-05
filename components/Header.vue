<script setup lang="ts"></script>

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
                    focused in building, performant, modern and reliable
                    <span class="header__slogan--primary">
                        Web Applications
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
    bottom: 0;
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
    animation: 3s ease-in-out 0s infinite alternate moveGradient;
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
    max-width: $content-width;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.header__text {
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header__logo {
    max-width: 220px;
}
.header__slogan {
    margin-top: $size-2;
    font-size: $font-size-xl;
    font-weight: 400;
    letter-spacing: -0.05em;
    text-align: center;
    line-height: 1.1;
}
.header__slogan--primary {
    font-size: $font-size-xl;
    font-weight: 600;
    color: var(--primary);
}
.header__image {
    flex: 2;
    padding-left: $size-8;
    padding-right: $size-8;
}
@media (min-width: $md-breakpoint) {
    .header__cont {
        flex-direction: row-reverse;
    }
    .header__image {
        padding: 0;
    }
    .header__text {
        align-items: start;
    }
    .header__slogan {
        text-align: left;
        max-width: 500px;
    }
    .gradient__bg {
        width: 50vw;
        opacity: 0.8;
        filter: blur(90px);
    }
}
</style>
