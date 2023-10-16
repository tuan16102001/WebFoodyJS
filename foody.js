//onclick vào profile
// var box = document.getElementById('pic');
// // console.log(box);
// box.onclick = function() {
//     var img = document.getElementById('profile2');
//     console.log(img);
//     img.classList.toggle('profile');
// }


//onclick vào profile
var box = document.getElementById('pic');
const showprofile2 = document.getElementById("profile2")

box.addEventListener('click', function(){
    showprofile2.style.display = "block";
});

document.addEventListener('click', function(event) {
    const targetElement = event.target;

    if(!targetElement.closest('.header_right')){
        showprofile2.style.display = 'none';
    }
});




//đoạn nút icon to thu nhỏ lại
var to = document.getElementById('left_to');
var nho = document.getElementById('left_nho');

var iconto = document.getElementById('iconto');
var iconnho = document.getElementById('iconnho');

iconto.addEventListener(('click'), () => {
    to.style.display = 'none';
    nho.style.display = 'block';
    
});



iconnho.addEventListener(('click'), () => {
    to.style.display = 'block';
    nho.style.display = 'none';

});

//đoạn kích vào navbar sổ ra content(box)
//sử lý hoạt động của menu
var big = document.querySelectorAll('.left .big .navs');
// console.log(big);
var box1 = document.querySelectorAll('.box');
// console.log(box1);

big.forEach((Element, index) => {
    Element.addEventListener('click', () => {
        box1.forEach((box, index) => box.style.display = 'none');
        box1[index].style.display = "block";

        // đổi màu
        big.forEach((navs, i) => {
            if (i === index) {
                navs.classList.add("red");
            }else {
                navs.classList.remove("red");
            }
        });

        medium.forEach((navs, i) => {
            if (i === index) {
                navs.classList.add("red");
            }else {
                navs.classList.remove("red");
            }
        });
    });
}) 


var medium = document.querySelectorAll('.left .medium .navs');
// console.log(medium);
var box1 = document.querySelectorAll('.box');
// console.log(box1);
medium.forEach((Element, index) => {
    Element.addEventListener('click', () => {
        box1.forEach((box, index) => box.style.display = 'none');
        box1[index].style.display = "block";

        // đổi màu
        medium.forEach((navs, i) => {
            if (i === index) {
                navs.classList.add("red");
            }else {
                navs.classList.remove("red");
            }
        });


        big.forEach((navs, i) => {
            if (i === index) {
                navs.classList.add("red");
            }else {
                navs.classList.remove("red");
            }
        });
    });
}) 

var small = document.querySelectorAll('.left .small .nav-item');
// console.log(small);
var box1 = document.querySelectorAll('.box');
// console.log(box1);
small.forEach((Element, index) => {
    Element.addEventListener('click', () => {
        box1.forEach((box, index) => box.style.display = 'none');
        box1[index].style.display = "block";

        // đổi màu
             
        small.forEach((navs, i) => {
            if (i === index) {
                navs.classList.add("red");
            }else {
                navs.classList.remove("red");
            }
        });

        
        medium.forEach((navs, i) => {
            if (i === index) {
                navs.classList.add("red");
            }else {
                navs.classList.remove("red");
            }
        });


        big.forEach((navs, i) => {
            if (i === index) {
                navs.classList.add("red");
            }else {
                navs.classList.remove("red");
            }
        });
    });
}) 

