var didani_01 = 1;
var didani_02 = 1;
var didani_03 = 1;
var didani_04 = 1;
var didani_05 = 1;
var didani_06 = 1;
var didani_07 = 1;
var didani_08 = 1;

var oldscrollfromtop = 0;
var inputErrors_total = 0;
var anilengthtxt = 0;
var cursecslider = 1;
var inputErrors = 0;
var frameTime = 1 / 25;

var timeout;
var fps = 50;


////


var triggerElementID = null; // this variable is used to identity the triggering element
var fingerCount = 0;
var startX = 0;
var startY = 0;
var curX = 0;
var curY = 0;
var deltaX = 0;
var deltaY = 0;
var horzDiff = 0;
var vertDiff = 0;
var minLength = 72; // the shortest distance the user may swipe
var swipeLength = 0;
var swipeAngle = null;
var swipeDirection = null;



////


jQuery(document).ready(function ($) {



   function recheckwidgetvis() {

      $(".b24-widget-button-visible").css({ "overflow": "visible" });
      $(".b24-widget-button-visible").children("div").css({ "overflow": "visible" });

      window.setTimeout(recheckwidgetvis, 3000);
   }
   window.setTimeout(recheckwidgetvis, 500);


   //////


   $("#top_screen_logo_a").off().on("click", function () {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      //closemobmenu();
      return false;
   });



   /////// 

   $("#main_calc_screen_block_tabs_item_1").on("click", function () {

      $(this).addClass("main_calc_screen_block_tabs_item_sel");
      $("#main_calc_screen_block_tabs_item_2").removeClass("main_calc_screen_block_tabs_item_sel");
      $("#main_calc_screen_block_tabs_item_3").removeClass("main_calc_screen_block_tabs_item_sel");

      $("#main_calc_screen_block_cont").slideDown('slow');
      $("#main_calc2_screen_block_cont").slideUp('slow');
      $("#main_calc3_screen_block_cont").slideUp('slow');

   });

   $("#main_calc_screen_block_tabs_item_2").on("click", function () {

      $("#main_calc_screen_block_tabs_item_1").removeClass("main_calc_screen_block_tabs_item_sel");
      $(this).addClass("main_calc_screen_block_tabs_item_sel");
      $("#main_calc_screen_block_tabs_item_3").removeClass("main_calc_screen_block_tabs_item_sel");

      $("#main_calc_screen_block_cont").slideUp('slow');
      $("#main_calc2_screen_block_cont").slideDown('slow');
      $("#main_calc3_screen_block_cont").slideUp('slow');

   });

   $("#main_calc_screen_block_tabs_item_3").on("click", function () {

      $("#main_calc_screen_block_tabs_item_1").removeClass("main_calc_screen_block_tabs_item_sel");
      $("#main_calc_screen_block_tabs_item_2").removeClass("main_calc_screen_block_tabs_item_sel");
      $(this).addClass("main_calc_screen_block_tabs_item_sel");

      $("#main_calc_screen_block_cont").slideUp('slow');
      $("#main_calc2_screen_block_cont").slideUp('slow');
      $("#main_calc3_screen_block_cont").slideDown('slow');

   });


   /////// 

   $("#modal_form_screen_block_btn").on("click", function () {

      var uname = $("#modal_form_screen_block_fio").val();
      var umail = "";//$("#callback_screen_block_form_input_mail").val();
      var uphone = $("#modal_form_screen_block_phone").val();
      var utype = "leadform";
      var utypetxt = $(this).attr("rel-ftype");
      var urlstr = '/layout_main_only/savelead.php';

      uphone = uphone.replace('+8', '+7');
      var html = $.ajax({
         url: urlstr,
         global: false,
         type: "POST",
         data: ({ name: uname, mail: umail, phone: uphone, type: utype, typetxt: utypetxt }),
         dataType: "html",
         async: true,
         success: function (nucapa) {

            if (nucapa != "0") {
               $("#modal_form_screen_block_col1, #modal_form_screen_block_col2, #modal_form_screen_block_btn, #modal_form_screen_block_btn_na, #modal_form_screen_block_pca, #modal_form_screen_block_pca_2").slideUp("fast");
               $("#modal_form_screen_block_result").slideDown("fast");

               ym(94140999, 'reachGoal', 'LEAD');
               //  gtag('event', 'sent_form');
            } else {
               // $("#callback_screen_block_form").append("<div class='callback_screen_block_form_pretxt'><b>Не удалось отправить заявку, повторите попытку позже.</b></div><div class='cl36'><br></div>");

            }
         }
      });

   });

   /////// 

   $("#main_form_screen_block_btn").on("click", function () {

      var uname = $("#main_form_screen_block_fio").val();
      var umail = "";//$("#callback_screen_block_form_input_mail").val();
      var uphone = $("#main_form_screen_block_phone").val();
      var utype = "leadform";
      var utypetxt = $(this).attr("rel-ftype");
      var urlstr = '/layout_main_only/savelead.php';

      uphone = uphone.replace('+8', '+7');
      var html = $.ajax({
         url: urlstr,
         global: false,
         type: "POST",
         data: ({ name: uname, mail: umail, phone: uphone, type: utype, typetxt: utypetxt }),
         dataType: "html",
         async: true,
         success: function (nucapa) {

            if (nucapa != "0") {
               $("#main_form_screen_block_col1, #main_form_screen_block_col2, #main_form_screen_block_btn, #main_form_screen_block_btn_na, #main_form_screen_block_pca, #main_form_screen_block_pca_2").slideUp("fast");
               $("#main_form_screen_block_result").slideDown("fast");

               ym(94140999, 'reachGoal', 'LEAD');
               //  gtag('event', 'sent_form');
            } else {
               // $("#callback_screen_block_form").append("<div class='callback_screen_block_form_pretxt'><b>Не удалось отправить заявку, повторите попытку позже.</b></div><div class='cl36'><br></div>");

            }
         }
      });

   });

   /////// 

   $("#main_prefooter_form_screen_block_btn").on("click", function () {

      var uname = $("#main_prefooter_form_screen_block_fio").val();
      var umail = "";//$("#callback_screen_block_form_input_mail").val();
      var uphone = $("#main_prefooter_form_screen_block_phone").val();
      var utype = "leadform";
      var utypetxt = $(this).attr("rel-ftype");
      var urlstr = '/layout_main_only/savelead.php';

      uphone = uphone.replace('+8', '+7');
      var html = $.ajax({
         url: urlstr,
         global: false,
         type: "POST",
         data: ({ name: uname, mail: umail, phone: uphone, type: utype, typetxt: utypetxt }),
         dataType: "html",
         async: true,
         success: function (nucapa) {

            if (nucapa != "0") {
               $("#main_prefooter_form_screen_block_col1, #main_prefooter_form_screen_block_col2, #main_prefooter_form_screen_block_btn, #main_prefooter_form_screen_block_pca, #main_prefooter_form_screen_block_pca_2").slideUp("fast");
               $("#main_prefooter_form_screen_block_result").slideDown("fast");

               ym(94140999, 'reachGoal', 'LEAD');
               //  gtag('event', 'sent_form');
            } else {
               // $("#callback_screen_block_form").append("<div class='callback_screen_block_form_pretxt'><b>Не удалось отправить заявку, повторите попытку позже.</b></div><div class='cl36'><br></div>");

            }
         }
      });

   });


   //////////////

   $(".main_faq_screen_block_list_item_q").off().on("click", function () {

      tehel = $(this).parent().children(".main_faq_screen_block_list_item_a");

      if (tehel.is(":visible")) {

         tehel.slideUp('fast', function () {
            $(this).parent().removeClass('main_faq_screen_block_list_item_sel');
         });

      } else {

         tehel.slideDown('fast');
         $(this).parent().addClass('main_faq_screen_block_list_item_sel');

      }

   });


   //////////////


   $(".main_services_screen_block_list_item").off().on("click", function () {
      $("#main_services_screen_block_list_cont_txt_block").show();

      var nufromleft = $("#main_services_screen_block_list_cont_circle_0").offset().left;
      nufromleft -= $(window).width() / 2;
      nufromleft += 471;

      var nufromtop = $("#main_services_screen_block_list_cont_txt_block").offset().top;
      nufromtop += 100;
      $('html, body').animate({ scrollTop: nufromtop + "px" }, 'slow');

      var currel = $(this).attr("rel-num");

      $("#main_services_screen_block_bg").animate({ "left": "0", "opacity": "0.2" }, 200);
      $(".main_services_screen_block_list_item").animate({ "left": "-100px", "opacity": "0" }, 200);
      $("#main_services_screen_block_list_cont_line").animate({ "left": "-100px", "opacity": "0" }, 500);

      $("#main_services_screen_block_list_cont").animate({ "left": "-=" + nufromleft + "px" }, 500);
      $("#main_services_screen_block_list_cont_txt_block_item_" + currel).fadeIn('slow');
      $("#main_services_screen_block_list_cont_txt_block_xclose").fadeIn('slow');

   });


   $("#main_services_screen_block_list_cont_txt_block_xclose").off().on("click", function () {

      var nufromleft = $("#main_services_screen_block_list_cont_circle_0").offset().left;
      nufromleft -= $(window).width() / 2;
      nufromleft += 471;

      $("#main_services_screen_block_bg").animate({ "left": "0", "opacity": "1" }, 200);
      $(".main_services_screen_block_list_item").animate({ "left": "0", "opacity": "1" }, 200);
      $("#main_services_screen_block_list_cont_line").animate({ "left": "0", "opacity": "1" }, 500);

      $("#main_services_screen_block_list_cont").animate({ "left": "0" }, 500);
      $(".main_services_screen_block_list_cont_txt_block_item").fadeOut('fast');
      $("#main_services_screen_block_list_cont_txt_block_xclose").fadeOut('fast', function () {
         $("#main_services_screen_block_list_cont_txt_block").hide();
      });

   });


   //////////////


   $("#main_calc_screen_block_cont_win_res_btn, #main_calc2_screen_block_cont_win_res_btn, #main_calc3_screen_block_cont_win_res_btn, #main_calc_screen_block_cont_win_res_badbtn, #main_calc2_screen_block_cont_win_res_badbtn, #main_calc3_screen_block_cont_win_res_badbtn, #main_bonus_screen_block_btn").off().on("click", function () {

      var utypetxt = $(this).attr("rel-ftype");
      $("#modal_form_screen_block_btn").attr("rel-ftype", utypetxt);
      $("#modal_form_screen_block").fadeIn('slow');

   });


   $("#modal_form_screen_block_xclose").off().on("click", function () {

      $("#modal_form_screen_block").fadeOut('fast');

   });


   //////////////


   $("#top_screen_menu_btn").off().on("click", function () {

      $("#main_menu_block").fadeIn('slow');

   });


   $("#main_menu_block_xclose, #main_menu_block_cont .screen_footer_block_col2_item").off().on("click", function () {

      $("#main_menu_block").fadeOut('fast');

   });


   //////////////


   $("#main_complex_screen_block_graph_mob_zoom, #main_complex_screen_block_graph_mob_img").off().on("click", function () {

      $("#main_mobcomp_block").fadeIn('slow');

   });


   $("#main_mobcomp_block_xclose").off().on("click", function () {

      $("#main_mobcomp_block").fadeOut('fast');

   });


   //////////////

   $(".main_calc_screen_block_cont_win_form_q").on("mouseenter", function () {

      var currel = $(this).attr("rel-num");
      var curatxt = $("#main_calc_screen_block_cont_win_form_a_" + currel).html();
      var thisxpos = $(this).offset().left;
      thisxpos -= 100;
      var thisypos = $(this).offset().top;
      var thisypos2 = $(this).offset().top;
      thisypos -= 72;
      $("#main_calc_screen_block_a_block").stop().empty().html(curatxt).css({ "top": thisypos + "px", "left": thisxpos + "px", "display": "block", "opacity": "0" });
      thisypos2 -= 28;
      thisypos2 -= $("#main_calc_screen_block_a_block").height();
      $("#main_calc_screen_block_a_block").animate({ "top": thisypos2 + "px", "opacity": '1' }, 500);

   }).on("mouseleave", function () {

      $("#main_calc_screen_block_a_block").stop().fadeOut('fast');

   });

   $(".main_calc_screen_block_cont_win_res_q").on("mouseenter", function () {

      var currel = $(this).attr("rel-num");
      var curatxt = $("#main_calc_screen_block_cont_win_res_a_" + currel).html();
      var thisxpos = $(this).offset().left;
      thisxpos -= 160;
      var thisypos = $(this).offset().top;
      var thisypos2 = $(this).offset().top;
      thisypos -= 72;
      $("#main_calc_screen_block_a_block").stop().empty().html(curatxt).css({ "top": thisypos + "px", "left": thisxpos + "px", "display": "block", "opacity": "0" });
      thisypos2 -= 28;
      thisypos2 -= $("#main_calc_screen_block_a_block").height();
      $("#main_calc_screen_block_a_block").animate({ "top": thisypos2 + "px", "opacity": '1' }, 500);

   }).on("mouseleave", function () {

      $("#main_calc_screen_block_a_block").stop().fadeOut('fast');

   });



   //////////////

   $(".main_calc2_screen_block_cont_win_form_q").on("mouseenter", function () {

      var currel = $(this).attr("rel-num");
      var curatxt = $("#main_calc2_screen_block_cont_win_form_a_" + currel).html();
      var thisxpos = $(this).offset().left;
      thisxpos -= 100;
      var thisypos = $(this).offset().top;
      var thisypos2 = $(this).offset().top;
      thisypos -= 72;
      $("#main_calc2_screen_block_a_block").stop().empty().html(curatxt).css({ "top": thisypos + "px", "left": thisxpos + "px", "display": "block", "opacity": "0" });
      thisypos2 -= 28;
      thisypos2 -= $("#main_calc2_screen_block_a_block").height();
      $("#main_calc2_screen_block_a_block").animate({ "top": thisypos2 + "px", "opacity": '1' }, 500);

   }).on("mouseleave", function () {

      $("#main_calc2_screen_block_a_block").stop().fadeOut('fast');

   });

   $(".main_calc2_screen_block_cont_win_res_q").on("mouseenter", function () {

      var currel = $(this).attr("rel-num");
      var curatxt = $("#main_calc2_screen_block_cont_win_res_a_" + currel).html();
      var thisxpos = $(this).offset().left;
      thisxpos -= 160;
      var thisypos = $(this).offset().top;
      var thisypos2 = $(this).offset().top;
      thisypos -= 72;
      $("#main_calc2_screen_block_a_block").stop().empty().html(curatxt).css({ "top": thisypos + "px", "left": thisxpos + "px", "display": "block", "opacity": "0" });
      thisypos2 -= 28;
      thisypos2 -= $("#main_calc2_screen_block_a_block").height();
      $("#main_calc2_screen_block_a_block").animate({ "top": thisypos2 + "px", "opacity": '1' }, 500);

   }).on("mouseleave", function () {

      $("#main_calc2_screen_block_a_block").stop().fadeOut('fast');

   });



   //////////////

   $(".main_calc3_screen_block_cont_win_form_q").on("mouseenter", function () {

      var currel = $(this).attr("rel-num");
      var curatxt = $("#main_calc3_screen_block_cont_win_form_a_" + currel).html();
      var thisxpos = $(this).offset().left;
      thisxpos -= 100;
      var thisypos = $(this).offset().top;
      var thisypos2 = $(this).offset().top;
      thisypos -= 72;
      $("#main_calc3_screen_block_a_block").stop().empty().html(curatxt).css({ "top": thisypos + "px", "left": thisxpos + "px", "display": "block", "opacity": "0" });
      thisypos2 -= 28;
      thisypos2 -= $("#main_calc3_screen_block_a_block").height();
      $("#main_calc3_screen_block_a_block").animate({ "top": thisypos2 + "px", "opacity": '1' }, 500);

   }).on("mouseleave", function () {

      $("#main_calc3_screen_block_a_block").stop().fadeOut('fast');

   });

   $(".main_calc3_screen_block_cont_win_res_q").on("mouseenter", function () {

      var currel = $(this).attr("rel-num");
      var curatxt = $("#main_calc3_screen_block_cont_win_res_a_" + currel).html();
      var thisxpos = $(this).offset().left;
      thisxpos -= 160;
      var thisypos = $(this).offset().top;
      var thisypos2 = $(this).offset().top;
      thisypos -= 72;
      $("#main_calc3_screen_block_a_block").stop().empty().html(curatxt).css({ "top": thisypos + "px", "left": thisxpos + "px", "display": "block", "opacity": "0" });
      thisypos2 -= 28;
      thisypos2 -= $("#main_calc3_screen_block_a_block").height();
      $("#main_calc3_screen_block_a_block").animate({ "top": thisypos2 + "px", "opacity": '1' }, 500);

   }).on("mouseleave", function () {

      $("#main_calc3_screen_block_a_block").stop().fadeOut('fast');

   });




   ///////////////


   $("#modal_form_screen_block_fio, #modal_form_screen_block_phone")
      .bind('keyup', function () {
         processmodalform();
      })
      .bind('mouseout keyup', function () {
         processmodalform();
      })
      .bind('focus', function () {
         interval = setInterval(processmodalform, 200);
      })
      .bind('blur', function () {
         clearInterval(interval);
         processmodalform();
      });

   $("#modal_form_screen_block_police").bind('change', function () {
      processmodalform();
   })

   ///////////////

   $("#main_form_screen_block_fio, #main_form_screen_block_phone")
      .bind('keyup', function () {
         processmainform();
      })
      .bind('mouseout keyup', function () {
         processmainform();
      })
      .bind('focus', function () {
         interval = setInterval(processmainform, 200);
      })
      .bind('blur', function () {
         clearInterval(interval);
         processmainform();
      });

   $("#main_form_screen_block_police").bind('change', function () {
      processmainform();
   })


   ///////////////

   $("#main_prefooter_form_screen_block_fio, #main_prefooter_form_screen_block_phone")
      .bind('keyup', function () {
         processprefooterform();
      })
      .bind('mouseout keyup', function () {
         processprefooterform();
      })
      .bind('focus', function () {
         interval = setInterval(processprefooterform, 200);
      })
      .bind('blur', function () {
         clearInterval(interval);
         processprefooterform();
      });

   $("#main_prefooter_form_screen_block_police").bind('change', function () {
      processprefooterform();
   })


   ///////////////

   $("#modal_form_screen_block_phone").mask("+9 (999) 999-9999");
   $("#main_prefooter_form_screen_block_phone").mask("+9 (999) 999-9999");
   $("#main_form_screen_block_phone").mask("+9 (999) 999-9999");


   $(".main_calc_screen_block_cont_win_form_item_input")
      .bind('keyup', function () {
         processcalc();
      })
      .bind('mouseout keyup', function () {
         processcalc();
      })
      .bind('focus', function () {
         interval = setInterval(processcalc, 200);
      })
      .bind('blur', function () {
         clearInterval(interval);
         processcalc();
      });


   $(".main_calc2_screen_block_cont_win_form_item_input")
      .bind('keyup', function () {
         processcalc2();
      })
      .bind('mouseout keyup', function () {
         processcalc2();
      })
      .bind('focus', function () {
         interval = setInterval(processcalc2, 200);
      })
      .bind('blur', function () {
         clearInterval(interval);
         processcalc2();
      });


   $(".main_calc3_screen_block_cont_win_form_item_input")
      .bind('keyup', function () {
         processcalc3();
      })
      .bind('mouseout keyup', function () {
         processcalc3();
      })
      .bind('focus', function () {
         interval = setInterval(processcalc3, 200);
      })
      .bind('blur', function () {
         clearInterval(interval);
         processcalc3();
      });


   /////////////////////////////////////////////////////
   /////////////////////////////////////////////////////
   /////////////////////////////////////////////////////


   $("#main_howwedo_screen_block_list_container").bind('touchstart', function (e) {
      touchStart(e.originalEvent, "main_howwedo_screen_block_list_container");
   });
   $("#main_howwedo_screen_block_list_container").bind('touchmove', function (e) {
      touchMove(e.originalEvent);
   });
   $("#main_howwedo_screen_block_list_container").bind('touchend', function (e) {
      touchEnd(e.originalEvent, "main_howwedo_screen_block_list_container");
   });


   $("#main_reviews_screen_block_wcont").bind('touchstart', function (e) {
      touchStart(e.originalEvent, "main_reviews_screen_block_wcont");
   });
   $("#main_reviews_screen_block_wcont").bind('touchmove', function (e) {
      touchMove(e.originalEvent);
   });
   $("#main_reviews_screen_block_wcont").bind('touchend', function (e) {
      touchEnd(e.originalEvent, "main_reviews_screen_block_wcont");
   });

   function touchStart(event, passedName) {
      // disable the standard ability to select the touched object
      //event.preventDefault();
      // get the total number of fingers touching the screen
      fingerCount = event.touches.length;
      // since we're looking for a swipe (single finger) and not a gesture (multiple fingers),
      // check that only one finger was used
      if (fingerCount == 1) {
         // get the coordinates of the touch
         startX = event.touches[0].pageX;
         startY = event.touches[0].pageY;
         // store the triggering element ID
         triggerElementID = passedName;
      } else {
         // more than one finger touched so cancel
         touchCancel(event);
      }
   }

   function touchMove(event) {
      //event.preventDefault();
      if (event.touches.length == 1) {
         curX = event.touches[0].pageX;
         curY = event.touches[0].pageY;
      } else {
         touchCancel(event);
      }
   }

   function touchEnd(event) {
      //event.preventDefault();
      // check to see if more than one finger was used and that there is an ending coordinate
      if (fingerCount == 1 && curX != 0) {
         // use the Distance Formula to determine the length of the swipe
         swipeLength = Math.round(Math.sqrt(Math.pow(curX - startX, 2) + Math.pow(curY - startY, 2)));
         // if the user swiped more than the minimum length, perform the appropriate action
         if (swipeLength >= minLength) {
            caluculateAngle();
            determineSwipeDirection();
            processingRoutine();
            touchCancel(event); // reset the variables
         } else {
            touchCancel(event);
         }
      } else {
         touchCancel(event);
      }
   }

   function touchCancel(event) {
      // reset the variables back to default values
      fingerCount = 0;
      startX = 0;
      startY = 0;
      curX = 0;
      curY = 0;
      deltaX = 0;
      deltaY = 0;
      horzDiff = 0;
      vertDiff = 0;
      swipeLength = 0;
      swipeAngle = null;
      swipeDirection = null;
      triggerElementID = null;
   }

   function caluculateAngle() {
      var X = startX - curX;
      var Y = curY - startY;
      var Z = Math.round(Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2))); //the distance - rounded - in pixels
      var r = Math.atan2(Y, X); //angle in radians (Cartesian system)
      swipeAngle = Math.round(r * 180 / Math.PI); //angle in degrees
      if (swipeAngle < 0) { swipeAngle = 360 - Math.abs(swipeAngle); }
   }

   function determineSwipeDirection() {

      if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
         swipeDirection = 'left';
      } else if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
         swipeDirection = 'left';
      } else if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
         swipeDirection = 'right';
      } else if ((swipeAngle > 45) && (swipeAngle < 135)) {
         swipeDirection = 'down';
      } else {
         swipeDirection = 'up';
      }
   }

   function processingRoutine() {
      var swipedElement = document.getElementById(triggerElementID);
      if (swipeDirection == 'left') {
         //sliders.goToNext();      
         if (triggerElementID == "main_howwedo_screen_block_list_container") {
            howwedo_gonext();
         } else if (triggerElementID == "main_reviews_screen_block_wcont") {
            reviews_gonext();
         }

      } else if (swipeDirection == 'right') {
         //sliders.goToPrev();
         if (triggerElementID == "main_howwedo_screen_block_list_container") {
            howwedo_goprev();
         } else if (triggerElementID == "main_reviews_screen_block_wcont") {
            reviews_goprev();
         }
      } else if (swipeDirection == 'up') {
         //sliders.goToPrev();         
      } else if (swipeDirection == 'down') {
         //sliders.goToNext();         
      }
   }


   /////////////////////////////////////////////////////
   /////////////////////////////////////////////////////
   /////////////////////////////////////////////////////

   /////////////

   if (curpagetype == "main") {

      var canvas = document.getElementById("main_complex_screen_block_graph_net");
      var ctx = canvas.getContext("2d");
      //ctx.fillStyle = "blue";
      //ctx.fillRect(0, 0, canvas.width, canvas.height);

      //// init


      ctx.clearRect(0, 0, canvas.width, canvas.height);

      var x = 0,
         y = 0;

      ///
      var diffx = $("#main_complex_screen_block_graph").offset().left;
      var diffy = $("#main_complex_screen_block_graph").offset().top;

      var cntrx = $("#main_complex_screen_block_graph_core").offset().left;
      cntrx -= diffx;
      cntrx += ($("#main_complex_screen_block_graph_core").width()) / 2;
      var cntry = $("#main_complex_screen_block_graph_core").offset().top;
      cntry -= diffy;
      cntry += ($("#main_complex_screen_block_graph_core").height()) / 2;

      x = cntrx;
      y = cntry;

      ////

      $(".main_complex_screen_block_graph_item").each(function () {

         var curelement = $(this);
         var dx = x - (curelement.offset().left + (curelement.width() / 2)),
            dy = y - (curelement.offset().top + (curelement.height() / 2));

         var distance = Math.max(0, 500 - Math.sqrt(dx * dx + dy * dy));
         var elopac = ((50 + (50 / 100 * (distance / 5))) / 100);

         distance = 300 + (100 / 100 * (distance / 5))
         curelement.css({
            'width': distance + 'px',
            'opacity': elopac
         });

         /////
         var dotx = 0;
         if (curelement.attr('rel-side') == "left") {
            dotx = (curelement.offset().left - diffx + (curelement.width()));
         } else {
            dotx = (curelement.offset().left - diffx);
         }
         context = ctx;
         context.setLineDash([3, 2]);

         context.beginPath();
         context.moveTo(cntrx, cntry);

         // bezier curve
         context.bezierCurveTo(cntrx, cntry, cntrx, (curelement.offset().top - diffy + (curelement.height()) / 2), dotx, (curelement.offset().top - diffy + (curelement.height()) / 2));

         context.lineWidth = 1;

         //var tehopacity = ;
         var _opacity = Math.round(Math.min(Math.max(elopac || 1, 0), 1) * 255);
         context.strokeStyle = "#00FFFF" + _opacity.toString(16).toUpperCase();
         //context.strokeStyle = '#00FFFF0F';
         context.stroke();

         /*
         // second half of curve
         context.beginPath();
         context.strokeStyle="#DDDDFF";
         context.bezierCurveTo(400, 150, 500, 120, 450, 20);
         context.stroke();
         */

      });


      $("#main_complex_screen_block_graph").off().on("mousemove", function (e) {


         ctx.clearRect(0, 0, canvas.width, canvas.height);

         var x = e.pageX,
            y = e.pageY;

         ///
         var diffx = $("#main_complex_screen_block_graph").offset().left;
         var diffy = $("#main_complex_screen_block_graph").offset().top;


         var cntrx = $("#main_complex_screen_block_graph_core").offset().left;
         cntrx -= diffx;
         cntrx += ($("#main_complex_screen_block_graph_core").width()) / 2;
         var cntry = $("#main_complex_screen_block_graph_core").offset().top;
         cntry -= diffy;
         cntry += ($("#main_complex_screen_block_graph_core").height()) / 2;

         ////

         $(".main_complex_screen_block_graph_item").each(function () {

            var curelement = $(this);
            var dx = x - (curelement.offset().left + (curelement.width() / 2)),
               dy = y - (curelement.offset().top + (curelement.height() / 2));

            var distance = Math.max(0, 500 - Math.sqrt(dx * dx + dy * dy));
            var elopac = ((50 + (50 / 100 * (distance / 5))) / 100);

            distance = 300 + (100 / 100 * (distance / 5))
            curelement.css({
               'width': distance + 'px',
               'opacity': elopac
            });

            /////
            var dotx = 0;
            if (curelement.attr('rel-side') == "left") {
               dotx = (curelement.offset().left - diffx + (curelement.width()));
            } else {
               dotx = (curelement.offset().left - diffx);
            }
            context = ctx;
            context.setLineDash([3, 2]);

            context.beginPath();
            context.moveTo(cntrx, cntry);

            // bezier curve
            context.bezierCurveTo(cntrx, cntry, cntrx, (curelement.offset().top - diffy + (curelement.height()) / 2), dotx, (curelement.offset().top - diffy + (curelement.height()) / 2));

            context.lineWidth = 1;

            //var tehopacity = ;
            var _opacity = Math.round(Math.min(Math.max(elopac || 1, 0), 1) * 255);
            context.strokeStyle = "#00FFFF" + _opacity.toString(16).toUpperCase();
            //context.strokeStyle = '#00FFFF0F';
            context.stroke();

            /*
            // second half of curve
            context.beginPath();
            context.strokeStyle="#DDDDFF";
            context.bezierCurveTo(400, 150, 500, 120, 450, 20);
            context.stroke();
            */

         });


      });

   }

   //////////////

   $(".main_whyus_screen_block_list_container_cont_item").off().on("mouseleave, mousemove", function () {

      var nufromtop = $(this).offset().top - 2;
      var nufromleft = $(this).offset().left - 2;

      var nuheaderval = $(this).find(".main_whyus_screen_block_list_container_cont_item_header").html();
      var nutxtval = $(this).find(".main_whyus_screen_block_list_container_cont_item_txt").html();

      var currel = $(this).attr("rel-curnum");


      $("#main_whyus_screen_block_list_container_fullinfo_" + currel + ":not(:animated)").find(".main_whyus_screen_block_list_container_fullinfo_cont_header").html(nuheaderval);
      $("#main_whyus_screen_block_list_container_fullinfo_" + currel + ":not(:animated)").find(".main_whyus_screen_block_list_container_fullinfo_cont_txt").html(nutxtval);


      $("#main_whyus_screen_block_list_container_fullinfo_" + currel + ":not(:animated)").css({ "left": nufromleft + "px", "top": nufromtop + "px" }).fadeIn('fast', function () {

      });

   }).on("mouseleave", function () {

      var currel = $(this).attr("rel-curnum");
      $("#main_whyus_screen_block_list_container_fullinfo_" + currel).slideUp('fast');
      $("#main_whyus_screen_block_list_container_fullinfo_" + currel + " .main_whyus_screen_block_list_container_fullinfo_cont_header").empty();
      $("#main_whyus_screen_block_list_container_fullinfo_" + currel + " .main_whyus_screen_block_list_container_fullinfo_cont_txt").empty();

   });



   /////////////

   $('#main_howwedo_screen_block').mousemove(function (e) {

      var curxposproc = $(window).width();
      curxposproc /= 100;
      curxposproc = e.pageX / curxposproc;
      var nufromx = 0;
      var curyposproc = $(window).height();
      curyposproc /= 100;
      curyposproc = (e.pageY - $(this).offset().top) / curyposproc;
      var nufromy = 0;

      nufromx = 20;
      nufromx /= 100;
      nufromx *= curxposproc;

      nufromy = 20;
      nufromy /= 100;
      nufromy *= curyposproc;
      $('#main_howwedo_screen_block_bg_net_cont').stop().animate({
         'marginLeft': nufromx + 'px',
         'marginTop': nufromy + 'px'
      }, 0);
      $('#main_howwedo_screen_block_bg_icons_block').stop().animate({
         'marginRight': nufromx + 'px',
         'marginBottom': nufromy + 'px'
      }, 0);

   });

   //////

   $('#main_first_screen_block_fem').mousemove(function (e) {

      if ($(document).scrollTop() < 100) {

         var curxposproc = $(window).width();
         curxposproc /= 100;
         curxposproc = e.pageX / curxposproc;
         var nufromx = 0;
         var curyposproc = $(window).height();
         curyposproc /= 100;
         curyposproc = e.pageY / curyposproc;
         var nufromy = 0;

         nufromx = 16;
         nufromx /= 100;
         nufromx *= curxposproc;

         nufromy = 16;
         nufromy /= 100;
         nufromy *= curyposproc;
         $('#main_first_screen_ini_block_video_circle_02').stop().animate({
            'marginLeft': nufromx + 'px',
            'marginTop': nufromy + 'px'
         }, 0);

         nufromx = 60;
         nufromx /= 100;
         nufromx *= curxposproc;

         nufromy = 60;
         nufromy /= 100;
         nufromy *= curyposproc;
         $('#main_first_screen_ini_block_video_circle_03').stop().animate({
            'marginLeft': nufromx + 'px',
            'marginTop': nufromy + 'px'
         }, 0);

         nufromx = 120;
         nufromx /= 100;
         nufromx *= curxposproc;

         nufromy = 120;
         nufromy /= 100;
         nufromy *= curyposproc;
         $('#main_first_screen_ini_block_video_circle_04').stop().animate({
            'marginLeft': nufromx + 'px',
            'marginTop': nufromy + 'px'
         }, 0);

         nufromx = 150;
         nufromx /= 100;
         nufromx *= curxposproc;

         nufromy = 150;
         nufromy /= 100;
         nufromy *= curyposproc;
         $('#main_first_screen_ini_block_video_circle_05').stop().animate({
            'marginLeft': nufromx + 'px',
            'marginTop': nufromy + 'px'
         }, 0);

         nufromx = 240;
         nufromx /= 100;
         nufromx *= curxposproc;

         nufromy = 240;
         nufromy /= 100;
         nufromy *= curyposproc;
         $('#main_first_screen_ini_block_video_circle_06').stop().animate({
            'marginLeft': nufromx + 'px',
            'marginTop': nufromy + 'px'
         }, 0);

         nufromx = 260;
         nufromx /= 100;
         nufromx *= curxposproc;

         nufromy = 260;
         nufromy /= 100;
         nufromy *= curyposproc;
         $('#main_first_screen_ini_block_video_circle_07').stop().animate({
            'marginLeft': nufromx + 'px',
            'marginTop': nufromy + 'px'
         }, 0);

         nufromx = 260;
         nufromx /= 100;
         nufromx *= curxposproc;

         nufromy = 260;
         nufromy /= 100;
         nufromy *= curyposproc;
         $('#main_first_screen_ini_block_video_circle_08').stop().animate({
            'marginLeft': nufromx + 'px',
            'marginTop': nufromy + 'px'
         }, 0);

         nufromx = 280;
         nufromx /= 100;
         nufromx *= curxposproc;

         nufromy = 280;
         nufromy /= 100;
         nufromy *= curyposproc;
         $('#main_first_screen_ini_block_video_circle_09').stop().animate({
            'marginLeft': nufromx + 'px',
            'marginTop': nufromy + 'px'
         }, 0);


         ///////////


         nufromx = 280;
         nufromx /= 100;
         nufromx *= curxposproc;

         nufromy = 280;
         nufromy /= 100;
         nufromy *= curyposproc;
         $('#main_first_screen_ini_block_video_txt_01').stop().animate({
            'marginLeft': nufromx + 'px',
            'marginTop': nufromy + 'px'
         }, 0);


         nufromx = 20;
         nufromx /= 100;
         nufromx *= curxposproc;

         nufromy = 20;
         nufromy /= 100;
         nufromy *= curyposproc;
         $('#main_first_screen_ini_block_video_txt_02').stop().animate({
            'marginLeft': nufromx + 'px',
            'marginTop': nufromy + 'px'
         }, 0);


         nufromx = 60;
         nufromx /= 100;
         nufromx *= curxposproc;

         nufromy = 60;
         nufromy /= 100;
         nufromy *= curyposproc;
         $('#main_first_screen_ini_block_video_txt_03').stop().animate({
            'marginLeft': nufromx + 'px',
            'marginTop': nufromy + 'px'
         }, 0);


         nufromx = 40;
         nufromx /= 100;
         nufromx *= curxposproc;

         nufromy = 40;
         nufromy /= 100;
         nufromy *= curyposproc;
         $('#main_first_screen_ini_block_video_txt_04').stop().animate({
            'marginLeft': nufromx + 'px',
            'marginTop': nufromy + 'px'
         }, 0);


         nufromx = 100;
         nufromx /= 100;
         nufromx *= curxposproc;

         nufromy = 100;
         nufromy /= 100;
         nufromy *= curyposproc;
         $('#main_first_screen_ini_block_video_txt_05').stop().animate({
            'marginLeft': nufromx + 'px',
            'marginTop': nufromy + 'px'
         }, 0);


         nufromx = 100;
         nufromx /= 100;
         nufromx *= curxposproc;

         nufromy = 100;
         nufromy /= 100;
         nufromy *= curyposproc;
         $('#main_first_screen_ini_block_video_txt_06').stop().animate({
            'marginLeft': nufromx + 'px',
            'marginTop': nufromy + 'px'
         }, 0);



         nufromx = 20;
         nufromx /= 100;
         nufromx *= -curxposproc;

         nufromy = 20;
         nufromy /= 100;
         nufromy *= -curyposproc;
         $('#main_first_screen_ini_bg_plus').stop().animate({
            'marginLeft': nufromx + 'px',
            'marginTop': nufromy + 'px'
         }, 0);




         ///////////////


         degree = 360;
         degree /= 100;
         degree *= curxposproc;

         $("#main_first_screen_ini_block_video_circle_02").css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
         $("#main_first_screen_ini_block_video_circle_02").css({ '-moz-transform': 'rotate(' + degree + 'deg)' });

         $("#main_first_screen_ini_block_video_circle_03").css({ WebkitTransform: 'rotate(' + -(degree * 1.3) + 'deg)' });
         $("#main_first_screen_ini_block_video_circle_03").css({ '-moz-transform': 'rotate(' + -(degree * 1.3) + 'deg)' });

         $("#main_first_screen_ini_block_video_circle_04").css({ WebkitTransform: 'rotate(' + -(degree / 2) + 'deg)' });
         $("#main_first_screen_ini_block_video_circle_04").css({ '-moz-transform': 'rotate(' + -(degree / 2) + 'deg)' });

         $("#main_first_screen_ini_block_video_circle_05").css({ WebkitTransform: 'rotate(' + (degree / 4) + 'deg)' });
         $("#main_first_screen_ini_block_video_circle_05").css({ '-moz-transform': 'rotate(' + (degree / 4) + 'deg)' });

         $("#main_first_screen_ini_block_video_circle_06").css({ WebkitTransform: 'rotate(' + -(degree * 1.3) + 'deg)' });
         $("#main_first_screen_ini_block_video_circle_06").css({ '-moz-transform': 'rotate(' + -(degree * 1.3) + 'deg)' });

         $("#main_first_screen_ini_block_video_circle_07").css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
         $("#main_first_screen_ini_block_video_circle_07").css({ '-moz-transform': 'rotate(' + degree + 'deg)' });

         $("#main_first_screen_ini_block_video_circle_08").css({ WebkitTransform: 'rotate(-' + degree + 'deg)' });
         $("#main_first_screen_ini_block_video_circle_08").css({ '-moz-transform': 'rotate(-' + degree + 'deg)' });

         $("#main_first_screen_ini_block_video_circle_09").css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
         $("#main_first_screen_ini_block_video_circle_09").css({ '-moz-transform': 'rotate(' + degree + 'deg)' });



      }

   });


   var $elie = $("#main_first_screen_ini_block_video_circle_02"), degree = 0, timer;

   //animateTheTopCircles();

   function animateTheTopCircles() {

      $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
      $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });
      timer = setTimeout(function () {
         ++degree; animateTheTopCircles();
      }, 10);

   }




   //////////////


   $(".main_funnel_screen_block_item").off().on("click", function () {

      var currel = $(this).attr("rel-curnum");

      $(".main_funnel_screen_block_item_txt").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).slideDown('slow');
         } else {
            $(this).hide();
         }
      });
      $(".main_funnel_screen_block_item").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).addClass('main_funnel_screen_block_item_sel');
         } else {
            $(this).removeClass('main_funnel_screen_block_item_sel');
         }
      });


   });



   //////////////


   $(".main_funnel_screen_block_mob_item").off().on("click", function () {

      var nufromtop = $("#main_funnel_screen_block_cont_mob").offset().top;
      nufromtop -= 100;
      $('html, body').animate({ scrollTop: nufromtop + "px" }, 'slow');

      var currel = $(this).attr("rel-curnum");

      $(".main_funnel_screen_block_mob_item_txt").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).slideDown('slow');
         } else {
            $(this).hide();
         }
      });
      $(".main_funnel_screen_block_mob_item").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).addClass('main_funnel_screen_block_mob_item_sel');
         } else {
            $(this).removeClass('main_funnel_screen_block_mob_item_sel');
         }
      });

      $("#main_funnel_screen_block_cont_mob").animate({ "left": '-324px' }, 500);


   });


   //////////////


   $("#main_funnel_screen_block_cont_mob_txt_xclose").off().on("click", function () {

      var nufromtop = $("#main_funnel_screen_block_cont_mob").offset().top;
      nufromtop -= 100;
      $('html, body').animate({ scrollTop: nufromtop + "px" }, 'slow');

      $(".main_funnel_screen_block_mob_item_txt").each(function () {
         $(this).hide();
      });
      $(".main_funnel_screen_block_mob_item").each(function () {
         $(this).removeClass('main_funnel_screen_block_mob_item_sel');
      });

      $("#main_funnel_screen_block_cont_mob").animate({ "left": '0' }, 500);


   });


   //////////////


   $("#main_methods_screen_block_container_controls_next").off().on("click", function () {

      var currel = $(".main_methods_screen_block_container_dots_item_sel").attr("rel-curnum");
      var totalrel = $(".main_methods_screen_block_container_cont_item").length;
      currel++;
      if (currel > totalrel) { currel = 1; }

      $(".main_methods_screen_block_container_cont_item").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).slideDown('slow');
         } else {
            $(this).hide();
         }
      });
      $(".main_methods_screen_block_container_dots_item").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).addClass('main_methods_screen_block_container_dots_item_sel');
         } else {
            $(this).removeClass('main_methods_screen_block_container_dots_item_sel');
         }
      });


   });


   $("#main_methods_screen_block_container_controls_prev").off().on("click", function () {

      var currel = $(".main_methods_screen_block_container_dots_item_sel").attr("rel-curnum");
      var totalrel = $(".main_methods_screen_block_container_dots_item").length;
      currel--;
      if (currel < 1) { currel = totalrel; }

      $(".main_methods_screen_block_container_cont_item").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).slideDown('slow');
         } else {
            $(this).hide();
         }
      });
      $(".main_methods_screen_block_container_dots_item").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).addClass('main_methods_screen_block_container_dots_item_sel');
         } else {
            $(this).removeClass('main_methods_screen_block_container_dots_item_sel');
         }
      });


   });


   $(".main_methods_screen_block_container_dots_item").off().on("click", function () {

      var currel = $(this).attr("rel-curnum");
      var totalrel = $(".main_methods_screen_block_container_dots_item").length;

      $(".main_methods_screen_block_container_cont_item").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).slideDown('slow');
         } else {
            $(this).hide();
         }
      });
      $(".main_methods_screen_block_container_dots_item").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).addClass('main_methods_screen_block_container_dots_item_sel');
         } else {
            $(this).removeClass('main_methods_screen_block_container_dots_item_sel');
         }
      });


   });




   //////////////


   $("#main_reviews_screen_block_controls_next").off().on("click", function () {
      reviews_gonext();
   });

   function reviews_gonext() {

      var currel = $("#main_reviews_screen_block_controls_txt span").html();
      var totalrel = $(".main_reviews_screen_block_list_img_container_cont_item").length;
      currel++;
      if (currel > totalrel) { currel = 1; }
      $("#main_reviews_screen_block_controls_txt span").html(currel);


      $(".main_reviews_screen_block_list_img_container_cont_item").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).slideDown('slow');//, function(){ $(this).addClass("main_reviews_screen_block_list_img_container_cont_item_sel"); });
         } else {
            $(this).hide();//slideUp('slow');//removeClass("main_reviews_screen_block_list_img_container_cont_item_sel");
         }
      });
      $(".main_reviews_screen_block_list_txt_container_cont_item").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).slideDown('slow');//, function(){ $(this).addClass("main_reviews_screen_block_list_txt_container_cont_item_sel"); });
         } else {
            $(this).hide();//.slideUp('slow');//.removeClass("main_reviews_screen_block_list_txt_container_cont_item_sel");
         }
         /*
         if(thisrel == currel){
            $(this).fadeIn('fast', function(){
               $("#screen_posibs_block_gallery_nav_num_cur").attr('rel-curgalnum',currel);
               var curreltxt = currel;
               if(curreltxt < 10){ curreltxt="0"+currel; }
               $("#screen_posibs_block_gallery_nav_num_cur").empty().html(curreltxt);
            });
         }else{
            $(this).fadeOut('fast');
         }
         */
      });


   }


   $("#main_reviews_screen_block_controls_prev").off().on("click", function () {
      reviews_goprev();
   });

   function reviews_goprev() {

      var currel = $("#main_reviews_screen_block_controls_txt span").html();
      var totalrel = $(".main_reviews_screen_block_list_img_container_cont_item").length;
      currel--;
      if (currel < 1) { currel = totalrel; }
      $("#main_reviews_screen_block_controls_txt span").html(currel);


      $(".main_reviews_screen_block_list_img_container_cont_item").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).slideDown('slow');
         } else {
            $(this).hide();
         }
      });
      $(".main_reviews_screen_block_list_txt_container_cont_item").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).slideDown('slow');
         } else {
            $(this).hide();
         }
      });


   }


   ///////////////////////


   $("#main_howwedo_screen_block_container_controls_next").off().on("click", function () {

      howwedo_gonext();

   });


   function howwedo_gonext() {
      var currel = $("#main_howwedo_screen_block_container_controls_txt span").html();
      var totalrel = $(".main_howwedo_screen_block_list_container_cont_item").length;
      currel++;
      if (currel > totalrel) { currel = 1; }
      $("#main_howwedo_screen_block_container_controls_txt span").html(currel);


      $(".main_howwedo_screen_block_bg_icons_ico").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).fadeIn('slow');
         } else {
            $(this).fadeOut('slow');
         }
      });

      var item_width = $('.main_howwedo_screen_block_list_container_cont_item').outerWidth();
      $('.main_howwedo_screen_block_list_container_cont_item:first').animate({ "opacity": 0 }, 300);
      $('#main_howwedo_screen_block_list_container_cont:not(:animated)').animate({ "margin-left": '-=' + item_width + "px" }, 500, function () {
         $('.main_howwedo_screen_block_list_container_cont_item:last').after($('.main_howwedo_screen_block_list_container_cont_item:first'));
         $('#main_howwedo_screen_block_list_container_cont').css({ 'margin-left': '+=' + item_width + 'px' });
         $('.main_howwedo_screen_block_list_container_cont_item').css({ "opacity": 1 });
      });
   }

   $("#main_howwedo_screen_block_container_controls_prev").off().on("click", function () {

      howwedo_goprev();

   });

   function howwedo_goprev() {

      var currel = $("#main_howwedo_screen_block_container_controls_txt span").html();
      var totalrel = $(".main_howwedo_screen_block_list_container_cont_item").length;
      currel--;
      if (currel < 1) { currel = totalrel; }
      $("#main_howwedo_screen_block_container_controls_txt span").html(currel);


      $(".main_howwedo_screen_block_bg_icons_ico").each(function () {
         var thisrel = $(this).attr("rel-curnum");
         if (thisrel == currel) {
            $(this).fadeIn('slow');
         } else {
            $(this).fadeOut('slow');
         }
      });

      var item_width = $('.main_howwedo_screen_block_list_container_cont_item').outerWidth();
      $('#main_howwedo_screen_block_list_container_cont').css({ 'margin-left': '-=' + item_width + 'px' });
      $('.main_howwedo_screen_block_list_container_cont_item:first').before($('.main_howwedo_screen_block_list_container_cont_item:last'));
      $('.main_howwedo_screen_block_list_container_cont_item:first').css({ "opacity": 0 });
      $('.main_howwedo_screen_block_list_container_cont_item:first').animate({ "opacity": 1 }, 800);
      $('#main_howwedo_screen_block_list_container_cont:not(:animated)').animate({ "margin-left": '+=' + item_width + "px" }, 500, function () {
      });

   }


   ///////////////////////


   $("#main_certs_screen_block_controls_next").off().on("click", function () {

      var currel = $("#main_certs_screen_block_controls_txt span").html();
      var totalrel = $(".main_certs_screen_block_list_container_cont_item").length;
      currel++;
      if (currel > totalrel) { currel = 1; }
      $("#main_certs_screen_block_controls_txt span").html(currel);



      var item_width = $('.main_certs_screen_block_list_container_cont_item').outerWidth() + 36;
      $('#main_certs_screen_block_list_container_cont').css({ 'margin-left': '-=' + item_width + 'px' });
      $('.main_certs_screen_block_list_container_cont_item:first').before($('.main_certs_screen_block_list_container_cont_item:last'));
      $('.main_certs_screen_block_list_container_cont_item:first').css({ "opacity": 0 });
      $('.main_certs_screen_block_list_container_cont_item:first').animate({ "opacity": 1 }, 300);
      $('#main_certs_screen_block_list_container_cont:not(:animated)').animate({ "margin-left": '+=' + item_width + "px" }, 500, function () {
         //$('#main_certs_screen_block_list_container_cont').css({'margin-left' : '-='+item_width+'px'});
      });


   });


   $("#main_certs_screen_block_controls_prev").off().on("click", function () {

      var currel = $("#main_certs_screen_block_controls_txt span").html();
      var totalrel = $(".main_certs_screen_block_list_container_cont_item").length;
      currel--;
      if (currel < 1) { currel = totalrel; }
      $("#main_certs_screen_block_controls_txt span").html(currel);



      var item_width = $('.main_certs_screen_block_list_container_cont_item').outerWidth() + 36;
      $('.main_certs_screen_block_list_container_cont_item:first').animate({ "opacity": 0 }, 300);
      $('#main_certs_screen_block_list_container_cont:not(:animated)').animate({ "margin-left": '-=' + item_width + "px" }, 500, function () {
         $('.main_certs_screen_block_list_container_cont_item:last').after($('.main_certs_screen_block_list_container_cont_item:first'));
         $('#main_certs_screen_block_list_container_cont').css({ 'margin-left': '+=' + item_width + 'px' });
         $('.main_certs_screen_block_list_container_cont_item').css({ "opacity": 1 });
      });


   });


   ///////////////////////


   $("#main_cases_screen_block_controls_next").off().on("click", function () {

      var currel = $("#main_cases_screen_block_controls_txt span").html();
      var totalrel = $(".main_cases_screen_block_list_container_cont_item").length;
      currel++;
      if (currel > totalrel) { currel = 1; }
      $("#main_cases_screen_block_controls_txt span").html(currel);




      var item_width = $('.main_cases_screen_block_list_container_cont_item').outerWidth() + 144;
      $('.main_cases_screen_block_list_container_cont_item:first').animate({ "opacity": 0 }, 300);
      $('#main_cases_screen_block_list_container_cont:not(:animated)').animate({ "margin-left": '-=' + item_width + "px" }, 500, function () {
         $('.main_cases_screen_block_list_container_cont_item:last').after($('.main_cases_screen_block_list_container_cont_item:first'));
         $('#main_cases_screen_block_list_container_cont').css({ 'margin-left': '+=' + item_width + 'px' });
         $('.main_cases_screen_block_list_container_cont_item').css({ "opacity": 1 });
      });

   });


   $("#main_cases_screen_block_controls_prev").off().on("click", function () {

      var currel = $("#main_cases_screen_block_controls_txt span").html();
      var totalrel = $(".main_cases_screen_block_list_container_cont_item").length;
      currel--;
      if (currel < 1) { currel = totalrel; }
      $("#main_cases_screen_block_controls_txt span").html(currel);



      var item_width = $('.main_cases_screen_block_list_container_cont_item').outerWidth() + 144;
      $('#main_cases_screen_block_list_container_cont').css({ 'margin-left': '-=' + item_width + 'px' });
      $('.main_cases_screen_block_list_container_cont_item:first').before($('.main_cases_screen_block_list_container_cont_item:last'));
      $('.main_cases_screen_block_list_container_cont_item:first').css({ "opacity": 0 });
      $('.main_cases_screen_block_list_container_cont_item:first').animate({ "opacity": 1 }, 300);
      $('#main_cases_screen_block_list_container_cont:not(:animated)').animate({ "margin-left": '+=' + item_width + "px" }, 500, function () {
         //$('#main_certs_screen_block_list_container_cont').css({'margin-left' : '-='+item_width+'px'});
      });


   });

   //////////////

   clientsanimate();
   function clientsanimate() {

      var item_width = $('.main_clients_screen_block_list_container_cont_item').outerWidth() + 72;
      $('#main_clients_screen_block_list_container_cont:not(:animated)').animate({ "margin-left": '-=' + item_width + "px" }, 1500, 'linear', function () {
         $('.main_clients_screen_block_list_container_cont_item:last').after($('.main_clients_screen_block_list_container_cont_item:first'));
         $('#main_clients_screen_block_list_container_cont').css({ 'margin-left': '+=' + item_width + 'px' });
         clientsanimate();
      });

   }


   //////////////

   /*
      skrollr.init({
         easing: {
            //This easing will sure drive you crazy
            wtf: Math.random,
            inverted: function(p) {
               return 1 - p;
            }
         }
      });
   
   */
   /*
      $(window).on('scroll', function () {
         var pixs = $(document).scrollTop()
         pixs = pixs / 100;
         $("#allcontainer").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })     
      });
   
      */

   //////// motion blur on scroll
   /*
      var blurFilter = document.getElementById('blur-kernel');
      var html = $('html');
      var prevPos = $(window).scrollTop();
      var prevTime = Date.now();
      var speed = 0;
      var cheat = 0;
   	
      function blur() {
        cheat = 1 - cheat; // alternates between 0 and 1; used to force browser repaint by setting CSS
   	
        let newPos = $(window).scrollTop();
        let newTime = Date.now()
   	
        // distance over time times milliseconds per frame
        velocity = (newPos - prevPos) / Math.max(1, newTime - prevTime) * 1000 / 60;
        
        prevPos = newPos;
        prevTime = newTime;
        
        const STRENGTH = 1;
        blurSize = Math.max(0, Math.abs(velocity) / 2 * STRENGTH - 0.5);
   	
        blurFilter.setStdDeviation(0, Math.floor(blurSize));
        blurFilter.setAttribute('stdDeviation', '0,' + blurSize);
   	
        // forces browser repaint
        html.css('width', cheat + 'px');
        
        requestAnimationFrame(blur);
      }
      requestAnimationFrame(blur);
   
   */

   //////// end of motion blur on scroll



   $('.elfadeinonscroll').each(function (index, el) {

      tiles = $(el);
      a = $(el).offset().top + $(el).height();
      b = $(window).scrollTop() + ($(window).height() * .3);
      if (a > b) $(el).css({ "opacity": 0, "margin-top": "36px", "margin-bottom": "-36px" });


   });


   $(window).scroll(function (d, h) {
      b = $(window).scrollTop() + $(window).height();

      $('.elfadeinonscroll').each(function (index, el) {
         a = $(this).offset().top + ($(window).height() * .3);
         if (a < b) $(this).animate({ "opacity": 1, "margin-top": 0, "margin-bottom": "0" }, 500)
      });
   });



   $('.elfadeinonscroll_mb0').each(function (index, el) {

      tiles = $(el);
      a = $(el).offset().top + $(el).height();
      b = $(window).scrollTop() + ($(window).height() * .3);
      if (a > b) $(el).css({ "opacity": 0, "margin-top": "36px" });


   });


   $(window).scroll(function (d, h) {
      b = $(window).scrollTop() + $(window).height();

      $('.elfadeinonscroll_mb0').each(function (index, el) {
         a = $(this).offset().top + ($(window).height() * .3);
         if (a < b) $(this).animate({ "opacity": 1, "margin-top": 0 }, 500)
      });
   });


   ////////////////////////////

   /*
      var starfield=document.getElementById('main_top_bgcanv');//$('#main_top_bgcanv');
      context=starfield.getContext('2d');
      //context.lineCap='round';
      //context.fillStyle='rgba(0,0,0)';
      context.strokeStyle='rgba(255,255,255,1)';
   
   
      function anim()
      {
   
         console.log(1);
      	
      mouse_x=0;
      mouse_y=0;
   	
         context.globalAlpha = 0.1;
   context.globalCompositeOperation = "source-over";
   var img = new Image();  // Создание нового объекта ихображения
   //img.src = bgimgname2; 
   //img.src = "images/bgtxt_line.png"; 
   var imgmask = new Image();  // Создание нового объекта ихображения
   //imgmask.src = "images/radgrad.png"; 
   //img.onload = function() {
   	
      var video = $("#bgvideo")[0];
      //if($('#ismobilecheck').is(":visible")) {
         video.play();
      //}else{
      //	video.pause();
      //	if(video.duration == video.currentTime) { video.currentTime = 0; }
         //	video.currentTime = Math.min(video.duration, video.currentTime + frameTime);
      //}
   
   
       
           
      context.clearRect(0, 0, starfield.width, starfield.height);		
       	
           
             context.globalAlpha = 1;//0.099;
         context.drawImage(video, ((1280-1280)/2), 0,1280,777);
           
   
         timeout=setTimeout(anim,fps);
      }
   
   
   
      anim();
   */



   //////////////////////////////////////////////////




   /////////////   scroll animation


   ///// prepare ani


   //$("#screen_effect_block_txt_line1").animate({ "marginTop" : "400px", "opacity":"0" },0, "easeInOutCubic");



   ////////////////////


   function fixDiv() {

      var startfromtop = $(window).scrollTop();
      var finfromtop = $(window).scrollTop();



      if (curpagetype == "main") {

         //// MAP

         startfromtop = $("#main_geo_screen_block").offset().top;
         startfromtop -= $(window).height();

         finfromtop = startfromtop;
         finfromtop += $(window).height();
         finfromtop += $(window).height();

         if ((($(window).scrollTop()) > startfromtop) && (($(window).scrollTop()) < finfromtop)) {

            if (mapanimationison != 1) {
               //		particles.resumeAnimation();

               mapanimationison = 1;
            }

         } else {
            if (mapanimationison != 0) {
               //	particles.pauseAnimation();

               mapanimationison = 0;
            }
         }

      }

      startfromtop = $(window).height();
      startfromtop /= 3;
      startfromtop /= 2;

      startfromtop = 140;
      finfromtop = startfromtop;
      finfromtop += $(window).height();
      finfromtop += $(window).height();

      if ((($(window).scrollTop()) < startfromtop)) {

         $('#main_first_screen_block').css({ 'position': 'fixed', 'top': '0' });

      } else {

         $('#main_first_screen_block').css({ 'position': 'absolute', 'top': startfromtop + 'px' });
      }



      if (curpagetype == "main") {

         //// KPI_NUM

         startfromtop = $("#main_steps_screen_block_graph").offset().top;
         startfromtop -= $(window).height();

         finfromtop = startfromtop;
         finfromtop += $(window).height();
         finfromtop += $(window).height();

         if ((($(window).scrollTop()) > startfromtop) && (($(window).scrollTop()) < finfromtop)) {


            var scrolledDown = $(window).scrollTop();
            var tehheight = $(window).height();
            //														scrolledDown -= tehheight;
            var pixperperc = Math.floor((tehheight) / 50);

            var numparts = Math.floor((scrolledDown - ($("#main_steps_screen_block_graph").offset().top - (tehheight * 1.85))));
            numparts /= pixperperc;
            numparts = Math.floor(numparts * 0.90);
            //alert(numparts);
            if (numparts > 90) { numparts = "90"; }
            //numparts*=100;
            numparts += "";
            var out = numparts.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
            numparts = out;
            $("#main_steps_screen_block_graph_kpi_90").empty().append(numparts + "%").attr("style", "--p:" + numparts);



            numparts = Math.floor((scrolledDown - ($("#main_steps_screen_block_graph").offset().top - (tehheight * 1.75))));
            numparts /= pixperperc;
            numparts = Math.floor(numparts * 0.45);
            //alert(numparts);
            if (numparts > 45) { numparts = "45"; }
            //numparts*=100;
            numparts += "";
            var out = numparts.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
            numparts = out;
            $("#main_steps_screen_block_graph_kpi_45").empty().append(numparts + "%").attr("style", "--p:" + numparts);


            numparts = Math.floor((scrolledDown - ($("#main_steps_screen_block_graph").offset().top - (tehheight * 1.65))));
            numparts /= pixperperc;
            numparts = Math.floor(numparts * 0.87);
            //alert(numparts);
            if (numparts > 87) { numparts = "87"; }
            //numparts*=100;
            numparts += "";
            var out = numparts.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
            numparts = out;
            $("#main_steps_screen_block_graph_kpi_87").empty().append(numparts + "%").attr("style", "--p:" + numparts);



         }
      }


   }

   fixDiv();

   $(window).scroll(function (d, h) {

      fixDiv();

      b = $(window).scrollTop() + $(window).height();

      $('.elfadeinonscroll').each(function (index, el) {
         a = $(this).offset().top + ($(window).height() * .3);
         if (a < b) {
            $(this).animate({ "opacity": 1, "margin-top": 0, "margin-bottom": "0" }, 500).removeClass('elfadeinonscroll');
         }
      });
      $('.elfadeinonscroll_mb0').each(function (index, el) {
         a = $(this).offset().top + ($(window).height() * .3);
         if (a < b) {
            $(this).animate({ "opacity": 1, "margin-top": 0 }, 500).removeClass('elfadeinonscroll');
         }
      });
   });


   var tehtotalwidth = $(window).width();

   //if(tehtotalwidth >= 0){

   var controller = $.superscrollorama();

   var fromtopstart = 0;//$("#screen_portfolio_list_block_item_main_img_1").offset().top;
   var anilength = $(window).height();
   var tehel = null;


   $(".screen_parallax_item_block").each(function (index) {
      fromtopstart = $(this).offset().top;
      anilength = $(window).height();
      fromtopstart -= anilength;
      anilength *= 1.5;

      tehel = $(this);

      controller.addTween(fromtopstart, TweenMax.fromTo(tehel, 0.2, { css: { marginTop: '186px' }, ease: Quad.easeOut }, { css: { marginTop: '-50px' }, ease: Quad.easeOut }), anilength);
   });


   $(".screen_parallax_item_block_img").each(function (index) {
      fromtopstart = $(this).offset().top;
      anilength = $(window).height();
      fromtopstart -= anilength;
      anilength *= 1.5;

      tehel = $(this).parent().children(".screen_portfolio_list_block_item_thumb");

      controller.addTween(fromtopstart, TweenMax.fromTo(tehel, 0.2, { css: { marginTop: '186px' }, ease: Quad.easeOut }, { css: { marginTop: '-50px' }, ease: Quad.easeOut }), anilength);

      tehel = $(this).children(".screen_portfolio_list_block_item_main_img");

      controller.addTween(fromtopstart, TweenMax.fromTo(tehel, 0.2, { css: { marginTop: '-72px' }, ease: Quad.easeOut }, { css: { marginTop: '0' }, ease: Quad.easeOut }), anilength);
   });

   ///


   if ($("#main_steps_screen_block_graph_money").length) {

      fromtopstart = $("#main_steps_screen_block_graph_money").offset().top;
      anilength = $(window).height();
      fromtopstart -= anilength;
      anilength *= 1.5;

      tehel = $("#main_steps_screen_block_graph_money");

      controller.addTween(fromtopstart, TweenMax.fromTo(tehel, 0.2, { css: { marginTop: '50px' }, ease: Quad.easeOut }, { css: { marginTop: '-150px' }, ease: Quad.easeOut }), anilength);

   }
   /////


   fromtopstart = 140;
   anilength = fromtopstart;
   anilength += $(window).height() * 1.5;

   var curelopac = 1;
   if (($(window).width() < 1080) && ($(window).width() > 767)) { curelopac = 0; }

   controller.addTween(0, TweenMax.fromTo($('#main_first_screen_block_header'), 0.2, { css: { opacity: curelopac }, ease: Quad.easeOut }, { css: { opacity: '1' }, ease: Quad.easeOut }), anilength);

   /////

   var fromtopstart = $("#main_first_screen_ini_block_soc_line").offset().top;
   var anilength = $("#main_first_screen_block_fem").height();
   fromtopstart -= anilength;
   anilength *= 1.5;
   anilength = 450;

   controller.addTween(0, TweenMax.fromTo($('#main_first_screen_ini_block_soc_line'), 0.2, { css: { height: '156px' }, ease: Quad.easeOut }, { css: { height: '0' }, ease: Quad.easeOut }), anilength);


   fromtopstart = 400;
   anilength = 100;

   controller.addTween(fromtopstart, TweenMax.fromTo($('.main_first_screen_ini_block_soc_item'), 0.2, { css: { opacity: '1' }, ease: Quad.easeOut }, { css: { opacity: '0' }, ease: Quad.easeOut }), anilength);




   fromtopstart = 100;
   anilength = 100;

   controller.addTween(fromtopstart, TweenMax.fromTo($('#top_screen_block_soc'), 0.2, { css: { marginTop: '-36px' }, ease: Quad.easeOut }, { css: { marginTop: '0' }, ease: Quad.easeOut }), anilength);

   fromtopstart = 400;
   anilength = 100;

   controller.addTween(fromtopstart, TweenMax.fromTo($('#top_screen_block_soc_line'), 0.2, { css: { width: '1px' }, ease: Quad.easeOut }, { css: { width: '90px' }, ease: Quad.easeOut }), anilength);
   controller.addTween(fromtopstart, TweenMax.fromTo($('.top_screen_block_soc_item'), 0.2, { css: { opacity: '0' }, ease: Quad.easeOut }, { css: { opacity: '1' }, ease: Quad.easeOut }), anilength);




   fromtopstart = 50;
   anilength = 200;

   controller.addTween(fromtopstart, TweenMax.fromTo($('#top_screen_block'), 0.2, { css: { height: '108px' }, ease: Quad.easeOut }, { css: { height: '72px' }, ease: Quad.easeOut }), anilength);

   controller.addTween(fromtopstart, TweenMax.fromTo($('#top_screen_logo_block'), 0.2, { css: { marginTop: '36px' }, ease: Quad.easeOut }, { css: { marginTop: '0' }, ease: Quad.easeOut }), anilength);

   controller.addTween(fromtopstart, TweenMax.fromTo($('#top_screen_menu_btn'), 0.2, { css: { marginTop: '56px' }, ease: Quad.easeOut }, { css: { marginTop: '18px' }, ease: Quad.easeOut }), anilength);

   controller.addTween(fromtopstart, TweenMax.fromTo($('#top_screen_logo_txt_block'), 0.2, { css: { opacity: '1' }, ease: Quad.easeOut }, { css: { opacity: '0' }, ease: Quad.easeOut }), anilength);

   controller.addTween(fromtopstart, TweenMax.fromTo($('#top_screen_contacts_block'), 0.2, { css: { marginTop: '0' }, ease: Quad.easeOut }, { css: { marginTop: '-40px' }, ease: Quad.easeOut }), anilength);

   controller.addTween(fromtopstart, TweenMax.fromTo($('#top_screen_logo_a'), 0.2, { css: { width: '52px' }, ease: Quad.easeOut }, { css: { width: '24px' }, ease: Quad.easeOut }), anilength);

   controller.addTween(fromtopstart, TweenMax.fromTo($('#top_screen_geo_block'), 0.2, { css: { marginTop: '51px', opacity: '1' }, ease: Quad.easeOut }, { css: { marginTop: '18px', opacity: '0' }, ease: Quad.easeOut }), anilength);

   controller.addTween(fromtopstart, TweenMax.fromTo($('#top_screen_contacts_block_worktime'), 0.2, { css: { marginTop: '0', opacity: '1' }, ease: Quad.easeOut }, { css: { marginTop: '-9px', opacity: '0' }, ease: Quad.easeOut }), anilength);

   controller.addTween(fromtopstart, TweenMax.fromTo($('#main_first_screen_ini_block_soc'), 0.2, { css: { marginTop: '0' }, ease: Quad.easeOut }, { css: { marginTop: '-36px' }, ease: Quad.easeOut }), anilength);


   fromtopstart = $(window).height();
   fromtopstart /= 2;
   anilength = fromtopstart;//$(window).height();
   fromtopstart = 0;

   //				controller.addTween(fromtopstart, TweenMax.fromTo($('#main_first_screen_ini_block_video'), 0.2, {css:{ marginTop:'0'}, ease:Quad.easeOut}, {css:{marginTop:'-719px'}, ease:Quad.easeOut}), anilength);

   controller.addTween(fromtopstart, TweenMax.fromTo($('#main_first_screen_ini_bg_plus'), 0.2, { css: { opacity: '0.1' }, ease: Quad.easeOut }, { css: { opacity: '0' }, ease: Quad.easeOut }), anilength);



   fromtopstart = 0;
   anilength = $(window).height();
   anilength /= 3;

   controller.addTween(fromtopstart, TweenMax.fromTo($('#main_first_screen_block_progressbar_block_lines'), 0.2, { css: { width: '80px' }, ease: Quad.easeOut }, { css: { width: '370px' }, ease: Quad.easeOut }), anilength);

   anilength /= 2;

   controller.addTween(fromtopstart, TweenMax.fromTo($('#main_first_screen_block_progressbar_block_sel'), 0.2, { css: { width: '0' }, ease: Quad.easeOut }, { css: { width: '283px' }, ease: Quad.easeOut }), anilength);

   anilength = $(window).height();
   anilength /= 4;
   fromtopstart = anilength;
   anilength /= 2;

   controller.addTween(fromtopstart, TweenMax.fromTo($('#main_first_screen_block_feat_list'), 0.2, { css: { opacity: '0' }, ease: Quad.easeOut }, { css: { opacity: '1' }, ease: Quad.easeOut }), anilength);

   //fromtopstart += 150;

   controller.addTween(fromtopstart, TweenMax.fromTo($('#main_first_screen_block_txt'), 0.2, { css: { opacity: '0' }, ease: Quad.easeOut }, { css: { opacity: '1' }, ease: Quad.easeOut }), anilength);

   /*
   fromtopstart = $(window).height();
   fromtopstart /= 4;
   anilength = $("#main_first_screen_block_fem").height();
   anilength *= 1.8;
   var nuelh = $("#main_first_screen_block_fem").height();
   nuelh *= 1.3;

   controller.addTween(fromtopstart, TweenMax.fromTo($('#main_first_screen_block'), 0.2, {css:{ marginTop:'0'}, ease:Quad.easeOut}, {css:{marginTop: '-'+nuelh+'px'}, ease:Quad.easeOut}), anilength);
   */

   if ($("#main_services_screen_block").length) {

      fromtopstart = $("#main_services_screen_block").offset().top;
      fromtopstart -= $(window).height();
      anilength = $("#main_services_screen_block").height();
      anilength += $(window).height();

      controller.addTween(fromtopstart, TweenMax.fromTo($('#main_services_screen_block_list_cont_circle_1'), 0.2, { css: { rotation: '0' }, ease: Quad.easeOut }, { css: { rotation: '240' }, ease: Quad.easeOut }), anilength);
      controller.addTween(fromtopstart, TweenMax.fromTo($('#main_services_screen_block_list_cont_circle_2'), 0.2, { css: { rotation: '0' }, ease: Quad.easeOut }, { css: { rotation: '-100' }, ease: Quad.easeOut }), anilength);

   }



   if ($("#main_numbers_screen_block_lines").length) {

      fromtopstart = $("#main_numbers_screen_block_lines").offset().top;
      fromtopstart -= $(window).height();
      anilength = $(window).height();

      controller.addTween(fromtopstart, TweenMax.fromTo($('#main_numbers_screen_block_lines_02'), 0.2, { css: { marginLeft: '0' }, ease: Quad.easeOut }, { css: { marginLeft: '2vw' }, ease: Quad.easeOut }), anilength);
      controller.addTween(fromtopstart, TweenMax.fromTo($('#main_numbers_screen_block_lines_03'), 0.2, { css: { marginLeft: '0' }, ease: Quad.easeOut }, { css: { marginLeft: '4vw' }, ease: Quad.easeOut }), anilength);
      controller.addTween(fromtopstart, TweenMax.fromTo($('#main_numbers_screen_block_lines_04'), 0.2, { css: { marginLeft: '0' }, ease: Quad.easeOut }, { css: { marginLeft: '6vw' }, ease: Quad.easeOut }), anilength);

      controller.addTween(fromtopstart, TweenMax.fromTo($('#main_numbers_screen_block_cont_col2'), 0.2, { css: { marginLeft: '0' }, ease: Quad.easeOut }, { css: { marginLeft: '2vw' }, ease: Quad.easeOut }), anilength);
      controller.addTween(fromtopstart, TweenMax.fromTo($('#main_numbers_screen_block_cont_col3'), 0.2, { css: { marginLeft: '0' }, ease: Quad.easeOut }, { css: { marginLeft: '4vw' }, ease: Quad.easeOut }), anilength);
   }



   /*
   
               fromtopstart = $("#screen_howworks_block").offset().top;
               anilength = $(window).height();
               fromtopstart -= anilength;
               anilength *= 1.5; 
   
   
               controller.addTween(fromtopstart, TweenMax.fromTo($('#screen_howworks_block_txt_line1'), 0.2, {css:{ marginTop:'36px',opacity:"0"}, ease:Quad.easeOut}, {css:{marginTop:'0',opacity:"1"}, ease:Quad.easeOut}), anilength);
               controller.addTween(fromtopstart, TweenMax.fromTo($('#screen_howworks_block_txt_line2'), 0.2, {css:{ marginTop:'96px',opacity:"0"}, ease:Quad.easeOut}, {css:{marginTop:'0',opacity:"1"}, ease:Quad.easeOut}), anilength);
               controller.addTween(fromtopstart, TweenMax.fromTo($('#screen_howworks_block_img'), 0.2, {css:{ marginTop:'436px'}, ease:Quad.easeOut}, {css:{marginTop:'-100px'}, ease:Quad.easeOut}), anilength);
   
   
   
               fromtopstart = $("#screen_effect_block").offset().top;
               anilength = $(window).height();
               fromtopstart -= anilength;
               anilength *= 1.5; 
   
   
   
               controller.addTween(fromtopstart, TweenMax.fromTo($('#screen_effect_block_circle_1'), 0.2, {css:{ marginTop:'636px'}, ease:Quad.easeOut}, {css:{marginTop:'0'}, ease:Quad.easeOut}), anilength);
               controller.addTween(fromtopstart, TweenMax.fromTo($('#screen_effect_block_circle_2'), 0.2, {css:{ marginTop:'336px'}, ease:Quad.easeOut}, {css:{marginTop:'0'}, ease:Quad.easeOut}), anilength);
               controller.addTween(fromtopstart, TweenMax.fromTo($('#screen_effect_block_circle_3'), 0.2, {css:{ marginTop:'936px'}, ease:Quad.easeOut}, {css:{marginTop:'0'}, ease:Quad.easeOut}), anilength);
               controller.addTween(fromtopstart, TweenMax.fromTo($('#screen_effect_block_warn'), 0.2, {css:{ marginTop:'116px'}, ease:Quad.easeOut}, {css:{marginTop:'-100px'}, ease:Quad.easeOut}), anilength);
   
               fromtopstart += ($(window).height())/2;
   
               controller.addTween(fromtopstart, TweenMax.fromTo($('#screen_effect_block_img'), 0.2, {css:{ marginTop:'136px', "opacity":'0'}, ease:Quad.easeOut}, {css:{marginTop:'0', "opacity":'1'}, ease:Quad.easeOut}), anilength);
   
               controller.addTween(fromtopstart, TweenMax.fromTo($('#screen_effect_block_rect'), 0.2, {css:{ marginTop:'36px'}, ease:Quad.easeOut}, {css:{marginTop:'100px'}, ease:Quad.easeOut}), anilength);
   */


});






