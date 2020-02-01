

    
   
    /*Filter=====================================================================================*/
    
    let filter = $("[data-filter]");
    //При клике мы отменяем сдандартное поведение ссылки
    filter.on("click", function (event) {
        event.preventDefault();
       // Выводит значение элементов
        
       let cat = $(this).data ('filter');
        
        if(cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
             $("[data-cat]").each(function() {
           
            let workCat = $(this).data('cat');
            
            if(workCat != cat) {
                $(this).addClass('hide');
                
            } else {
                $(this).removeClass('hide');
                
              }
          });   
        }  
    });
    
     /*Modal=====================================================================================*/
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
     //Вызываем модальное окно
    modalCall.on("click",function(event) {
        
        event.preventDefault();
        
        let $this = $(this);
        let modalId = $this.data('modal');
        
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        
        setTimeout(function(){
            $(modalId).find(".modal__dialog").css({
                //Эффекты модального окна "открытие"
            transform: "scale(1)"
        });
            
        },200);
        
        
            
    });
    //Закрытие
    modalClose.on("click",function(event) {
        
        event.preventDefault();
        
        let $this = $(this);
        let modalParent = $this.parents('.modal');
        
          modalParent.find(".modal__dialog").css({
              //Закрытие модального окна
            transform: "scale(0)"
        });
        
        setTimeout(function(){
             modalParent.removeClass('show');
             $("body").removeClass('no-scroll');   
        },200);   
    });
    
    
     $(".modal").on("click",function(event) {
         let $this = $(this);
         
         $this.find(".modal__dialog").css({
             //Закрытие модального окна
            transform: "scale(0)"
        });
        
        
        setTimeout(function(){
             $this.removeClass('show');
             $("body").removeClass('no-scroll');      
             $("body").removeClass('no-scroll');   
        },200); 
        
         
        
        
        
    });
    
     $(".modal__dialog").on("click",function(event) {
         event.stopPropagation();
        
           
    });
    
  
    
 /*Burger Menu===========================================================*/
    
    const navToggle = $("#navToggle");
    const nav = $("#nav");
    
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass("show");
        document.getElementById('show').style.transition = 'all .25s ease-in-out';
    });
    
     /*Scroll*/
    
    var header = $("#header"),
	 introH = $("#intro").innerHeight(),
	 scrollOffset = $(window).scrollTop();
	 
	 checkScroll(scrollOffset);
	 
	 
	/*Header fixed*/
	$(window).on("scroll",function(){
		scrollOffset = $(this).scrollTop();
		
		checkScroll(scrollOffset);
		
	});
	
	function checkScroll(scrollOffset){
		
		if(scrollOffset >= introH) {
		 header.addClass("fixed");
		}	else {
                header.removeClass("fixed");
	  }
	}	
	
	/*Smooth Scroll*/
	
	$("[data-scroll]").on("click",function(event) {
		event.preventDefault();
		
		var $this = $(this),
		blockId = $this.data('scroll'),
		     blockOffset = $(blockId).offset().top;
			 
		$("#nav a").removeClass("active");
		$this.addClass("active");
		
		$("html,body").animate({
			scrollTop:blockOffset
		},600);
	});
    
	
    
    /*Accordion*/
    
    $('.accordion__item .heading ').on('click',function(e) {
        e.preventDefault();
        
        //Add the correct active class 
        if($(this).closest('.accordion__item').hasClass('active')) {
            //Remove active classes
            
                 $('.accordion__item').removeClass('active');
             } else {
                 //Remove active classes
                 
                 $('.accordion__item').removeClass('active');
                 //Add the active class 
                 
                 $(this).closest('.accordion__item').addClass('active');
             }
        //Show the content
        
        var $content = $(this).next();
        $content.slideToggle(100);
        $('.accordion__item . accordion__content').not($content).slideUp('fast');
    });



// Анимация сообщения о результате
var showmsg = new TimelineMax();
showmsg.add(TweenMax.to(".msg", 0.7, {opacity: 1,y: -40,ease: Expo.easeOut}));
showmsg.add(TweenMax.to(".msg", 0.7, {opacity: 0,y: 0,ease: Expo.easeOut,delay: 2}));
showmsg.pause();

// Анимация плашки слова "подождите"
var loadanim = TweenLite.to(".loading", 1, {autoAlpha: 0.8});
loadanim.pause();
    

    // Отправка данных на сервер
$('#form').trigger('reset');
$(function() {
  'use strict';
  $('#form').on('submit', function(e) {
    $('.msg').removeClass('error success');
    $('input').removeClass('inputerror');
    loadanim.play();
    e.preventDefault();
    $.ajax({
      url: 'send.php',
      type: 'POST',
      contentType: false,
      processData: false,
      data: new FormData(this),
        beforeSend:function () {
            $("#send").prop("disabled" , true);
        },
      success: function(msg) {
        console.log(msg);
        if (msg == 'Ok') {
          $('#form').trigger('reset');
          $('.amount').text('Выберите файлы');
          $('label').removeClass('active');
          $('.msg').text('Сообщение успешно отправлено').addClass('success');
          showmsg.restart();loadanim.duration(0.3).reverse();
        } else {
          if (msg == 'mailerror') {
            $("#email").addClass('inputerror');
          }
          $('.msg').text('Ошибка. Сообщение не отправлено').addClass('error');
          showmsg.restart();loadanim.duration(0.3).reverse();
        }
      }
    });
  });
});


/*SLIDER OWL CAROUSEL*/

$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    navText: [$('.am-next'),$('.am-prev')],
    touchDrag:true,
    autoplay:true,
    autoplayTimeout:6000,
    smartSpeed:2000,
    responsive:{
        0:{
            items:1
        }    
    }
});

 $('.slider__two').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    touchDrag:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    smartSpeed:2000,
    responsive:{
      0:{
        items:1
       }
     } 

   });
});
