/**
 * Created by Vignesh on 12/10/15.
 */
var uviValidate = {
    validateInput : function () {
        var nameField =  $('#reqName'),
            emailField = $('#reqEmail'),
            subField = $('#reqSubject'),
            messageField = $('#reqMessage');
        var name = nameField.val() ,
            email = emailField.val() ,
            subject = subField.val(),
            message = messageField.val();

        if(name === undefined || name === "" || name == "" ) {
            nameField.focus();
        } else if (email === undefined || email === "" || email == "") {
            emailField.focus();
        } else if (subject === undefined || subject === "" || subject == "") {
            emailField.focus();
        } else {
            uviValidate.requestEmail(name, email, subject,  message);
        }
    },
    requestEmail :function(name, email, subject, message) {
        var contactURL = window.location.protocol + "//" + window.location.host + "/" + "contact";
        $.ajax({
            type: "POST",
            url: contactURL,
            contentType: 'application/json',
            data: JSON.stringify( { "reqName": name, "reqEmail":email, "reqSub" :subject, "reqMsg":message } ),
            success: function(){
                //alert('success');
                uviValidate.resetFields();
            },
            error: function(){
               // alert('failure');
                uviValidate.resetFields();
            },
            dataType: 'application/json'
        });
    },
    resetFields: function () {
       $('#reqName').val("");
       $('#reqEmail').val("");
       $('#reqSubject').val("");
       $('#reqMessage').val("");
    }
};