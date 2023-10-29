function Login(){
    if(document.querySelector("#sms_login").style.display=="block"){
      if (document.querySelector("#login_info").style.display=="block") {
        alert("dawdaddad")
      // }else{
        document.querySelector("#login_info").style.display="block"
        // document.querySelector(".bla").innerHTML=`Registration`
        // document.querySelector("#sms_login").style.display="none"
      }
    }else{
      document.querySelector("#sms_login").style.display="block"
      document.querySelector("#login_p").style.display="none"
      document.querySelector("#numberEdit").style.display="block"
    }
    }
    function LoginClose(){
      document.querySelector("#sms_login").style.display="none"
      document.querySelector("#login_p").style.display="block"
      document.querySelector("#numberEdit").style.display="none"
    }

    function ConnectOpen(){
      if(document.querySelector("#connectModal").style.display=="flex"){
        document.querySelector("#connectModal").style.display="none"
      }else{
        document.querySelector("#connectModal").style.display="flex"
      }
    }
    function LoginOpen(){
      if(document.querySelector("#loginModal").style.display=="flex"){
        document.querySelector("#loginModal").style.display="none"
      }else{
        document.querySelector("#loginModal").style.display="flex"
      }
    }

function FilterOpen(){
  if(document.querySelector("#Filtir_big").style.top=="0px"){
    document.querySelector("#Filtir_big").style="top:-100%"
    document.querySelector("body").style="overflow: scroll;"
    document.querySelector(".Filter_big_div_search").style="display:none"
  }else{
    document.querySelector("#Filtir_big").style="top:0px"
    document.querySelector("body").style="overflow: hidden;"
    
    setTimeout(()=>{
      document.querySelector(".Filter_big_div_search").style="display:block"
    },400)
  }
}