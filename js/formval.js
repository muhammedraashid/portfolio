$(document).ready(function(){
    $("#contact-form").validate({
        rules : {
            username:{
                required:true,
                minlength:4,
                maxlength:15
            },
            email:{
                required:true,
                email:true
            },
            subject:{
                required:true,
                minlength:5,
            },
            message:{
                required:true,
                minlength:20,
            }
        },
        submitHandler: function(form, event) {
            event.preventDefault(); 
            sent(form);
        },
        invalidHandler: function(event, validator) {
            alert("Form validation failed. Please check all the inputs are correct...");
        }
    })
})


function sent(form){
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyTV9H-vEVNuSdEM3dlNE72hXbFx6aX3VoRJGwMMXe54UsrQp94eCGsyrXMgTsJnrpWXg/exec",
        data: $(form).serialize(),
        method: "post",
        success: function (response) {
            alert("Form submitted successfully");
            window.location.reload(); // reload the page after successful submission
        },
        error: function (err) {
            alert("Something Error");
        }
    });
}

  