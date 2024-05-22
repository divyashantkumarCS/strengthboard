<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
// @ts-ignore
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const route = useRoute();
const router = useRouter();

const strengths = ref({
  name: null,
  id: null,
  feedbacks: null,
});

async function addstrength() {
  router.push({ path: "/addstrength", query: { id: strengths.value.id, user: strengths.value.name } });
}

onMounted(() => {
  console.log("userStore.users : ", userStore.users);
  strengths.value = userStore.users?.find(
    (user: any) => user.id == route.query.id
  );
});
</script>
    
<template>
  <div class="mainContainer">
    <div class="back">
      <button @click="router.back()">Back</button>
    </div>
    <div class="container">
      <h2>{{ strengths.name }}</h2>
      <h3>Feedbacks</h3>

      <div class="feedbacksCont">
        <div>
          <div
            class="feedback"
            v-for="feedback in strengths.feedbacks"
            :key="feedback"
          >
            <div>{{ feedback }}</div>
          </div>
          <div class="feedback addFeedback">
            <button class="btn" @click="addstrength">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.mainContainer {
  margin: 0;
  padding: 0 24px;
  padding-top: 16px;
  padding-bottom: 30px;
  background-color: #fffcf5;
}

.container {
  margin-top: 10px;
  color: #1e1e1e;
  width: 100%;
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
}
.back {
  display: flex;
  justify-content: start;
}

.back button {
  margin-bottom: 10px;
  font-size: 16px;
  padding: 10px 20px;
  border: solid 1px #1e1e1e;
  background-color: transparent;
  border-radius: 4px;
}

.container > h2 {
  border: solid 1px #1e1e1e;
  padding: 24px;
}
.container > h3 {
  font-size: 18px;
  font-weight: 400;
}

.feedbacksCont {
  display: flex;
  justify-content: center;
}
.feedbacksCont > div {
  height: auto;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.feedback {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  width: 40%;
  padding: 0 24px;
  margin: 16px;
  overflow: scroll;
  color: #fffcf5;
  background-color: #1e1e1e;
}

.feedback > div {
  padding: 28px 0;
}

.feedback::-webkit-scrollbar {
  display: none;
}

.addFeedback {
  justify-content: center;
}

.btn {
  background-color: transparent;
  color: #fffcf5;
  font-size: 30px;
  width: 50px;
  height: 50px;
}
</style>