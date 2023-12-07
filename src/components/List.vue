<template>
<main>
    <Nav />
</main>
<section>
    <h1>Sparade chattmeddelanden</h1>

    <div id="all-messages" class="all-messages">
        <div class="all-msg" v-for="msg in messages">
            <p>Id: {{msg._id}}</p>
            <p v-for="user in msg.doc">
              <i class="time">{{user.time}}</i> <b>{{user.name}}</b>: {{user.message}}
            </p>
        </div>
    </div>

</section>
</template>

<script>
import Nav from './Nav.vue';

export default {
  name: 'List',
  components: {
      Nav
  },
  data() {
      return {
          inputMessageText: '',
          user: '',
          messages: []
      };
  },
  mounted() {
      let that = this;
      fetch("http://localhost:1337/list")
      .then(function(response) {
          return response.json();
      })
      .then(function(result) {
          console.log("res", result);
          that.messages = result;
          console.log("mess", that.messages[1].doc[0].message);
      });
  }
}
</script>

<style>
    #all-messages {
        width: 20vw;
        height: 15vw;
    }

    .all-messages .all-msg:nth-child(2n) {
        background-color: #94c0e8;
    }

    .all-msg {
        padding: 0.5em;
        border: 2px solid #154a79;
        margin: 0.5em;
    }

    .all-msg p {
        margin: 0.5em;
    }

    .time {
        font-size: 16px;
        color: #87a2bb;
        background-color: black;
        padding: 2px;
    }
</style>
