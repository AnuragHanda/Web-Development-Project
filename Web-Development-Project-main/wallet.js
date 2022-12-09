function deposit(){
	var rupee = window.prompt("Enter the amount you want to deposit");
	var r = parseInt(rupee);
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseInt(wealth);
	wealth = w + r;
	var wealth = $('#inr_wealth').html(wealth);
	total_wealth();
}

function withdraw(){
	var rupee = window.prompt("Enter the amount you want to withdraw");
	var r = parseInt(rupee);
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseInt(wealth);
	if (r<=w) {
		wealth = w - r;
	var wealth = $('#inr_wealth').html(wealth);
	window.alert("Amount has been deposited to your bank account ************3232")
	}else{
		window.alert("Invalid Amount")
	}
}

function total_wealth(){
	var sum = 0.0;
	var btc_i = $('#btc_wealth').text();
	var btc_p = $('#btc_price').text();
	var btc_w = parseFloat(btc_i);
	var btc_pr = parseFloat(btc_p);
	var btc_out = btc_w*btc_pr;
	if (btc_out>0.0){sum += btc_out;}
	console.log(sum);

	var eth_i = $('#eth_wealth').text();
	var eth_p = $('#eth_price').text();
	var eth_w = parseFloat(eth_i);
	var eth_pr = parseFloat(eth_p);
	var eth_out = eth_w*eth_pr;
	if (eth_out>0.0){sum += eth_out;}
	console.log(sum);	

	var bnb_i = $('#bnb_wealth').text();
	var bnb_p = $('#bnb_price').text();
	var bnb_w = parseFloat(bnb_i);
	var bnb_pr = parseFloat(bnb_p);
	var bnb_out = bnb_w*bnb_pr;
	if (bnb_out>0.0){sum += bnb_out;}
	console.log(sum);

	var matic_i = $('#matic_wealth').text();
	var matic_p = $('#matic_price').text();
	var matic_w = parseFloat(matic_i);
	var matic_pr = parseFloat(matic_p);
	var matic_out = matic_w*matic_pr;
	if (matic_out>0.0){sum += matic_out;}
	console.log(sum);

	var doge_i = $('#doge_wealth').text();
	var doge_p = $('#doge_price').text();
	var doge_w = parseFloat(doge_i);
	var doge_pr = parseFloat(doge_p);
	var doge_out = doge_w*doge_pr;
	if (doge_out>0.0){sum += doge_out;}
	console.log(sum);

	var sxp_i = $('#swipe_wealth').text();
	var sxp_p = $('#swipe_price').text();
	var sxp_w = parseFloat(sxp_i);
	var sxp_pr = parseFloat(sxp_p);
	var sxp_out = sxp_w*sxp_pr;
	if (sxp_out>0.0){sum += sxp_out;}
	console.log(sum);

	var ltc_i = $('#ltc_wealth').text();
	var ltc_p = $('#ltc_price').text();
	var ltc_w = parseFloat(ltc_i);
	var ltc_pr = parseFloat(ltc_p);
	var ltc_out = ltc_w*ltc_pr;
	if (ltc_out>0.0){sum += ltc_out;}
	console.log(sum);

	var btt_i = $('#btt_wealth').text();
	var btt_p = $('#btt_price').text();
	var btt_w = parseFloat(btt_i);
	var btt_pr = parseFloat(btt_p);
	var btt_out = btt_w*btt_pr;
	if (btt_out>0.0){sum += btt_out;}
	console.log(sum);

	var trx_i = $('#trx_wealth').text();
	var trx_p = $('#trx_price').text();
	var trx_w = parseFloat(trx_i);
	var trx_pr = parseFloat(trx_p);
	var trx_out = trx_w*trx_pr;
	if (trx_out>0.0){sum += trx_out;}
	console.log(sum);

	var inr_i = $('#inr_wealth').text();
	var inr_w = parseFloat(inr_i);
	console.log(inr_w);
	if (inr_w>0.0){sum += inr_w;}
	console.log(sum);

	$('#wealth').html(sum);
}

//  var apikey = {key:'158fe234-b35b-4ada-8b75-301d5f98185e'}
// var burl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY="+ apikey.key//"https://api.binance.com";
// var query = 'btc';
// var url = burl+query;
// var request = new XMLHttpRequest();
// request.open('GET',url,true);
// request.onload = function(){
// console.log(request.responseText);}
// request.send();

// var apikey = {key:'158fe234-b35b-4ada-8b75-301d5f98185e'}
// request('GET',"https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=BTC&CMC_PRO_API_KEY="+ apikey.key).then((r1) => {
// 	console.log(r1.target.responseText);
// }).catch()
// function request(method,url){
// 	return new Promise(function(resolve,reject){
// 		var xhr = new XMLHttpRequest();
// 		xhr.open(method,url);
// 		xhr.onload = resolve;
// 		xhr.onerror = reject;
// 		xhr.send();
// 	});
// }
// 	

