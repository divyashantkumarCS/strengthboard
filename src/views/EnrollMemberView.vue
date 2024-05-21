<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const name = ref('');
const email = ref('');


async function enrollmember() {
console.log(name.value, email.value);
    //push data to db
    const res = await axios.post('https://test-project.remin.in/create-user', {
        name : name.value,
        email: email.value,
    })
    //onsuccess
    // router.push({ path: '/feedback', query: { id: 1 } });
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
                <h3>Enroll here and get feedbacks from others.</h3>

                <div class="inputCont">
                    <input type="text" v-model="name" placeholder="Full name" name="name">
                    <input type="text" v-model="email" placeholder="email" name="email">

                    <button class="enrollBtn" @click="enrollmember">
                        Enroll
                    </button>

                    <router-link to="/strengthboard">
                        <button class="boardBtn">Strength Board</button>
                    </router-link>
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
    display: flex;
    flex-direction: column;
}

.inputCont input {
    padding: 12px;
    border: solid 1px #1E1E1E;
    border-radius: 4px;
    margin: 8px 0;
}

.enrollBtn {
    background-color: #1E1E1E;
    color: #FFFCF5;
    font-size: 16px;
    margin-top: 28px;
    padding: 12px 24px;
    border-radius: 4px;
}

.boardBtn {
    width: 100%;
    background-color: #FFFCF5;
    color: #1E1E1E;
    font-size: 16px;
    margin-top: 10px;
    padding: 12px 24px;
    border-radius: 4px;
}
</style>