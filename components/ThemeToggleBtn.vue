<script setup lang="ts">
import { Theme, THEME_KEY } from "@/types";
const isDarkTheme = Theme.Dark;
const theme = ref(Theme.Dark);
const dark = computed(() => theme.value === Theme.Dark);

function toggleTheme() {
    const nextTheme = theme.value === Theme.Dark ? Theme.Light : Theme.Dark;
    theme.value = nextTheme;
}

onMounted(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme === Theme.Light) theme.value = Theme.Light;
});

watch(theme, (nextTheme) => {
    localStorage.setItem(THEME_KEY, nextTheme.toString());
    document.firstElementChild?.setAttribute(
        "data-theme",
        nextTheme.toString(),
    );
});
</script>

<template>
    <button :class="{ dark }" @click="toggleTheme">
        <svg viewBox="0 0 24 24">
            <defs>
                <g
                    id="sun-rays"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                >
                    <line x1="12" x2="12" y1="3" y2="1" />
                    <line x1="21" x2="23" y1="12" y2="12" />
                    <line x1="12" x2="12" y1="21" y2="23" />
                    <line x1="1" x2="3" y1="12" y2="12" />
                </g>
            </defs>
            <circle :r="dark ? 8.5 : 6" cx="12" cy="12" fill="currentColor" />
            <circle class="overlay" r="7" :cx="dark ? 15 : 26" cy="9" />
            <g class="sun__rays" :class="{ dark }">
                <use href="#sun-rays" />
                <use href="#sun-rays" transform="rotate(45 12 12)" />
            </g>
        </svg>
    </button>
</template>

<style scoped lang="scss">
button {
    width: 100%;
    height: auto;
    border: 0;
    background: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
    color: #fcc419;
}
button.dark {
    color: #339af0;
}
.sun__rays {
    transform-origin: center;
    transition: all 0.4s ease;
    opacity: 1;
}
.sun__rays.dark {
    opacity: 0;
    transform: rotate(45deg);
}
button circle {
    transition:
        r 0.4s ease,
        cx 0.4s ease;
}
.overlay {
    fill: var(--surface-1);
}
</style>
