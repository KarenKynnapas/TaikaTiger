const nav = document.querySelector('.navbar');
window.onscroll = function() {
    var top = window.scrollY;
    if (top >= 100) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active');
    }
}

function addModalFunctionality(myModalId, myBtnId, spanId) {
    // Get the modal
    var modal = document.getElementById(myModalId);

    // Get the button that opens the modal
    var btn = document.getElementById(myBtnId);

    // Get the <span> element that closes the modal
    var span = document.getElementById(spanId);

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }, false);
}

addModalFunctionality("modal1", "case1", "close1");
addModalFunctionality("modal2", "case2", "close2");
addModalFunctionality("modal3", "case3", "close3");
addModalFunctionality("modal4", "case4", "close4");