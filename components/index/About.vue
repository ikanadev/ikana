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
            <TransparentContainer class="quote">
                <blockquote>
                    Ser o no ser, esa es la cuestion. Vence el juego, no lo
                    juegues. Ser o no ser, esa es la cuestion.
                </blockquote>
                <p>- Dio Brando</p>
            </TransparentContainer>
            <div class="picture">
                <img src="/me_color.webp" />
            </div>
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
.quote blockquote {
    padding-left: 0.6em;
    text-indent: -0.6em;
    font-style: italic;
    margin-bottom: $size-1;
}
.quote blockquote::before {
    content: open-quote;
}
.quote blockquote::after {
    content: close-quote;
}
.quote p {
    text-align: right;
}

.picture {
    border-radius: $size-5;
    overflow: hidden;
    background: red;
}
.picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1);
    transition: all 0.5s ease-out;
}
.picture:hover img {
    filter: grayscale(0) saturate(2);
    transform: scale(1.2);
}

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
.bolivia {
    margin-top: $size-3;
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
    padding: $content-padding;
    margin: auto;

    display: grid;
    gap: $size-2;
    grid-template-rows: repeat(7, auto);
    grid-template-columns: repeat(2, 1fr);
}
.container div:nth-child(1) {
    grid-area: span 1 / span 2;
}
.container div:nth-child(2) {
    grid-area: span 1 / span 2;
}
.container div:nth-child(3) {
    grid-area: span 2 / span 1;
}
.container div:nth-child(6) {
    grid-area: span 1 / span 2;
}
.container div:nth-child(9) {
    grid-area: span 1 / span 2;
}

@media (min-width: $md-breakpoint) {
    .container {
        gap: $size-3;
        grid-template-rows: repeat(5, auto);
        grid-template-columns: repeat(4, 1fr);
    }
    .container div:nth-child(1) {
        grid-area: span 3 / span 2;
    }
    .container div:nth-child(2) {
        grid-area: span 1 / span 2;
    }
    .container div:nth-child(3) {
        grid-area: span 3 / span 1;
    }
    .container div:nth-child(5) {
        grid-area: span 3 / span 1;
    }
    .container div:nth-child(6) {
        grid-area: span 1 / span 2;
    }
    .container div:nth-child(9) {
        grid-area: span 1 / span 1;
    }
}
</style>
