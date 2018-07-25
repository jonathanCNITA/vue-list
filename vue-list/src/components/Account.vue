<template>
    <div>
        <h1>Create an account</h1>
        <form action="" method="post">
            Name : <input v-model="userAccount.name" name="username" type="text">
            Email : <input v-model="userAccount.email" name="email" type="mail" required>
            Pass : <input v-model="userAccount.password" name="pwd" type="text"  min="6" required>
            <router-link :to="'/'"><button @click="createUser()">CREATE</button></router-link>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Account',
    data() {
        return {
            userAccount: {
                access_token: 'masterKey',
                email: 'jonathan.courat@le-campus-numerique.fr',
                password:'123456',
                name:'jojo',
                picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/aio___/128.jpg',
                role: 'user'
            }
        }
    },
    methods: {
        createUser() {
            axios.post('https://daily-standup-campus.herokuapp.com/api/users', this.userAccount,
            {
                headers: {
                    Authorization:'Basic ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg'
                }
            })
            .then(res => console.log(res))
            .catch(err => console.log())
            .then(console.log('create done!'))
        }
    },
    computed: {

    }
}
</script>
