(function (document) {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    const btnLight = document.getElementById('btnLight'),
          imgLight = document.getElementById('imgLight');

    btnLight.addEventListener('click', function (ev) {
      console.log(ev);
      const txtOn = 'Light On',
           txtOff = 'Light Off',
            imgOn = 'img/light-on.png',
           imgOff = 'img/light-off.png';

      if (imgLight.getAttribute('src') === imgOff) {
        imgLight.setAttribute('src', imgOn);
        imgLight.setAttribute('alt', txtOn);
        btnLight.innerText = txtOff;
      } else {
        imgLight.setAttribute('src', imgOff);
        imgLight.setAttribute('alt', txtOff);
        btnLight.innerText = txtOn;
      }

    });

  });

}(document));
