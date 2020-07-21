function printReceipt(barcodes) {
	let cartItem = getItemNumber(barcodes);
	let cartItemDetails = getItemInfo(cartItem);
	let cartItemDetailsWithPrice = getItemTotalPrice(cartItemDetails);
	let totalPrice = getTotalPrice(cartItemDetailsWithPrice);
	let result = formatRecepit(cartItemDetailsWithPrice,totalPrice);
	console.log(result);
}

function getItemNumber(barcodes) {
	let result = [];
	barcodes.map(barcode => {
		const one = result.find(item => item.id == barcode)
		if(one != undefined) {
			one.num++;
		} else {
			result.push({
				id: barcode,
				num: 1
			});
		}
	})
	return result;

}

function getItemInfo(cartItem) {
	
	let result = [];
    cartItem.map(item => {
       let product = data.find(one => one.barcode == item.id);
       product.num = item.num;
       result.push(product);
    })
    return result;
}

function getItemTotalPrice(cartItemDetails) {
	cartItemDetails.map(cartItemDetail => {
		cartItemDetail.itemTotalPrice = cartItemDetail.price * cartItemDetail.num;
	});
	return cartItemDetails;

}

function getTotalPrice(cartItemDetailsWithPrice) {
	let result = 0;
	cartItemDetailsWithPrice.map(product => {
		result += product.itemTotalPrice;
	})
	return result;
}

function formatRecepit(cartItemDetailsWithPrice, totalPrice) {
	var result = "\n";
	result += "***<store earning no money>Receipt ***\n";
	cartItemDetailsWithPrice.map(product => {
		result += "Name: ";
		result += product.name;
		result += ", Quantity: ";
		result += product.num;
		result += ", Unit price: ";
		result += product.price;
		result += " (yuan), Subtotal: ";
		result += product.itemTotalPrice;
		result += " (yuan)";
		result += "\n";
	})
	result += "----------------------";
	result += "\n";
	result += "Total: " + totalPrice + " (yuan)";
	result += "\n";
	result += "**********************";
	return result;
}

let data = [{
		barcode: 'ITEM000000',
		name: 'Coca-Cola',
		price: 3
	},
	{
		barcode: 'ITEM000001',
		name: 'Sprite',
		price: 3
	},
	{
		barcode: 'ITEM000002',
		name: 'Apple',
		price: 5
	},
	{
		barcode: 'ITEM000003',
		name: 'Litchi',
		price: 15
	},
	{
		barcode: 'ITEM000004',
		name: 'Battery',
		price: 2
	},
	{
		barcode: 'ITEM000005',
		name: 'Instant Noodles',
		price: 4
	}
];

module.exports = {
	printReceipt
};