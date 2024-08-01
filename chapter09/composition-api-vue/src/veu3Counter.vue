<template>
  <div>
    <h1>Vue3 Counter</h1>
    <h1>Count : {{ count }}</h1>
    <h1>두배로! {{ double }}</h1>
    <h1>지금까지 계산한 횟수 : {{ totalcount }}</h1>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

const count = ref(2);
const double = computed(() => count.value * 2);
function increment() {
  count.value++;
}
function decrement() {
  count.value--;
}
const totalcount = computed(() => {
  return click.value;
});
</script>
