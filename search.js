var select_page='Ваша специализация'
var category=[]
var  filyal=[]
var  select_id_category=0
var  minDate=''
var  xususiyat=[]
var  metro=[]
var  rayon=[]
var  rayon1=[]
var  metro1=[]

fetch('https://salonca.onrender.com/api/filyal', {
  method: 'GET'
}).catch(err=>{
 
})
.then(response => response.json())
.then(data => {
   data.map(item=>{
    document.querySelector("#seacrhmapjoy").innerHTML+=`
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
  console.error('Xatolik yuz berdi:', error);
});



fetch('https://salonca.onrender.com/api/filyal_mark/',{
  method:'GET'
}).then(response=>response.json()).then(res=>{
  const Filter=res.filter(item=>item.filyal_id==localStorage.getItem("FilialId"))
  if(Filter.length>0){
    Filter.map((item,key)=>{
      console.log(item,"sal");
      document.querySelector("#list").innerHTML+=`
      <div class="item"> 
        <div class="filial_sharh_div">
      <div class="filial_sharh_div_text_one">
          <p>${item.mark}</p>
          <div class="filial_sharh_div_text_one_stars">
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
          </div>
      </div>
      <h1>${item.creator}</h1>
      <p> ${item.text}</p>
    </div>
      </div
    
    `
    })
  }else{
    document.querySelector("#list").innerHTML="There are no comments"
  }
}).catch(err=>console.log(err))


function postbec(){
  fetch('https://salonca.onrender.com/api/contact',{
  method: 'POST',
  headers:{
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    ism: document.querySelector("#postmetod1").value,
    nomer: document.querySelector("#postmetod2").value,
    mutahasis_id: localStorage.getItem("categoryId"),
  })
  })
  .then(res=>{
   res.json().then((res1) =>{
    console.log(res1);
    alert("Скоро мы с вами свяжемся")
   })
  })
  .catch(err=>{
    alert("xato")
  })    
}


function InputIndexFilterOption(title,id){
  sessionStorage.setItem("SearchDistritId",id)
  document.querySelector("#index_filter_disrit").style="display:none"
  document.querySelector("#home-address").value=title
}


function SearchFilterPost(){
   sessionStorage.setItem("date",document.querySelector("#home-date").value)
   sessionStorage.setItem("categoryId",SearchDistritId)
}

fetch('https://salonca.onrender.com/api/xususiyatlar',{
  method:'GET'
}).then(response=>response.json()).then(res=>{
  res.map(item=>{
    document.querySelector("#xususiyatId").innerHTML+=`<label
    class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-5vspnf">
    <style data-emotion="css zf7d16">
        .css-zf7d16 {
            padding: 0 7px;
        }
    </style>
    <style data-emotion="css 1c7h8lr">
        .css-1c7h8lr {
            color: #293241;
            padding: 0 7px;
        }
    </style>
    <style data-emotion="css ski1p">
        .css-ski1p {
            padding: 9px;
            border-radius: 50%;
            color: #293241;
            padding: 0 7px;
        }
    </style>
    <style data-emotion="css 1yxmk4u">
        .css-1yxmk4u {
            display: -webkit-inline-box;
            display: -webkit-inline-flex;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            position: relative;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
            background-color: transparent;
            outline: 0;
            border: 0;
            margin: 0;
            border-radius: 0;
            padding: 0;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            vertical-align: middle;
            -moz-appearance: none;
            -webkit-appearance: none;
            -webkit-text-decoration: none;
            text-decoration: none;
            color: inherit;
            padding: 9px;
            border-radius: 50%;
            color: #293241;
            padding: 0 7px;
        }

        .css-1yxmk4u::-moz-focus-inner {
            border-style: none;
        }

        .css-1yxmk4u.Mui-disabled {
            pointer-events: none;
            cursor: default;
        }

        @media print {
            .css-1yxmk4u {
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
            }
        }
    </style>
    <span><input type="checkbox" class="checkbox-seacrh"></span><span class="opasasas">${item.title}</span>
</label>`
  })  
})

function SelectOpen2(id,name) {
  if (document.querySelector("#select_index1").style.display == "block") {
    if (id) {
      // localStorage.setItem("categoryIdSearch",id)
      select_id_category=id
      document.querySelector("#home-specialization").innerHTML=`${name}`
      setTimeout(() => {
        document.querySelector("#select_index1").style.display = "none";
      }, 100);
    } else {
      document.querySelector("#select_index1").style.display = "none";
    }
  } else {
    document.querySelector("#select_index1").style.display = "block";
  }
}



fetch('https://salonca.onrender.com/api/category',{
method:"GET"
}).then(response=>response.json()).then(res=>{
  res.map(item=>{
    category.push(item)
  })
})
fetch('https://salonca.onrender.com/api/filyal',{
method:"GET"
}).then(response=>response.json()).then(res=>{
  for (let i = 0; i < res.length; i++) {
        res[i].date1="сегодня"
  }
  res.map(item=>{
    filyal.push(item)
  })
})
fetch('https://salonca.onrender.com/api/xususiyatlar',{
method:"GET"
}).then(response=>response.json()).then(res=>{
res.map(item=>{
  xususiyat.push(item)
})
})
fetch('https://salonca.onrender.com/api/metro',{
method:"GET"
}).then(response=>response.json()).then(res=>{
res.map(item=>{
  metro.push(item)
})
})
fetch('https://salonca.onrender.com/api/rayon',{
method:"GET"
}).then(response=>response.json()).then(res=>{
res.map(item=>{
  rayon.push(item)
})
})


function filter_master(data){
    var masiv=data
    var send_data=[]
if(select_id_category!==0){
    for (let i = 0; i < masiv.length; i++) {
var push=false 
for (let j = 0; j < masiv[i].master.length; j++) {
if(masiv[i].master[j].category==select_id_category){
push=true
}
}
if(push){
send_data.push(masiv[i])
}}}else{
  send_data=data
}
    return send_data
}
function filter_price(data){
var min_price=document.querySelector('#filter-price-from').value
var max_price=document.querySelector('#filter-price-to').value
if(min_price.length===0){
min_price=0
}else{
min_price=min_price*1
}
if(max_price.length===0){
max_price=99999999999
}else{
  max_price=max_price*1
}
var result=[]
for (let i = 0; i < data.length; i++) {
if(data[i].master.length>0 && data[i].master[0].price>=min_price && data[i].master[0].price<=max_price){
result.push(data[i])
}
}
return result
}
function filter_date(data12){
  var data=document.querySelector('#home-date').value
  var data1=data12
if(data.length>0){
  for (let i = 0; i < data1.length; i++) {
    data1[i].date1=data
}
}else{
  for (let i = 0; i < data1.length; i++) {
    data1[i].date1="сегодня"
  }
}
return data1
}
function filter_xususiyat(data){
  var checked1=[]
  var xus=document.querySelectorAll('.checkbox-seacrh')
  for (let i = 0; i < document.querySelectorAll('.checkbox-seacrh').length; i++) {
if(document.querySelectorAll('.checkbox-seacrh')[i].checked){
checked1.push(xususiyat[i])
}}
var send_data=[]
if(checked1.length>0){
  for (let i = 0; i < data.length; i++) {
    var dostup=false
    for (let j = 0; j < data[i].xususiyat.length; j++) {
      for (let k = 0; k < checked1.length; k++) {
if(data[i].xususiyat[j].xususiyat_id==checked1[k].id){
dostup=true
}
    }}
  if(dostup){
      send_data.push(data[i])  
  }

}
}else{
send_data=data
}

return send_data
}
function filter_metro(data){
var send_data=[]
if(document.querySelectorAll(".item-label").length>0){
for (let i = 0; i < data.length; i++) {
var push=false
for (let j = 0; j < data[i].metro.length; j++) {
for (let k = 0; k < document.querySelectorAll(".item-label").length; k++) {
if(data[i].metro[j].metro_id==document.querySelectorAll(".item-label")[k].getAttribute('data-value')){
push=true
}  
}}
if(push){
send_data.push(data[i])
}

}
}else{
send_data=data
}
return send_data
}
function filter_rayon(data){
  var send_data=[]
  if (document.querySelectorAll(".item-label").length>0) {
    for (let i = 0; i < data.length; i++) {
  var push=false
  for (let j = 0; j < data[i].rayon.length; j++) {
  for (let k = 0; k < document.querySelectorAll(".item-label").length; k++) {
  if(data[i].rayon[j].rayon_id==document.querySelectorAll(".item-label")[k].getAttribute('data-value')){
  push=true
  }  
  }}
  if(push){
  send_data.push(data[i])
  }
  
  }
  }else{
    send_data=data
  }
 return send_data
}

function allFilter(){
  fetch('https://salonca.onrender.com/api/filyal',{
  method:'GET'
  }).then(response=>response.json()).then(res=>{
    var data=filter_master(res)
    data=filter_xususiyat(data)
    data=filter_date(data)
    data=filter_metro(data)
    data=filter_rayon(data)
    data=filter_price(data)
    document.querySelector("#seacrhmapjoy").innerHTML=""
    data.map(item=>{
      document.querySelector("#seacrhmapjoy").innerHTML+=`
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
    // this.setState({filyal:filter_price(data)})
  })
}


fetch('https://salonca.onrender.com/api/category',{
method:"GET"
}).then(res=>{
  res.map((item,key)=>{
   if(item.id==sessionStorage.getItem("categoryId")){
   document.querySelector("select_index_h1").innerHTML=item.category
  //  document.querySelectorAll("#select_index_h1").slice(key,1)
   select_id_category=sessionStorage.getItem("categoryId")
   document.querySelector('#home-date').value=sessionStorage.getItem("date")
    }
   })
})

