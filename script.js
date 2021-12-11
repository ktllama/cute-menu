
(function () {
    "use strict";

    const box = document.getElementById('btn');
    const img = document.querySelector('img');

    box.addEventListener('mouseover', function() {
        box.className = "phoneicon";
        box.innerHTML = "1-800-OUR-MENU";
    });

    box.addEventListener('mouseout', function() {
        box.className = "button";
        box.innerHTML ='<img src="2.png" class="img" alt="phone" width="100em">';
    });



})();