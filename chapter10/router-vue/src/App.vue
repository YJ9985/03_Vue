<script setup></script>

<template>
  <div>
    <nav>
      <!-- router-link 또는 RouterLink 둘 다 동일한 의미 -->
      <router-link to="/">홈페이지</router-link>
      <!-- spacebar 1칸 -->
      &nbsp;

      <RouterLink to="/about">라우터란?</RouterLink>
      &nbsp;
      <router-link to="/dynamic/happy">행복하다</router-link>
      &nbsp;
      <router-link to="/dynamic/exciting">신난다</router-link>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped></style>
