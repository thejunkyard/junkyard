$(function() {
  $("#confirmation").hide();  
  $("#registration").submit(function() {
    var name = $("#name").val();
    console.log(name);
    $.ajax({
      url:"api/robots",
      type:"post",
      data: {
        name: name
      },
      dataType: "json"
    })
    .success(function(data){
      $("#registration").hide();
      $("#confirmation").show();
      $("#secret").text(data.robot.secret);
    });
    return false;
  })
})