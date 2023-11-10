
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
    document.querySelector("#select_index1").style.display = "none";
  }
}

// function SelectOpen3(id) {
//   if (document.querySelector("#select_index1").style.display == "block") {
//     if (id) {
//       document.querySelector("#reg-select").innerHTML =
//         document.querySelectorAll("#select_index_h11")[id].innerHTML;
//       document.querySelector("#select_index1").style.display = "none";
//       document.querySelector("#select_index1").style.display = "none";
//     } else {
//       document.querySelector("#select_index").style.display = "none";
//       document.querySelector("#select_index1").style.display = "none";
//     }
//   } else {
//     document.querySelector("#select_index1").style.display = "block";
//     document.querySelector("#select_index").style.display = "none";
//   }
// }


function SelectOpen3(id) {
  if (document.querySelector("#select_index1").style.display == "block") {
    if (id) {
      document.querySelector("#reg-select1").innerHTML =
        document.querySelectorAll("#select_index_h11")[id].innerHTML;
      document.querySelector("#select_index1").style.display = "none";
    } else {
      document.querySelector("#select_index1").style.display = "none";
    }
  } else {
    document.querySelector("#select_index1").style.display = "block";
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
                      · from ${item.min_time} hour
                    </div>
                  </div>
                </div>
                <a
                  aria-label='${item.name}'
                  class="grid before:content-[&quot;&quot;] before:absolute before:top-0 before:left-0 before:z-10 before:w-full before:h-full image-placeholder"
                  href="/filial.html"
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
  console.error(error);
});
var category=[]
fetch('https://salonca.onrender.com/api/category', {
  method: 'GET'
})
.then(response => response.json())
.then(data => {
  category.push(data)
  data.map((item,key)=>{
    document.querySelector("#select_index").innerHTML+=`<h1 onclick="SelectOpen('${item.id}','${item.category}')" id="select_index_h1" value='${item.id}'>${item.category}</h1>`
   })
})
.catch(error => {
  console.error(error);
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

var filial_masterM=[]

fetch('https://salonca.onrender.com/api/filyal', {
  method: 'GET'
})
.then(response => response.json())
.then(data => {
  const Filter1=data.filter(item=>item.id==localStorage.getItem("FilialId"))
  Filter1.map((item,key)=>{
    category.map(category2=>{
      for (let i = 0; i < category2.length; i++) {
        for (let j = 0; j < item.master.length; j++) {
         if(category2[i].id==item.master[j].category){
           item.master[j].categoryName=category2[i].category
         }  
        }
       }
    })
    document.querySelector("#title_filial").innerHTML=item.name
    document.querySelector("#address_filial").innerHTML=item.address
    document.querySelector("#swiper_filial_one").innerHTML=`<div class="swiper-slide">
    <img src='${item.image}' />
    </div>`
    document.querySelector("#swiper_filial_two").innerHTML=`<div class="swiper-slide">
    <img src='${item.image}' />
    </div>`
    item.images.map(image=>{
    document.querySelector("#swiper_filial_one").innerHTML+=`<div class="swiper-slide">
    <img src='${image.image}' />
    </div>`
    document.querySelector("#swiper_filial_two").innerHTML+=`<div class="swiper-slide">
    <img src='${image.image}' />
    </div>`
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      autoplay: {
       delay: 5000,
      },
      });
      var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
      autoplay: {
       delay: 5000,
      },
      thumbs: {
      swiper: swiper,
      },
      });
    })
    item.min_time?document.querySelector("#filial_min-time").innerHTML+=`from ${item.min_time} hour`:document.querySelector("#filial_min-time").innerHTML=`from 0 hour`

    document.querySelector("#description_filial").innerHTML=item.description?item.description:"No description"
    if(item.xususiyat.length>0){
      item.xususiyat.map(xususiyat=>{
        document.querySelector("#xususiyat_filial").innerHTML+=`
        <li class="text-black-900 font-light flex text-xl md:text-4xl"><i style="font-size: 25px;" class='bx bx-check-double text-success w-4 h-4 mr-2 lg:w-6 lg:h-6 lg:mr-3'></i> ${xususiyat.title}</li>
        `
      })
    }else{
      document.querySelector("#xususiyat_filial").innerHTML="No Peculiarities"
    }
    if(item.master.length>0){
     item.master.map(master=>{
      document.querySelector("#master_description_all").innerHTML+=master.description
     })
    }else{
      document.querySelector("#master_description_all").innerHTML="No Requirements for a master"
    }
    var a=0
    if(item.master.length>0){
        item.master.map((master,key)=>{
          filial_masterM.push(master)
          document.querySelector("#Filial_get").innerHTML+=`
          <div id="filial_big">
          <div>
              <p class="filial_big_title">Photo</p>
              <div  class="filial_master_big_img_div">
                  <img src='${master.mutahasis_image.length>0?master.mutahasis_image[0].image:"salom"}' alt=${master.tavsif}>
                  <div onclick="filial_master('${master.id}')"
                  class="filial_master_big_img_div_text">
                  <p>More details</p>
                  </div>
              </div></div>
              <div class="filial_big_Specialization">
              <p class="filial_big_title">Specialization</p>
              <div class="filial_master_big_div_text">${master.categoryName}</div>
          </div>
          <div class="filial_big_time_div">
              <p class="filial_big_title">date:<input id="filial_input" type="date" class="filial_big_input"></p>
              <div class="filial_master_big_div_time">
              </div>
          </div>
          <div>
              <p class="filial_big_title">Price per hour</p>
              <p class="filial_master_big_div_money">${master.price} ₽</p>
          </div>
              <button class="filial_master_big_div_button">Choose</button>
          </div><hr/>`
          master.mutahasis_time.map((item,key1)=>{
            a++
            document.querySelectorAll(".filial_master_big_div_time")[key].innerHTML+=`<div onclick="time_fon('${a-1}','${master.id}')" class="filial_master_big_div_time_number">${item.time}</div>`
          })
        })
    }else{
         document.querySelector("#Filial_get").innerHTML=`<p class="text-xl leading-5 md:text-4xl md:leading-7 text-black">No places found
         </p>`
    }
    document.querySelector("#filial_big_map_div_one").innerHTML=`
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
                      · from ${item.min_time} hour
                    </div>
                  </div>
                </div>
                <a
                  aria-label='${item.name}'
                  class="grid before:content-[&quot;&quot;] before:absolute before:top-0 before:left-0 before:z-10 before:w-full before:h-full image-placeholder"
                  href="/filial.html"
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
    document.querySelector("#filail_tel").innerHTML=`<a href="tel:${item.phone}"
    class="hidden font-semibold text-7xl text-primary/70 md:inline-flex w-max">${item.phone}</a>`

  })
})
.catch(error => {
  console.error(error);
});

function time_fon(key){
  for (let i = 0; i < document.querySelectorAll(".filial_master_big_div_time_number").length; i++) {
  if(key==i){
  document.querySelectorAll(".filial_master_big_div_time_number")[i].style="color:white;background:#98c1d9;"
  }else{
  document.querySelectorAll(".filial_master_big_div_time_number")[i].style="color:black;background:none;"
  }
  }
}

// function Filtir_filial(){
//   var value=document.querySelector("#filial_input").value;
//   fetch('https://salonca.onrender.com/api/filyal', {
//     method: 'GET'
//   })
//   .then(response => response.json())
//   .then(res=>{
//     document.querySelector(`#Filial_get`).innerHTML=""
//     const data=res.filter(item=>item.id==localStorage.getItem("FilialId"))
//     console.log(value,"filial");
//     if(value){
//     data.map(item=>{
//          var Filter=item.master.filter(item2=>item2.time_create.slice(0,10)==value)
//          console.log(Filter,"filtr ishladi");
//          category.map(category2=>{
//           for (let i = 0; i < category2.length; i++) {
//             for (let j = 0; j < Filter.length; j++) {
//              if(category2[i].id==Filter[j].category){
//                Filter[j].categoryName=category2[i].category
//              }  
//             }
//            }
//         })
//          Filter.map(filter=>{
//           document.querySelector(`#Filial_get`).innerHTML+=`<div id="filial_big">
//           <div>
//               <p class="filial_big_title">Photo</p>
//               <div class="filial_master_big_img_div">
//               <img src='${filter.mutahasis_image.length>0?filter.mutahasis_image[0].image:"salom"}' alt=${filter.tavsif}>
//                   <div class="filial_master_big_img_div_text">
//                   <p>More details</p>
//                   </div>
//               </div></div>
//               <div class="filial_big_Specialization">
//               <p class="filial_big_title">Specialization</p>
//               <div class="filial_master_big_div_text">${filter.categoryName}</div>
//           </div>
//           <div class="filial_big_time_div">
//               <p class="filial_big_title">date:<input id="filial_input" type="date" class="filial_big_input"></p>
//               <div class="filial_master_big_div_time">
//               </div>
//           </div>
//           <div>
//               <p class="filial_big_title">Price per hour</p>
//               <p class="filial_master_big_div_money">${filter.price} ₽</p>
//           </div>
//               <button class="filial_master_big_div_button">Choose</button>
//           </div>`
//           filter.mutahasis_time.map(time=>{
//             document.querySelector(".filial_master_big_div_time").innerHTML+=`<div class="filial_master_big_div_time_number">${time.time}</div>`
//           })
//         })
//     })
//     }else{
//       data.map(item=>{
//         category.map(category2=>{
//          for (let i = 0; i < category2.length; i++) {
//            for (let j = 0; j < item.master.length; j++) {
//             if(category2[i].id==item.master[j].category){
//               item.master[j].categoryName=category2[i].category
//             }  
//            }
//           }
//        })
//        item.master.map(filter=>{
//          document.querySelector(`#Filial_get`).innerHTML+=`<div id="filial_big">
//          <div>
//              <p class="filial_big_title">Photo</p>
//              <div class="filial_master_big_img_div">
//              <img src='${filter.mutahasis_image.length>0?filter.mutahasis_image[0].image:"salom"}' alt=${filter.tavsif}>
//                  <div class="filial_master_big_img_div_text">
//                  <p>More details</p>
//                  </div>
//              </div></div>
//              <div class="filial_big_Specialization">
//              <p class="filial_big_title">Specialization</p>
//              <div class="filial_master_big_div_text">${filter.categoryName}</div>
//          </div>
//          <div class="filial_big_time_div">
//              <p class="filial_big_title">date:<input id="filial_input"  type="date" class="filial_big_input"></p>
//              <div class="filial_master_big_div_time">
//              </div>
//          </div>
//          <div>
//              <p class="filial_big_title">Price per hour</p>
//              <p class="filial_master_big_div_money">${filter.price} ₽</p>
//          </div>
//              <button class="filial_master_big_div_button">Choose</button>
//          </div>`
//          filter.mutahasis_time.map(time=>{
//           document.querySelector(".filial_master_big_div_time").innerHTML+=`<div class="filial_master_big_div_time_number">${time.time}</div>`
//         })
//        })
//    })
//     }
    
   
//   }).catch(err=>{
//     console.log(err);
//   })
// }


function filial_master(id){
  const Filter=filial_masterM.filter(item=>item.id==id)
  document.querySelector("body").style="overflow:none;"
  document.querySelector("#filial_master").style="display:flex;"
  Filter.map(item=>{
      document.querySelector("#filial_master_title").innerHTML=item.categoryName?item.categoryName:"No name"
      if (item.mutahasis_image.length>0) {
        item.mutahasis_image.map(mutahasis_image=>{
          document.querySelector("#filial_master_swiper_one").innerHTML+=`
          <div class="swiper-slide">
              <img src='${mutahasis_image.image}' />
          </div>`
          document.querySelector("#filial_master_swiper_two").innerHTML+=`
          <div class="swiper-slide">
              <img src='${mutahasis_image.image}' />
          </div>`
          var swiper = new Swiper(".mySwiper4", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            autoplay: {
             delay: 5000,
            },
            });
          var swiper2 = new Swiper(".mySwiper3", {
            spaceBetween: 10,
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            autoplay: {
             delay: 5000,
            },
            thumbs: {
            swiper: swiper,
            },
          });
        })
      }else{
        document.querySelector("#filial_master_swiper_one").innerHTML=`<div class="swiper-slide">
        <img src='No img' alt="No img"/>
    </div>`
        document.querySelector("#filial_master_swiper_two").innerHTML=`<div class="swiper-slide">
        <img src='No img' alt="No img"/>
    </div>`
      }
      document.querySelector("#filial_master_destcription").innerHTML=item.description?item.description:"No description"
      if(item.mutahasis_time.length>0){
        item.mutahasis_time.map(mutahasis_time=>{
          document.querySelector("#filial_master_time").innerHTML+=`<div class="filial_master_big_div_time_number">${mutahasis_time.time}</div>`
          })
      }else{
        document.querySelector("#filial_master_time").innerHTML="No time"
      }
      if(item.xususiyat_mutahasis.length>0){
      item.xususiyat_mutahasis.map(xusuyat=>{
        fetch("https://salonca.onrender.com/api/xususiyatlar",{
          method:'GET'
        }).then(response=>response.json()).then(res=>{
          const Filter10=res.filter(res1=>res1.id==xusuyat.xususiyat_id)
              Filter10.map(item=>{
                document.querySelector("#filail_xususiyat").innerHTML+=`<li style="font-size: 15px;font-weight: 500;color: #3D5A80;" class="text-black-900 font-light flex text-xl md:text-4xl"><i style="line-height: 1.9;margin-right: 0;"  class='bx bx-check-double text-success w-4 h-4 mr-2 lg:w-6 lg:h-6 lg:mr-3'></i>${item.title}</li>`  
              })
        })
        
      })
      }else{
        document.querySelector("#filail_xususiyat").innerHTML="No Peculiarities"
      }
     
  })
}

function filial_master_close(){
  document.querySelector("body").style="overflow:scroll;"
  document.querySelector("#filial_master").style="display:none;"
  document.querySelector("#filial_master_title").innerHTML=""
  document.querySelector("#filial_master_swiper_one").innerHTML=""
  document.querySelector("#filial_master_swiper_two").innerHTML=""
  document.querySelector("#filial_master_destcription").innerHTML=""
  document.querySelector("#filial_master_time").innerHTML=""
  document.querySelector("#filail_xususiyat").innerHTML=""
}

function filial_map_open(){
document.querySelector("#filial_map_modal").style="display:flex"
}
function filial_map_close(){
  document.querySelector("#filial_map_modal").style="display:none"
}



// select

function MultiSelectTag (el, customs = {shadow: false, rounded:true}) {
  var element = null
  var options = null
  var customSelectContainer = null
  var wrapper = null
  var btnContainer = null
  var body = null
  var inputContainer = null
  var inputBody = null
  var input = null
  var button = null
  var drawer = null
  var ul = null
  var domParser = new DOMParser()
  init()

  function init() {
      element = document.getElementById(el)
      createElements()
      initOptions()
      enableItemSelection()
      setValues(false)

      button.addEventListener('click', () => {
          if(drawer.classList.contains('hidden')) {
              initOptions()
              enableItemSelection()
              drawer.classList.remove('hidden')
              input.focus()
          }
      })

      input.addEventListener('keyup', (e) => {
              initOptions(e.target.value)
              enableItemSelection()
      })

      input.addEventListener('keydown', (e) => {
          if(e.key === 'Backspace' && !e.target.value && inputContainer.childElementCount > 1) {
              const child = body.children[inputContainer.childElementCount - 2].firstChild
              const option = options.find((op) => op.value == child.dataset.value)
              option.selected = false
              removeTag(child.dataset.value)
              setValues()
          }
          
      })
      
      window.addEventListener('click', (e) => {   
          if (!customSelectContainer.contains(e.target)){
              drawer.classList.add('hidden')
          }
      });

  }

  function createElements() {
      // Create custom elements
      options = getOptions();
      element.classList.add('hidden')
      
      // .multi-select-tag
      customSelectContainer = document.createElement('div')
      customSelectContainer.classList.add('mult-select-tag')

      // .container
      wrapper = document.createElement('div')
      wrapper.classList.add('wrapper')

      // body
      body = document.createElement('div')
      body.classList.add('body')
      if(customs.shadow) {
          body.classList.add('shadow')
      }
      if(customs.rounded) {
          body.classList.add('rounded')
      }
      
      // .input-container
      inputContainer = document.createElement('div')
      inputContainer.classList.add('input-container')

      // input
      input = document.createElement('input')
      input.classList.add('input')
      input.placeholder = `${customs.placeholder || 'Search...'}`

      inputBody = document.createElement('inputBody')
      inputBody.classList.add('input-body')
      inputBody.append(input)

      body.append(inputContainer)

      // .btn-container
      btnContainer = document.createElement('div')
      btnContainer.classList.add('btn-container')

      // button
      button = document.createElement('button')
      button.type = 'button'
      btnContainer.append(button)

      const icon = domParser.parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 21 6 15"></polyline></svg>`, 'image/svg+xml').documentElement
      button.append(icon)


      body.append(btnContainer)
      wrapper.append(body)

      drawer = document.createElement('div');
      drawer.classList.add(...['drawer', 'hidden'])
      if(customs.shadow) {
          drawer.classList.add('shadow')
      }
      if(customs.rounded) {
          drawer.classList.add('rounded')
      }
      drawer.append(inputBody)
      ul = document.createElement('ul');
      
      drawer.appendChild(ul)
  
      customSelectContainer.appendChild(wrapper)
      customSelectContainer.appendChild(drawer)

      // Place TailwindTagSelection after the element
      if (element.nextSibling) {
          element.parentNode.insertBefore(customSelectContainer, element.nextSibling)
      }
      else {
          element.parentNode.appendChild(customSelectContainer);
      }
  }

  function initOptions(val = null) {
      ul.innerHTML = ''
      for (var option of options) {
          if (option.selected) {
              !isTagSelected(option.value) && createTag(option)
          }
          else {
              const li = document.createElement('li')
              li.innerHTML = option.label
              li.dataset.value = option.value
              
              // For search
              if(val && option.label.toLowerCase().startsWith(val.toLowerCase())) {
                  ul.appendChild(li)
              }
              else if(!val) {
                  ul.appendChild(li)
              }
          }
      }
  }

  function createTag(option) {
      // Create and show selected item as tag
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item-container');
      const itemLabel = document.createElement('div');
      itemLabel.classList.add('item-label');
      itemLabel.innerHTML = option.label
      itemLabel.dataset.value = option.value 
      const itemClose = new DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-close-svg">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>`, 'image/svg+xml').documentElement

      itemClose.addEventListener('click', (e) => {
          const unselectOption = options.find((op) => op.value == option.value)
          unselectOption.selected = false
          removeTag(option.value)
          initOptions()
          setValues()
      })
  
      itemDiv.appendChild(itemLabel)
      itemDiv.appendChild(itemClose)
      inputContainer.append(itemDiv)
  }

  function enableItemSelection() {
      // Add click listener to the list items
      for(var li of ul.children) {
          li.addEventListener('click', (e) => {
              options.find((o) => o.value == e.target.dataset.value).selected = true
              input.value = null
              initOptions()
              setValues()
              input.focus()
          })
      }
  }

  function isTagSelected(val) {
      // If the item is already selected
      for(var child of inputContainer.children) {
          if(!child.classList.contains('input-body') && child.firstChild.dataset.value == val) {
              return true
          }
      }
      return false
  }
  function removeTag(val) {
      // Remove selected item
      for(var child of inputContainer.children) {
          if(!child.classList.contains('input-body') && child.firstChild.dataset.value == val) {
              inputContainer.removeChild(child)
          }
      }
  }
  function setValues(fireEvent=true) {
      // Update element final values
      selected_values = []
      for(var i = 0; i < options.length; i++) {
          element.options[i].selected = options[i].selected
          if(options[i].selected) {
              selected_values.push({label: options[i].label, value: options[i].value})
          }
      }
      if (fireEvent && customs.hasOwnProperty('onChange')) {
          customs.onChange(selected_values)
      }
  }
  function getOptions() {
      // Map element options
      return [...element.options].map((op) => {
          return {
              value: op.value,
              label: op.label,
              selected: op.selected,
          }
      })
  }
}