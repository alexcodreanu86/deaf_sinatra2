$(document).ready(function() {
  $('#input').on('submit',function(e){
    e.preventDefault();
    console.log(this);
    var input = $( this ).serialize();
    $.post("/grandma", input, function(tweeter){
      // $("#grandmas").html('<h1>' + tweeter + '</h1>');
      // console.log(tweeter)
      var grandma = "grandma=";
      $.get('/', grandma +  tweeter, function(data){
        $('.container').html(data);
      });
    });
    console.log("I just froze your site");
  });
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
