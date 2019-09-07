<template>
<main>
    <Nav />
    <h1>Redovisning</h1>
    <p>{{ text }}</p>
    <p>{{ text2 }}</p>
    <pre># my-project

    ## Project setup
    ```
    npm install
    ```

    ### Compiles and hot-reloads for development
    ```
    npm run serve
    ```

    ### Compiles and minifies for production
    ```
    npm run build
    ```

    ### Run your tests
    ```
    npm run test
    ```

    ### Lints and fixes files
    ```
    npm run lint
    ```

    ### Customize configuration
    See [Configuration Reference](https://cli.vuejs.org/config/).
    </pre>

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
            text: "GitHub-repot: https://github.com/alfs18/jsramverk",
            text2: "Innehållet från README.md:"
        }
    }
}

</script>

<style scoped>
pre {
    font-size: 16pt;
}
</style>
