let messages= []
let id = 0;

const addMessage = (req, res) => {
    const {text, time} = req.body;
    messages.push({id, text, time});
    id++;
    res.json(messages)
}

const getMessage = (req,res) => {
    res.json(messages)
};

const updateMessage = (req,res)=>{
    const {text} = req.body;
    const updateId= req.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateId);
    let message = messages[messageIndex]

    messages[messageIndex] = {
        id: message.id,
        text: text || message.text,
        time: message.time
    };
    res.json(messages)
}

const deleteMessage = (req,res)=>{
    const deleteId =req.params.id;
    const messageIndex = messages.findIndex(message => message.id == deleteId)
    messages.splice(messageIndex, 1);
    res.json(messages);
}

module.exports ={
    getMessage, //read  .get
    addMessage, // create  .post
    updateMessage, //update .put
    deleteMessage  // delete .delete 
}