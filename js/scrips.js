function newItem() {
  // Adding a new item to the list of items
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.text(inputValue);

  if (inputValue === "") {
    alert("Oops! You have to write something first!");
  } else {
    $("#list").append(li);
  }

  // Crossing out an item from the list of items
  li.on("dblclick", function () {
    li.toggleClass("strike");
  });

  // Adding the delete button "X"
  let crossOutButton = $("<button></button>");
  crossOutButton.text("X");
  crossOutButton.addClass("crossOutButton");
  li.append(crossOutButton);

  // Adding delete functionality to the delete button
  crossOutButton.on("click", function () {
    li.remove();
  });

  // Reordering the items
  $("#list").sortable();
}

// If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.

/*
    // jQuery Code
    //1. Adding a new item to the list:
    
      let li = $('<li></li>');
      let inputValue = $('#input').val();
      li.append(inputValue);
    
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }
    //2. Crossing an item out:
      function crossOut() {
            li.toggleClass("strike");
        }
    
        li.on("dblclick", function crossOut() {
            li.toggleClass("strike");
        });
    //3. Adding a delete button
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
    
    //   crossOutButton.on("click", deleteListItem);
    //   function deleteListItem(){
    // 		li.addClass("delete")
    // 	}
       $('#list').sortable();
    */
