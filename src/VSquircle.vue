<template>
  <div class="v-squircle" :style="style">
    <div class="v-squircle--background">
      <div class="v-squircle--segment v-squircle--segment--top-left"></div>
      <div class="v-squircle--filler"></div>
      <div class="v-squircle--segment v-squircle--segment--top-right"></div>
      <div class="v-squircle--filler"></div>
      <div class="v-squircle--filler"></div>
      <div class="v-squircle--filler"></div>
      <div class="v-squircle--segment v-squircle--segment--bottom-left"></div>
      <div class="v-squircle--filler"></div>
      <div class="v-squircle--segment v-squircle--segment--bottom-right"></div>
    </div>
    <div class="v-squircle--slot">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

defineOptions({
  name: 'v-squircle'
});

const props = withDefaults(defineProps<{
  radius?: string;
  smoothing?: number;
  padding?: string;
  background?: string;
}>(), {
  radius: '25px',
  smoothing: 4,
  padding: '25px',
  background: 'hsla(0,0%,0%,0.5)'
});

const emit = defineEmits<{
  (e: 'mounted'): void
}>();

const polygon = ref<string[]>([]);

const squircle = (r: number) => {
  return function (theta: number) {
    let x = Math.pow(Math.abs(Math.cos(theta)), 2 / r) * 50 * Math.sign(Math.cos(theta)) + 50;
    let y = Math.pow(Math.abs(Math.sin(theta)), 2 / r) * 50 * Math.sign(Math.sin(theta)) + 50;
    return {x,y};
  }
};

const to_radians = (deg: number) => {
  return deg * Math.PI / 180;
};

onMounted(() => {
  polygon.value = (new Array(91))
    .fill(0)
    .map((x, i) => i)
    .map(to_radians)
    .map(squircle(props.smoothing))
    .map(({ x, y }) => ({ x: Math.round(x * 10)/10, y: Math.round(y * 10)/10 }))
    .map(({ x, y }) => `${(x-50)*2}% ${(y-50)*2}%`);
  polygon.value.push('0% 0%');
  emit("mounted");
  console.log("mounted");
});

const style = computed(() => {
  return {
    '--v-squircle-radius': props.radius,
    '--v-squircle-smoothing': props.smoothing,
    '--v-squircle-padding': props.padding,
    '--v-squircle-polygon': 'polygon(' + polygon.value + ')',
    '--v-squircle-background': props.background
  } as any;
});
</script>

<style lang="scss" scoped>
.v-squircle {
  display: grid;

  &--background {
    display: grid;
    grid-template: var(--v-squircle-radius) auto var(--v-squircle-radius) / var(--v-squircle-radius) auto var(--v-squircle-radius);
  }

  &--segment {
    width: var(--v-squircle-radius);
    height: var(--v-squircle-radius);
    clip-path: var(--v-squircle-polygon);
  }

  &--filler, &--segment {
    background-color: var(--v-squircle-background);
  }

  &--segment--bottom-left {
    transform: rotate(90deg);
  }

  &--segment--top-left {
    transform: rotate(180deg);
  }

  &--segment--top-right {
    transform: rotate(270deg);
  }

  &--slot, &--background {
    grid-area: 1 / 1 / 1 / 1;
  }

  &--slot {
    padding: var(--v-squircle-padding);
  }
}
</style>
