
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
    
		   
});