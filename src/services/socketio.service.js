import { io } from 'socket.io-client';


class SocketioService {
  socket;
  constructor() {}

  // setupSocketConnection(token, user) {
  setupSocketConnection(user) {
      this.socket = io(import.meta.env.VITE_API_URL, {
        auth: {
          // token,
          user
        },
      });
      console.log(`Connecting socket...`);
  }

  // Handle message receive event
  subscribeToMessages(cb) {
      if (!this.socket) return(true);
      this.socket.on('message', msg => {
        console.log('Room event received!');
        return cb(null, msg);
      });
  }

    sendMessage({message, roomName}, cb) {
      if (this.socket) this.socket.emit('message', { message, roomName }, cb);
    }

  disconnect() {
    if(this.socket) {
      this.socket.on('message', msg => {
        this.socket.disconnect();
        console.log("disconnect");
      });

      this.socket.emit('message', { message: "disconnected", roomName: "myRandomChatRoomId" });
    }
  }
}

export default new SocketioService();
