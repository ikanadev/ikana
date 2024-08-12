<script setup lang="ts">
import type { TechItem } from "@/types";
import { DialogDescription } from "radix-vue";

const selectedItem = ref<TechItem | null>(null);

const techItemsEl1 = ref<HTMLDivElement | null>(null);
const techItemsEl2 = ref<HTMLDivElement | null>(null);

const openedModal = computed({
    get() {
        return selectedItem.value !== null;
    },
    set(newValue) {
        if (!newValue) {
            selectedItem.value = null;
        }
    },
});

watch(selectedItem, (item) => {
    if (!techItemsEl1.value || !techItemsEl2.value) return;
    if (item === null) {
        techItemsEl1.value.style.animationPlayState = "running";
        techItemsEl2.value.style.animationPlayState = "running";
    } else {
        techItemsEl1.value.style.animationPlayState = "paused";
        techItemsEl2.value.style.animationPlayState = "paused";
    }
});
</script>

<template>
    <Heading>My prefered tech</Heading>
    <section class="tech">
        <div class="tech__section-container">
            <div class="tech__container">
                <div class="tech__items" ref="techItemsEl1">
                    <img
                        v-for="icon in techItems1"
                        :alt="icon.name"
                        :src="icon.url"
                        @click="selectedItem = icon"
                    />
                    <img
                        v-for="icon in techItems1"
                        :alt="icon.name"
                        :src="icon.url"
                        @click="selectedItem = icon"
                    />
                </div>
                <div class="tech__container">
                    <div
                        class="tech__items tech__items--right"
                        ref="techItemsEl2"
                    >
                        <img
                            v-for="icon in techItems2"
                            :alt="icon.name"
                            :src="icon.url"
                            @click="selectedItem = icon"
                        />
                        <img
                            v-for="icon in techItems2"
                            :alt="icon.name"
                            :src="icon.url"
                            @click="selectedItem = icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <DialogRoot v-model:open="openedModal">
        <DialogPortal>
            <Transition name="fade">
                <DialogOverlay class="tech-dialog__overlay">
                    <DialogContent class="tech-dialog__content">
                        <img
                            :alt="selectedItem?.name"
                            :src="selectedItem?.url"
                        />
                        <DialogTitle>{{ selectedItem?.name }}</DialogTitle>
                        <DialogDescription
                            class="tech-dialog__description"
                            :style="{
                                transform:
                                    selectedItem?.name === 'CSS'
                                        ? 'translate(-35px, 30px)'
                                        : 'none',
                            }"
                        >
                            {{ selectedItem?.description }}
                        </DialogDescription>
                        <DialogClose asChild
                            ><ButtonIcon><IconsClose /></ButtonIcon
                        ></DialogClose>
                    </DialogContent>
                </DialogOverlay>
            </Transition>
        </DialogPortal>
    </DialogRoot>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: all 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0.4;
}
.tech-dialog__overlay {
    background-color: var(--surface-3-transp);
    backdrop-filter: blur(10px);
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .tech-dialog__content {
        margin: $size-3;
        border-radius: $size-6;
        padding: $size-6;
        background: var(--surface-1);
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
            margin-top: $size-2;
        }
        img {
            height: $size-10;
        }
        .tech-dialog__description {
            margin-top: $size-2;
            color: var(--text-2);
            max-width: $size-content-2;
        }
        button {
            margin-top: $size-4;
        }
    }
}
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.tech {
    &__section-container {
        max-width: $content-width;
        padding: 0 $content-padding;
        margin: auto;
    }
    &__container {
        overflow: hidden;
        width: 100%;
        mask-image: linear-gradient(
            to left,
            transparent 0%,
            white 20%,
            white 80%,
            transparent 100%
        );
    }
    &__items {
        display: flex;
        flex-wrap: nowrap;
        width: max-content;
        gap: $size-6;
        padding: $size-3;
        animation: 35s linear 0s infinite slide-to-left;
        transition: all 0.5s;
        &--right {
            flex-direction: row-reverse;
            animation: 30s linear 0s infinite reverse slide-to-left;
        }
        img {
            width: auto;
            height: $size-8;
            flex-shrink: 0;
            filter: grayscale(1);
            transition: all 350ms;
            cursor: pointer;
            &:hover {
                filter: grayscale(0);
                transform: scale(1.2);
            }
        }
    }
}

@keyframes slide-to-left {
    0% {
        transform: translate(0%);
    }
    100% {
        transform: translate(-50%);
    }
}
@media (min-width: $md-breakpoint) {
    .tech {
        &__items {
            gap: $size-8;
            padding: $size-4;
        }
        &__container {
            mask-image: linear-gradient(
                to left,
                transparent 0%,
                white 10%,
                white 90%,
                transparent 100%
            );
        }
    }
}
</style>
