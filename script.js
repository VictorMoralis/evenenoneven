$("#knop").click(function() {
    var getal = $("#invoer").val();
   if ($ .isNumeric(getal)){
     if (getal % 2 == 0) {
            $("#uitvoer").text("even");
     } else {
            $("#uitvoer").text("oneven")
        }
    }
} else {
    $("uitvoer").text("geef een geheel getal in")
});
