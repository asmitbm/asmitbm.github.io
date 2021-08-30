$.get("/assets/html/navigation.html", function(data){
    $("#navbar").replaceWith(data);
});