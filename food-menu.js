window.onload = function(){
    let refeshment = [
        {item: "Ice Tea", price: 2.30},
        {item: "Sweet Tea", price: 3.00},
        {item: "Pepis", price: 3.00},
        {item: "Bottle of Water", price: 2.30}
    ];

    let idDrinks = document.getElementById("drinks");
    console.log(idDrinks);

    let numsOfDrinks = refeshment.length;
    
    
    for(let i = 0; i < numsOfDrinks; i++){
        let idDrinksOptions = new Option (refeshment[i].item, refeshment.price); 
        idDrinks.appendChild(idDrinksOptions);
    };
    let entrees = [
        {item: "Half rack of RIBS", sides: "Mac and Greenz", price: 25.00},
        {item: "Full rack of RIBS", sides: "Mac, CornBread, and Greenz", price: 35.50},
        {item: "Burgers", sides:"Fries ", price: 15.00},
        {item: "Chinken wings ", sides: "Mac and Greenz", price: 15.00}
    ];
    console.log(entrees);

    let idEntrees = document.getElementById("entrees");

    let numsOfEntrees = entrees.length;

    for(let i = 0; i< numsOfEntrees; i++){
        let idEntreesOptions = new Option (entrees[i].item, entrees.price); 
        idEntrees.appendChild(idEntreesOptions);
    };

    let desserts = [
        {item: "Cheese Cake",  price: 5.00},
        {item: "Cholocate Cake",  price: 5.30},
        {item: "Banna Pudding",  price: 6.00}
    ];

    let idDesserts = document.getElementById("desserts");

    let numsOfDesserts = desserts.length;

    for(let i = 0; i< numsOfDesserts; i++){
        let idDessertsOptions = new Option (desserts[i].item, desserts.price); 
        idDesserts.appendChild(idDessertsOptions);
    };


    let ordersBtn = document.getElementById("orderBtn");

    ordersBtn.addEventListener('click', orderHere);

    function orderHere(){
        console.log("hey the btn wrks");

        // the price to show when the button is clicked and the total price 
        let refeshmentPrice  = idDrinks.value;
         console.log(refeshmentPrice);

         let entreesPrice = idEntrees.value;
         console.log(entreesPrice);

         let dessertsPrice = idDesserts.value;
         console.log(dessertsPrice);


    }
}


