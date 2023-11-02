
function Login() {
  if (document.querySelector("#sms_login").style.display == "block") {
    if (document.querySelector("#login_info").style.display == "block") {
      window.location = "user.html";
    } else {
      document.querySelector("#login_info").style.display = "block";
      document.querySelector(".bla").innerHTML = `Registration`;
      document.querySelector("#sms_login").style.display = "none";
      document.querySelector(".nomerEdit").style.display="none"
    }
  } else {
    if (document.querySelector("#login_info").style.display == "block") {
      window.location = "user.html";
    } else {
      document.querySelector("#sms_login").style.display = "block";
      document.querySelector("#login_p").style.display = "none";
      document.querySelector("#numberEdit").style.display = "block";
    }
  }
}
function LoginClose() {
  document.querySelector("#sms_login").style.display = "none";
  document.querySelector("#login_p").style.display = "block";
  document.querySelector("#numberEdit").style.display = "none";
}

function ConnectOpen() {
  if (document.querySelector("#connectModal").style.display == "flex") {
    document.querySelector("#connectModal").style.display = "none";
    document.querySelector("body").style = "overflow: scroll;";
  } else {
    document.querySelector("#connectModal").style.display = "flex";
    document.querySelector("body").style = "overflow: hidden;";
  }
}
function LoginOpen() {
  if (document.querySelector("#loginModal").style.display == "flex") {
    document.querySelector("#loginModal").style.display = "none";
    document.querySelector("body").style = "overflow: scroll;";
  } else {
    document.querySelector("#loginModal").style.display = "flex";
    document.querySelector("body").style = "overflow: hidden;";
  }
}

function FilterOpen() {
  if (document.querySelector("#Filtir_big").style.top == "0px") {
    document.querySelector("#Filtir_big").style = "top:-100%";
    document.querySelector("body").style = "overflow: scroll;";
    document.querySelector(".Filter_big_div_search").style = "display:none";
  } else {
    document.querySelector("#Filtir_big").style = "top:0px";
    document.querySelector("body").style = "overflow: hidden;";

    setTimeout(() => {
      document.querySelector(".Filter_big_div_search").style = "display:block";
    }, 400);
  }
}


function navbarModal(){
  document.querySelector(".navbar__modal").style=`top:0 !important`
  document.querySelector(".menu_mobile__H2YeT").style=`display:none`
  document.querySelector("#seukasasa").style=`display:none`
  document.querySelector("#seukasasa1").style=`display:block`
  document.querySelector(".qora-oyna-navbar").style=`display:block`
  document.querySelector("body").style=`overflow: hidden;`

}
function closeNavbarMolad(){
  document.querySelector(".navbar__modal").style=`top:-100% !important`
  document.querySelector(".menu_mobile__H2YeT").style=`display:block`
  document.querySelector("#seukasasa").style=`display:block`
  document.querySelector("#seukasasa1").style=`display:none`
  document.querySelector(".qora-oyna-navbar").style=`display:none`
  document.querySelector("body").style=`overflow: scroll;`
}

function SelectOpen(id) {
  if (document.querySelector("#select_index").style.display == "block") {
    if (id) {
      document.querySelector("#home-specialization").innerHTML =
        document.querySelectorAll("#select_index_h1")[id].innerHTML;
      document.querySelector("#select_index").style.display = "none";
    } else {
      document.querySelector("#select_index").style.display = "none";
    }
  } else {
    document.querySelector("#select_index").style.display = "block";
  }
}
function SelectOpen2(id) {
  if (document.querySelector("#select_index").style.display == "block") {
    if (id) {
      document.querySelector("#reg-select").innerHTML =
        document.querySelectorAll("#select_index_h1")[id].innerHTML;
      document.querySelector("#select_index").style.display = "none";
    } else {
      document.querySelector("#select_index").style.display = "none";
    }
  } else {
    document.querySelector("#select_index").style.display = "block";
  }
}
function SelectOpenMedia(id) {
  if (document.querySelector("#select_index_media").style.display == "block") {
    if (id) {
      document.querySelector("#reg-select_media").innerHTML =
        document.querySelectorAll("#select_index_h1_media")[id].innerHTML;
      document.querySelector("#select_index_media").style.display = "none";
    } else {
      document.querySelector("#select_index_media").style.display = "none";
    }
  } else {
    document.querySelector("#select_index_media").style.display = "block";
  }
}
function DataOpen() {
  if (document.querySelector("#data_div").style.display == "none") {
    document.querySelector("#data_div").style.display = "block";
  } else {
    document.querySelector("#data_div").style.display = "none";
  }
}
