<template>
<main>
    <Nav />
</main>
<section>
    <h1>Chatt</h1>
    <p>
        <label>Connect: </label><br>
        <form @submit.prevent="submitToken">
          <input type="text" placeholder="User name" v-model="user" />
          <button type="submit">Connect</button>
        </form>
        <button @click="submitDisconnect" type="submit">Disconnect</button>
    </p>
    <h2>Meddelanden:</h2>
    <div id="all-messages" class="all-messages">
        <p v-for="user in messages" :key="user.id">
          <i class="time">{{user.time}}</i> <b>{{user.name}}</b>: {{user.message}}
        </p>
    </div>
    <p><strong>Skriv nytt meddelande:</strong></p>
    <form class="input-div" @submit.prevent="submitMessage">
      <input type="text" placeholder="Type in text"
      v-model="inputMessageText" />
      <button type="submit">Submit</button>
    </form>

</section>
</template>

<script>
import Nav from './Nav.vue';
import SocketioService from '../services/socketio.service.js';

export default {
  name: 'Chat',
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
  methods: {
      submitToken() {
          SocketioService.setupSocketConnection(this.user);

          const CHAT_ROOM = "myRandomChatRoomId";
          const message = "connected to chat";
          SocketioService.sendMessage({message, roomName: CHAT_ROOM}, cb => {
            // callback is acknowledgement from server
            console.log("cb", cb);
            this.messages.push({
                message
              });
          });

          SocketioService.subscribeToMessages((err, data) => {
              this.messages.push(data);
          });
      },
      submitMessage() {
          const CHAT_ROOM = "myRandomChatRoomId";
          const message = this.inputMessageText;
          SocketioService.sendMessage({message, roomName: CHAT_ROOM}, cb => {
            // callback is acknowledgement from server
            console.log("cb", cb);
            this.messages.push({
                message
              });
          });
          // clear the input after the message is sent
          this.inputMessageText = "";
      },
      submitDisconnect() {
          SocketioService.disconnect();
          this.user = "";
      }
  },
  beforeUnmount() {
    SocketioService.disconnect();
  }
}
</script>

<style>
    #all-messages {
        width: 20vw;
        height: 15vw;
        border: 2px solid #154a79;
        overflow-y: scroll;
    }

    #all-messages p {
        margin: 0.5em;
    }

    .all-messages p:nth-child(2n) {
        background-color: #94c0e8;
    }

    .time {
        font-size: 16px;
        color: #87a2bb;
        background-color: black;
        padding: 2px;
    }
</style>
