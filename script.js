// for form validation
var formvalid = {

    username: false,
    placename: false,
    mobilename: false,
    messagename: false,
    emailname: false
  
};

//Functions for checking validation 

function validname(){
     
    function hide(){
        $('#name-error').hide();
    }
    console.log("ss");
    var username= $("#name").val();
    console.log(username);
    if(username.length<1){
        formvalid.username = false;
        $('#name-error').text('Character is required.').show();
       
    } else {
       hide();
       formvalid.username = true;
      
        var testExp= new RegExp(/^[a-zA-Z ]+$/);
        var testEx= new RegExp(/^[a-zA-Z ]+$/);
        if (!testExp.test(username)){
            $('#name-error').text('Must not have any special character or number.').show();
            formvalid.username = false;
           
        } else {
           hide();
           formvalid.username = true;
         
            if (username.length<3 || username.length > 20){
                $('#name-error').text('Must be more than 3 character and lesser than 20 character').show();
                formvalid.username = false;
              
            }
            else if(username.match(testEx)>3){
                $('#name-error').text('Must be more than 3 character and lesser than 20 character').show();
                formvalid.username = false;
              
                console.log(username.match(testEx))
            }
             else {
                hide();
                formvalid.username = true;
               
            }
        }
        
        
    }
}

// place
function validplace(){
    var placename= $("#place").val();

    function placehide(){
        $('#place-error').hide();
    }


    if(placename.length<1){
        $('#place-error').text('The place name is required.').show();
        formvalid.placename = false;
       
    } else {
        placehide();
        formvalid.placename =true;
      
        var testplace = new RegExp(/^[a-zA-Z ]+$/);
        var testplac = new RegExp(/^[a-zA-Z ]+$/);
        if(!testplace.test(placename)){
            $('#place-error').text('Must not have any special character or number.').show();
            formvalid.placename = false;
            
        } else {
            placehide();
            formvalid.placename = true;
          
            if(placename.length<3 || placename.length > 20){
                $('#place-error').text('Must be more than 3 Character and lesser than 20 characters.').show();
                formvalid.placename = false;
                
            }
            else if(placename.match(testplac)>3){
                $('#place-error').text('Must be more than 3 Character and lesser than 20 characters.').show();
                formvalid.placename = false;
             
                console.log(placename.match(testplac))
            } else {
                placehide();
                formvalid.placename = true;
                
            }
        }
    }
}


// mobile

function validmobile(){
    var mobilename = $("#mobile").val();

    function mobilehide(){
        $('#mobile-error').hide();
    }

    if(mobilename.length<1){
        $('#mobile-error').text('Only 10 numbers required.').show();
        formvalid.mobilename = false;
       
    } else {
        mobilehide();
        formvalid.mobilename = true;
       
    if(mobilename.length<10){
        $('#mobile-error').text('Must have 10 numbers.').show();
        formvalid.mobilename = false;
       
    } else {
        mobilehide();
        formvalid.mobilename = true;
       
    }
    }
}

// message
function validmessage(){
    var messagename =$("#message").val();

    function messagehide(){
        $('#message-error').hide();
    }

    if(messagename.length<1){
        $('#message-error').text('20 characters minimum required.').show();
        formvalid.messagename = false;
       
    } else {
        messagehide();
        formvalid.messagename = true;
       
        if(messagename.length<20){
            $('#message-error').text('Atleast 20 Characters required.').show();
            formvalid.messagename = false;
           
        } else {
            messagehide();
            formvalid.messagename = true;
         
        }
    }
}

// email

function validemail(){
    var emailname = $("#email").val();

    function emailhide(){
        $('#email-error').hide();
    }


    if(emailname.length<1){
        $('#email-error').text('Email is required').show();
        formvalid.emailname = false;
       
    } else {
        emailhide();
        formvalid.emailname =  true;
       
        var em = new RegExp(/^[^]+@[^]+\.[a-z]{2,3}$/);
        if(!em.test(emailname)){
            $('#email-error').text('Enter only valid email only.').show();
            formvalid.emailname = false;
           
        } else {
            emailhide();
            formvalid.emailname = true;
            
        }
    }

}
// name 
$('#name').on('input',function(){

   validname();
});


// place
$('#place').on('input',function(){
      
    validplace();
});

// mobile number
$('#mobile').on('input',function(){
   
    validmobile();
});

// message box
$('#message').on('input',function(){
  
    validmessage();
});

// email 
$('#email').on('input',function(){
   
    validemail();

})






 