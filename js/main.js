

var uiController = (function(){

    var allSelectors, sliderxContainer, sliderxImgConiner, sliderxImg, slidexNavNext, sliderxNavPrev, sliderxIndicator, arrowNext, arrowPreview ;

    allSelectors = {
        sliderxCont: '.sliderx__container',
        imgCont: '.sliderx__img-container',
        sliderNavCont: '.sliderx__nav',
        sliderIndicCont: '.sliderx__indicator',
        allImages: '.sliderx__img',
        arrowNext: '.sliderx__nav--next',
        arrowPreview: '.prev__arrow'
    };
    
    return {
        allElement: function(){
            return {
                sliderxImg: document.querySelectorAll(allSelectors.allImages)   
            };           
        },
        
        selectors: function(){
            return allSelectors;
        },
        sliderLength: function(components){
            return components.length;
        }
    };    
})();

var globalController = (function(uiCtrl){
    var i = 0;
    var doms = uiCtrl.selectors();
    var images = uiCtrl.allElement();
    var lengthx = uiCtrl.sliderLength(images.sliderxImg);

    var showNext = function(){
        i++;
        if(i > lengthx - 1){
            console.log('stop');
            i = 0;
        }else{
            console.log(i);
            
        }
    };
    

    // console.log(images.sliderxImg[0].classList.add("active"));
    
    document.querySelector(doms.arrowNext).addEventListener('click', showNext);
    
})(uiController);