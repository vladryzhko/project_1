'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(mutationReocords => {
    console.log(mutationReocords);
});

observer.observe(box, {
    childList: true
})

// observer.disconnect();

