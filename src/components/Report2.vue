<template>
<main>
    <Nav />
    <h1>Redovisning</h1>
    <div class="outer-div">
        <p>
            Inspirationen till min date-picker fick jag från att titta på några olika alternativ på internet, bland annat från den här sidan:
            https://www.smashingmagazine.com/2017/07/designing-perfect-date-time-picker/
        </p>
        <p>
            Blev inte helt nöjd med den dock, då jag egentligen velat kunna klicka fram månaderna, så att de inte syntes från början, samt att år, månad och dag skulle vara i samma ruta, så att när man valt år, skulle den sen automatiskt gå vidare till månad och sen till dagar, men det hade jag tyvärr inte någon kunskap till.
        </p>
        <p>GitHub-repot: https://github.com/alfs18/jsramverk</p>
    </div>

</main>
</template>

<script>
import Nav from "./Nav.vue"

export default {
    name: 'Report2',
    props: { },
    components: {
        Nav
    }
}

</script>

<style scoped>
pre {
    font-size: 16pt;
    margin: 0;
}
</style>
