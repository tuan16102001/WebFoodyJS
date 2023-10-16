var selectedTableId = null;

var updateTableDataButton = document.getElementById('updateTableData');
updateTableDataButton.addEventListener('click', updateTableData)

function updateTableData(event) {
    event.preventDefault();
    const customerNameInput = document.getElementById('customerName');
    const capacityInput = document.getElementById("capacity");


    const updateTableData = {
        id: selectedTableId,
        status: false,
        customerName:customerNameInput.value,
        capacity: parseInt(capacityInput.value),
    };


    fetch(`http://localhost:3000/tables/${selectedTableId}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",   
        },
        body: JSON.stringify(updateTableData),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("table data updated", data);
    })
    .catch((error) => {
        console.log("Error updating table data:" ,error);
    });

}