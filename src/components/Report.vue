<template>
<main>
    <Nav />
    <h1>Redovisning</h1>
    <p>{{ text }}</p>
</main>
</template>

<script>
import Nav from "./Nav.vue"

export default {
    name: 'Report',
    props: { },
    components: {
        Nav
    },
    data() {
        return {
            text: "https://github.com/alfs18"
        }
    }
}

</script>
