$(document).ready(function (){
var myList = [];
let list = $('#list');
let input = $('#input')

// Function to add new item to list
function newItem() {
    let value = input.val();
    let listItem = $(`<li class="list-item">${value}</li>`);
    listItem.append('<button class="listButton-delete">X</button>');
    
    if(value.length < 2) {
        alert('Enter at least two characters');
    } else {
        list.append(listItem);
        input.val('');  
    }
}
// Add item to list when button is clicked
$('#button').click(function (){
    newItem();
});

//Add a line through item when clicked, delete upon double click
list.on('click', 'li', function() {
    $(this).toggleClass('strike');
});





// Prevents form submission using enter key
$('form[name="toDoList"]').submit(function(e) {
    e.preventDefault();
    newItem();
});


});