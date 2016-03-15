$(document).ready(function docReady(){
  $("#todoForm").on('submit', function toDoFormSubmit(e){
    e.preventDefault();
    var todoItem = $("#todoItem").val();
    if (todoItem !== "") {
      $("#todoItems").append("<li>" + todoItem + "</li>");
      $("#todoItem").val("");
      $("#todoItem").focus();
    }
  });

  $("#todoItems").on('click', 'li', function(){
    var $this = $(this);
    $this.addClass("done");
    $this.append("<button class='delete'>delete</button>")
  });

  $("#todoItems").on('click', 'button.delete', function(){
    var $this = $(this).parents('li');
    $this.remove();
  });
});