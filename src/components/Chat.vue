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

    <br><br><button @click="submitSave" type="submit">Save chat</button>
    {{ this.saved }}
    <br><a href="/list">Se sparade konversationer</a>

</section>
</template>

<script>
import Nav from './Nav.vue';
import axios from "axios"
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
          messages: [],
          saved: ''
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
          this.saved = "";
      },
      submitDisconnect() {
          SocketioService.disconnect();
          this.user = "";
      },
      submitSave() {
          //save chat messages
          axios
            .post('http://localhost:1337/chat/save',
            { msg: this.messages },
            { headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'x-access-token'
                }
            }).then(response => {
              console.log('posting')
              console.log(response)
              this.saved = "Chat saved!"
            });
      },
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
