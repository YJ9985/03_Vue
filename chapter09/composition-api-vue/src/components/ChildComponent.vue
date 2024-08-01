<template>
  <div>
    <input type="text" v-model.number="inputNum" />
    <button @click="check">정답!</button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const inputNum = ref(0);

const props = defineProps({
  rand: {
    type: Number,
    required: true,
  },
});

function check() {
  let msg = '';

  if (props.rand === inputNum.value) {
    msg = ' 정답입니다!';
  } else if (props.rand > inputNum) {
    msg = 'UP';
  } else {
    msg = 'DOWN';
  }
  console.log(msg);
}
const emit = defineEmits(['send-msg']);
</script>
