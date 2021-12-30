/* jQuery(function($){
    $(document).ready(function(){
        
        $(window).scroll(function() {

         if ($(window).width() <= 768) {
              var offset_custom = 0;
         }
         else {
              var offset_custom = $(window).height() / 2 - 500;
         }
         var hT = $('#animation_1').offset().top,
             hH = $('#animation_1').outerHeight(),
             wH = $(window).height(),
             wS = $(this).scrollTop();
         if (wS > (hT+hH-wH) - offset_custom){
             if(!$('#animation_1').hasClass('started')){
                  start_animations();
                  $("#animation_1").addClass('started');
             }
         }
      });

      var anim_1 = lottie.loadAnimation({
          container: document.getElementById('animation_1'), // Required
          path: 'https://assets5.lottiefiles.com/packages/lf20_n9ktd0wu.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: false, // Optional
          name: "animation1"
      })     
      
      function start_animations(){
          lottie.play('animation1');
      }
               
    });
});
jQuery(function($){
    $(document).ready(function(){
        
        $(window).scroll(function() {

         if ($(window).width() <= 768) {
              var offset_custom = 0;
         }
         else {
              var offset_custom = $(window).height() / 2 - 450;
         }
         var hT = $('#animation_2').offset().top,
             hH = $('#animation_2').outerHeight(),
             wH = $(window).height(),
             wS = $(this).scrollTop();
         if (wS > (hT+hH-wH) - offset_custom){
             if(!$('#animation_2').hasClass('started')){
                  start_animations();
                  $("#animation_2").addClass('started');
             }
         }
      });

      var anim_2 = lottie.loadAnimation({
          container: document.getElementById('animation_2'), // Required
          path: 'https://assets3.lottiefiles.com/packages/lf20_kmsgme7y.json', // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: false, // Optional
          name: "animation2"
      })     
      
      function start_animations(){
          lottie.play('animation2');
      }
               
    });
}); */

$(document).ready(function(){
    
    $(window).scroll(function() {
        
            var hT = $('.faq-col .accordion-item:first-of-type').offset().top,
                hH = $('.faq-col .accordion-item:first-of-type').outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS > (hT+hH-wH) + 200){
                $('.faq-col .accordion-item:first-of-type').addClass('active-scroll');
            }
            else {
                $('.faq-col .accordion-item:first-of-type').removeClass('active-scroll');
            }

            var hT_2 = $('.faq-col .accordion-item:nth-of-type(2)').offset().top,
                hH_2 = $('.faq-col .accordion-item:nth-of-type(2)').outerHeight(),
                wH_2 = $(window).height(),
                wS_2 = $(this).scrollTop();
            if (wS_2 > (hT_2+hH_2-wH_2) + 200){
                $('.faq-col .accordion-item:nth-of-type(2)').addClass('active-scroll');
            }
            else {
                $('.faq-col .accordion-item:nth-of-type(2)').removeClass('active-scroll');
            }

            var hT_3 = $('.faq-col .accordion-item:nth-of-type(3)').offset().top,
                hH_3 = $('.faq-col .accordion-item:nth-of-type(3)').outerHeight(),
                wH_3 = $(window).height(),
                wS_3 = $(this).scrollTop();
            if (wS_3 > (hT_3+hH_3-wH_3) + 200){
                $('.faq-col .accordion-item:nth-of-type(3)').addClass('active-scroll');
            }
            else {
                $('.faq-col .accordion-item:nth-of-type(3)').removeClass('active-scroll');
            }


            var hT_4 = $('.faq-col .accordion-item:nth-of-type(4)').offset().top,
                hH_4 = $('.faq-col .accordion-item:nth-of-type(4)').outerHeight(),
                wH_4 = $(window).height(),
                wS_4 = $(this).scrollTop();
            if (wS_4 > (hT_4+hH_4-wH_4) + 200){
                $('.faq-col .accordion-item:nth-of-type(4)').addClass('active-scroll');
            }
            else {
                $('.faq-col .accordion-item:nth-of-type(4)').removeClass('active-scroll');
            }


            var hT_5 = $('.faq-col .accordion-item:nth-of-type(5)').offset().top,
                hH_5 = $('.faq-col .accordion-item:nth-of-type(5)').outerHeight(),
                wH_5 = $(window).height(),
                wS_5 = $(this).scrollTop();
            if (wS_5 > (hT_5+hH_5-wH_5) + 200){
                $('.faq-col .accordion-item:nth-of-type(5)').addClass('active-scroll');
            }
            else {
                $('.faq-col .accordion-item:nth-of-type(5)').removeClass('active-scroll');
            }


            var hT_6 = $('.faq-col .accordion-item:nth-of-type(6)').offset().top,
                hH_6 = $('.faq-col .accordion-item:nth-of-type(6)').outerHeight(),
                wH_6 = $(window).height(),
                wS_6 = $(this).scrollTop();
            if (wS_6 > (hT_6+hH_6-wH_6) + 200){
                $('.faq-col .accordion-item:nth-of-type(6)').addClass('active-scroll');
            }
            else {
                $('.faq-col .accordion-item:nth-of-type(6)').removeClass('active-scroll');
            }


            var hT_7 = $('.faq-col .accordion-item:nth-of-type(7)').offset().top,
                hH_7 = $('.faq-col .accordion-item:nth-of-type(7)').outerHeight(),
                wH_7 = $(window).height(),
                wS_7 = $(this).scrollTop();
            if (wS_7 > (hT_7+hH_7-wH_7) + 200){
                $('.faq-col .accordion-item:nth-of-type(7)').addClass('active-scroll');
            }
            else {
                $('.faq-col .accordion-item:nth-of-type(7)').removeClass('active-scroll');
            }

            
        
    });

    LottieInteractivity.create({
        mode:"scroll",
        player:'#firstLottie',
         actions: [
            {
            visibility: [0, 0.3],
            type: "stop",
            frames: [0]
            },
            {
            visibility: [0.3, 1],
            type: "seek",
            frames: [0, 200]
            }
        ]
        });
})
$(document).ready(function(){
    LottieInteractivity.create({
        mode:"scroll",
        player:'#secondLottie',
         actions: [
            {
            visibility: [0, 0.3],
            type: "stop",
            frames: [0]
            },
            {
            visibility: [0.3, 1],
            type: "seek",
            frames: [0, 200]
            }
        ]
        });
})



