<script setup lang="ts">

</script>

<template>
  <div class="homeCont">
    
    <h1 class="heading">
      Turn Feedback into Fuel: Drive Improvement with <span>StrengthFeedback</span>
    </h1>

    <h2 class="content">
      Enroll yourself here and ask others to write about your Strengths.
    </h2>

    <router-link to="/enrollmember">
      <button class="enrollBtn">Enroll Now</button>
    </router-link>

  </div>
</template>

<style scoped>
.homeCont {
  width: 100%;
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFCF5;
}

.heading {  
  color: #1E1E1E;
  text-align: center;
  font-size: 48px;
  margin-bottom: 24px;
  width: 70%;
  font-weight: 300;
}
.heading span {
  font-weight: 600;
}
.content {
  color: #1E1E1E;
  font-size: 18px;  
  margin-bottom: 24px;
}
.enrollBtn {
  height: 48px;
  font-size: 16px;
  padding: 0 16px;
  background: #1E1E1E;
  color: white;
  border-radius: 4px;
}
</style>
