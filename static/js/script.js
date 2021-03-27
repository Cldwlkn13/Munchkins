$(document).ready(function () {
    $(".sidenav").sidenav({ edge: "right" });

    $.get('static/text/countries.txt', function (data) {
        var lines = data.split('\n');
        $.each(lines, function (k, v) {
            var $newOpt = $("<option>").attr("value", v).text(v)
            $('#country').append($newOpt);
        });
    });

    $('select').formSelect();

    $('#show-recipe-card').on("click", function(){
        $('#recipe-content').toggle();
    });

    $("#password_confirm").on("focusout", function (e) {
        if (!validatePassword()) {
            $(this).removeClass("valid").addClass("invalid");
            $("#lbl_password_confirm").text("Passwords do not match")
        } else {
            $(this).removeClass("invalid").addClass("valid");
            $("#lbl_password_confirm").text("Passwords match")
        }
    });

    $('#register-form').submit(function (e) {
        var bool = validatePassword();
        if (!bool){
            e.preventDefault();
            alert("Passwords do not match");
        }
        else
            return true; //continue to submit form
    });

    function validatePassword() {
        var password = $("#password").val();
        var confirmPassword = $("#password_confirm").val();
        if (password != confirmPassword) {
            return false;
        }
        else {
            return true;
        }
    }

    setTimeout(function() {
        $('.flashes').fadeOut('slow');
    }, 2000);
});