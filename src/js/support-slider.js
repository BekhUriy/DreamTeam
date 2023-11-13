const navBTN = document.querySelector('.nav-btn');

navBTN.addEventListener('click', scrollDown);

function scrollDown() {
    const fondsList = document.querySelector('.fonds');
    const liHeight = fondsList.querySelector('li').offsetHeight;
    const down = document.querySelector('.icon-down');
    const up = document.querySelector('.icon-up');

        // Check the current scroll position
        if (fondsList.scrollTop + fondsList.clientHeight >= fondsList.scrollHeight) {
            // Scroll to the top if at the bottom
             
            while (fondsList.scrollTop !== 0) {
                
                fondsList.scrollTop -= liHeight;

            }
            
        } else {
            
            // Scroll down by liHeight
            fondsList.scrollTop += 2*liHeight;
        }
    
    if (fondsList.scrollTop + fondsList.clientHeight < fondsList.scrollHeight) {
        down.classList.remove('is-hidden');
        up.classList.add('is-hidden');
    }
    else {
        down.classList.add('is-hidden');
        up.classList.remove('is-hidden');
    }
}