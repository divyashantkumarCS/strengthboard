import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('user', () => {
    const router = useRouter();

    const users = ref(JSON.parse(localStorage.getItem('users')) || []);


    function addUser(user) {
        users.value.unshift({ id: users.value.length + 1, ...user, feedbacks: [] });

        localStorage.setItem('users', JSON.stringify(users.value));
        router.push('/strengthboard');
    }

    function addFeedback(id, feedback) {
        const user = users.value?.find((user) => {
            if (user?.id == id) {
                user?.feedbacks?.unshift(feedback);
            }
        });

        localStorage.setItem('users', JSON.stringify(users.value));
        router.push({path: '/feedback', query: {id: id}})
    }


    return {
        users,
        addUser,
        addFeedback
    }

})