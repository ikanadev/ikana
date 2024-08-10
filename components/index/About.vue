<script setup lang="ts">
import Bolivia from "./Bolivia.vue";

const {
    data: quoteItem,
    status: quoteStatus,
    refresh: refetchQuote,
} = useFetch("/api/quote", {
    server: false,
});
</script>

<template>
    <section class="about">
        <BgLines />
        <div class="container">
            <TransparentContainer class="intro">
                <p>
                    Hi, I'm Kevin Vargas. I build Web and Mobile applications.
                </p>
                <p>
                    When I'm not actively coding and developing projects, you'll
                    likely find me engaged with content related to mathematics,
                    economics, or open source software - areas I'm particularly
                    passionate about.
                </p>
            </TransparentContainer>
            <TransparentContainer class="quote">
                <blockquote class="quote__text">
                    {{ quoteItem ? quoteItem.quote : "..." }}
                </blockquote>
                <p class="quote__author">
                    - {{ quoteItem ? quoteItem.author : "..." }}
                </p>
                <div class="quote__actions">
                    <button
                        v-if="quoteItem"
                        class="quote__button"
                        :disabled="quoteStatus === 'pending'"
                        @click="refetchQuote()"
                        :class="{
                            'quote__button--loading': quoteStatus === 'pending',
                        }"
                    >
                        <IconsArrowCircle />
                    </button>
                    <Tooltip
                        content="I don't necessarily endorse or fully believe in the ideas expressed in these quotes."
                    >
                        <button class="quote__button">
                            <IconsInfoCircle />
                        </button>
                    </Tooltip>
                </div>
            </TransparentContainer>
            <div class="picture">
                <img src="/me_color.webp" />
            </div>
            <TransparentContainer>
                <p class="about-info">
                    <span>Role:</span>
                    <span>FullStack Dev</span>
                </p>
            </TransparentContainer>
            <TransparentContainer class="bolivia-item">
                <p class="about-info">
                    <span>Based in:</span>
                    <span>Bolivia</span>
                </p>
                <div class="bolivia">
                    <Bolivia />
                </div>
            </TransparentContainer>
            <div class="stats">
                <div class="stat-item">
                    <p class="stat-counter">+5</p>
                    <p class="stat-text">Years experience</p>
                </div>
                <div class="stat-item">
                    <p class="stat-counter">+8</p>
                    <p class="stat-text">Web projects</p>
                </div>
                <div class="stat-item">
                    <p class="stat-counter">+5</p>
                    <p class="stat-text">Mobile projects</p>
                </div>
            </div>
            <TransparentContainer class="buttons">
                <button class="custom-button">
                    <IconsEmail />
                    Copy email
                </button>
                <a class="custom-button" href="/CV.pdf" target="_blank">
                    <IconsDocument /> Open resume
                </a>
            </TransparentContainer>
            <TransparentContainer class="social">
                <a href="#" target="_blank">
                    <IconsXTwitter />
                </a>
                <a href="#" target="_blank">
                    <IconsLinkedIn />
                </a>
                <a href="#" target="_blank">
                    <IconsGithub />
                </a>
            </TransparentContainer>
        </div>
    </section>
</template>

<style scoped lang="scss">
.intro p:first-child {
    font-size: $font-size-2xl;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.2;
}
.intro p:last-child {
    margin-top: $size-5;
    color: var(--text-2);
}

.quote {
    color: var(--text-2);
    font-weight: 300;
    &__text {
        padding-left: 0.6em;
        text-indent: -0.6em;
        &::before {
            content: open-quote;
        }
        &::after {
            content: close-quote;
        }
    }
    &__author {
        text-align: right;
        font-size: $font-size-md;
        font-weight: 400;
    }
    &__actions {
        display: flex;
        gap: $size-2;
    }
    &__button {
        width: $size-5;
        height: $size-5;
        color: var(--text-3);
        transition: color 350ms;
        &:hover {
            color: var(--text-2);
        }
        svg {
            width: 100%;
            height: 100%;
        }
        &--loading {
            animation: 550ms ease 0s infinite button-spin;
        }
    }
}
@keyframes button-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
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
    will-change: transform filter;
}
.picture:hover img {
    filter: grayscale(0) saturate(2);
    transform: scale(1.2);
}

.about-info {
    display: flex;
    justify-content: space-between;
}
.about-info span:first-child {
    color: var(--text-2);
}
.about-info span:last-child {
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
    will-change: transform;
}

.stats {
    display: flex;
    gap: $size-2;
    .stat-item {
        flex: 1;
        border-radius: $size-5;
        padding-top: $size-1;
        padding-bottom: $size-3;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        text-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
        &:first-child {
            background: #da1010;
        }
        &:nth-child(2) {
            background: #d0d010;
        }
        &:nth-child(3) {
            background: #00c800;
        }
        .stat-counter {
            font-size: $font-size-3xl;
            font-weight: 900;
            line-height: 1.4;
        }
        .stat-text {
            font-size: $font-size-md;
            font-weight: 500;
            text-align: center;
        }
    }
}

.buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .custom-button {
        text-decoration: none;
        background: var(--surface-3);
        border: none;
        font-size: $font-size-md;
        align-items: center;
        display: flex;
        gap: $size-2;
        border-radius: $size-1;
        padding: $size-4;
        padding-top: $size-2;
        padding-bottom: $size-2;
        cursor: pointer;
        color: var(--text-2);
        opacity: 0.8;
        transition: all 350ms;
        svg {
            width: 1.4em;
        }
        &:hover {
            opacity: 1;
            filter: saturate(3);
        }
    }
}

.social {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    a {
        color: var(--text-1);
        opacity: 0.8;
        transition: all 350ms;
        &:hover {
            opacity: 1;
            filter: saturate(3);
        }
        svg {
            width: 1.8em;
            height: 1.8em;
        }
    }
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
    font-size: $font-size-lg;
    line-height: 1.4;
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
.container div:nth-child(7) {
    grid-area: span 1 / span 2;
}
.container div:nth-child(8) {
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
    .container div:nth-child(8) {
        grid-area: span 1 / span 1;
    }
}
</style>
