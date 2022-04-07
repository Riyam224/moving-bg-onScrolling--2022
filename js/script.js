
// todo all images 
let stars = document.getElementById('stars');
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let mountains7 = document.getElementById('mountains7')

// name
let yonna = document.querySelector('.yonna')


window.onscroll =  function() {

    let value = scrollY
    
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + "px";
    mountains3.style.top = value * 2 + "px";
    mountains4.style.top = value * 1.5 + "px";
    river.style.top = value + "px";
    boat.style.top = value + "px";
    boat.style.left = value  * 3 + "px";

    yonna.style.fontSize = value + "px";
    if(scrollY >= 67) {

        yonna.style.fontSize = 67 + "px";
        yonna.style.position = 'fixed';

        if(scrollY >=  370) {

            yonna.style.display = 'none';

        }else {
            yonna.style.display = 'block'
        }
        if(scrollY >= 300) {
            document.querySelector('.main').style.background = ' linear-gradient(rgb(63, 109, 179), white)'
            
        }else {
            document.querySelector('.main').style.background = 'linear-gradient(rgb(73, 1, 73) , rgb(27, 0, 31))'
        }

    }
}




