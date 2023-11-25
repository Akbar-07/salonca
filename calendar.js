var Data=[]

fetch('https://fre.abbas.uz/api/zakaz',{
  method:'GET'
}).then(response=>response.json()).then(res=>{
   const Filter=res.filter(item=>item.user_id==localStorage.getItem("user"))
   Filter.map(zakaz=>{
    for (let i = 0; i < Filter.length; i++) {
      var dateE=(Filter[i].day_zakaz).slice(0,11)+Filter[i].time_end
      var dateB=(Filter[i].day_zakaz).slice(0,11)+Filter[i].time_start
      Filter[i].description=Filter[i].message
      Filter[i].start=dateB
      Filter[i].end=dateE
      Filter[i].className="fc-bg-default"
      Filter[i].allDay=false
    }
   })
   fetch('https://fre.abbas.uz/api/mutahasis',{method:'GET'}).then(response1=>response1.json()).then(res1=>{
    fetch('https://fre.abbas.uz/api/filyal',{method:'GET'}).then(response2=>response2.json()).then(res2=>{
      for (let j = 0; j < Filter.length; j++) {
        for (let d = 0; d < res1.length; d++) {
          if(Filter[j].mutahasis_id==res1[d].id){
            Filter[j].filial_id=res1[d].filial_id
          }
        }
      }
      for (let i = 0; i < Filter.length; i++) {
        for (let n = 0; n < res2.length; n++) {
          if(Filter[i].filial_id==res2[n].id){
            Filter[i].title=res2[n].name
           }
        }
      }
      Filter.map(filter=>{
        Data.push(filter)
      })
    })
   })
})


jQuery(document).ready(function () {
  jQuery(".datetimepicker").datepicker({
    timepicker: true,
    language: "en",
    range: true,
    multipleDates: true,
    multipleDatesSeparator: " - ",
  });
  jQuery("#add-event").submit(function () {
    alert("Submitted");
    var values = {};
    $.each($("#add-event").serializeArray(), function (i, field) {
      values[field.name] = field.value;
    });
    console.log(values);
  });
});


setTimeout(() => {
  console.log(Data,"sihaldi");
(function () {
  "use strict";
  // ------------------------------------------------------- //
  // Calendar
  // ------------------------------------------------------ //
  jQuery(function () {
    // page is ready
    jQuery("#calendar").fullCalendar({
      themeSystem: "bootstrap4",
      // emphasizes business hours
      businessHours: true,
      defaultView: "agendaWeek",
      // event dragging & resizing
      editable: false,
      // header
      header: {
        left: "title",
        // center: "month,agendaWeek,agendaDay",
        right: "today prev,next",
      },
      events:Data,
      eventRender: function (event, element) {
        if (event.icon) {
          element
            .find(".fc-title")
            .prepend("<i class='fa fa-" + event.icon + "'></i>");
        }
      },
      dayClick: function () {
        jQuery("#modal-view-event-add").modal();
      },
      eventClick: function (event, jsEvent, view) {
        jQuery(".event-icon").html("<i class='fa fa-" + event.icon + "'></i>");
        jQuery(".event-title").html(event.title);
        jQuery(".event-body").html(event.description);
        jQuery(".eventUrl").attr("href", event.url);
        jQuery("#modal-view-event").modal();
      },
    });
  });
})(jQuery);  
}, 20000);


function SelectOpenUser(id) {
  if (document.querySelector("#select_index_user").style.display == "block") {
    if (id) {
      document.querySelector("#user_h1_").innerHTML =
      document.querySelectorAll("#select_index_h1_user")[id].innerHTML;
      document.querySelector("#select_index_user").style = "display:none";
    } else {
      document.querySelector("#select_index_user").style = "display:none";
    }
  } else {
    document.querySelector("#select_index_user").style = "display:block";
  }
}


