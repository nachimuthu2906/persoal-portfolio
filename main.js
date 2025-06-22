var Typed =new Typed(".text",{
    strings:["Data analyst","Business Analyst"],
    TypedSpeed:300,
    backSpeed:300,
    backDelay:100,
    loop:true
});

document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        $('.slider').slick({
            centerMode: true,
            infinite: true,
            centerPadding: '50px',
            slidesToShow: 2,
            speed: 600,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '30px'
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '20px'
                    }
                }
            ]
        });
    });
});


    // Select all navigation links and the checkbox
    const navLinks = document.querySelectorAll('.navbar a');
    const checkBox = document.getElementById('check');

    // Add a click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Uncheck the checkbox to hide the menu
            checkBox.checked = false;
        });
    });