$("#knop").click(function() {
    var getal = $("#invoer").val();
    if (getal % 2 == 0) {
        $("#uitvoer").text("even");
    } else {
        $("uitvoer").text("oneven")
    }
});