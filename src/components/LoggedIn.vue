<template>
<main>
    <Nav />
</main>
<section>
    <!-- <Nav2 /> -->
    <h1>Inloggad</h1>
    <div class="outer-div">
        <p>{{ info.text }}</p>
    </div>
</section>
</template>

<script>
import Nav from "./Nav.vue"
import axios from "axios"

export default {
    name: 'Logged-in',
    props: { },
    components: {
        Nav
    },
    data() {
        return {
            info: ""
        }
    },
    mounted() {
        let that = this;
        fetch('http://localhost:1337/logged-in', {
            headers: {
              'x-access-token': that.token
            },
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            // eslint-disable-next-line
            // console.log(result);
            that.info = result.data;
        });
    }
}
</script>
