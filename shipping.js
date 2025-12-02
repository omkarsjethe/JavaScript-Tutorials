function shippingprice(orderprice,vip){
    if (vip === true){
        console.log("Free shippment for this order ")
        return 0 ;
    }
if (orderprice >= 1000){
    console.log("No Shipment charges on this order")
    return 0;
}else {
    console.log("Shipment charges on this order")
    return 50 ;
}
}

let user1=shippingprice(750,false)
console.log("Total cost of the deliver ",user1)

let user2=shippingprice(1250,false)
console.log("Total cost of the deliver ",user2)

let user3=shippingprice(500,true)
console.log("Total cost of the deliver ",user3)