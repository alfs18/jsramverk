<template>
<main>
    <Nav />
</main>
<section>
    <h1>Välkommen!</h1>
    <div>
        <p>{{ text }}</p>
    </div>
</section>
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
            text: "Welcome!"
        }
    },
    mounted() {
        this.getMe();
    },
    methods: {
        getMe() {
            let that = this;
            fetch("http://localhost:1337/")
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                // eslint-disable-next-line
                // console.log(result);
                that.text = result.data.msg;
            });
        }
    }
};
// console.log(Nav)
</script>
