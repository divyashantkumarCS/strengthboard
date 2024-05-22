<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
// @ts-ignore
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const router = useRouter();

async function getFeedbacks(id:any) {
    router.push({path: '/feedback', query: {id: id}})
}

onMounted(async () => {
    
})
</script>
    
<template>
    <div class="mainContainer">
        <div class="back">
            <button @click="router.back()">Back</button>
        </div>
        <div class="container">
            <div class="heading">Strength Feedbacks</div>
            <div class="tablecolumn tableheader">
                <div>Name</div>
                <div>Feedbacks</div>
                <div>View</div>
            </div>
            <div class="tablecolumn tablecontent" v-for="user in userStore.users" :key="user.id">
                <div class="name">{{ user.name }}</div>
                <div class="feedbacks">{{ user.feedbacks?.length }}</div>

                <button class="view" @click="() => getFeedbacks(user.id)">View</button>
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
    margin-top: 46px;
    color: #1E1E1E;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-top: solid 1px #1E1E1E;
    border-right: solid 1px #1E1E1E;
    border-left: solid 1px #1E1E1E;

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

.heading {
    font-size: 20px;
    font-weight: 700;
    padding: 24px;
    border-bottom: solid 1px #1E1E1E;
}

.tableheader {
    padding: 16px 24px;
    border-bottom: solid 1px #1E1E1E;
    display: flex;
    background-color: rgb(219, 219, 219);
}
.tableheader div {
    font-weight: 600;
}

.tablecolumn div:nth-child(1){
    width: 60%;
}
.tablecolumn div:nth-child(2){
    width: 30%;
}
.tablecolumn div:nth-child(3){
    width: 10%;
}
 
.tablecontent {
    padding: 28px 24px;
    border-bottom: solid 1px #1E1E1E;
    display: flex;
}
</style>