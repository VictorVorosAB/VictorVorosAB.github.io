function expand(s)
{
    var td = s;
    var d = td.getElementsByTagName("div").item(0);

    td.className = "menuHover";
    d.className = "menuHover";
}

function collapse(s)
{
    var td = s;
    var d = td.getElementsByTagName("div").item(0);

    td.className = "menuNormal";
    d.className = "menuNormal";
}

$(function(){
  // var $el = $("#content").clone(); 
  // document.getElementById("content").style.display = "none";
  $("#main").load("../common/main.htm", function() {
     $('#placedContent').append($("#content")); 
  }); 
  
  // $("#links").load("../common/links.htm"); 
  // $("#footer").load("../common/footer.html"); 
});

