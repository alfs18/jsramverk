<template>
<main>
    <Nav />
</main>
<section class="destination">
    <h1>{{name}}</h1>
    <div class="kmom-details">
        <pre>{{text}}</pre><br>
        <a class="gh" href='https://github.com/alfs18/jsramverk'>Github</a>
    </div>

    <div class="edit-option">
        <form v-if="token" id="createTextForm" @submit.prevent="submitEdit($data)">
            <input type="submit" value="Edit">
        </form>
    </div>
</section>
</template>

<script>
import Nav from './Nav.vue'
import axios from "axios"

export default {
    name: 'Report',
    props: { },
    components: {
        Nav,
    },
    data() {
        return {
            name: "Name!",
            text: "Welcome!"
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

                that.name = "Kursmoment" + " " + result.data.id;
                that.text = result.data.report;
            });
        },
        submitEdit: function () {
            let kmom = parseInt(this.$route.params.kmom);
            var payload = {
                id: kmom
            }
            axios
              .post('http://localhost:1337/reports/edit', payload, {
                  headers: {
                  'x-access-token': this.token
                }
              }).then(response => {
                console.log('posting')
                // console.log(response)
                this.$router.push("/reports/edit/" + response.data.data.id);
              });
        }
    }
}
</script>

<style>
    section {
        width: 20vw;
    }

    a.gh {
        padding-top: 0.5em;
    }

    .edit-option {
        padding-top: 2em;
    }
</style>
