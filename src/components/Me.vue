<template>
<main>
    <Nav />
    <h1>Om mig</h1>
    <p>{{ text }}</p>
</main>
</template>

<script>
import Nav from "./Nav.vue"

export default {
    name: 'Me',
    props: { },
    components: {
        Nav,
    },
    data() {
        return {
            text: "Det här är om mig."
        }
    }
}
</script>
