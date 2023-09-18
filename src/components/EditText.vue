<template>
<main>
    <Nav />
</main>
<section class="form">
    <h1>Redigera text</h1>
    <li>Visa alla texter som finns</li>
    <li>Lägga till en knapp för att välja en specifik text</li>
    <li>Skapa formulär för att ändra texten</li><br>
    <div class="">
        <form v-if="token" id="createTextForm" @submit.prevent="submitEditText($data)">
            <label class="input-label">Titel<br>
                <input type="text" name="title" class="input-field" required :value=name>
            </label>
            <label class="input-label">Text<br>
                <textarea rows="5" name="report" type="text" :value=reportText class="input-field" required></textarea>
            </label>

            <p>{{info}}</p> <br>
            <input type="submit" value="Edit">
        </form>
        <p v-if="!token">Vänligen logga in för att ta del av innehållet.</p>
    </div>
</section>
</template>

<script>
import Nav from './Nav.vue'
import axios from "axios"

export default {
    name: 'EditText',
    props: { },
    components: {
        Nav,
    },
    data() {
        return {
            token: this.token,
            info: "",
            name: "",
            reportText: ""
        }
    },
    mounted() {
        this.getMe();
    },
    methods: {
        getMe() {
            let that = this;
            let kmom = parseInt(this.$route.params.kmom);
            // console.log(this.$route.params.kmom)
            fetch("http://localhost:1337/reports/week/" + kmom)
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                // eslint-disable-next-line
                // console.log(result);
                // that.name = result.name;
                // that.text = result.msg;

                that.name = result.data.title;
                that.reportText = result.data.report;
            });
        },
        submitEditText: function () {
            let kmom = parseInt(this.$route.params.kmom);
            // console.log("report", event.target.report.value)
            var payload = {
                title: event.target.title.value,
                text: event.target.report.value
            }
            axios
              .post('http://localhost:1337/reports/edit/' + kmom, payload, {
                  headers: {
                  'x-access-token': this.token
                }
              }).then(response => {
                // console.log('posting')
                // console.log(response)
                // console.log(response.data.data.report)
                this.info = response.data.data.msg
                this.$router.push("/reports/week/" + response.data.data.id);
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
