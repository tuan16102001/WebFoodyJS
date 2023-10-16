let btns = document.querySelectorAll('.btns a'),
   sections = document.querySelectorAll('.sec');

   btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btns.forEach((btn) =>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');
        let sectionName = btn.dataset.section;
        sections.forEach((sec) =>{
            sec.classList.remove('active');
        });
        document.querySelector(`.${sectionName}`).classList.add('active');

    });
   });

//    //Validation Register form

//    const form = document.querySelector('#form'),
//     fName = document.querySelector('#f-name'),
//     email = document.querySelector('#email'),
//     password = document.querySelector('#password'),
//     rpassword = document.querySelector('#r-password');

//     function checkInputs(){
//         //trim to remove the whitespaces
//         const fNameValue =  fName.Value.trim(),
//               emailValue =  email.Value.trim(),
//               passwordValue = password.Value.trim();
//               rpasswordValue = rpassword.Value.trim();

//               if(fNameValue === '') {
//                 setErrorFor(fName, 'Full Name cannot be blank');
//               }else{
//                 setSuccessFor(fName)
//               }

//               if(emailValue === '') {
//                 setSuccessFor(email,'Email cannot be blank');
//               }else if(!isEmail(emailValue)) {
//                  setErrorFor(email,'Not a vail eamil');
//               }else {
//                 setSuccessFor(email);
//               }

//               if(fpasswordValue === '') {
//                 setErrorFor(password, 'password cannot be blank');
//               }else{
//                 setSuccessFor(password);
//               }

//               if(rpasswordValue === '') {
//                 setErrorFor(rpassword, 'Password cannot be blank');
//               }else if (passwordValue !== rpasswordValue) {
//                 setErrorFor(rpassword,'password does not match')
//               }else {
//                 setSuccessFor(rpassword);
//               }
//     }



// chức năng đăng ký

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const  fName = document.getElementById('f-name').value;
    const  email = document.getElementById('email').value;
    const  password = document.getElementById('password').value;
    const  confirmPassword = document.getElementById('r-password').value;

    //Kiểm tra mật khẩu và mật khẩu xác nhận

    if( password !== confirmPassword ) {
        alert('Mật khẩu xác nhận không trùng khớp với mật khẩu đã nhập.');
        return;
    }

    //Lưu thông tin đăng ký vào location

    const user = {
        fName: fName,  //fName = 'fname'
        email: email,
        password : password,
        img: './assets/img/tuan.jpg'
    };

    const userData = JSON.stringify(user);
    localStorage.setItem('user', userData); //key và value

    alert('Đăng ký thành công!');
    //(Optinal) chuyển hướng đến trang khác sau khi đăng ký thành công
    window.location.href = 'foody.html';
});



//chức năng đăng nhập
// document.getElementById('login').addEventListener('submit', (e) => {

// })

document.getElementById('login').addEventListener('submit', (e) => {
    e.preventDefault();

    const username1 = document.getElementById('loginUername').value;
    const password1 = document.getElementById('loginPassword').value;

    // lấy thông tin đăng ký từ localStorge
    const userData = localStorage.getItem('user');
    if(!userData)  {
        alert ('Tài khoản chưa được đăng ký. Vui lòng đăng ký trước khi đăng nhập');
        return;

    }

    //chuyển thông tin đăng ký từ chuỗi JSON thành đối tượng Javascrip
    const user1 = JSON.parse(userData);

    //Kiểm tra thông tin đăng nhập

    if(username1 !== user1.fName || password1 !== user1.password){
        alert('Tài khoản và mật khẩu không chính xác,vui lòng kiểm tra lại.');
        return;
    }

    //đăng nhập thành công 
    alert('đăng nhập thành công');
     //(Optinal) chuyển hướng đến trang khác sau khi đăng ký thành công
     window.location.href = 'foody.html';

});