///

function processprefooterform() {

   var toptalerrs = "";
   inputErrors_total = 0;


   var phoneval = $('#main_prefooter_form_screen_block_phone').val();
   if ((phoneval.charAt(1) == "7") || (phoneval.charAt(1) == "8")) {

   } else {
      $('#main_prefooter_form_screen_block_phone').val('+');
   }

   if (($('#main_prefooter_form_screen_block_fio').val().length < 2)) {
      toptalerrs += "no name";
      inputErrors_total++;
   }

   if (!$('#main_prefooter_form_screen_block_police').prop('checked')) {
      toptalerrs += "no police";
      inputErrors_total++;
   }



   if (($('#main_prefooter_form_screen_block_phone').val().length < 17)) {
      toptalerrs += "no phone";
      inputErrors_total++;
   }

   /////////////

   inputErrors = inputErrors_total;
   if (inputErrors == 0) {
      $("#main_prefooter_form_screen_block_btn_na").hide();
      $("#main_prefooter_form_screen_block_btn").show();
   } else {
      $("#main_prefooter_form_screen_block_btn_na").show();
      $("#main_prefooter_form_screen_block_btn").hide();
   }

}

///

function processmainform() {

   var toptalerrs = "";
   inputErrors_total = 0;


   var phoneval = $('#main_form_screen_block_phone').val();
   if ((phoneval.charAt(1) == "7") || (phoneval.charAt(1) == "8")) {

   } else {
      $('#main_form_screen_block_phone').val('+');
   }

   if (($('#main_form_screen_block_fio').val().length < 2)) {
      toptalerrs += "no name";
      inputErrors_total++;
   }


   if (($('#main_form_screen_block_phone').val().length < 17)) {
      toptalerrs += "no phone";
      inputErrors_total++;
   }

   if (!$('#main_form_screen_block_police').prop('checked')) {
      toptalerrs += "no police";
      inputErrors_total++;
   }

   /////////////

   inputErrors = inputErrors_total;
   if (inputErrors == 0) {
      $("#main_form_screen_block_btn_na").hide();
      $("#main_form_screen_block_btn").show();
   } else {
      $("#main_form_screen_block_btn_na").show();
      $("#main_form_screen_block_btn").hide();
   }

}

