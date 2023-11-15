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
      businessHours: false,
      defaultView: "agendaWeek",
      // event dragging & resizing
      editable: true,
      // header
      header: {
        left: "title",
        // center: "month,agendaWeek,agendaDay",
        right: "today prev,next",
      },
      events: [
        {
          title: "Malaysia",
          description:
            "I didnt have a pen with me that time T.T.. <br> Romans, <br> Romans 8:1, <br> Colossians, <br> Galatians, <br> Apocalypsis/Revelation",
          start: "2019-08-08",
          end: "2019-08-08",
          className: "fc-bg-default",
          icon: "heart",
        },
        {
          title: "Don't Conform, Hold On ",
          description:
            "<b> John 17:14 </b> <br> " +
            "I have given them your word, and the world has hated them because they are not of the world, just as I am not of the world." +
            "<b> John 17:15 </b> <br>" +
            "I’m not asking you to take them out of the world, but to keep them safe from the evil one. <br>" +
            "<b> Romans 12:2" +
            " *<i> Apostle Paul Speaking *</i></b> <br>" +
            "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect. <br>" +
            "<b> Proverbs 1:10-15 </b> <br>" +
            "My son, if sinners entice you, Do not consent..." +
            "My son, do not walk in the way with them. Keep your feet from their path <br>" +
            "<b> Proverbs 4:14-15 </b> <br>" +
            "Do not enter the path of the wicked. And do not proceed in the way of evil men. Avoid it, do not pass by it; Turn away from it and pass on. <br>" +
            "<b> 2 Peter 2:20 </b> <br>" +
            "And when people escape from the wickedness of the world by knowing our Lord and Savior Jesus Christ and then get tangled up and enslaved by sin again, they are worse off than before. <br>" +
            "<b> 2 Peter 2:21-22 </b> </br>" +
            "It would be better if they had never known the way to righteousness than to know it and then reject the command they were given to live a holy life. <br>" +
            "<b> Revelation 22:15</b> <br>" +
            "Outside the city are the dogs—the sorcerers, the sexually immoral, the murderers, the idol worshipers, and all who love to live a lie. <br>" +
            "<b> Revelation 22:14 </b> <br>" +
            "Blessed are those who wash their robes, that they may have the right to the tree of life and may go through the gates into the city." +
            "<b> John 17:24 </b> <br>" +
            "Father, I want those you have given me to be with me where I am, and to see my glory, the glory you have given me because you loved me before the creation of the world. <br>" +
            "<b> Matthew 26:64 </b> <br>" +
            "Jesus replied, “You have said it. And in the future you will see the Son of Man seated in the place of power at God’s right hand and coming on the clouds of heaven. <br>" +
            "<b> Philippians 3:20-21 </b> <br>" +
            "For our citizenship is in heaven, from which also we eagerly wait for a Savior, the Lord Jesus Christ; who will transform the body of our humble state into conformity with the body of His glory, by the exertion of the power that He has even to subject all things to Himself. <br>" +
            "<b> John 14:2-3 </b> <br>" +
            "In My Father’s house are many dwelling places; if it were not so, I would have told you; for I go to prepare a place for you. If I go and prepare a place for you, I will come again and receive you to Myself, that where I am, there you may be also. <br>" +
            "<b> Revelation 21:1-4 </b> <br>" +
            "Then I saw a new heaven and a new earth; for the first heaven and the first earth passed away, and there is no longer any sea. And I saw the holy city, new Jerusalem, coming down out of heaven from God, made ready as a bride adorned for her husband. And I heard a loud voice from the throne, saying, “Behold, the tabernacle of God is among men, and He will dwell among them, and they shall be His people, and God Himself will be among them, and He will wipe away every tear from their eyes; and there will no longer be any death; there will no longer be any mourning, or crying, or pain; the first things have passed away. <br>",
          start: "2019-08-14T14:00:00",
          end: "2019-08-14T20:00:00",
          className: "fc-bg-deepskyblue",
          icon: "heart",
          allDay: false,
        },
        {
          title: "Hardships will always be inevitable",
          description:
            "<b> John 16:33 </b> <br>" +
            "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world. <br>" +
            "<b> 2 Timothy 3:1" +
            "<i> *Apostle Paul speaking* </i></b><br>" +
            "But mark this: There will be terrible times in the last days. <br>" +
            "<b> Mark 4:18-19" +
            "<i> *Jesus Christ speaking* </i></b><br>" +
            "...seed was sown among the thorns...are the ones..heard the word, but..worries of the world... deceitfulness of riches,... desires..enter in and choke the word, and it becomes unfruitful. <br>" +
            "<b> 2 Corinthians 6:4,6,2 </b><br>" +
            "...but in everything commending ourselves as servants of God, in much endurance, in afflictions, in hardships, in distresses,..." +
            "in purity, in knowledge, in patience, in kindness, in the Holy Spirit, in genuine love, <br>" +
            "<b> 2 Corinthians 1:8-10 </b> <br>" +
            "For we do not want you to be unaware, brethren, of our affliction which came to us in Asia, that we were burdened excessively...who delivered us from so great a peril of death <br>" +
            "<b> 2 Samuel 22:4-7</b> <br>" +
            "I called to the LORD, who is worthy of praise, and have been saved from my enemies...In my distress I called upon the LORD,Yes, I cried to my God; And from His temple He heard my voice, And my cry for help came into His ears <br>" +
            "<b> Psalms 124:2-8 </b> <br>" +
            "Had it not been the LORD who was on our side. When men rose up against us,..Blessed be the LORD, Who has not given us to be torn by their teeth. <br>" +
            "<b> 1 Peter 5:7 </b> <br>" +
            "Cast all your anxiety on him because he cares for you. <br>" +
            "<b> Philippians 4:13 </b> <br>" +
            "For I can do everything through Christ, who gives me strength. <br>" +
            "<b> Psalms 34:17-19 </b> <br>" +
            "The righteous cry, and the LORD hears.. And delivers them out of all their troubles. The LORD is near to the brokenhearted. And saves those who are crushed in spirit. Many are the afflictions of the righteous, But the LORD delivers him out of them all. He keeps all his bones, Not one of them is broken. Evil shall slay the wicked, And those who hate the righteous will be condemned.The LORD redeems the soul of His servants, And none of those who take refuge in Him will be condemned.<br>",
          start: "2019-08-17T13:00:00",
          end: "2019-08-17T16:00:00",
          className: "fc-bg-pinkred",
          icon: "heart",
          allDay: false,
        },
        {
          title: "Be Justified By Works",
          description:
            "<b> 1 Corinthians 15:1-3 </b> <br>" +
            "Now I make known to you, brethren,... if you hold fast the word which I preached to you, unless you believed in vain. For I delivered to you...first importance..that Christ died for our sins according to the Scriptures, <br>" +
            "<b> Matthew 24:13 </b> <br>" +
            "But the one who endures to the end will be saved. <br>" +
            "<b> 1 Corinthians 15:2</b> <br>" +
            "It is this Good News that saves you if you continue to believe the message I told you—unless, of course, you believed something that was never true in the first place. <br>" +
            "<b> James 2:14 , 19, 17-20 </b> <br>" +
            "What use is it, my brethren, if someone says he has faith but he has no works? Can that faith save him? Even so faith, if it has no works, is dead, being by itself. <br>" +
            "<b> Galatians 5:19-21 </b> <br>" +
            "Now the deeds of the flesh are evident, which are: immorality, impurity, sensuality, 20idolatry, sorcery, enmities, strife, jealousy, outbursts of anger, disputes, dissensions, factions, envying, drunkenness, carousing, and things like these, of which I forewarn you, just as I have forewarned you, that those who practice such things will not inherit the kingdom of God...<br>" +
            "<b>James 2:21-22,25</b> <br>" +
            "...AND ABRAHAM BELIEVED GOD, AND IT WAS RECKONED TO HIM AS RIGHTEOUSNESS,” and he was called the friend of God.You see that a man is justified by works and not by faith alone.<br>..." +
            "<b> Romans 10:17 </b> <br>" +
            "Consequently, faith comes from hearing the message, and the message is heard through the word about Christ. <br>" +
            "<b> Romans 10:15 </b> <br>" +
            "And how are they to preach unless they are sent? As it is written, “How beautiful are the feet of those who preach the good news! <br>" +
            "<b> 1 Corinthians 14:26 </b> <br>" +
            "What then shall we say, brothers and sisters? When you come together, each of you has a hymn, or a word of instruction, a revelation, a tongue or an interpretation. Everything must be done so that the church may be built up. <br>",
          start: "2019-08-21",
          className: "fc-bg-lightgreen",
          icon: "heart",
        },
        {
          title: "We will rise again",
          description:
            "<b> Isaiah 40:31 </b> <br>" +
            "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. <br>" +
            "<b> Psalms 46:1-3 </b> <br>" +
            "God is our refuge and strength, A very present help in trouble...Though the mountains quake at its swelling pride. <br>" +
            "<b> Luke 21:36 </b> <br>" +
            "Be always on the watch, and pray that you may be able to escape all that is about to happen, and that you may be able to stand before the Son of Man. <br>" +
            "<b> 1 Peter 5:10 </b> <br>" +
            "And the God of all grace, who called you to his eternal glory in Christ, after you have suffered a little while, will himself restore you and make you strong, firm and steadfast. <br>" +
            "<b> 1 Corinthians 15:58 </b> <br>" +
            "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain." +
            "<b> Joshua 1:7 </b> <br>" +
            "Be strong and very courageous. Be careful to obey all the law my servant Moses gave you; do not turn from it to the right or to the left, that you may be successful wherever you go." +
            "<b> Romans 4:18-21 </b> <br>" +
            "Without becoming weak in faith he contemplated his own body, now as good as dead since he was about a hundred years old, and the deadness of Sarah’s womb;And being fully assured that what God had promised, He was able also to perform. Therefore IT WAS ALSO CREDITED TO HIM AS RIGHTEOUSNESS..<br>" +
            "<b> James 1:6-7 </b> <br>" +
            "..But he must ask in faith without any doubting, for the one who doubts is like the surf of the sea, driven and tossed by the wind. For that man ought not to expect that he will receive anything from the Lord, 8being a double-minded man, unstable in all his ways...<br>" +
            "<b> James 1:12 </b> <br>" +
            "Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life that the Lord has promised to those who love him. <br>" +
            "<b> Psalms 86:6-7, 16-17</b><br>," +
            "Give ear, O LORD, to my prayer; And give heed to the voice of my supplications! In the day of my trouble I shall call upon You, For You will answer me...Turn to me, and be gracious to me; Oh grant Your strength to Your servant, And save the son of Your handmaid. Show me a sign for good, That those who hate me may see it and be ashamed, Because You, O LORD, have helped me and comforted me.",
          start: "2019-08-24",
          end: "2019-08-15",
          className: "fc-bg-blue",
          icon: "heart",
        },
        {
          title: "God chose us over His Son",
          description:
            "<b> 1 Peter 1:3-4 </b> <br>" +
            "Blessed be the God and Father of our Lord Jesus Christ, who according to His great mercy has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead, to obtain an inheritance which is imperishable and undefiled and will not fade away, reserved in heaven for you,..<br>" +
            "<b> 1 Peter 1:10-11, 18-19</b><br>" +
            "As to this salvation, the prophets who prophesied of the grace that would come to you made careful searches and inquiries, seeking to know what person or time the Spirit of Christ within them was indicating as He predicted the sufferings of Christ and the glories to follow...nowing that you were not redeemed with perishable things like silver or gold from your futile way of life inherited from your forefathers, but with precious blood, as of a lamb unblemished and spotless, the blood of Christ.<br>" +
            "<b> Acts 20:28 </b> <br>" +
            "So guard yourselves and God’s people. Feed and shepherd God’s flock—his church, purchased with his own blood—over which the Holy Spirit has appointed you as leaders. <br>" +
            "<b> 1 Peter 1:3-4, 13, 15-16 </b><br>" +
            "Blessed be the God and Father of our Lord Jesus Christ, who according to His great mercy has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead, to obtain an inheritance which is imperishable and undefiled and will not fade away, reserved in heaven for you,...Therefore, prepare your minds for action, keep sober in spirit, fix your hope completely on the grace to be brought to you at the revelation of Jesus Christ...but like the Holy One who called you, be holy yourselves also in all your behavior; because it is written, “YOU SHALL BE HOLY, FOR I AM HOLY.” <br>" +
            "<b>1 Peter 1:15,14 </b> <br>" +
            "But just as he who called you is holy, so be holy in all you do;..As obedient children, do not conform to the evil desires you had when you lived in ignorance.<br>" +
            "<b>Ephesians 4:21,24</b><br>" +
            "if indeed you have heard Him and have been taught in Him, just as truth is in Jesus, that, in reference to your former manner of life, you lay aside the old self, which is being corrupted in accordance with the lusts of deceit, and that you be renewed in the spirit of your mind, and put on the new self, which in the likeness of God has been created in righteousness and holiness of the truth. <br>" +
            "<b> Job 11:13-18</b> <br>" +
            "<i> * God is speaking *</i>" +
            "If you would direct your heart right And spread out your hand to Him,..If iniquity is in your hand, put it far away, And do not let wickedness dwell in your tents. Then, indeed, you could lift up your face without moral defect, And you would be steadfast and not fear.For you would forget your trouble, As waters that have passed by, you would remember it. Your life would be brighter than noonday; Darkness would be like the morning. Then you would trust, because there is hope; And you would look around and rest securely. <br>" +
            "<b>Psalms 37:3-6 </b> <br>" +
            "Trust in the LORD and do good; Dwell in the land and cultivate faithfulness. Delight yourself in the LORD; And He will give you the desires of your heart. Commit your way to the LORD, Trust also in Him, and He will do it. He will bring forth your righteousness as the light And your judgment as the noonday. <br>" +
            "<b>Jeremiah 17:7</b><br>" +
            "But blessed is the one who trusts in the LORD, whose confidence is in him.<br>" +
            "<b>Job 8:11-14</b><br>" +
            "“Can the papyrus grow up without a marsh? Can the rushes grow without water? While it is still green and not cut down, Yet it withers before any other plant. So are the paths of all who forget God; And the hope of the godless will perish, Whose confidence is fragile, And whose trust a spider’s web.<br>" +
            "<b>Lamentations 3:1-6 , 15-16</b></br>" +
            "<i>* Referring to God *</i>" +
            "I am the man who has seen affliction Because of the rod of His wrath. He has driven me and made me walk In darkness and not in light. Surely against me He has turned His hand Repeatedly all the day. He has caused my flesh and my skin to waste away, He has broken my bones. He has besieged and encompassed me with bitterness and hardship. In dark places He has made me dwell, Like those who have long been dead. He has filled me with bitterness, He has made me drunk with wormwood. He has broken my teeth with gravel; He has made me cower in the dust.",
          start: "2019-08-28",
          end: "2019-08-28",
          className: "fc-bg-default",
          icon: "heart",
        },
        {
          title: "Restaurant",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget SPGETTOIIII, pellentesque pellentesque magna.",
          start: "2019-10-15T09:30:00",
          end: "2019-10-15T11:45:00",
          className: "fc-bg-default",
          icon: "glass",
          allDay: false,
        },
        {
          title: "Dinner",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",
          start: "2019-11-15T20:00:00",
          end: "2019-11-15T22:30:00",
          className: "fc-bg-default",
          icon: "cutlery",
          allDay: false,
        },

        {
          title: "Go Space :)",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",
          start: "2019-12-27",
          end: "2019-12-27",
          className: "fc-bg-default",
          icon: "rocket",
        },
        {
          title: "Dentist",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",
          start: "2019-12-29T11:30:00",
          end: "2019-12-29T012:30:00",
          className: "fc-bg-blue",
          icon: "medkit",
          allDay: false,
        },
      ],
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


