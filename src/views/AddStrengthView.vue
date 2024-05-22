<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
// @ts-ignore
import { useUserStore } from "@/stores/user";

const route = useRoute();
const userStore = useUserStore();

const router = useRouter();
const message = ref('')

async function enrollmember() {
    if(message.value.length <= 0) {
        alert(`Please write feedback for ${route.query.user}.`)
        return;
    }
    //push data to db
    userStore?.addFeedback(route.query.id, message.value);
}
</script>
    
<template>
    <div class="mainContainer">
        <div class="back">
            <button @click="router.back()">Back</button>
        </div>
        <div class="container">
            <div class="formCont">
                <h2>Strength Feedback</h2>
                <h3>Add strength feedback for {{ 'xyz' }}</h3>

                <div class="inputCont">
                    <textarea v-model="message" placeholder="Enter Strength Feedback" name="feedback" rows="8"></textarea>

                    <button class="enrollBtn" @click="enrollmember">
                        Add Feedback
                    </button>
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
    background-color: #FFFCF5;
}

.container {
    margin-top: 10px;
    text-align: center;
    color: #1E1E1E;
    width: 100%;
    height: calc(100vh - 56px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.back {
    display: flex;
    justify-content: start;
}

.back button {
    margin-bottom: 10px;
    font-size: 16px;
    padding: 10px 20px;
    border: solid 1px #1E1E1E;
    background-color: transparent;
    border-radius: 4px;
}


.formCont {
    width: 400px;
    height: auto;
    padding: 48px;
    border: solid 1px #1E1E1E;
}

.formCont>h2 {
    line-height: 1;
    font-size: 38px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 24px;
}

.formCont>h3 {
    line-height: 1;
    font-size: 18px;
    font-weight: 300;
    margin: 0;
    margin-bottom: 26px;
}

.inputCont {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.inputCont textarea {
    width: 100%;
}

.enrollBtn {
    background-color: #1E1E1E;
    color: #FFFCF5;
    font-size: 16px;
    margin-top: 28px;
    padding: 12px 24px;
    border-radius: 4px;
}
</style>