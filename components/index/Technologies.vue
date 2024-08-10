<script setup lang="ts">
import type { TechItem } from "@/types";
import { DialogDescription } from "radix-vue";

const selectedItem = ref<TechItem | null>(null);

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

function closeDialog() {
    selectedItem.value = null;
}
</script>

<template>
    <section class="techs">
        <div class="tech__container">
            <div class="tech__items">
                <img
                    v-for="icon in techItems"
                    :alt="icon.name"
                    :src="icon.url"
                    @click="selectedItem = icon"
                />
                <img
                    v-for="icon in techItems"
                    :alt="icon.name"
                    :src="icon.url"
                    @click="selectedItem = icon"
                />
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
        background: var(--surface-2);
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

.techs {
    margin-bottom: 500px;
    margin-top: 80px;
}
.tech__container {
    width: 80%;
    margin: auto;
    overflow: hidden;
    .tech__items {
        display: flex;
        flex-wrap: nowrap;
        width: max-content;
        gap: $size-6;
        padding: $size-3;
        animation: 45s linear 0s infinite slide;
        transition: all 0.5s;
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
@keyframes slide {
    0% {
        transform: translate(0%);
    }
    100% {
        transform: translate(-50%);
    }
}
@media (min-width: $md-breakpoint) {
    .tech__container {
        .tech__items {
            gap: $size-8;
            padding: $size-4;
        }
    }
}
</style>
