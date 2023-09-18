<template>
<main>
    <Nav />
    <h1>Smask</h1>
    <p>{{ text }}</p>
</main>
</template>

<script>
import Nav from './Nav.vue'

export default {
    name: 'Me',
    props: { },
    components: {
        Nav,
    },
    data() {
        return {
            text: "Hello"
        }
    },
    mounted() {
        this.getMe();
    },
    methods: {
        getMe() {
            let that = this;
            fetch("https://me-vue.jsramverk.se")
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                // eslint-disable-next-line
                console.log(result);
                that.text = result.description;
            });
        }
    }
};
// console.log(Nav)
</script>

<style>
    h1 {
        color: blue;
    }
</style>
