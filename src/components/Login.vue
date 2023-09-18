<template>
<main>
    <Nav />
</main>
<section class="form">
    <h1>Logga in</h1>
    <div class="">
        <form id="loginForm" @submit.prevent="submitLogin($data)">
            <label class="input-label">E-post<br>
                <input type="email" name="email" placeholder="E-post" class="input-field" required value="a@b">
            </label>

            <label class="input-label">Lösenord<br>
                <input type="password" name="password" placeholder="Lösenord" class="input-field" required value="asd">
            </label>
            <input type="submit" value="Logga in">
        </form>
    </div>
</section>
</template>

<script>
import Nav from "./Nav.vue"
import axios from "axios"

export default {
    name: 'Login',
    props: { },
    components: {
        Nav
    },
    data() {
        return {
            name: "Name"
        }
    },
    methods: {
        submitLogin: function () {
            // console.log("email", event.target.email.value)
            // console.log("password", event.target.password.value)
            axios
              .post('http://localhost:1337/login',
              { email: event.target.email.value,
                password: event.target.password.value
              },
              { headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Headers': 'x-access-token'
                  }
              }).then(response => {
                console.log('posting')
                // console.log(response)
                let token = response.data.token;
                let that = this;
                if (response.data.type === "success") {
                    this.setGlobalToken(token)
                    // console.log("resp", response);
                    // return "ok";
                }
                // console.log(response.data.data.text)
                this.$router.push(response.data.data.dirTo);
              });
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.root {
    margin: 2rem auto;
    width: 70vw;
}

.input-label {
    display: block;
    margin-bottom: 2rem;
}

.input-field, .input-birthday {
    width: 100%;
    padding: 0.4rem 1rem;
    font-size: 1.25rem;
}

.input-field:focus:valid {
    background-color: lightgreen;
}

.input-field:focus:invalid {
    background-color: #fcc;
    outline: 3px solid red;
}

.input-field:focus {
    /* border: 3px solid green; */
    outline: 3px solid blue;
}

.input-birthday {
    /* background-color: green; */
    width: 40%;
}

label {
    font-size: 18px;
}

@media (min-width: 768px) {
    .input-field {
        /* vw = viewport width */
        width: 30vw;
    }
}
</style>
