function printReceipt(barcodes) {
	let cartItems = getItemNumber(barcodes);
	let cartItemDetails = getItemInfo(cartItems);
	let cartItemDetailsWithPrice = getItemTotalPrice(cartItemDetails);
	let totalPrice = getTotalPrice(cartItemDetailsWithPrice);
	let result = formatRecepit(cartItemDetailsWithPrice, totalPrice);
	console.log(result);
}

function getItemNumber(barcodes) {
	let result = [];
	barcodes.map(barcode => {
		let item = result.find(item => item.barcode == barcode)
		if (item != undefined) {
			item.num++;
		} else {
			result.push({
				barcode: barcode,
				num: 1
			});
		}
	})
	return result;

}

function getItemInfo(cartItems) {

	let result = [];
	cartItems.map(cartItem => {
		let item = data.find(one => one.barcode == cartItem.barcode);
		item.num = cartItem.num;
		result.push(item);
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
	let result = "\n";
	result += "***<store earning no money>Receipt ***\n";
	cartItemDetailsWithPrice.map(product => {
		result += "Name: " + product.name + ", Quantity: " + product.num + ", Unit price: " + product.price + " (yuan), Subtotal: " + product.itemTotalPrice + " (yuan)" + "\n";
	})
	result += "----------------------" + "\n" + "Total: " + totalPrice + " (yuan)" + "\n" + "**********************";
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
