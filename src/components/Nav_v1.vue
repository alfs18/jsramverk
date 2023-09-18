<template>
<nav class="navbar">
    <!-- <h3>Skj</h3> -->
    <ul>
        <li><router-link to="/">Me</router-link></li>
        <li><router-link to="/reports/week/1">Kmom01</router-link></li>
        <li><router-link to="/reports/week/2">Kmom02</router-link></li>
        <li><router-link to="/reports/week/3">Kmom03</router-link></li>
        <li><router-link to="/reports/create">Create report</router-link></li>
        <li><router-link to="/register">Create account</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
    </ul>
</nav>
</template>

<script>
export default {
    name: 'Nav',
    props: { }
}
</script>