///

function processmodalform() {

   var toptalerrs = "";
   inputErrors_total = 0;


   var phoneval = $('#modal_form_screen_block_phone').val();
   if ((phoneval.charAt(1) == "7") || (phoneval.charAt(1) == "8")) {

   } else {
      $('#modal_form_screen_block_phone').val('+');
   }

   if (($('#modal_form_screen_block_fio').val().length < 2)) {
      toptalerrs += "no name";
      inputErrors_total++;
   }


   if (($('#modal_form_screen_block_phone').val().length < 17)) {
      toptalerrs += "no phone";
      inputErrors_total++;
   }

   if (!$('#modal_form_screen_block_police').prop('checked')) {
      toptalerrs += "no police";
      inputErrors_total++;
   }

   /////////////

   inputErrors = inputErrors_total;
   if (inputErrors == 0) {
      $("#modal_form_screen_block_btn_na").hide();
      $("#modal_form_screen_block_btn").show();
   } else {
      $("#modal_form_screen_block_btn_na").show();
      $("#modal_form_screen_block_btn").hide();
   }

}

///

function processcalc() {


   var invar_0 = $("#main_calc_screen_block_cont_win_form_item_input_0").val();
   invar_0 = invar_0.replace(/[^0-9]/g, '');
   var invar_1 = $("#main_calc_screen_block_cont_win_form_item_input_1").val();
   invar_1 = invar_1.replace(/[^0-9]/g, '');
   var invar_2 = $("#main_calc_screen_block_cont_win_form_item_input_2").val();
   invar_2 = invar_2.replace(/[^0-9]/g, '');
   var invar_3 = $("#main_calc_screen_block_cont_win_form_item_input_3").val();
   invar_3 = invar_3.replace(/[^0-9]/g, '');
   var invar_4 = $("#main_calc_screen_block_cont_win_form_item_input_4").val();
   invar_4 = invar_4.replace(/[^0-9]/g, '');

   ////////


   if ((invar_3 >= 0) && (invar_1 >= 1) && (invar_0 > 0) && (invar_0 <= 100) && (invar_2 > 0) && (invar_4 > 0) && (invar_4 <= 100)) {


      //////

      var res_summ_4 = Math.ceil(invar_3 / 100 * invar_4); // B12
      res_summ_4 = res_summ_4 + ' ';
      res_summ_4 = res_summ_4.replace(/[^0-9-]/g, '');
      //	res_summ_4 = numberWithSpaces(res_summ_4);

      var res_summ_5 = Math.ceil(res_summ_4 * invar_1); // B13
      res_summ_5 = res_summ_5 + ' ';
      res_summ_5 = res_summ_5.replace(/[^0-9-]/g, '');
      //	res_summ_5 = numberWithSpaces(res_summ_5);

      invar_2++;
      invar_2--;
      var res_summ_2 = Math.ceil(res_summ_5 * (100 / (invar_2 + 100))); // B9
      res_summ_2 = res_summ_2 + ' ';
      res_summ_2 = res_summ_2.replace(/[^0-9-]/g, '');
      //	res_summ_2 = numberWithSpaces(res_summ_2);

      var res_summ_1 = Math.ceil(res_summ_2 / res_summ_4); // B10
      res_summ_1 = res_summ_1 + ' ';
      res_summ_1 = res_summ_1.replace(/[^0-9-]/g, '');
      //	res_summ_1 = numberWithSpaces(res_summ_1);

      var res_summ_3 = Math.ceil(res_summ_2 / invar_3); // B11
      res_summ_3 = res_summ_3 + ' ';
      res_summ_3 = res_summ_3.replace(/[^0-9-]/g, '');
      //		res_summ_3 = numberWithSpaces(res_summ_3);


      $("#main_calc_screen_block_cont_win_res_item_summ_1 span").empty().append(numberWithSpaces(res_summ_2)); // B9
      $("#main_calc_screen_block_cont_win_res_item_summ_2 span").empty().append(numberWithSpaces(res_summ_1)); // B10
      $("#main_calc_screen_block_cont_win_res_item_summ_3 span").empty().append(numberWithSpaces(res_summ_3)); // B11
      $("#main_calc_screen_block_cont_win_res_item_summ_4 span").empty().append(numberWithSpaces(res_summ_4)); // B12
      $("#main_calc_screen_block_cont_win_res_item_summ_5 span").empty().append(numberWithSpaces(res_summ_5)); // B13

      var res_summ_6 = Math.ceil(((res_summ_5 / 100) * invar_0) - res_summ_2); // B14
      res_summ_6 = res_summ_6 + ' ';
      res_summ_6 = res_summ_6.replace(/[^0-9-]/g, '');




      if (res_summ_6 <= 0) {
         $("#main_calc_screen_block_cont_win_res_line_6").addClass('main_calc_screen_block_cont_win_form_item_input_na');
         $("#main_calc_screen_block_cont_win_res_line_6").removeClass('main_calc_screen_block_cont_win_form_item_input_a');

         $("#main_calc_screen_block_cont_win_res_badbtn").show();
         $("#main_calc_screen_block_cont_win_res_btn").hide();
      } else {
         $("#main_calc_screen_block_cont_win_res_line_6").removeClass('main_calc_screen_block_cont_win_form_item_input_na');
         $("#main_calc_screen_block_cont_win_res_line_6").addClass('main_calc_screen_block_cont_win_form_item_input_a');

         $("#main_calc_screen_block_cont_win_res_badbtn").hide();
         $("#main_calc_screen_block_cont_win_res_btn").show().css({ 'opacity': '1' });
      }

      res_summ_6 = numberWithSpaces(res_summ_6);

      //var invar_b_8 = Math.ceil(invar_0 * (invar_3 / 100));
      $("#main_calc_screen_block_cont_win_res_item_summ_6 span").empty().append(res_summ_6); // B14
      $("#main_calc_screen_block_cont_win_res").show().css({ 'opacity': '1' });



   } else {
      $("#main_calc_screen_block_cont_win_res_item_summ_1 span").empty().append("—");
      $("#main_calc_screen_block_cont_win_res_item_summ_2 span").empty().append("—");
      $("#main_calc_screen_block_cont_win_res_item_summ_3 span").empty().append("—");
      $("#main_calc_screen_block_cont_win_res_item_summ_4 span").empty().append("—");
      $("#main_calc_screen_block_cont_win_res_item_summ_5 span").empty().append("—");
      $("#main_calc_screen_block_cont_win_res_item_summ_6 span").empty().append("—");
      $("#main_calc_screen_block_cont_win_res_btn").show().css({ 'opacity': '0.2' });
      $("#main_calc_screen_block_cont_win_res_badbtn").hide();
      $("#main_calc_screen_block_cont_win_res").css({ 'opacity': '0.3' });

   }

   /*
   if(invar_0 > 0){
      if(invar_0 >= 100000){
         $("#main_calc_screen_block_cont_win_form_item_input_0").removeClass('main_calc_screen_block_cont_win_form_item_input_na');
         $("#main_calc_screen_block_cont_win_form_err_0").css({ 'opacity' : '0' });
      }else{
         $("#main_calc_screen_block_cont_win_form_item_input_0").addClass('main_calc_screen_block_cont_win_form_item_input_na');
         $("#main_calc_screen_block_cont_win_form_err_0").css({ 'opacity' : '1' });
      }
   }
   */

   if (invar_1 != "") {
      if (invar_1 >= 10) {
         $("#main_calc_screen_block_cont_win_form_item_input_1").removeClass('main_calc_screen_block_cont_win_form_item_input_na');
         $("#main_calc_screen_block_cont_win_form_err_1").css({ 'opacity': '0' });
      } else {
         $("#main_calc_screen_block_cont_win_form_item_input_1").addClass('main_calc_screen_block_cont_win_form_item_input_na');
         $("#main_calc_screen_block_cont_win_form_err_1").css({ 'opacity': '1' });
      }
   }

   if (invar_2 != "") {
      if (invar_2 > 0) {
         $("#main_calc_screen_block_cont_win_form_item_input_2").removeClass('main_calc_screen_block_cont_win_form_item_input_na');
         $("#main_calc_screen_block_cont_win_form_err_2").css({ 'opacity': '0' });
      } else {
         $("#main_calc_screen_block_cont_win_form_item_input_2").addClass('main_calc_screen_block_cont_win_form_item_input_na');
         $("#main_calc_screen_block_cont_win_form_err_2").css({ 'opacity': '1' });
      }
   }

   if (invar_0 > 0) {
      if (invar_0 <= 100) {
         $("#main_calc_screen_block_cont_win_form_item_input_0").removeClass('main_calc_screen_block_cont_win_form_item_input_na');
         $("#main_calc_screen_block_cont_win_form_err_0").css({ 'opacity': '0' });
      } else {
         $("#main_calc_screen_block_cont_win_form_item_input_0").addClass('main_calc_screen_block_cont_win_form_item_input_na');
         $("#main_calc_screen_block_cont_win_form_err_0").css({ 'opacity': '1' });
      }
   }

   if (invar_4 > 0) {
      if (invar_4 <= 100) {
         $("#main_calc_screen_block_cont_win_form_item_input_4").removeClass('main_calc_screen_block_cont_win_form_item_input_na');
         $("#main_calc_screen_block_cont_win_form_err_4").css({ 'opacity': '0' });
      } else {
         $("#main_calc_screen_block_cont_win_form_item_input_4").addClass('main_calc_screen_block_cont_win_form_item_input_na');
         $("#main_calc_screen_block_cont_win_form_err_4").css({ 'opacity': '1' });
      }
   }


   invar_0 = numberWithSpaces(invar_0);
   $("#main_calc_screen_block_cont_win_form_item_input_0").val(invar_0);

   invar_1 = numberWithSpaces(invar_1);
   $("#main_calc_screen_block_cont_win_form_item_input_1").val(invar_1);

   $("#main_calc_screen_block_cont_win_form_item_input_2").val(invar_2);
   $("#main_calc_screen_block_cont_win_form_item_input_3").val(invar_3);
   $("#main_calc_screen_block_cont_win_form_item_input_4").val(invar_4);



}



