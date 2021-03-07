$(document).ready(function() { // Good practice to ready document (webpage fully loaded) before running Jquery scripts
    
    var para = $("p");
    var div = $("div");
    var para1 = $("#p1");
    var birdyclass = $(".birdy");

    // Add new para
    var newpara = $("<p id='newpara'>This is a new para by script.</p>").appendTo('.birdy');

    // Add new para loop (Try)

    // Button1
    $("#btn1").on("click", function() {

        var colorcheck = $("#newpara").css("background-color");
        console.log(colorcheck);

        if (colorcheck == "rgba(0, 0, 0, 0)") {                                // Initial background color is always transparent, which is 4 digits, rgba(0, 0, 0, 0)
                $("#newpara").css("color", "rgb(255, 255, 255)");
                $("#newpara").css("background-color", "rgb(0, 255, 0)");
        } else if (colorcheck == "rgb(0, 255, 0)") {
                $("#newpara").css("color", "rgb(0, 0, 0)");
                $("#newpara").css("background-color", "rgb(255, 255, 0)");  
        } else if (colorcheck == "rgb(255, 255, 0)") {
            $("#newpara").css("color", "rgb(255, 255, 255)");
            $("#newpara").css("background-color", "rgb(255, 0, 0)");
        } else if (colorcheck == "rgb(255, 0, 0)") {
            $("#newpara").css("color", "rgb(0, 0, 0)");
            $("#newpara").css("background-color", "rgb(0, 255, 0)");
        }
    });
});
