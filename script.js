
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
      window.location = "./user.html";
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
function map(){
  document.querySelector(".qora-oyna-indi").style=`display:block`
}
fetch('https://salonca.onrender.com/api/filyal', {
  method: 'GET'
})
.then(response => response.json())
.then(data => {
   data.map(item=>{
    document.querySelector("#Filial").innerHTML+=`
    <div
                class="grid relative grid-rows-[1fr,152px] rounded-xl overflow-hidden bg-white shadow"
                onclick='localStorage.setItem("FilialId",${item.id})'
              >
                <div class="grid gap-1 px-4 pt-3 pb-1.5">
                  <h2 class="text-xl leading-5 truncate text-black font-bold">
                    ${item.name}
                  </h2>
                  <div class="grid gap-2 grid-flow-col justify-start">
                    <div
                      class="w-2.5 h-2.5 rounded-full mt-[5px]"
                      style="background-color: #915133"
                    ></div>
                    <div
                      class="text-xl font-light leading-5 text-black-900 truncate"
                      itemprop="address"
                    >${item.address}</div>
                  </div>
                  <div class="flex gap-1 h-[26px]">
                    <p class="text-xl leading-5 text-primary">from ${item.master.length>0?item.master[0].price:"0"} ₽/hour</p>
                    <div class="text-xl leading-5 text-blue-100">
                      · from 1 hour
                    </div>
                  </div>
                </div>
                <a
                  aria-label='${item.name}'
                  class="grid before:content-[&quot;&quot;] before:absolute before:top-0 before:left-0 before:z-10 before:w-full before:h-full image-placeholder"
                  href="coworking/indi.html"
                  target="_top"
                  ><span
                    style="
                      box-sizing: border-box;
                      display: block;
                      overflow: hidden;
                      width: initial;
                      height: initial;
                      background: none;
                      opacity: 1;
                      border: 0;
                      margin: 0;
                      padding: 0;
                      position: relative;
                    "
                    ><span
                      style="
                        box-sizing: border-box;
                        display: block;
                        width: initial;
                        height: initial;
                        background: none;
                        opacity: 1;
                        border: 0;
                        margin: 0;
                        padding: 0;
                        padding-top: 60.97560975609756%;
                      "
                    ></span
                    ><img
                      alt='${item.name}'
                      src='${item.image}'
                      decoding="async"
                      data-nimg="responsive"
                      style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        box-sizing: border-box;
                        padding: 0;
                        border: none;
                        margin: auto;
                        display: block;
                        width: 0;
                        height: 0;
                        min-width: 100%;
                        max-width: 100%;
                        min-height: 100%;
                        max-height: 100%;
                        object-fit: cover;
                        object-position: center;
                      " /><noscript
                      ><img
                        alt='${item.name}'
                        sizes="100vw"
                        src="_next/czM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzEyMmEwNjgzLWVlYWEtNGMxMy05YjRlLTNhYTE1ZDlhM2EwMS9iMzRhNzU3NS1iOTM3LTRhZDEtODNkMi1mODlmOWE2ZDA1N2YuanBn.jpeg?url=https%3A%2F%2Fsalonca.ru%2Fimages%2Fy9Nqkao9c_fgHkVORA5Q8ivq8yqs8zTBBj2FlA9ZBf8%2Frs%3Afill%3A327%3A200%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzEyMmEwNjgzLWVlYWEtNGMxMy05YjRlLTNhYTE1ZDlhM2EwMS9iMzRhNzU3NS1iOTM3LTRhZDEtODNkMi1mODlmOWE2ZDA1N2YuanBn.jpg&amp;w=3840&amp;q=75"
                        decoding="async"
                        data-nimg="responsive"
                        style="
                          position: absolute;
                          top: 0;
                          left: 0;
                          bottom: 0;
                          right: 0;
                          box-sizing: border-box;
                          padding: 0;
                          border: none;
                          margin: auto;
                          display: block;
                          width: 0;
                          height: 0;
                          min-width: 100%;
                          max-width: 100%;
                          min-height: 100%;
                          max-height: 100%;
                          object-fit: cover;
                          object-position: center;
                        "
                        loading="lazy" /></noscript></span
                ></a>
              </div>
    `
   })
})
.catch(error => {
  console.error('Xatolik yuz berdi:', error);
});

fetch('https://salonca.onrender.com/api/category', {
  method: 'GET'
})
.then(response => response.json())
.then(data => {
   data.map((item,key)=>{
    document.querySelector("#select_index").innerHTML+=`<h1 onclick="SelectOpen('${item.id}','${item.category}')" id="select_index_h1" value='${item.id}'>${item.category}</h1>`
   })
})
.catch(error => {
  console.error('Xatolik yuz berdi:', error);
});

function SelectOpen(id,name) {
  if (document.querySelector("#select_index").style.display == "block") {
    if (id) {
      document.querySelector("#home-specialization").innerHTML=`${name}`
      document.querySelector("#select_index").style.display = "none";
    } else {
      document.querySelector("#select_index").style.display = "none";
    }
  } else {
    document.querySelector("#select_index").style.display = "block";
  }
}