///

function processcalc2() {


   var invar_0 = $("#main_calc2_screen_block_cont_win_form_item_input_0").val();
   invar_0 = invar_0.replace(/[^0-9]/g, '');
   var invar_1 = $("#main_calc2_screen_block_cont_win_form_item_input_1").val();
   invar_1 = invar_1.replace(/[^0-9]/g, '');
   var invar_2 = $("#main_calc2_screen_block_cont_win_form_item_input_2").val();
   invar_2 = invar_2.replace(/[^0-9.-]/g, '');
   var invar_3 = $("#main_calc2_screen_block_cont_win_form_item_input_3").val();
   invar_3 = invar_3.replace(/[^0-9.-]/g, '');
   var invar_4 = $("#main_calc2_screen_block_cont_win_form_item_input_4").val();
   invar_4 = invar_4.replace(/[^0-9.-]/g, '');

   //	var invar_0 = $("#main_calc_screen_block_cont_win_form_item_input_0").val(); // B2
   //	var invar_1 = $("#main_calc_screen_block_cont_win_form_item_input_1").val(); // B3
   //	var invar_2 = $("#main_calc_screen_block_cont_win_form_item_input_2").val(); // B4
   //	var invar_3 = $("#main_calc_screen_block_cont_win_form_item_input_3").val(); // B5
   //	var invar_4 = $("#main_calc_screen_block_cont_win_form_item_input_4").val(); // B6

   if ((invar_0 >= 100000) && (invar_1 >= 10) && (invar_2 > 0) && (invar_3 > 0) && (invar_4 > 0) && (invar_2 <= 1000) && (invar_4 <= 100)) {

      invar_0++;
      invar_0--;
      var res_summ_5 = Math.ceil(((invar_0 / 100) * invar_3) + invar_0);  // B28
      res_summ_5 = res_summ_5 + ' ';
      res_summ_5 = res_summ_5.replace(/[^0-9-]/g, '');
      //res_summ_5 = numberWithSpaces(res_summ_5);

      $("#main_calc2_screen_block_cont_win_res_item_summ_5 span").empty().append(numberWithSpaces(res_summ_5)); // B28

      res_summ_5++;
      res_summ_5--;
      invar_1++;
      invar_1--;
      var res_summ_2 = Math.ceil(res_summ_5 / invar_1); // B25
      res_summ_2 = res_summ_2 + ' ';
      res_summ_2 = res_summ_2.replace(/[^0-9-]/g, '');
      //res_summ_2 = numberWithSpaces(res_summ_2);

      $("#main_calc2_screen_block_cont_win_res_item_summ_2 span").empty().append(numberWithSpaces(res_summ_2)); // B25

      res_summ_2++;
      res_summ_2--;
      invar_4++;
      invar_4--;
      var res_summ_1 = Math.ceil(res_summ_2 * (100 / invar_4)); // B24
      res_summ_1 = res_summ_1 + ' ';
      res_summ_1 = res_summ_1.replace(/[^0-9-]/g, '');
      //res_summ_1 = numberWithSpaces(res_summ_1);

      var res_summ_3 = Math.ceil(invar_0 / res_summ_1);
      res_summ_3 = res_summ_3 + ' ';
      res_summ_3 = res_summ_3.replace(/[^0-9-]/g, '');
      // res_summ_3 = numberWithSpaces(res_summ_3);

      var res_summ_4 = Math.ceil(invar_0 / res_summ_2);
      res_summ_4 = res_summ_4 + ' ';
      res_summ_4 = res_summ_4.replace(/[^0-9-]/g, '');
      //res_summ_4 = numberWithSpaces(res_summ_4);

      $("#main_calc2_screen_block_cont_win_res_item_summ_1 span").empty().append(numberWithSpaces(res_summ_1)); // B24
      $("#main_calc2_screen_block_cont_win_res_item_summ_3 span").empty().append(numberWithSpaces(res_summ_3)); // B26
      $("#main_calc2_screen_block_cont_win_res_item_summ_4 span").empty().append(numberWithSpaces(res_summ_4)); // B27


      res_summ_5++;
      res_summ_5--;
      invar_0++;
      invar_0--;
      invar_2++;
      invar_2--;
      var res_summ_6 = Math.ceil(((res_summ_5 / 100) * invar_2) - invar_0);
      res_summ_6 = res_summ_6 + ' ';
      res_summ_6 = res_summ_6.replace(/[^0-9-]/g, '');

      $("#main_calc2_screen_block_cont_win_res_item_summ_6 span").empty().append(numberWithSpaces(res_summ_6)); // B29
      $("#main_calc2_screen_block_cont_win_res").show().css({ 'opacity': '1' });


      var valovayaval = Math.ceil(((res_summ_5 / 100) * invar_2) - invar_0);//$("#main_calc_screen_block_cont_win_res_item_summ_6 span").html();

      if (valovayaval <= 0) {
         $("#main_calc2_screen_block_cont_win_res_line_6").addClass('main_calc2_screen_block_cont_win_form_item_input_na');
         $("#main_calc2_screen_block_cont_win_res_line_6").removeClass('main_calc2_screen_block_cont_win_form_item_input_a');

         $("#main_calc2_screen_block_cont_win_res_badbtn").show();
         $("#main_calc2_screen_block_cont_win_res_btn").hide();
      } else {
         $("#main_calc2_screen_block_cont_win_res_line_6").removeClass('main_calc2_screen_block_cont_win_form_item_input_na');
         $("#main_calc2_screen_block_cont_win_res_line_6").addClass('main_calc2_screen_block_cont_win_form_item_input_a');

         $("#main_calc2_screen_block_cont_win_res_badbtn").hide();
         $("#main_calc2_screen_block_cont_win_res_btn").show().css({ 'opacity': '1' });
      }

      valovayaval = valovayaval + ' ';
      valovayaval = valovayaval.replace(/[^0-9-]/g, '');
      //valovayaval = numberWithSpaces(valovayaval);
      //$("#main_calc2_screen_block_cont_win_res_item_summ_6 span").empty().append(valovayaval);

   } else {
      $("#main_calc2_screen_block_cont_win_res_item_summ_1 span").empty().append("—"); // B8
      $("#main_calc2_screen_block_cont_win_res_item_summ_2 span").empty().append("—");
      $("#main_calc2_screen_block_cont_win_res_item_summ_3 span").empty().append("—");
      $("#main_calc2_screen_block_cont_win_res_item_summ_4 span").empty().append("—"); // B11
      var invar_b_11 = Math.ceil(invar_0 / invar_1);
      $("#main_calc2_screen_block_cont_win_res_item_summ_5 span").empty().append("—");
      var invar_b_8 = Math.ceil(invar_0 * (invar_3 / 100));
      $("#main_calc2_screen_block_cont_win_res_item_summ_6 span").empty().append("—");
      $("#main_calc2_screen_block_cont_win_res_btn").show().css({ 'opacity': '0.2' });
      $("#main_calc2_screen_block_cont_win_res_badbtn").hide();
      $("#main_calc2_screen_block_cont_win_res").css({ 'opacity': '0.3' });

      $("#main_calc2_screen_block_cont_win_res_line_6").removeClass('main_calc2_screen_block_cont_win_form_item_input_na');
      $("#main_calc2_screen_block_cont_win_res_line_6").removeClass('main_calc2_screen_block_cont_win_form_item_input_a');
   }

   if (invar_0 >= 0) {
      if (invar_0 >= 100000) {
         $("#main_calc2_screen_block_cont_win_form_item_input_0").removeClass('main_calc2_screen_block_cont_win_form_item_input_na');
         $("#main_calc2_screen_block_cont_win_form_err_0").css({ 'opacity': '0' });
      } else {
         $("#main_calc2_screen_block_cont_win_form_item_input_0").addClass('main_calc2_screen_block_cont_win_form_item_input_na');
         $("#main_calc2_screen_block_cont_win_form_err_0").css({ 'opacity': '1' });
      }
   }

   if (invar_1 > 0) {
      if (invar_1 >= 10) {
         $("#main_calc2_screen_block_cont_win_form_item_input_1").removeClass('main_calc2_screen_block_cont_win_form_item_input_na');
         $("#main_calc2_screen_block_cont_win_form_err_1").css({ 'opacity': '0' });
      } else {
         $("#main_calc2_screen_block_cont_win_form_item_input_1").addClass('main_calc2_screen_block_cont_win_form_item_input_na');
         $("#main_calc2_screen_block_cont_win_form_err_1").css({ 'opacity': '1' });
      }
   }

   if (invar_2 > 0) {
      if (invar_2 <= 100) {
         $("#main_calc2_screen_block_cont_win_form_item_input_2").removeClass('main_calc2_screen_block_cont_win_form_item_input_na');
         $("#main_calc2_screen_block_cont_win_form_err_2").css({ 'opacity': '0' });
      } else {
         $("#main_calc2_screen_block_cont_win_form_item_input_2").addClass('main_calc2_screen_block_cont_win_form_item_input_na');
         $("#main_calc2_screen_block_cont_win_form_err_2").css({ 'opacity': '1' });
      }
   }

   if (invar_3 != "") {
      if (invar_3 > 0) {
         $("#main_calc2_screen_block_cont_win_form_item_input_3").removeClass('main_calc2_screen_block_cont_win_form_item_input_na');
         $("#main_calc2_screen_block_cont_win_form_err_3").css({ 'opacity': '0' });
      } else {
         $("#main_calc2_screen_block_cont_win_form_item_input_3").addClass('main_calc2_screen_block_cont_win_form_item_input_na');
         $("#main_calc2_screen_block_cont_win_form_err_3").css({ 'opacity': '1' });
      }
   }

   if (invar_4 > 0) {
      if (invar_4 <= 100) {
         $("#main_calc2_screen_block_cont_win_form_item_input_4").removeClass('main_calc2_screen_block_cont_win_form_item_input_na');
         $("#main_calc2_screen_block_cont_win_form_err_4").css({ 'opacity': '0' });
      } else {
         $("#main_calc2_screen_block_cont_win_form_item_input_4").addClass('main_calc2_screen_block_cont_win_form_item_input_na');
         $("#main_calc2_screen_block_cont_win_form_err_4").css({ 'opacity': '1' });
      }
   }


   invar_0++;
   invar_0--;
   invar_0 = invar_0 + ' ';
   invar_0 = invar_0.replace(/[^0-9]/g, '');
   invar_0 = numberWithSpaces(invar_0);
   $("#main_calc2_screen_block_cont_win_form_item_input_0").val(invar_0);

   invar_1++;
   invar_1--;
   invar_1 = invar_1 + ' ';
   invar_1 = invar_1.replace(/[^0-9]/g, '');
   invar_1 = numberWithSpaces(invar_1);
   $("#main_calc2_screen_block_cont_win_form_item_input_1").val(invar_1);

   $("#main_calc2_screen_block_cont_win_form_item_input_2").val(invar_2);
   $("#main_calc2_screen_block_cont_win_form_item_input_3").val(invar_3);
   $("#main_calc2_screen_block_cont_win_form_item_input_4").val(invar_4);

}

