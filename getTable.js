function getTable() {
    fetch(" http://localhost:3000/tables")
    .then((response) => response.json())
    .then((data) => displayTable(data))
    .catch((error) => console.error("lỗi", error));
}

function displayTable(tables) {
    const tableData = document.getElementById("datcho");

    
    const selectoption = document.getElementById("tableId");
    const selectpayBill = document.getElementById('paybill');
    // console.log(payBill)
    
    tables.forEach((table) => {

        // <!-- phần ni làm cho option những bàn đã đặt -->
        if(!table.status) {
            const option =document.createElement("option");
            option.value = table.id;
            option.textContent = `Bàn ${table.id}`;
            selectoption.appendChild(option);
        }
        // <!-- phần ni làm cho option những bàn đã đặt hiện trong payBill -->
         
        if(!table.status) {
                const option1 =document.createElement("option");
                option1.value = table.id;
                option1.textContent = `Bàn ${table.id}`;
                selectpayBill.appendChild(option1);
        }
            


         // 
        const row1 = document.createElement("div");
        row1.classList.add("content")
        row1.classList.add("col-12");
        row1.classList.add("col-sm-6");
        row1.classList.add("col-xl-3");


        const imgSrc = table.status
        ? "./assets/img/true1.png"
        : "./assets/img/false.png";


        const nano = table.status
        ? `
        <div class="btnn">
             <button type="button" class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#exampleModal"
             // làm cho phần nút  button booking
             onclick= "setModalData(${table.id})" >
                 <i class="fa-solid fa-plus"></i>
                     Booking
             </button>
        </div>
        `
        :`
        <div class="btnn">
            <button type="button" class="btn btn-primary" onclick="clickAdd(${table.id})" data-bs-toggle="modal" data-bs-target="#exampleModal1">
               <i class="fa-solid fa-plus"></i>
               Add
            </button>

        <button type="button" class="btn btn-primary" onclick="clickCart(${table.id})" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            <i class="fa-solid fa-cart-shopping"></i>
            Cart
        </button>
        </div>
        `;
        

        row1.innerHTML = `
        <div class="card card_vh">
            <p>${table.id}</p> 
            <img src="${imgSrc}" alt=""  class="img7"/>
                ${nano}
                </div>
        `;

        tableData.appendChild(row1);
        
    });
    box1[1].style.display = "block";
    big[1].classList.remove('red');// nó sẽ lấy cái navs bắt đầu từ 0-5
    medium[1].classList.remove('red');
    small[1].classList.remove('red');
}

// làm cho phần nút  button booking
function setModalData(tableId) {
    selectedTableId = tableId;
}

// xử lí nút Add (bấm vào add nó sẽ ẩn phần bàn đi và hiện số bàn hiện tại ở select orderfood)
function clickAdd(tableId) {
    //css lại navs và ẩn box đặt bàn
    box1[1].style.display = "none";
    big[1].classList.remove('red');// nó sẽ lấy cái navs bắt đầu từ 0-5
    medium[1].classList.remove('red');
    small[1].classList.remove('red');
    //css lại navs và box orderfood hiện lên
    box1[2].style.display = "block";
    big[2].classList.add('red');
    medium[2].classList.add('red');
    small[2].classList.add('red');
    // lấy ra cái select dòng 184
    const id = document.getElementById('tableId');
    id.value = tableId;
}


// xử lý nút cart(khi nhấn vào cart nó sẽ hiện ra danh sách món đã order)
function clickCart(tableId){
    
    const tdListFoodOder = document.querySelector('.list-food-order');
  
    tdListFoodOder.innerHTML = ''; // reset lại mỗi lần món ăn khác nhau

    fetch('http://localhost:3000/orders')
    .then(response => response.json())
    .then(data => {
        var stt = 0;
        const orderFoodTable = data.filter(order => order.IdTable == tableId); //lấy Idtable trong đối tượng order ở (file getorder dòng 96)
        
        orderFoodTable.forEach((orders,index) => { // nó sẽ duyệt từng IdTable trong json
          
            orders.items.forEach((item) => {
               
                 stt++;
                //  console.log(stt);
                const totalPrice = parseInt(item.quantity) * parseInt(item.priceItemFood);
                const row = `
                <tr>
                <th scope="row">${stt}</th>
                <td class="img5"> <img src="${item.imageItemFood}" alt=""></td>
                <td>${item.foodName}</td>
                <td>${item.quantity}</td>
                <td>${totalPrice} $</td>
                </tr>
                `;
                 tdListFoodOder.innerHTML += row;
                 console.log(row);
            });
        });
    })
    .catch(error => console.error('Error fetching data:',error));

}



getTable();