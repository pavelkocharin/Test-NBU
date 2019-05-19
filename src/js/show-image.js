'use strict';
//простая функция попап увеличения картинок
(function () {

  var imagesContent = document.querySelectorAll('.diplom-block__img, .slide-learning__img');
  var popupActive = 'popup__active';
  Array.prototype.forEach.call(imagesContent, function(elem){
    elem.addEventListener('click', function(){
      var popupLayout = document.createElement('div');
      var buttonClosePopup = document.createElement('button');
      var cloneElem = elem.cloneNode(true);

      popupLayout.classList.add(popupActive);
      buttonClosePopup.classList.add('popup__button-close');
      if (popupLayout.classList.contains(popupActive)) {
        document.body.appendChild(popupLayout);
        document.body.appendChild(buttonClosePopup);

        setTimeout(function(){
          popupLayout.appendChild(cloneElem);
          cloneElem.classList.add('popup__image');
        }, 200);
      };

      popupLayout.addEventListener('click', function(){
        document.body.removeChild(popupLayout);
        document.body.removeChild(buttonClosePopup);
      });

      buttonClosePopup.addEventListener('click', function(){
        document.body.removeChild(popupLayout);
        document.body.removeChild(buttonClosePopup);
      });
      
    })
  })

})();