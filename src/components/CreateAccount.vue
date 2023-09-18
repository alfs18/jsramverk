<script setup>
import { ref } from 'vue'

const name = ref("")
const year = ref(1973)
const month = ref("Januari")
var day = ref(1)
// console.log(year.value + "-" + month.value + "-" + day.value)

const days = {
    "Januari": 31,
    "Februari": 29,
    "Mars": 31,
    "April": 30,
    "Maj": 31,
    "Juni": 30,
    "Juli": 31,
    "Augusti": 31,
    "September": 30,
    "Oktober": 31,
    "November": 30,
    "December": 31
}
// console.log(days["Januari"])
const gdpr = ref(false)
const months = [
    {
        id: 1,
        month: "Januari",
        days: 31
    },
    {
        id: 2,
        month: "Februari",
        days: 29
    },
    {
        id: 3,
        month: "Mars",
        days: 31
    },
    {
        id: 4,
        month: "April",
        days: 30
    },
    {
        id: 5,
        month: "Maj",
        days: 31
    },
    {
        id: 6,
        month: "Juni",
        days: 30
    },
    {
        id: 7,
        month: "Juli",
        days: 31
    },
    {
        id: 8,
        month: "Augusti",
        days: 31
    },
    {
        id: 9,
        month: "September",
        days: 30
    },
    {
        id: 10,
        month: "Oktober",
        days: 31
    },
    {
        id: 11,
        month: "November",
        days: 31
    },
    {
        id: 12,
        month: "December",
        days: 31
    },
]
// console.log(month)
// console.log(name)

</script>

<template>
<main>
    <Nav />
</main>
<section class="form">
    <h1>Skapa konto</h1>
    <div class="">
        <form id="registerForm" @submit.prevent="submitRegister($data)">
            <label class="input-label">* Namn<br>
                <input v-model="name" name="name" type="text" placeholder="Namn" class="input-field" required>
            </label>

            <label class="input-label birthday">Födelsedag:<br>
            <label class="input-label"> År<br>
                <input v-model.number="year" type="number" name="year" class="input-birthday">

            <br><label> Månad<br>
            <select v-model="month" name="month" class="input-birthday">
                <option disabled value="">Please select one</option>
                <option v-for="n in months" v-bind:key="n.id">{{ n.month }}</option>
            </select>
            </label>
            {{month}}

            <br><label>Dag<br>
            <select v-model="day" name="day" class="input-birthday">
                <option disabled value="">Please select one</option>
                <option v-for="n in days[month]" v-bind:key="n.id">{{ n }}</option>
            </select>
            </label>
            <!-- {{day}} -->
            </label>
            </label>

            <label class="input-label">* E-post<br>
                <input type="email" name="email" placeholder="E-post" class="input-field" required>
            </label>

            <label class="input-label">* Lösenord<br>
                <input type="password" name="password" placeholder="Lösenord" class="input-field" required>
            </label>

            <label class="input-label"><br>
                <input v-model="gdpr" type="checkbox" name="gdpr" required>&nbsp; Jag godkänner.
            </label>
            <!-- {{gdpr}}<br /> -->

            <input type="submit" value="Register">
        </form>
    </div>
</section>
</template>

<script>
import Nav from './Nav.vue'
import axios from "axios"

export default {
    name: 'CreateAccount',
    props: { },
    components: {
        Nav,
    },
    methods: {
        submitRegister: function () {
            console.log("email", event.target.email.value)
            console.log(event.target.year.value)
            // console.log("password", event.target.password.value)
            axios
              .post('http://localhost:1337/register',
              { name: event.target.name.value,
                year: event.target.year.value,
                month: event.target.month.value,
                day: event.target.day.value,
                email: event.target.email.value,
                password: event.target.password.value
              }).then(response => {
                console.log('posting')
                console.log(response)
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
