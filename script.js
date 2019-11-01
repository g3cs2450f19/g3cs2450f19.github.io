$( document ).ready(function() {
//------------ LOGIN PAGE METHODS ------------
    // Password Mng    
    $("#incorrectPass").hide();
    
    $("#hideIncorrectPass").click(function(e){
        $("#incorrectPass").hide();
    });

    // Login Handler
    $("#login").submit(function(e) {
        e.preventDefault();
        data = $(":input").serializeArray();
        
        userName = data[0].value;
        password = data[1].value;
        if (userName == "teacher" && password == "teacher") {
            // Login and redirect to teacher page
            console.log("Teacher Login");
        } else if (userName == "student" && password == "student") {
            console.log("Student Login");
        } else {
            $("#incorrectPass").show();
        }
        $(".form-control").val("");
    });

});

