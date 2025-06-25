
export default function handleSocket(socket) {
  console.log("⚡ Client connected:", socket.id);
 

  socket.on("disconnect", () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
}
