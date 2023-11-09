

// const API ='https://salonca.onrender.com/api/filials' 
// const getData =(resource)=>{
//   return new Promise((resolve,reject)=>{
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange',()=>{
//       if(request.readyState === 4 && request.status ==200){
//         const data = JSON.parse(request.responseText)
//         resolve(data)
//       }else if(request.readyState == 4){
//         reject('error !')
//       }
//     })
//     request.open('GET',request)
//     request.send()
//   })
// }





fetch('https://salonca.onrender.com/api/filyal', {
  method: 'GET'
}).catch(err=>{
 
})
.then(response => response.json())
.then(data => {
   data.map(item=>{
    document.querySelector("#seacrhmapjoy").innerHTML+=`
    <div
    id="search_card"
    onclick='localStorage.setItem("FilialId",${item.id})'
                class="grid relative grid-rows-[1fr,152px] rounded-xl overflow-hidden bg-white shadow"
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
                    <p class="text-xl leading-5 text-primary">from 0/hour</p>
                    <div class="text-xl leading-5 text-blue-100">
                      · from 1 hour
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