var apikey = {key:'158fe234-b35b-4ada-8b75-301d5f98185e'}
request('GET',"https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?&convert=INR&symbol=BTC,ETH,BNB,LTC,MAT,DOGE,SXP,BTT,TRX&CMC_PRO_API_KEY="+ apikey.key).then((r1) => {
	var out = r1.target.responseText;
	var outj = JSON.parse(out);
	var btc_price = outj.data.BTC.quote.INR.price.toFixed(2);
	var eth_price = outj.data.ETH.quote.INR.price.toFixed(2);
	var bnb_price = outj.data.BNB.quote.INR.price.toFixed(2);
	var ltc_price = outj.data.LTC.quote.INR.price.toFixed(2);
	var matic_price = outj.data.MAT.quote.INR.price.toFixed(2);
	var doge_price = outj.data.DOGE.quote.INR.price.toFixed(2);
	var swipe_price = outj.data.SXP.quote.INR.price.toFixed(2);
	var btt_price = outj.data.BTT.quote.INR.price.toFixed(2);
	var tron_price = outj.data.TRX.quote.INR.price.toFixed(2);
	console.log(outj.data.BTC.quote.INR.price);
	console.log(eth_price);
	console.log(bnb_price);
	console.log(ltc_price);
	console.log(matic_price);
	console.log(doge_price);
	console.log(swipe_price);
	console.log(btt_price);
	console.log(tron_price);
	$('#btc_price').html(btc_price);
	$('#eth_price').html(eth_price);
	$('#bnb_price').html(bnb_price);
	$('#matic_price').html(matic_price);
	$('#doge_price').html(doge_price);
	$('#swipe_price').html(swipe_price);
	$('#ltc_price').html(ltc_price);
	$('#btt_price').html(btt_price);
	$('#trx_price').html(tron_price);
	//total_wealth();

}).catch()
function request(method,url){
	return new Promise(function(resolve,reject){
		var xhr = new XMLHttpRequest();
		xhr.open(method,url);
		xhr.onload = resolve;
		xhr.onerror = reject;
		xhr.send();
	});
}
/*Bitcoin sale and purchase*/
function buy_btc(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#btc_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much BTC do you want to buy?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#btc_price").text();
	var btc_price = parseInt(btcprice);
	if ((nw*btc_price)>=0.0000){
		if (nw*btc_price<=w){
		$('#btc_wealth').html(btc+nw);
		w-=(nw*btc_price);
		$("#inr_wealth").html(w);
		total_wealth();
		}
		else{
			window.alert("Not enough INR!! Please deposit more funds")
		}
	}else{
		window.alert("Invalid Amount");
	}
}

function sell_btc(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#btc_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much BTC do you want to sell?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#btc_price").text();
	var btc_price = parseInt(btcprice);
	if (nw<=btc && nw>0.0){
		btc-=nw;
		var profit = nw*btc_price;
		w+=profit;
		$("#inr_wealth").html(w);
		$('#btc_wealth').html(btc);
		total_wealth();
	}
	else{
		window.alert("Not enough BTC balance!!")
	}
}
//Ethereum Sale and Purchase 
function buy_eth(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#eth_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much ETH do you want to buy?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#eth_price").text();
	var btc_price = parseInt(btcprice);
	if ((nw*btc_price)>=0.0000){
		if (nw*btc_price<=w){
		$('#eth_wealth').html(btc+nw);
		w-=(nw*btc_price);
		$("#inr_wealth").html(w);
		total_wealth();
		}
		else{
			window.alert("Not enough INR!! Please deposit more funds")
		}
	}else{
		window.alert("Invalid Amount");
	}
}

function sell_eth(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#eth_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much ETH do you want to sell?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#eth_price").text();
	var btc_price = parseInt(btcprice);
	if (nw<=btc && nw>0.0){
		btc-=nw;
		var profit = nw*btc_price;
		w+=profit;
		$("#inr_wealth").html(w);
		$('#eth_wealth').html(btc);
		total_wealth();
	}
	else{
		window.alert("Not enough ETH balance!!")
	}
}

//BNB sale and purchase
function buy_bnb(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#bnb_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much BNB do you want to buy?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#bnb_price").text();
	var btc_price = parseInt(btcprice);
	if ((nw*btc_price)>=0.0000){
		if (nw*btc_price<=w){
		$('#bnb_wealth').html(btc+nw);
		w-=(nw*btc_price);
		$("#inr_wealth").html(w);
		total_wealth();
		}
		else{
			window.alert("Not enough INR!! Please deposit more funds")
		}
	}else{
		window.alert("Invalid Amount");
	}
}

function sell_bnb(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#bnb_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much BNB do you want to sell?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#bnb_price").text();
	var btc_price = parseInt(btcprice);
	if (nw<=btc && nw>0.0){
		btc-=nw;
		var profit = nw*btc_price;
		w+=profit;
		$("#inr_wealth").html(w);
		$('#bnb_wealth').html(btc);
		total_wealth();
	}
	else{
		window.alert("Not enough BNB balance!!")
	}
}


