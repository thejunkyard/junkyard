$(function() {
  var $stream = $("#stream");

  function refresh() {
    $stream.empty();
    $.ajax({
      method: "get",
      url: "api/posts"
    })
    .success(function(data){
      var posts = data.posts;
      for(var x in data.posts) {
        var post = data.posts[x];
        var $post = $("<li>");
        $post.text(post.content);
        $post.appendTo($stream);
      }
    })

    setTimeout(refresh, 5000);
  }

  refresh();
})