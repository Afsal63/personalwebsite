function validate(){

    if(nameValidate()==true && emailValidate()==true && mobileValidate()==true && messageValidate()==true){

        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxBWUDYrruN_beevuEJXkJaQRYoTyWe0GDSNUvCiHnEamulrhBhTXcMk--gSdNWgoFN/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Please enter the values")

            }
        })

      }
    }


    function nameValidate(){
      var varname = $('#name').val();
      var pattern = /^[A-Za-z]/;

      if(varname==""){
        $('#namecheck').html("Name is mandatory");
        return false;
      }else if(varname.match(pattern)){
        $('#namecheck').html("");
        return true;
      }else{
        $('#namecheck').html("Enter correct name");
        return false;
      }
    }

    function emailValidate(){
      var varEmail = $('#email').val();
      var emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if(varEmail==""){
        $('#emailcheck').html("Email is mandatory");
        return false;
      }else if(varEmail.match(emailPattern)){
        $('#emailcheck').html("");
        return true;
      }else{
        $('#emailcheck').html("Enter correct Email");
        return false;
      }

    }

    function mobileValidate(){
      var varMobile = $('#contactid').val();
      var mobilePattern = /^\d{10}$/;

      if(varMobile==""){
        $('#numbercheck').html("Contact number is mandatory");
        return false;
      }else if(varMobile.match(mobilePattern)){
        $('#numbercheck').html("");
        return true;
      }
      else if(varMobile.length<10 ||varMobile.length>=10){
        $('#numbercheck').html("Number should be 10 digits");
      }
      else{
        $('#numbercheck').html("Enter valid Contact number");
        return false;
      }
    }

    function messageValidate(){
      var varMessage = $('#message').val();

      if(varMessage==""){
        $('#messagecheck').html("Enter something please");
        return false;
      }else {
        $('#messagecheck').html("");
        return true;
      }
    }

