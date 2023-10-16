document.addEventListener('DOMContentLoaded', function () {
    const updateForm = document.getElementById('form--update--info');
    const imageInformation = document.querySelectorAll('.avt');
    const profileImageInput = document.getElementById('profileImage');
    // console.log(profileImageInput);
    
    //Action change
    profileImageInput.addEventListener('change', function (event){
        const file = event.target.files[0];

        if(file) {
            var avtURL = URL.createObjectURL(file); // tạo ra đường dẫn tạm thời
            imageInformation.forEach((Element) => {
                Element.src = avtURL;
            })
        }else{
            console.log('chưa có hình ảnh');
        }
    });


    updateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('inputusername').value;
        const firstname = document.getElementById('inputFirstname').value;
        const lastname = document.getElementById('inputLastname').value;
        const orgname = document.getElementById('inputOrganizationname').value;
        const location = document.getElementById('inputLocation').value;
        const email = document.getElementById('inputEmailaddress').value;
        const phone = document.getElementById('inputPhonenumber').value;
        const birthday = document.getElementById('inputBirthday').value;

        const users = localStorage.getItem('user');
        const getUsers = JSON.parse(users);
        const userInfo = {
            username: username,
            firstname: firstname,
            lastname: lastname,
            orgname: orgname,
            location: location,
            email: email,
            phone: phone,
            birthday: birthday,
            img: getUsers.img,
            password: getUsers.password
        };

        //convert the userInfo object to a JSON string
        const userInfoJSON = JSON.stringify(userInfo);

        //save the JSON string to Local Storage
        localStorage.setItem('user', userInfoJSON);

        alert('Personal information updated and saved.');
    });
 
});