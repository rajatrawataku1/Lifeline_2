
var current_user={};

function login_request_front_end(){

  $("authentication_screen").css('display','none');
  $("#login_screen").css('display','none');
}

function senior_doctor_login(){

var main_data={"doctor_id_frontend_value":$("#doctor_id").val(),"doctor_password_value":$("#password_doctor").val()}

console.log(main_data);

$.ajax({
    type: 'POST',
    crossOrigin:true,
    data: JSON.stringify(main_data),
        contentType: 'application/json',
                url: 'http://192.168.43.98:4000/authorisation',
                success: function(data) {
                    console.log(data);

                    if(data.val=="login_sucess"){

                      current_user=data.login_credentials;
                      console.log(current_user);

                      $("#main_screen_actual").css('display','block');
                      $("#login_screen").css('display','none');

                    }else
                    if(data.val="login_failed"){
                      $("#modal1").children().children().children().text("Wrong combination of doctor id & password");
                      $('#modal1').modal('open');
                    }

                  },
                  error: function(err){
                    console.log(err);
                  }
      });



}

function doctor_login_call_frontend(){

      var main_data={"latitude":$("#doctor_id").val(),"longitude":$("#password_doctor").val()}

      console.log(main_data);

      $.ajax({
          type: 'POST',
          crossOrigin:true,
          data: JSON.stringify(main_data),
              contentType: 'application/json',
                      url: 'http://192.168.43.98:4000/store_location_in_db',
                      success: function(data) {
                          console.log(data);

                          if(data.val=="stored_sucessfully"){

                            current_user=data.login_credentials;
                            console.log(current_user);


                          }else
                          if(data.val="login_failed"){
                            $("#modal1").children().children().children().text("Wrong combination of doctor id & password");
                            $('#modal1').modal('open');
                          }

                        },
                        error: function(err){
                          console.log(err);
                        }
            });
}

function get_new_point_on_map(){

  $.ajax({
      type: 'POST',
      crossOrigin:true,
      contentType: 'application/json',
                  url: 'http://192.168.43.98:4000/get_location_from_db',
                  success: function(data) {
                      console.log(data);

                      if(data.val=="stored_sucessfully"){

                          var length_of_value=data.val.length;
                          console.log(length_of_value);

                      }else
                      if(data.val="login_failed"){



                      }

                    },
                    error: function(err){
                      console.log(err);
                    }
        });

}