//DOGE sale and purchase
function buy_doge(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#doge_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much DOGE do you want to buy?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#doge_price").text();
	var btc_price = parseInt(btcprice);
	if ((nw*btc_price)>=0.0000){
		if (nw*btc_price<=w){
		$('#doge_wealth').html(btc+nw);
		w-=(nw*btc_price);
		$("#inr_wealth").html(w);
		total_wealth();
		}
		else{
			window.alert("Not enough INR!! Please deposit more funds")
		}
	}else{
		window.alert("Invalid Amount");
	}
}

function sell_doge(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#doge_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much DOGE do you want to sell?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#doge_price").text();
	var btc_price = parseInt(btcprice);
	if (nw<=btc && nw>0.0){
		btc-=nw;
		var profit = nw*btc_price;
		w+=profit;
		$("#inr_wealth").html(w);
		$('#doge_wealth').html(btc);
		total_wealth();
	}
	else{
		window.alert("Not enough DOGE balance!!")
	}
}

//SWIPE sale and purchase
function buy_sxp(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#swipe_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much SXP do you want to buy?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#swipe_price").text();
	var btc_price = parseInt(btcprice);
	if ((nw*btc_price)>=0.0000){
		if (nw*btc_price<=w){
		$('#swipe_wealth').html(btc+nw);
		w-=(nw*btc_price);
		$("#inr_wealth").html(w);
		total_wealth();
		}
		else{
			window.alert("Not enough INR!! Please deposit more funds")
		}
	}else{
		window.alert("Invalid Amount");
	}
}

function sell_sxp(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#swipe_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much SXP do you want to sell?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#swipe_price").text();
	var btc_price = parseInt(btcprice);
	if (nw<=btc && nw>0.0){
		btc-=nw;
		var profit = nw*btc_price;
		w+=profit;
		$("#inr_wealth").html(w);
		$('#swipe_wealth').html(btc);
		total_wealth();
	}
	else{
		window.alert("Not enough SXP balance!!");
	}
}

//LTC
function buy_ltc(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#ltc_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much LTC do you want to buy?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#ltc_price").text();
	var btc_price = parseInt(btcprice);
	if ((nw*btc_price)>=0.0000){
		if (nw*btc_price<=w){
		$('#ltc_wealth').html(btc+nw);
		w-=(nw*btc_price);
		$("#inr_wealth").html(w);
		total_wealth();
		}
		else{
			window.alert("Not enough INR!! Please deposit more funds")
		}
	}else{
		window.alert("Invalid Amount");
	}
}

function sell_ltc(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#ltc_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much LTC do you want to sell?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#ltc_price").text();
	var btc_price = parseInt(btcprice);
	if (nw<=btc && nw>0.0){
		btc-=nw;
		var profit = nw*btc_price;
		w+=profit;
		$("#inr_wealth").html(w);
		$('#ltc_wealth').html(btc);
		total_wealth();
	}
	else{
		window.alert("Not enough LTC balance!!")
	}
}

//BTT
function buy_btt(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#btt_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much BTT do you want to buy?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#btt_price").text();
	var btc_price = parseInt(btcprice);
	if ((nw*btc_price)>=0.0000){
		if (nw*btc_price<=w){
		$('#btt_wealth').html(btc+nw);
		w-=(nw*btc_price);
		$("#inr_wealth").html(w);
		total_wealth();
		}
		else{
			window.alert("Not enough INR!! Please deposit more funds")
		}
	}else{
		window.alert("Invalid Amount");
	}
}

function sell_btt(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#btt_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much BTT do you want to sell?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#btt_price").text();
	var btc_price = parseInt(btcprice);
	if (nw<=btc && nw>0.0){
		btc-=nw;
		var profit = nw*btc_price;
		w+=profit;
		$("#inr_wealth").html(w);
		$('#btt_wealth').html(btc);
		total_wealth();
	}
	else{
		window.alert("Not enough BTT balance!!")
	}
}

//TRX
function buy_trx(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#trx_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much TRX do you want to buy?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#trx_price").text();
	var btc_price = parseInt(btcprice);
	if ((nw*btc_price)>=0.0000){
		if (nw*btc_price<=w){
		$('#trx_wealth').html(btc+nw);
		w-=(nw*btc_price);
		$("#inr_wealth").html(w);
		total_wealth();
		}
		else{
			window.alert("Not enough INR!! Please deposit more funds")
		}
	}else{
		window.alert("Invalid Amount");
	}
}

function sell_trx(){
	var wealth = $('#inr_wealth').text();
	console.log(wealth);
	var w = parseFloat(wealth);
	var b = $("#trx_wealth").text();
	var btc = parseFloat(b);
	console.log(btc);
	let n = window.prompt("How much TRX do you want to sell?");
	var nw = parseFloat(n);
	console.log(nw);
	var btcprice = $("#trx_price").text();
	var btc_price = parseInt(btcprice);
	if (nw<=btc && nw>0.0){
		btc-=nw;
		var profit = nw*btc_price;
		w+=profit;
		$("#inr_wealth").html(w);
		$('#trx_wealth').html(btc);
		total_wealth();
	}
	else{
		window.alert("Not enough TRX balance!!");
	}
}