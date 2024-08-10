<script setup lang="ts">
import {
    TooltipArrow,
    TooltipContent,
    TooltipRoot,
    type TooltipRootEmits,
    type TooltipRootProps,
    TooltipTrigger,
    useForwardPropsEmits,
} from "radix-vue";

const { content, ...props } = defineProps<
    TooltipRootProps & { content?: string }
>();
const emits = defineEmits<TooltipRootEmits>();
const forward = useForwardPropsEmits(props, emits);
</script>

<template>
    <TooltipRoot v-bind="forward">
        <TooltipTrigger as-child>
            <slot />
        </TooltipTrigger>
        <TooltipPortal>
            <TooltipContent side="top" align="center" class="tooltip">
                {{ content }}
                <TooltipArrow :width="10" :height="6" class="tooltip-arrow" />
            </TooltipContent>
        </TooltipPortal>
    </TooltipRoot>
    <span />
</template>

<style lang="scss">
.tooltip {
    background: var(--text-2);
    color: var(--surface-2);
    padding: $size-1 $size-2;
    border-radius: $size-2;
    font-size: $font-size-sm;
    animation: 350ms cubic-bezier(0.16, 1, 0.3, 1);
    max-width: $size-content-2;
    line-height: 1.2;
}
.tooltip[data-state="delayed-open"][data-side="top"] {
    animation-name: slideDownAndFade;
}
@keyframes slideDownAndFade {
    from {
        opacity: 0;
        transform: translateY(-4px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.tooltip-arrow {
    fill: var(--text-2);
}
</style>
