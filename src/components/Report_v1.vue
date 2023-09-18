<template>
<main>
    <Nav />
</main>
<section class="destination">
    <!-- <h1>Kursmoment {{$route.params.kmom}}!</h1> -->

    <h1>{{kmom.name}}</h1>
    <div class="kmom-details">
        <p>{{kmom.description}}</p>
        {{kmom.link}}
        <a href='https://github.com/alfs18/jsramverk'>Github</a>
    </div>
</section>
</template>

<script>
import Nav from './Nav.vue'
import sourceData from '../data.json'

export default {
    name: 'Report',
    props: { },
    components: {
        Nav,
    },
    computed: {
        kmomId() {
            return parseInt(this.$route.params.kmom)
        },
        kmom() {
            // console.log("hello", this.kmomId)
            return sourceData.kmoms.find(kmom => kmom.id === this.kmomId)
        }
    }
}
</script>

<style>
    h1 {
        color: blue;
    }
</style>
