

$(document).ready(function(){
    $.getJSON("/api")
    .then(addMessages)

    $('#messageInput').keypress(function(event){
        if(event.which == 13){
            // console.log("you hit enter");
            createMessage();
        }
    });

});

function sayHello(){
    alert("hello");
}


function addMessages(messages){
    //add todos to the page
    messages.forEach(function(message){
        // console.log(todo.name);
        addMessage(message);
    })
}

function addMessage(message){
    var newMessage = $('<li>'+message.name + '</li>');
    // newTodo.data('id', todo._id);
    // newTodo.data('completed', todo.completed);
        // if(todo.completed){
        //     newTodo.addClass("done");
        // }
        $('.list').append(newMessage);

        console.log(newMessage);
}


function createMessage(){
    //send request to create new Todo
    var usrInput = $('#messageInput').val();
    // console.log(usrInput);
    $.post('api/', {name: usrInput})
    .then(function(newMessage){
        var usrInput = $('#messageInput').val('');
        addMessage(newMessage);
    }).catch(function(err){
        console.log(err);
    });

}

// function addMessage(message){
//     var newTodo = $('<li >'+message.message + '</li>');
//     // newTodo.data('id', todo._id);
//     $('.list').append(newTodo);
// }