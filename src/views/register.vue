<template>
    <div id="register">
        <h1>register</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <input type="email" name="email" v-model="input.email" placeholder="Email" />
        <button type="button" v-on:click="register()">Register</button>
    </div>
</template>

<script>
import { Script } from 'vm';
    export default {
        name: 'register',
        data() {
            return {
                input: {
                    username: "",
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });                        
                    } else {
                        console.log("The username and / or password is incorrect"); 
                    }
                } else {
                    console.log("A username and password must be present")
                }
            },
            register() {
                this.$router.replace({ name: "registration" });
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
