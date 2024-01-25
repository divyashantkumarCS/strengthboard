<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const strengths = ref({
    name: 'person 1',
    id: 12,
    feedbacks: [
        {
            id: 1,
            feedback: 'feedback 1'
        },
        {
            id: 2,
            feedback: 'feedback 2'
        },
        {
            id: 3,
            feedback: 'feedback 3'
        }
    ]

}); 

async function addstrength() {
    router.push({path: '/addstrength', query: { id: strengths.value.id }});
}
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
                    <div class="feedback" v-for="feedback in strengths.feedbacks" :key="feedback.id">
                        {{ feedback.feedback }}
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
    background-color: #FFFCF5;
}

.container {
    margin-top: 10px;
    color: #1E1E1E;
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
    border: solid 1px #1E1E1E;
    background-color: transparent;
    border-radius: 4px;
}

.container > h2 {
    border: solid 1px #1E1E1E;
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
    align-items: center;
    height: 80px;
    width: 40%;
    padding: 28px 24px;
    margin: 16px;
    color: #FFFCF5;
    background-color: #1E1E1E;
}

.addFeedback {
    justify-content: center;
}

.btn {
    background-color: transparent;
    color: #FFFCF5;
    font-size: 30px;
    width: 100%;
    height: 100%;
}

</style>