///

function processcalc3() {



   var invar_0 = $("#main_calc3_screen_block_cont_win_form_item_input_0").val(); // B33
   invar_0 = invar_0.replace(/[^0-9]/g, '');
   var invar_1 = $("#main_calc3_screen_block_cont_win_form_item_input_1").val(); // B34
   invar_1 = invar_1.replace(/[^0-9]/g, '');
   var invar_2 = $("#main_calc3_screen_block_cont_win_form_item_input_2").val(); // B35
   invar_2 = invar_2.replace(/[^0-9.-]/g, '');
   var invar_3 = $("#main_calc3_screen_block_cont_win_form_item_input_3").val(); // B36
   invar_3 = invar_3.replace(/[^0-9.-]/g, '');
   var invar_4 = $("#main_calc3_screen_block_cont_win_form_item_input_4").val(); // B37
   invar_4 = invar_4.replace(/[^0-9.-]/g, '');




   ////////


   if ((invar_3 > 0) && (invar_1 >= 10) && (invar_0 > 0) && (invar_2 <= 100) && (invar_2 > 0) && (invar_4 > 0) && (invar_4 <= 100)) {


      //////

      var res_summ_1 = Math.ceil((invar_0 / 100) * invar_3); // B39
      res_summ_1 = res_summ_1 + ' ';
      res_summ_1 = res_summ_1.replace(/[^0-9.-]/g, '');
      //	res_summ_1 = numberWithSpaces(res_summ_1);

      var res_summ_2 = Math.ceil((invar_1 / 100) * invar_3); // B40
      res_summ_2 = res_summ_2 + ' ';
      res_summ_2 = res_summ_2.replace(/[^0-9.-]/g, '');
      //	res_summ_4 = numberWithSpaces(res_summ_4);


      var res_summ_3 = Math.ceil(((invar_1 / 100) * invar_3) / 100 * invar_4); // B41
      res_summ_3 = res_summ_3 + ' ';
      res_summ_3 = res_summ_3.replace(/[^0-9.-]/g, '');
      //	res_summ_5 = numberWithSpaces(res_summ_5);

      var res_summ_4 = Math.ceil(invar_0 / invar_1); // B42
      res_summ_4 = res_summ_4 + ' ';
      res_summ_4 = res_summ_4.replace(/[^0-9.-]/g, '');
      //	res_summ_2 = numberWithSpaces(res_summ_2);


      $("#main_calc3_screen_block_cont_win_res_item_summ_1 span").empty().append(numberWithSpaces(res_summ_1)); // B39
      $("#main_calc3_screen_block_cont_win_res_item_summ_2 span").empty().append(numberWithSpaces(res_summ_2)); // B40
      $("#main_calc3_screen_block_cont_win_res_item_summ_3 span").empty().append(numberWithSpaces(res_summ_3)); // B41
      $("#main_calc3_screen_block_cont_win_res_item_summ_4 span").empty().append(numberWithSpaces(res_summ_4)); // B42


      res_summ_4++;
      res_summ_4--;
      var res_summ_5 = Math.ceil(res_summ_4 * (100 / invar_4)); // B43 ////Math.ceil(res_summ_4 / ((res_summ_4 * invar_3)  / 100)); // B43
      res_summ_5 = res_summ_5 + ' ';
      res_summ_5 = res_summ_5.replace(/[^0-9.-]/g, '');
      //		res_summ_3 = numberWithSpaces(res_summ_3);

      $("#main_calc3_screen_block_cont_win_res_item_summ_5 span").empty().append(numberWithSpaces(res_summ_5)); // B43

      res_summ_1++;
      res_summ_1--;
      var res_summ_6 = Math.ceil(((invar_0 / 100) * invar_2) - res_summ_1); // B44
      res_summ_6 = res_summ_6 + ' ';
      res_summ_6 = res_summ_6.replace(/[^0-9-]/g, '');


      if (res_summ_6 <= 0) {
         $("#main_calc3_screen_block_cont_win_res_line_6").addClass('main_calc3_screen_block_cont_win_form_item_input_na');
         $("#main_calc3_screen_block_cont_win_res_line_6").removeClass('main_calc3_screen_block_cont_win_form_item_input_a');

         $("#main_calc3_screen_block_cont_win_res_badbtn").show();
         $("#main_calc3_screen_block_cont_win_res_btn").hide().css({ 'opacity': '0' });

         console.log('bad');
      } else {
         $("#main_calc3_screen_block_cont_win_res_line_6").removeClass('main_calc3_screen_block_cont_win_form_item_input_na');
         $("#main_calc3_screen_block_cont_win_res_line_6").addClass('main_calc3_screen_block_cont_win_form_item_input_a');

         $("#main_calc3_screen_block_cont_win_res_badbtn").hide();
         $("#main_calc3_screen_block_cont_win_res_btn").show().css({ 'opacity': '1' });

         console.log('good');
      }

      res_summ_6 = numberWithSpaces(res_summ_6);

      /*
         console.log(invar_0);
         console.log((invar_0 / 100));
         console.log(((invar_0 / 100) * invar_2));
         console.log(res_summ_1);
         console.log((((invar_0 / 100) * invar_2) - res_summ_1));
      */
      //var invar_b_8 = Math.ceil(invar_0 * (invar_3 / 100));
      $("#main_calc3_screen_block_cont_win_res_item_summ_6 span").empty().append(res_summ_6); // B44
      $("#main_calc3_screen_block_cont_win_res").show().css({ 'opacity': '1' });


      //	$("#main_calc3_screen_block_cont_win_res_badbtn").hide();
      //	$("#main_calc3_screen_block_cont_win_res_btn").show().css({ 'opacity' : '1' });


   } else {
      $("#main_calc3_screen_block_cont_win_res_item_summ_1 span").empty().append("—");
      $("#main_calc3_screen_block_cont_win_res_item_summ_2 span").empty().append("—");
      $("#main_calc3_screen_block_cont_win_res_item_summ_3 span").empty().append("—");
      $("#main_calc3_screen_block_cont_win_res_item_summ_4 span").empty().append("—");
      $("#main_calc3_screen_block_cont_win_res_item_summ_5 span").empty().append("—");
      $("#main_calc3_screen_block_cont_win_res_item_summ_6 span").empty().append("—");
      $("#main_calc3_screen_block_cont_win_res_btn").show().css({ 'opacity': '0.2' });
      $("#main_calc3_screen_block_cont_win_res_badbtn").hide();
      $("#main_calc3_screen_block_cont_win_res").css({ 'opacity': '0.3' });

   }



   if (invar_0 != "") {
      if (invar_0 >= 100000) {
         $("#main_calc3_screen_block_cont_win_form_item_input_0").removeClass('main_calc3_screen_block_cont_win_form_item_input_na');
         $("#main_calc3_screen_block_cont_win_form_err_0").css({ 'opacity': '0' });
      } else {
         $("#main_calc3_screen_block_cont_win_form_item_input_0").addClass('main_calc3_screen_block_cont_win_form_item_input_na');
         $("#main_calc3_screen_block_cont_win_form_err_0").css({ 'opacity': '1' });
      }
   }

   if (invar_1 != "") {
      if (invar_1 >= 10) {
         $("#main_calc3_screen_block_cont_win_form_item_input_1").removeClass('main_calc3_screen_block_cont_win_form_item_input_na');
         $("#main_calc3_screen_block_cont_win_form_err_1").css({ 'opacity': '0' });
      } else {
         $("#main_calc3_screen_block_cont_win_form_item_input_1").addClass('main_calc3_screen_block_cont_win_form_item_input_na');
         $("#main_calc3_screen_block_cont_win_form_err_1").css({ 'opacity': '1' });
      }
   }

   if (invar_2 > 0) {
      if (invar_2 <= 100) {
         $("#main_calc3_screen_block_cont_win_form_item_input_2").removeClass('main_calc3_screen_block_cont_win_form_item_input_na');
         $("#main_calc3_screen_block_cont_win_form_err_2").css({ 'opacity': '0' });
      } else {
         $("#main_calc3_screen_block_cont_win_form_item_input_2").addClass('main_calc3_screen_block_cont_win_form_item_input_na');
         $("#main_calc3_screen_block_cont_win_form_err_2").css({ 'opacity': '1' });
      }
   }

   if (invar_3 != "") {
      if (invar_3 > 0) {
         $("#main_calc3_screen_block_cont_win_form_item_input_3").removeClass('main_calc3_screen_block_cont_win_form_item_input_na');
         $("#main_calc3_screen_block_cont_win_form_err_3").css({ 'opacity': '0' });
      } else {
         $("#main_calc3_screen_block_cont_win_form_item_input_3").addClass('main_calc3_screen_block_cont_win_form_item_input_na');
         $("#main_calc3_screen_block_cont_win_form_err_3").css({ 'opacity': '1' });
      }
   }

   if (invar_4 > 0) {
      if (invar_4 <= 100) {
         $("#main_calc3_screen_block_cont_win_form_item_input_4").removeClass('main_calc3_screen_block_cont_win_form_item_input_na');
         $("#main_calc3_screen_block_cont_win_form_err_4").css({ 'opacity': '0' });
      } else {
         $("#main_calc3_screen_block_cont_win_form_item_input_4").addClass('main_calc3_screen_block_cont_win_form_item_input_na');
         $("#main_calc3_screen_block_cont_win_form_err_4").css({ 'opacity': '1' });
      }
   }




   invar_0 = numberWithSpaces(invar_0);
   $("#main_calc3_screen_block_cont_win_form_item_input_0").val(invar_0);

   invar_1 = numberWithSpaces(invar_1);
   $("#main_calc3_screen_block_cont_win_form_item_input_1").val(invar_1);

   $("#main_calc3_screen_block_cont_win_form_item_input_2").val(invar_2);
   $("#main_calc3_screen_block_cont_win_form_item_input_3").val(invar_3);
   $("#main_calc3_screen_block_cont_win_form_item_input_4").val(invar_4);



}

////

function numberWithSpaces(x) {
   var output = x.split(/(?=(?:...)*$)/);
   return output.join(" ");
}

////

