const data = {
    cars: [
        {
            carName: "Toyota",
            Year: "2000",
            Km: "302,828",
            price: "60,000$"
        },
        {
            carName: "Mazda",
            Year: "2020",
            Km: "199,028",
            price: "70,000$" 
        },
        {
            carName: "BMW",
            Year: "2001",
            Km: "38,273",
            price: "90,000$"
        }
    ],
    selected_items: [],
    max_allowed: 1
}

function main(){
    for(let i=0; i<data.cars.length; i++){
    $("#car_tab").append(`
        <tr id="tr${i+1}">
        <td>${i+1}</td>
        <td>${data.cars[i].carName}</td>
        <td>${data.cars[i].Year}</td>
        <td>${data.cars[i].Km}</td>
        <td id="car1" class="price">${data.cars[i].price}</td>
        <td><button type="button" id="myBtn${i+1}" class="btn btn-success">Select</button></td>
    </tr>`)
    $(`#myBtn${i+1}`).on('click', () =>{
        $(`#tr${i+1}`).toggleClass("tr");
        const element = document.getElementById(`myBtn${i+1}`);
        if (element.innerHTML === "Unselect") {
            element.innerHTML = "Select";
            const index = data.selected_items.indexOf(data.selected_items[i])
            data.selected_items.splice(index)
         } else {
            element.innerHTML = "Unselect";
            data.selected_items.push(data.cars[i].price)
         }
    })}

    $("#orderbtn").on('click', () => {
        if (data.selected_items.length > data.max_allowed){
            console.log(`can't choose more than ${data.max_allowed} cars`);
        }
        else {
            console.log(data.selected_items.join(', '), 'ordered completed');
        }
    })


}
main()
