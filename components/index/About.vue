<script setup lang="ts">
import Bolivia from "./Bolivia.vue";
</script>

<template>
    <section class="about">
        <BgLines />
        <div class="container">
            <TransparentContainer>
                <p>Presentation cover</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo at placeat dolore corrupti atque ipsa. Possimus
                    pariatur nulla quasi ducimus alias non dolorum eveniet fugit
                    modi vitae? Voluptates, repellendus quod.
                </p>
            </TransparentContainer>
            <TransparentContainer>
                <div>Random cool quote. - Me.</div>
            </TransparentContainer>
            <TransparentContainer>
                <h1>Picture</h1>
            </TransparentContainer>
            <TransparentContainer>
                <p class="about-info">
                    <span>Name:</span>
                    <span>Kevin Vargas</span>
                </p>
            </TransparentContainer>
            <TransparentContainer class="bolivia-item">
                <p class="about-info">
                    <span>De:</span>
                    <span>Bolivia</span>
                </p>
                <div class="bolivia">
                    <Bolivia />
                </div>
            </TransparentContainer>
            <TransparentContainer>
                <h1>Stats</h1>
            </TransparentContainer>
            <TransparentContainer>
                <h1>Email</h1>
            </TransparentContainer>
            <TransparentContainer>
                <h1>Resume</h1>
            </TransparentContainer>
            <TransparentContainer>
                <h1>social</h1>
            </TransparentContainer>
        </div>
    </section>
</template>

<style scoped lang="scss">
.about-info {
    display: flex;
    justify-content: space-between;
    font-size: $font-size-md;
}
.about-info span:first-child {
    color: var(--text-2);
}
.about-info span:last-child {
    font-size: $font-size-lg;
    font-weight: 500;
}
.bolivia-item:hover svg {
    transform: rotate3d(8, 2, -2, 35deg) scale(1.3);
    filter: saturate(2);
}
.bolivia svg {
    transform: rotate3d(8, 2, -2, 55deg) scale(1.2);
    transition: all 0.5s ease;
    filter: saturate(1);
}
.about {
    padding-top: $size-10;
    position: relative;
    width: 100%;
    overflow: hidden;
}
.container {
    max-width: $content-width;
    margin: auto;

    display: grid;
    gap: $size-3;
    grid-template-rows: repeat(5, auto);
    grid-template-columns: repeat(4, 1fr);
}
.about-cont div {
}
.container div:nth-child(1) {
    grid-area: span 3 / span 2;
}
.container div:nth-child(2) {
    grid-area: span 1 / span 2;
}
.container div:nth-child(3) {
    grid-area: span 4 / span 1;
}
.container div:nth-child(5) {
    grid-area: span 2 / span 1;
}
.container div:nth-child(6) {
    grid-area: span 1 / span 2;
}
</style>
