function getOrder() {
    fetch("http://localhost:3000/Menu")
        .then((response) => response.json())
        .then((data) => displayOrder(data))
        .catch((error) => console.error("lỗi", error));
}

function displayOrder(Menu) {
    const MenuData = document.getElementById("order");

    Menu.forEach((Menu1) => {


        const row = document.createElement("div");
        row.classList.add("table_order");
        row.classList.add("col-12");
        row.classList.add("col-sm-6");
        row.classList.add("col-xl-3");


        row.innerHTML = `
        <div class="card">
                <p class="para3">${Menu1.id}</p>

                <img src="${Menu1.img}" alt="" class="img5"/>

                <p class="para5">${Menu1.food}</p>

                <p class="para4">${Menu1.price}</p>
        

            <div class="price">
                            <div class="food_number">
                            <i class="fa-solid fa-minus icon_reduce"></i>
                            <input type="text" class="quantity_food" value="0" >
                            <i class="fa-solid fa-plus icon_quantity"></i>
                            </div>
            </div>
        </div>   
        `;

        MenuData.appendChild(row);


        //xử lý tăng giảm số lượng
        const reduce = row.querySelector('.icon_reduce');
        const add = row.querySelector('.icon_quantity');
        const quantity = row.querySelector(".quantity_food");

        //action của biến giảm
        reduce.addEventListener('click', () => {
            let valueQuantityFood = parseInt(quantity.value);
            if (valueQuantityFood > 0) {
                quantity.value = (valueQuantityFood - 1).toString();
            }
        });

        //action của biến tăng

        add.addEventListener('click', () => {
            let valueQuantityFood = parseInt(quantity.value);
            quantity.value = (valueQuantityFood +1 ).toString();
        });

    });
};
// getOrder();




// xử lý nút order (food)
let currenOrder = 1;
function addOrder(event) {
    event.preventDefault();
    // lấy id trong select dòng 191
    const IdTable = document.getElementById('tableId').value;
    const table_order = document.querySelectorAll('.table_order'); //tất cả all list món ăn 
    console.log (table_order);

    const orderFoodItems = [];
    table_order.forEach((itemFoods) => {
        const quantity = parseInt(itemFoods.querySelector('.quantity_food').value);
        if (quantity > 0) {
            const foodName = itemFoods.querySelector('.para5').innerText;
            console.log(foodName);
            const idItemFood = itemFoods.querySelector('.para3').innerText;
            const imageItemFood = itemFoods.querySelector('.img5').getAttribute('src');
            console.log(imageItemFood);
            const priceItemFood = itemFoods.querySelector('.para4').innerText;
            orderFoodItems.push({ foodName, idItemFood, imageItemFood, quantity,priceItemFood});
            itemFoods.querySelectorAll('.quantity_food').value = "0";
        }
    });

        if (orderFoodItems.length > 0) {
            const order = {
                IdTable,
                items: orderFoodItems
            }
            fetch('http://localhost:3000/orders', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",   
                },
                body: JSON.stringify(order),
            })
            .then((response) => response.json())
            .then((data) => {
                alert("Đơn hàng đã được thêm", data);
            })
            .catch((error) => {
                console.log("Lỗi khi thêm đơn hàng" ,error);
            });
        
        }  
}

getOrder();
