<template>
<main>
    <Nav />
    <div id="root" class="root">
        <p>Registrera dig här för att bli registrerad.</p><br>
        <form>
            <label class="input-label">Namn:<br>
                <input type="text" name="name" class="input-field" required>
            </label>

            <label class="input-label">Födelsedag:<br>
            <label class="input-label"> År
            <select>
              <option disabled value="">Please select one</option>
              <option v-for="n in 120">{{ 2020 - n }}</option>
            </select>
            </label>
            <label> Månad
            <div class="months no-show">
                <div id="1" class="month" v-on:click="month($event)">
                    <input type="radio" name="month" id="one" value="01" required >
                    <label for="one">januari</label>
                </div>
                <div id="2" class="month" v-on:click="month($event)">
                    <input type="radio" name="month" id="two" value="02" required>
                    <label for="two">februari</label>
                </div>
                <div id="3" class="month" v-on:click="month($event)">
                <input type="radio" name="month" id="three" value="03" required>
                    <label for="three">mars</label>
                </div>
                <div id="4" class="month" v-on:click="month($event)">
                <input type="radio" name="month" id="four" value="04" required>
                    <label for="four">april</label>
                </div>
                <div id="5" class="month" v-on:click="month($event)">
                <input type="radio" name="month" id="five" value="05" required>
                    <label for="five">maj</label>
                </div>
                <div id="6" class="month" v-on:click="month($event)">
                <input type="radio" name="month" id="six" value="06" required>
                    <label for="six">juni</label>
                </div>
                <div id="7" class="month" v-on:click="month($event)">
                <input type="radio" name="month" id="seven" value="07" required>
                    <label for="seven">juli</label>
                </div>
                <div id="8" class="month" v-on:click="month($event)">
                <input type="radio" name="month" id="eight" value="08" required>
                    <label for="eight">augusti</label>
                </div>
                <div id="9" class="month" v-on:click="month($event)">
                <input type="radio" name="month" id="nine" value="09" required>
                    <label for="nine">september</label>
                </div>
                <div id="10" class="month" v-on:click="month($event)">
                <input type="radio" name="month" id="ten" value="10" required>
                    <label for="ten">oktober</label>
                </div>
                <div id="11" class="month" v-on:click="month($event)">
                <input type="radio" name="month" id="eleven" value="11" required>
                    <label for="eleven">november</label>
                </div>
                <div id="12" class="month">
                    <input type="radio" name="month" id="twelve" value="12" required>
                    <label for="twelve">december</label>
                </div>
            </div>
            </label>

            <br><label>Dag
            <select>
            <option disabled value="">Please select one</option>
            <option v-for="n in 31">{{ n }}</option>
            </select>
            </label>

            </label>
            <label class="input-label">Email:<br>
                <input type="email" name="email" class="input-field" required>
            </label>
            <label class="input-label">Lösenord:<br>
                <input type="password" name="password" class="input-field" required>
            </label>

            <input type="submit" name="Registrera">
        </form>
    </div>
</main>
</template>

<script src="https://unpkg.com/vue@2.4.3/dist/vue.js"></script>

<script>
import Nav from "./Nav.vue"

export default {
    name: 'Registration',
    props: { },
    components: {
        Nav
    },
    methods: {
        month: function (event) {
            // `event` is the native DOM event
            if (event) {
                console.log(event.target.id)
                console.log(event.target.className)
                var ett = event.target.id
                console.log("ett: " + ett)
            }
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

button,
input[type=submit] {
    width: 5em;
    padding: 0.5em;
    font-size: 14pt;
}

.months {
    width: 100%;
    height: 38em;
}

.month {
    width: 7em;
    height: 3em;
    background-color: white;
    text-align: center;
    margin: 2px;
    padding: 1em;
    float: left;
}

.month:hover {
    background-color: #008383;
    color: white;
}

.root {
    margin: 2rem auto;
    width: 70vw;
}

select {
    height: 2.5em;
    font-size: 14pt;
}

.input-label {
    display: block;
    margin-bottom: 2rem;
    font-size: 1.25rem;
    text-align: left;
}

.input-field {
    width: 100%;
    padding: 0.4rem 1rem;
    font-size: 1.25rem;
}

.input-field:focus {
    outline: 2px solid blue;
}

.input-field:valid {
    background-color: #92bd92;
}

.input-field:invalid {
    background-color: #fd060633;
}

@media (min-width: 412px) {
    .months {
        height: 19em;
    }
}
@media (min-width: 617px) {
    .months {
        height: 13em;
    }
}
@media (min-width: 768px) {
    .root {
        width: 40vw;
    }
    .input-field {
        width: 40vw;
    }
    .months {
        height: 12em;
    }
}

@media (min-width: 1000px) {
    .root {
        width: 30vw;
    }
    .input-field {
        width: 30vw;
    }
    .months {
        width: 100%;
        height: 12em;
    }
}
</style>
