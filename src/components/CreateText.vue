<script setup>
import { ref } from 'vue'

const report = ref("")

</script>

<template>
<main>
    <Nav />
</main>
<section class="form">
    <h1>Skapa text</h1>
    <div class="">
        <form v-if="token" id="createTextForm" @submit.prevent="submitCreateText($data)">
            <label class="input-label">Titel<br>
                <input type="text" name="title" class="input-field" required value="Kmom">
            </label>
            <label class="input-label">Text<br>
                <textarea rows="5" v-model="report" name="report" type="text" placeholder="Skriv här..." class="input-field" required></textarea>
            </label>

            <!-- {{report}}<br> -->
            <p>{{info}}</p> <br>

            <input type="submit" value="Create">
        </form>
        <p v-if="!token">Vänligen logga in för att ta del av innehållet.</p>
    </div>
</section>
</template>

<script>
import Nav from './Nav.vue'
import axios from "axios"

export default {
    name: 'CreateText',
    props: { },
    components: {
        Nav,
    },
    data() {
        return {
            token: this.token,
            info: ""
        }
    },
    methods: {
        submitCreateText: function () {
            console.log("report", event.target.report.value)
            var payload = {
                title: event.target.title.value,
                text: event.target.report.value
            }
            axios
              .post('http://localhost:1337/reports', payload, {
                  headers: {
                  'x-access-token': this.token
                }
              }).then(response => {
                console.log('posting')
                console.log(response)
                // console.log(response.data.data.report)
                this.info = response.data.data.msg
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

.input-field {
    width: 100%;
    padding: 0.4rem 1rem;
    font-size: 1.25rem;
}

.input-field:focus {
    /* border: 3px solid green; */
    outline: 3px solid blue;
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
