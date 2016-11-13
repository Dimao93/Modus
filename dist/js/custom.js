$(document).ready(function(){
    var toggle = false;
    var width = window.innerWidth;
    if(width>600){
         $('.advantages-slider__slider').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
        });
    }
    else if (width<600){
        $('.advantages-slider__slider').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
        });
    }
    $(".dropdown-item").click(function(){
        $(".dropdown-menu").slideToggle();
        
        
    })
    
    $(".header-menu__button").click(function(){
        if(toggle==false){
            $(".header-menu").show(300);
            toggle=true;      
        }
        else if (toggle==true){
            $(".header-menu").hide(300);
            toggle=false;                  
        }
    })
    $(window).resize(function(){
        var w = window.innerWidth;
        if(w>1000){
            if(toggle==false){ 
                $(".header-menu").show();
            }
        }
        else if (w<1000){
            if(toggle!==true){
                  $(".header-menu").hide();
                
            }
        }
    });
    $(".header-menu__search .fa-search").click(function(){               
        $("body,header").addClass("black-bcg");
        $(".search-form").show();
        $(".header-menu__search .fa-search").hide();
        $(".fa-times").show(); 
    })
    $(".fa-times").click(function(){
        $("body,header").removeClass("black-bcg");
        $(".search-form").hide();
        $(".header-menu__search .fa-search").show();
        $(".fa-times").hide(); 
    })
       $('.slider-wrapper').slick({
           dots:true
       });
           
    
    
    
    
            var step = 0;
            var max = 100.1;
            var min = -0.1;
    
    $(".slick-next").click(function(){
                step=step+16.6667;
        if(step>max){
            step=0;        
        }
        $(".fa-circle").animate({
            left: step+"%"
        },1000)     
    })
    $(".slick-prev").click(function(){
         step=step-16.6667;
        if(step<min){
            step=100
        }
         $(".fa-circle").animate({
            left: step+"%"
        },1000)   
    })
    
    
    
    $(".advantages-slider__img").click(function(){
       
            
        if($(this).hasClass("center")){
           return false;
        }
        else{
            var clas = $(this).attr('class');
            $('.center').removeAttr('class').attr('class',clas);
            $(this).addClass("center");
            
        }
       
    })
  $(".contact-form__submit").click(function(e){
    
      var value = $("input[type=text]").add("input[type=email]").not("#header-search");
      for(i=1;i<value.length;i++){
         if(value.eq(i).val()==""){
             e.preventDefault();
             value.eq(i).css("border","2px solid red");
             value.eq(i).next().next(".error").css("display","block");            
         }
          else{
              value.eq(i).css("border","2px solid green");
              value.eq(i).next().next(".error").css("display","none");   
          }
      }
  })  
            
  
})




