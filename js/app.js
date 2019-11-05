
$(function() {
    
    const worksSlider =  $('[data-slider="slick"]');
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
        
        worksSlider.slick('setPosition');
            
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
    
    /*Slider : https://kenwheeler.github.io/slick/
    =============================*/
    
    
  worksSlider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows :false,
  dots:true 
});
    
     $(".slickPrev").on("click",function(event) {
        event.preventDefault();
         
         let currentSlider =
         $(this).parents('.modal').find('[data-slider="slick"]');
        
        currentSlider.slick("slickPrev");   
    });
    
      $(".slickNext").on("click",function(event) {
        event.preventDefault();
          
           let currentSlider = 
           $(this).parents('.modal').find('[data-slider="slick"]');
        
           currentSlider.slick("slickNext");
        
    });
    
 /*Burger Menu===========================================================*/
    
    const navToggle = $("#navToggle");
    const nav = $("#nav");
    
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass("show");
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
    
