fetch("http://localhost:3000/tables")
.then((response) => response.json())
.then((data) => {

    const tableCapacityData = data.map((table) => table.capacity);
    const tablelabels = data.map((table) => `Table ${table.id}`);


    const canvars = document.createElement("canvas");
  
    document.getElementById("charts-container").appendChild(canvars);

    new Chart(canvars, {
        type: "bar",
        data: {
            labels: tablelabels, //lấy ra bao nhiêu caid bàn có trong json
            datasets: [
                {
                    label: "Table Capacities",
                    data: tableCapacityData,
                    backgroundColor: "rgba(75,192,192,0.6)",
                    borderColor: "rgba(75,192,192,1)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
})
.catch((error) => console.error("Error fetching data:", error));


// //


// fetch('http://localhost:3000/orders')
// .then((response) => response.json())
// .then((data) => {
//     let totalAmout = 0; 
//     data.forEach(order => {
//         order.items.forEach((dish) => {
//             const dishTotalPrice = parseInt(dish.priceItemFood) * parseInt(dish.quantity); // tính tổng tiền cho món ăn
//             totalAmout += dishTotalPrice;
//         });
//     });

//     // const dishTotalPrice = parseInt(dish.priceItemFood) * parseInt(dish.quantity); // tính tổng tiền cho món ăn
//     //    totalAmout += dishTotalPrice;
//     const tablelabels1 = data.map((table) => `Table ${table.IdTable}`);

//     console.log(tablelabels1)
//     const canvars1 = document.createElement("canvas");
//     document.getElementById("chart-pie").appendChild(canvars1);


//     new Chart(canvars1, {
//         type: "pie",
//         data: {
//             labels: tablelabels1, //lấy ra bao nhiêu caid bàn có trong json
//             datasets: [
//                 {
//                     label: "Table Capacities",
//                     // data: totalAmout,
//                     data: [totalAmout],
//                     backgroundColor: [
//                         "red",
//                         "yellow",
//                         "black",
//                         "dark",
//                         "blue",
//                         "orange",
//                         "green"
//                         // 'rgba(7,221,100,0.6)',
//                         // 'rgba(63,130,7, 0.6)',
//                         // 'rgba(255, 99, 132, 0.6)',
//                         // 'rgba(54, 162 ,235, 0.6)',
//                         // 'rgba(200,7,100)',
//                         // 'rgba(255,206,86,0.6)',
//                         // 'rgba(75,192,192,0.6)',
//                         // 'rgba(153,102,255,0.6)',
//                         // 'rgba(255,159,64,0.6)',
//                         // 'rgba(255,99,132,0.6)'
//                 ],
//                     borderColor:[
//                         "red",
//                         "yellow",
//                         "black",
//                         "dark",
//                         "blue",
//                         "orange",
//                         "green"
//                 ],
//                     borderWidth: 1,
//                 },
//             ],
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//         },
//     });

// })
// .catch((error) => console.error("Error fetching data:", error));



fetch('http://localhost:3000/orders')
.then((response) => response.json())
.then((data) => {
const tablelabels = data.map((table) => `Table ${table.IdTable}`);
const totalAmounts = data.map((table) => {
    let tableTotal = 0;
    table.items.forEach((item) => {
        const dishTotalPrice = parseInt(item.priceItemFood) * parseInt(item.quantity);
        tableTotal += dishTotalPrice;
    });
    return tableTotal;
});

const canvas1 = document.createElement("canvas");
document.getElementById("chart-pie").appendChild(canvas1);

new Chart(canvas1, {
    type: "pie",
    data: {
        labels: tablelabels,
        datasets: [
            {
                label: "Table Capacities",
                data: totalAmounts,
                backgroundColor: [
                    "red",
                    "yellow",
                    "black",
                    "dark",
                    "blue",
                    "orange",
                    "green"
                ],
                borderColor: [
                    "red",
                    "yellow",
                    "black",
                    "dark",
                    "blue",
                    "orange",
                    "green"
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    },
})
});
