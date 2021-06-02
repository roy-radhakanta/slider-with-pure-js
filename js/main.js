

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
    var doms, counter, allImages, firstImage, imageSize ;
    doms = uiCtrl.selectors();
    counter = 0;
    allImages = uiCtrl.allElement();
    firstImage = allImages.sliderxImg[0];
    imageSize = firstImage.clientWidth;

    var showNextimg = function(){
        
            current.style.transition = 'transform 0.4s ease-in-out';
            counter++;
            current.style.transform = 'translateX(' + (-imageSize) + 'px)';
        
    };

    document.querySelector(doms.arrowNext).addEventListener('click', showNextimg);
   
       
    
    
})(uiController);