<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  // @ts-ignore
  const users = JSON.parse(localStorage.getItem("users"));
  if (typeof users?.length === 'undefined' || users?.length <= 0) {
    localStorage.setItem(
      "users",
      JSON.stringify([
        {
          id: 4,
          name: "Rahul",
          email: "rahul@gmail.com",
          feedbacks: ["good", "I would like to give 7 out of 10."],
        },
        {
          id: 3,
          name: "John",
          email: "john@gmail.com",
          feedbacks: ["Nice person", "Good behaviour", "Hard working"],
        },
        {
          id: 2,
          name: "sam",
          email: "sam@gmail.com",
          feedbacks: [
            "I would like to give 9 out of 10.",
            "Nice person",
            "Good behaviour",
            "Hard working",
            "Punctual",
          ],
        },
        {
          id: 1,
          name: "sania",
          email: "sania@gmail.com",
          feedbacks: ["Always minds her work.", "Nice person", "intorvert"],
        },
      ])
    );
  }
});
</script>

<template>
  <div class="homeCont">
    <h1 class="heading">
      Turn Feedback into Fuel: Drive Improvement with
      <span>StrengthFeedback</span>
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
  background-color: #fffcf5;
}

.heading {
  color: #1e1e1e;
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
  color: #1e1e1e;
  font-size: 18px;
  margin-bottom: 24px;
}
.enrollBtn {
  height: 48px;
  font-size: 16px;
  padding: 0 16px;
  background: #1e1e1e;
  color: white;
  border-radius: 4px;
}
</style>
