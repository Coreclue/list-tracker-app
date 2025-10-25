// Wait until the DOM is fully loaded
$(document).ready(function () {
  // Initialize an empty array to hold list items
  var myList = [];
  // Retrieve stored list from local storage or initialize as empty array
  const storedList = JSON.parse(localStorage.getItem("myList")) || [];
  myList = storedList;
  // Cache jQuery selectors for list and input elements
  let list = $("#list");
  let input = $("#input");

  $.each(storedList, function (key, value) {
    let listItem = $(`<li class="list-item">${value} ${value}</li>`);
    const deleteButton = $('<button class="listButton-delete">X</button>');
    listItem.attr("draggable", "true");
    listItem.append(deleteButton);
    list.append(listItem);
  });

  //working on each function.

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