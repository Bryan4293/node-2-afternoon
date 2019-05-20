const express = require("express");
const app = express();
const messages_controller = require("./controllers/messages_controller")


app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));



app.get("/api/messages", messages_controller.getMessage)
app.post("/api/messages", messages_controller.addMessage)
app.put("/api/messages/:id", messages_controller.updateMessage)
app.delete("/api/messages/:id", messages_controller.deleteMessage)

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});