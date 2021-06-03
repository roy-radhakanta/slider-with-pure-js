// Author : Radhakanta Roy
// LinkedIn: https://www.linkedin.com/in/radha-kanta-82bb521b6
// Twitter: @RadhakantaRoy9

var uiController = (function(){

    var allSelectors;

    allSelectors = {
        sliderxCont: '.sliderx__container',
        imgCont: '.sliderx__img-container',
        sliderNavCont: '.sliderx__nav',
        sliderIndicCont: '.sliderx__indicator',
        allImages: '.sliderx__img',
        arrowNext: '.sliderx__nav--next',
        arrowPreview: '.sliderx__nav--preview'
    };

    return {
        allImgElement: function(){
            return {
                sliderxImages: document.querySelectorAll(allSelectors.allImages)   
            };           
        },
        selectors: function(){
            return allSelectors;
        },
        noOfImage: function(components){
            return components.length;
        }
    };    
})();

var globalController = (function(uiCtrl){
    var doms, allImages, showNext, showPrev, counter, currentImgWdth, noElem, imgContina;

    counter = 0;
    doms = uiCtrl.selectors();
    allImages = uiCtrl.allImgElement();
    noElem = uiCtrl.noOfImage(allImages.sliderxImages);
    imgContina = document.querySelector(doms.imgCont);

    showNext = function(){
        counter++;
        if (counter <=  noElem - 1) {
            imgContina.style.transition = 'transform 0.8s ease-in-out';
            currentImgWdth = allImages.sliderxImages[counter].clientWidth;
            imgContina.style.transform = 'translateX(-' + currentImgWdth * counter  + 'px)';
        }
        if(counter > noElem - 1){
            counter = 0;
            currentImgWdth = allImages.sliderxImages[counter].clientWidth;
            imgContina.style.transform = 'translateX(-' + currentImgWdth * counter  + 'px)';
        }
    };

    showPrev = function(){
        counter--;
        if (counter >=  0) {
            imgContina.style.transition = 'transform 0.8s ease-in-out';
            currentImgWdth = allImages.sliderxImages[counter].clientWidth;
            imgContina.style.transform = 'translateX(-' + currentImgWdth * counter  + 'px)';
        }
        if(counter < 0){
            counter = 0;
            currentImgWdth = allImages.sliderxImages[counter].clientWidth;
            imgContina.style.transform = 'translateX(-' + currentImgWdth * counter  + 'px)';
        }
    };
    
 var controlEvents = function(){
    document.querySelector(doms.arrowNext).addEventListener('click', showNext);
    document.querySelector(doms.arrowPreview).addEventListener('click', showPrev);
}

return {
    init: function(){
        return controlEvents();
    }
};

})(uiController);

globalController.init();