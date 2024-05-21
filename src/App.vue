<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav class="logo">
      <div class="left">
        <router-link to="/">
          <span>Strength Feedback</span>
        </router-link>
      </div>
      <div class="right">
        <router-link to="/strengthboard">
          <span>Strength Board</span>
        </router-link>
      </div>
    </nav>
  </header>

  <RouterView>
  </RouterView>
</template>

<style scoped>
.logo {
  padding: 0;
  height: 56px;
  background-color: rgb(233, 233, 233);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.logo .left span {
  color: #1E1E1E;
  font-size: 20px;
  font-weight: 700;
}
.logo .right {
  padding: 5px 10px;
  border-radius: 4px;
}
.logo .right span {
  color: #1E1E1E;
  font-size: 16px;
  font-weight: 400;
}

.logo .right:hover {
  background-color: rgb(207, 207, 207);
}
</style>
