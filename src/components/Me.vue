<template>
<main>
    <Nav />
    <h1>Om mig</h1>
    <div class="outer-div">
        <p>{{ text }}</p>
        <p>{{ text2 }}</p>
    </div>
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
            text: "Alice heter jag och kommer från en liten by i norra Skåne.",
            text2: "På fritiden sysslar jag en del med musik och tycker även om att fotografera."

        }
    }
}
</script>