function openNav(){
    document.getElementById('myNav').style.height = '100vh';
    document.getElementById('myNav').style.opacity = '1';
}
function closeNav(){
    document.getElementById('myNav').style.height = '0%';
    document.getElementById('myNav').style.opacity = '0';
}

let score = 1;
function up(){
  if(score < 3 ){
    score ++;
  }
  document.getElementById("result").innerHTML = score;
}

function down(){
  if(score > 1){
    score --;
  }
  document.getElementById("result").innerHTML = score;
}

const maxDiv = document.getElementById('max-number');

maxDiv.addEventListener('click',function(){
    score = 3;
    document.getElementById("result").innerHTML = 3;

});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 100
  }, 500);
});


var owl_farm_2 = $('.tekika-slides');
  // Listen to owl events:
        owl_farm_2.on('changed.owl.carousel', function(e) {
            idx = e.item.index;

            $('.owl-item.big').removeClass('big');
            $('.owl-item.medium').removeClass('medium');
            if($(window).width() < 768)
            {
                $('.owl-item').eq(idx).addClass('big');
                $('.owl-item').eq(idx-1).addClass('medium');
                $('.owl-item').eq(idx+1).addClass('medium');
            } else {
                $('.owl-item').eq(idx+1).addClass('big');
                $('.owl-item').eq(idx).addClass('medium');
                $('.owl-item').eq(idx+2).addClass('medium');
            }
            
        })
        owl_farm_2.trigger('next.owl.carousel');


 $(window).scroll(function(){
    var y = $(this).scrollTop();
    if ( y > $('#header-top').offset().top + $('#header-top').height() + 100 ){

        document.querySelector('header').style.position = 'relative';

    }else {

        document.querySelector('header').style.position = 'fixed';
        
    }
});


/*
document.addEventListener('wheel',function (event){
  //only vertical scroll
  if (event.deltaY > 0)
  {
    event.preventDefault();
    smoothScroll(document.documentElement,100,1000)
  }
})
function smoothScroll (domElement,pixel,delay)
{
  const intervalToRepeat = 25;
  const step = (intervalToRepeat * pixel) / delay;
  if ( step < pixel)
  {
    domElement.scrollTop += step;
    setTimeout(function (){
      smoothScroll(domElement,pixel - step,delay)
    },intervalToRepeat);
  }
}
*/


/*
butter.init({
  wrapperId: 'butter'
});

butter.init({
  wrapperDamper: 0.04
});
*/

