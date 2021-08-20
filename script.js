// for form validation
var formvalid = {
    username: false,
    placename: false,
    mobilename: false,
    messagename: false,
    emailname: false
  
};

//Functions for checking validation 
function checkvalidation(){
    console.log(formvalid.username, formvalid.placename, formvalid.mobilename, formvalid.messagename, formvalid.emailname)
    if(formvalid.username && formvalid.placename && formvalid.mobilename && formvalid.messagename && formvalid.emailname){
        $('#submit-btn').removeAttr('disabled');
    } else {
        $('#submit-btn').attr('disabled', true);
    }
}

// name 
$('#name').on('input',function(){
    var username= $(this).val();

    function hide(){
        $('#name-error').hide();
    }

    
    if(username.length<1){
        formvalid.username = false;
        checkvalidation();
        $('#name-error').text('Character is required.').show();
       
    } else {
       hide();
       formvalid.username = true;
       checkvalidation();
        var testExp= new RegExp(/^[a-zA-Z\s]+$/);
        var testEx= new RegExp(/^[a-zA-Z]+$/);
        if (!testExp.test(username)){
            $('#name-error').text('Must not have any special character or number.').show();
            formvalid.username = false;
            checkvalidation();
        } else {
           hide();
           formvalid.username = true;
           checkvalidation();
            if (username.length<3 || username.length > 20){
                $('#name-error').text('Must be more than 3 character and lesser than 20 character').show();
                formvalid.username = false;
                checkvalidation();
            }
            else if(username.match(testEx)>3){
                $('#name-error').text('Must be more than 3 character and lesser than 20 character').show();
                formvalid.username = false;
                checkvalidation();
                console.log(username.match(testEx))
            }
             else {
                hide();
                formvalid.username = true;
                checkvalidation();
            }
        }
        
        
    }
});

// place
$('#place').on('input',function(){
    var placename= $(this).val();

    function placehide(){
        $('#place-error').hide();
    }


    if(placename.length<1){
        $('#place-error').text('The place name is required.').show();
        formvalid.placename = false;
        checkvalidation();
    } else {
        placehide();
        formvalid.placename =true;
        checkvalidation();
        var testplace = new RegExp(/^[a-zA-Z\s]+$/);
        var testplac = new RegExp(/^[a-zA-Z]+$/);
        if(!testplace.test(placename)){
            $('#place-error').text('Must not have any special character or number.').show();
            formvalid.placename = false;
            checkvalidation();
        } else {
            placehide();
            formvalid.placename = true;
            checkvalidation();
            if(placename.length<3 || placename.length > 20){
                $('#place-error').text('Must be more than 3 Character and lesser than 20 characters.').show();
                formvalid.placename = false;
                checkvalidation();
            }
            else if(placename.match(testplac)>3){
                $('#place-error').text('Must be more than 3 Character and lesser than 20 characters.').show();
                formvalid.placename = false;
                checkvalidation();
                console.log(placename.match(testplac))
            } else {
                placehide();
                formvalid.placename = true;
                checkvalidation();
            }
        }
    }
});

// mobile number
$('#mobile').on('input',function(){
    var mobilename = $(this).val();

    function mobilehide(){
        $('#mobile-error').hide();
    }

    if(mobilename.length<1){
        $('#mobile-error').text('Only 10 numbers required.').show();
        formvalid.mobilename = false;
        checkvalidation();
    } else {
        mobilehide();
        formvalid.mobilename = true;
        checkvalidation();
    if(mobilename.length<10){
        $('#mobile-error').text('Must have 10 numbers.').show();
        formvalid.mobilename = false;
        checkvalidation();
    } else {
        mobilehide();
        formvalid.mobilename = true;
        checkvalidation();
    }
    }
});

// message box
$('#message').on('input',function(){
    var messagename =$(this).val();

    function messagehide(){
        $('#message-error').hide();
    }

    if(messagename.length<1){
        $('#message-error').text('20 characters minimum required.').show();
        formvalid.messagename = false;
        checkvalidation();
    } else {
        messagehide();
        formvalid.messagename = true;
        checkvalidation();
        if(messagename.length<20){
            $('#message-error').text('Atleast 20 Characters required.').show();
            formvalid.messagename = false;
            checkvalidation();
        } else {
            messagehide();
            formvalid.messagename = true;
            checkvalidation();
        }
    }
});

// email 
$('#email').on('input',function(){
    var emailname = $(this).val();

    function emailhide(){
        $('#email-error').hide();
    }


    if(emailname.length<1){
        $('#email-error').text('Email is required').show();
        formvalid.emailname = false;
        checkvalidation();
    } else {
        emailhide();
        formvalid.emailname =  true;
        checkvalidation();
        var em = new RegExp(/^[^]+@[^]+\.[a-z]{2,3}$/);
        if(!em.test(emailname)){
            $('#email-error').text('Enter only valid email only.').show();
            formvalid.emailname = false;
            checkvalidation();
        } else {
            emailhide();
            formvalid.emailname = true;
            checkvalidation();
        }
    }


})
