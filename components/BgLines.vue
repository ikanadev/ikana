<script setup lang="ts">
function generatePath(xDistance: number, yOrigin: number, yDistance: number) {
    // xLimit/2*xDistance should be an even number, 2, 4, 8, 16, 32 and so on till 256
    const xLimit = 1024; // must match the svg viewBox width
    const yCurveTop = yOrigin - yDistance;

    let dPath = `M0,${yOrigin}Q${xDistance / 2},${yCurveTop},${xDistance},${yOrigin}T`;
    let xFactor = 2;
    let x = xDistance * xFactor;
    while (x <= xLimit + xDistance * 2) {
        dPath += `${x},${yOrigin},`;
        xFactor++;
        x = xDistance * xFactor;
    }

    return dPath.substring(0, dPath.length - 1);
}
</script>

<template>
    <svg
        class="lines"
        width="1024"
        height="200"
        viewBox="0 0 1024 200"
        stroke-width="0.5"
        stroke="currentColor"
        fill="none"
    >
        <path :d="generatePath(128, 50, 20)">
            <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                from="0"
                to="-512"
                repeatCount="indefinite"
                dur="17s"
            />
        </path>
        <path :d="generatePath(128, 80, 20)">
            <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                from="0"
                to="-512"
                repeatCount="indefinite"
                dur="23s"
            />
        </path>
        <path :d="generatePath(256, 110, 28)">
            <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                from="0"
                to="-512"
                repeatCount="indefinite"
                dur="31s"
            />
        </path>
    </svg>
</template>

<style scoped>
.lines {
    max-width: none;
    color: var(--primary);
    width: 3000px;
    height: auto;
    position: absolute;
    top: 0;
    left: -10%;
    transform: rotate(-10deg);
    opacity: 0.8;
    z-index: -1;
}
</style>
