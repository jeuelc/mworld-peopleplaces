function init() {
  document.addEventListener("deviceready",deviceReady, true);
  delete init;
}

function deviceReady() {
  //$('#loginForm').on('submit', function() {alert("imong lobot");});
}

function processLogin() {
  //alert("imong nawong");
  var form = $('#loginForm');
  $('#submitButton', form).attr("disabled", "disabled");
  var u = $('#username', form).val();
  var p = $('#password', form).val();
  //console.log("click");
  if(u != '' && p != ''){
    var kidid = mworldLogin(u,p);
    if(kidid > 0) {
      window.localStorage["username"] = u;
      window.localStorage["password"] = p;
      $.mobile.changePage('index.html');
    } else {
      alert("Sorry, username and/or password is incorrect.");
    }
    $('#submitButton', form).removeAttr("disabled");

    
  } else {
    alert("You must enter username and password");
    //navigator.notification.alert("You must enter username and password", function() {});
    $('#submitButton', form).removeAttr("disabled");
  }
}

function checkPreAuth() {
  var form = $('#loginForm');
  if(window.localStorage["username"] != undefined && window.localStorage["password"] != undefined) {
    $('#username', form).val(window.localStorage["username"]);
    $('#password', form).val(window.localStorage["password"]);
    processLogin();
  } 
}