xhr = new XMLHttpRequest();
function addCategory(){
	var category = document.getElementById("addCategoryInput");
	xhr.onreadystatechange = updateCat;
	xhr.open("POST","http://localhost:7766/add_category/"+category.value,true);
	console.log("http://localhost:7766/add_category/"+category.value);
	// paste input as json object while sending
	xhr.send('{"category" : "' + category.value+'"}');
}

function updateCat(){
	if(xhr.readyState==4 && xhr.status==200){
		if(xhr.readyState == 4){
			$("#f1bf").removeClass("in").show();
			$("#f1bf").delay(200).addClass("in").fadeOut(2000);
		}else{
			$("#f1bs").removeClass("in").show();
			$("#f1bs").delay(200).addClass("in").fadeOut(2000);
		}
		var obj = JSON.parse(xhr.responseText);
		console.log(obj);
	}
}

function removeCategory(){
	category = document.getElementById("removeCategoryInput");
	xhr.onreadystatechange=updateRemoveCat;
	xhr.open("DELETE","http://localhost:7766/delete_category/"+category.value,true);
	//paste input as json object while sending
	xhr.send('{"category" : "'+category.value+'"}');
}

function updateRemoveCat(){
	if(xhr.readyState==4 && xhr.status==200){
		if(xhr.readyState == 4){
			$("#f2bf").removeClass("in").show();
			$("#f2bf").delay(200).addClass("in").fadeOut(2000);
		}else{
			$("#f2bs").removeClass("in").show();
			$("#f2bs").delay(200).addClass("in").fadeOut(2000);
		}
		obj = JSON.parse(xhr.responseText);
		console.log(obj);
	}
}

//get the price from the server 
function getPrice(){
	cat = document.getElementById("getPriceInput");
	xhr = new xmlhttpRequest();
	xhr.onreadystatechange=priceUpdate;
	xhr.open("GET","http://localhost:7766/find_price/"+cat.value,true);
	//paste input as json object while sending
	xhr.send();
}

function priceUpdate(){
	if(xhr.readyState==4 && xhr.status==200){
		if(xhr.readyState == 4){
			$("#f4bf").removeClass("in").show();
			$("#f4bf").delay(200).addClass("in").fadeOut(2000);
		}else{
			$("#f4bs").removeClass("in").show();
			$("#f4bs").delay(200).addClass("in").fadeOut(2000);
		}
		var obj = JSON.parse(xhr.responseText);
		console.log(obj);
	}
}

// delete the book
function deleteBook(){
	cat = document.getElementById("deletBookInput");
	xhr = new xmlhttpRequest();
	xhr.onreadystatechange=bookDeleteUpdate;
	xhr.open("DELETE","http://localhost:7766/delete_book/"+cat.value,true);
	//paste input as json object while sending
	xhr.send();
}

function bookDeleteUpdate(str){
	if(xhr.readyState==4 && xhr.status==200){
		if(xhr.readyState == 4){
			$("#f5bf").removeClass("in").show();
			$("#f5bf").delay(200).addClass("in").fadeOut(2000);
		}else{
			$("#f5bs").removeClass("in").show();
			$("#f5bs").delay(200).addClass("in").fadeOut(2000);
		}
		var obj = JSON.parse(xhr.responseText);
		console.log(obj);
	}
}
	
// add a new book
function addBook(){
	cat = document.getElementById("addBookInput");
	xhr = new xmlhttpRequest();
	xhr.onreadystatechange = updateAddBook;
	xhr.open("POST","http://localhost:7766/add_book",true);
	xhr.open("send the value as key pair / JSON object");
	//paste input as json object while sending
	xhr.send();
}

function updateAddBook(){
	if(xhr.readyState==4 && xhr.status==200){
		if(xhr.readyState == 4){
			$("#f3bf").removeClass("in").show();
			$("#f3bf").delay(200).addClass("in").fadeOut(2000);
		}else{
			$("#f3bs").removeClass("in").show();
			$("#f3bs").delay(200).addClass("in").fadeOut(2000);
		}
		var obj = JSON.parse(xhr.responseText);
		console.log(obj);
	}
}
	
//update the price
function updatePrice(){
	cat = document.getElementById("updatePriceInput");
	xhr = new xmlhttpRequest();
	xhr.onreadystatechange=updateNewPrice;
	xhr.open("PUT","http://localhost:7766/update_price/"+cat.value,true);
	//paste input as json object while sending
	xhr.send();
}

function updateNewPrice(){
	if(xhr.readyState==4 && xhr.status==200){
		if(xhr.readyState == 4){
			$("#f7bf").removeClass("in").show();
			$("#f7bf").delay(200).addClass("in").fadeOut(2000);
		}else{
			$("#f7bs").removeClass("in").show();
			$("#f7bs").delay(200).addClass("in").fadeOut(2000);
		}
		var obj = JSON.parse(xhr.responseText);
		console.log(obj);	
	}
}

// list of all books
/*
function getAllBook(){
	cat = document.getElementById("id of");
	xhr = new xmlhttpRequest();
	xhr.onreadystatechange = updateAllBook;
	xhr.open("GET","http://localhost:7766/show/"+cat.value,true);
	//paste input as json object while sending
	xhr.send();
}

function updateAllBook(){
	if(xhr.readyState == 4 && xhr.status == 200){
		var obj = JSON.parse(str);
		ele = document.createElement("div");
		//update the vale as json element
		ele.innerHTML = obj;
		document.appendChild(ele);
		var obj = JSON.parse(xhr.responseText);
		console.log(obj);
	}
}*/

// delete the out of stock book
function deleteOutBook(){
	cat = document.getElementById("deleteOutBookInput");
	xhr = new xmlhttpRequest();
	xhr.onreadystatechange = updateOutBook;
	xhr.open("DELETE","http://localhost:7766/clean",true);
	//paste input as json object while sending
	xhr.send();
}

function updateOutBook(){
	if(xhr.readyState==4 && xhr.status==200){
		if(xhr.readyState == 4){
			$("#f6bf").removeClass("in").show();
			$("#f6bf").delay(200).addClass("in").fadeOut(2000);
		}else{
			$("#f6bs").removeClass("in").show();
			$("#f6bs").delay(200).addClass("in").fadeOut(2000);
		}
		var obj = JSON.parse(xhr.responseText);
		console.log(obj);
	}
}
