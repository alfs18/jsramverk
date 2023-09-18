<template>
<nav class="navbar">
    <!-- <h3>Skj</h3> -->
    <ul>
        <li><router-link to="/">Me</router-link></li>
        <li v-for="(value, key) in reports" :key="value.id"><router-link :to={path:pathLink+value.id}>{{value.title}}</router-link></li>
        <li><router-link to="/reports/create">Create report</router-link></li>
        <li><router-link to="/register">Create account</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
    </ul>
</nav>
</template>

<script>
export default {
    name: 'Nav',
    props: { },
    data() {
        return {
            reports: "Name!",
            pathLink: "/reports/week/"
        }
    },
    mounted() {
        this.getMe();
    },
    methods: {
        getMe() {
            let that = this;
            fetch("http://localhost:1337/reports/weeks")
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                // eslint-disable-next-line
                // console.log("result", result);
                // that.reports = result.data[1].title;
                that.reports = result.data;
            });
        }
    }
}
</script>
