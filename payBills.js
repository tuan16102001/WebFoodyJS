// function loadOrderInfo()  này để onchange vào hiển thị món ăn và số tiền và tổng tiền các món ăn
function loadOrderInfo() {
    const selectPayBill = document.getElementById("paybill").value;
    // orderInfo trong tbody dòng 234 html
    const orderInfo = document.getElementById("orderInfo");
    // console.log(orderInfo);
    let totalAmout = 0; //biến để tính tổng tiền

    //Tạo yêu cầu đến Json server để lấy thông tin Orrder theo id bàn
    fetch(`http://localhost:3000/orders?IdTable=${selectPayBill}`)
    .then(response => response.json())
    .then(data => {
        orderInfo.innerHTML = ""; //xóa nội dung cũ
        var a = 0;
        data.forEach(order => {
            order.items.forEach((dish) => {
                a++;
                const row = document.createElement("tr");
                const dishTotalPrice = parseInt(dish.priceItemFood) * parseInt(dish.quantity); // tính tổng tiền cho món ăn
                totalAmout += dishTotalPrice;
                row.innerHTML = `
                <th scope="col">${a}</th>
                <td><img src="${dish.imageItemFood}" alt="" class="img10"></td>
                <td>${dish.foodName}</td>
                <td>${dish.quantity}</td>
                <td>${dishTotalPrice} $</td>
                `;
                orderInfo.appendChild(row);
            });
        });

        //Thêm tổng tiền cho toàn bộ đơn hàng 
        const totalRow = document.createElement("tr");
        totalRow.innerHTML = `
        <td colspan="4"><strong>Tổng cộng</strong></td>
        <td><strong>${totalAmout} $</strong></td>
        `;
        orderInfo.appendChild(totalRow);

    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

}

 // Reset lại bàn và món ăn(khi click vào nút payBills)
//  nó sẽ reset lại trạng thái,khách hàng,số lượng khi vào "Reservations" sẽ thấy hiện lại booking
function payBills() {
  var select = document.getElementById("paybill").value;
  console.log(select);
  // Delete orders with the corresponding tableId
fetch(`http://localhost:3000/orders?IdTable=${select}`)
.then(response => response.json())
.then(data => {
const orderIds = data.map(order => order.id);

orderIds.forEach(orderId => {
  fetch(`http://localhost:3000/orders/${orderId}`, {
    method: "DELETE",
  })
    .then(() => {
      console.log(`Order ${orderId} has been deleted.`);
    })
    .catch(error => {
      console.error(`Error deleting order ${orderId}:`, error);
    });
});
})
.catch(error => {
console.error("Error fetching orders:", error);
});

  fetch(`http://localhost:3000/tables/${select}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          status: true,
          customerName: "",
          capacity: 0,
      }),
  })
  .then(response => response.json())
  .then(() => {
      console.log(`Bàn ${select} đã reset.`);
  })
  .catch(error => {
      console.log("error reseting table:", error);
  });
}