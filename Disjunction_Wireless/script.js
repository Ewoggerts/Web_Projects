/**First- Make an form to accept input from user
	Must include:
	- Phone Number
	- Data Usage in megabytes
Next - Make a data table advertising prices
	Must Include:
	- The 3 avaliable data plans 
Lastly - Using inputed values make a data table showing the analysis 
	Must Include:
	- How many customers on which plan
	- Best plan for the current customer
	- Worst plan for the current customer
	- The amount of customers on the wrong plan
	- The amount of customers on the best plan for them
	- The average overpayment based on the 3 avaliable plans and data usage of each customer
Have a line at the end suggesting the plan that the customer should buy and why. */

numPlan1 = 0; //Number of customers using plan 1
numPlan2 = 0; //Number of customers using plan 2
numPlan3 = 0; //Number of customers using plan 3
numPlan4 = 0; // Number of customers using plan 4
unlimitedReplacementPercent=0
avgPlan1 = 0;
avgPlan2 = 0;
avgPlan3 = 0;
avgPlan4 = 49.99;
correctPlan = 0;
wrongPlan = 0;
bestPlanCompany = 0;
bestPlanCustomer = 0;
function start() {
	customersList = [];
	genCustomers();

	console.log("Plan 1: " + numPlan1 + " Plan 2: " + numPlan2 + " Plan 3: " + numPlan3);
	placeData();
	//placeData2();
	document.getElementById("plan1Num").innerHTML = numPlan1;
	document.getElementById("plan2Num").innerHTML = numPlan2;
	document.getElementById("plan3Num").innerHTML = numPlan3;
	document.getElementById("plan4Num").innerHTML = numPlan4;
	document.getElementById("totalCustomers").innerHTML = (numPlan1 + numPlan2 + numPlan3 + numPlan4);


	var correctPer = rightPercentage();
	var incorrectPer = wrongPercentage();
	var avgOver = avgOverPayment();

	document.getElementById("percentBestPlan").innerHTML = (Math.round(((correctPlan / customersList.length) * 100) * 100) / 100) + "%";
	document.getElementById("percentWorstPlan").innerHTML = (Math.round(((wrongPlan / customersList.length) * 100) * 100) / 100) + "%";
	document.getElementById("avgOverPayment").innerHTML = avgOver;

	document.getElementById("BestPlanForCompany").innerHTML = "Plan "+bestCostPerByte();
	document.getElementById("WorstPlanForCompany").innerHTML = "Plan " +worstCostPerByte();
	document.getElementById("unlimitedReplacementPercentage").innerHTML =unlimitedReplacementPercentage() + "%";
}
//Generates the customersList with random customer data, amount of customers is random.
function genCustomers() {
	amtCustomers = (Math.random() * 10000 - 1000) + 1000;
	for (i = 0; i <= amtCustomers; i++) {
		var customer = {};
		customer.number = (generatePhone());
		customer.dataUsage = (generateDataUsage());
		customer.plan = (generatePlan());
		customer.correct = areYouCorrect(customer.plan, customer.dataUsage);
		customer.over = 0;
		customersList.push(customer);
	}
}
//Generates a random phone number
function generatePhone() {
	return Math.floor((Math.random() * 9999999999 - 100000000) + 100000000);
}

//Generates a random plan 1-3
function generatePlan() {
	var planNum = Math.floor(Math.random() * 4) + 1;
	if (planNum == 1)
		numPlan1++;
	if (planNum == 2)
		numPlan2++;
	if (planNum == 3)
		numPlan3++;
	if (planNum == 4)
		numPlan4++;
	return planNum;
}
//generates a random number for data usage
function generateDataUsage() {
	return Math.floor((Math.random() * 40000 - 1) + 1);
}

//adds all the data to the data table
function placeData() {
	for (let i = 0; i < customersList.length; i++) {
		var customer = "#" + (i + 1);
		var number = customersList[i].number;
		var dataUsage = customersList[i].dataUsage;
		var plan = customersList[i].plan;
		var newRow = datatable.insertRow();
		var newCell = newRow.insertCell();
		var cost = calculateCost(plan, dataUsage);
		newCell.innerHTML = customer;
		newCell = newRow.insertCell();
		newCell.innerHTML = number;
		newCell = newRow.insertCell();
		newCell.innerHTML = plan;
		newCell = newRow.insertCell();
		newCell.innerHTML = dataUsage;

		newCell = newRow.insertCell();
		newCell.innerHTML = "$" + cost;
	}
}

//calculates the cost for a specific plan with its specific data usage
function calculateCost(cPlan, cData) {
	var totalCost = 0;
	if (cPlan == 1) {
		if (cData <= 1000)
			return 19.99;
		else
			return Math.round((19.99 + (cData - 1000) * 0.1) * 100) / 100;
	}
	else if (cPlan == 2) {
		if (cData <= 4000)
			return 24.99;
		else
			return Math.round((24.99 + (cData - 4000) * 0.25) * 100) / 100;
	}
	else if (cPlan == 4) {
		return 49.99;
	}
	else {
		return Math.round((cData * 0.02) * 100) / 100;
	}
}

//Places data for the analysis table
function placeData2() {
	var correctPer = rightPercentage();
	var incorrectPer = wrongPercentage();
	var avgOver = avgOverPayment();
	var newRow = datatable2.insertRow();
	var newCell = newRow.insertCell();
	newCell.innerHTML = correctPer;
	newCell = newRow.insertCell();
	newCell.innerHTML = wrongPer;
	newCell = newRow.insertCell();
	newCell.innerHTML = avgOver;
	newCell = newRow.insertCell();
}

//Calculates the average overpayment of every customer
function avgOverPayment() {
	total = 0;
	for (let i = 0; i < customersList.length; i++) {
		var customer = customersList[i];
		if (customer.plan == 1) {
			var b = calculateCost(customer.plan, customer.dataUsage);
			if (c > 19.99) {
				total += c - 19.99;
			}
		}

		else if (customer.plan == 2) {
			var c = calculateCost(customer.plan, customer.dataUsage);
			if (c > 24.99) {
				total += c - 24.99;
			}
		}
	}
	return "$" + Math.round((total / customersList.length) * 100) / 100;
}

//returns the percentage of people on the best plan for them
function rightPercentage() {
	return correctPlan / customersList.length;
}

//returns the percentage of people who are not on the best plan for them
function wrongPercentage() {
	return wrongPlan / customersList.length;
}

//
function planData() {
	for (let i = 0; i < customersList.length; i++) {
		if (areYouCorrect(i)) {
			correctPlan = correctPlan + 1;
		}
		else {
			wrongPlan = correctPlan + 1;
		}
	}
}



function areYouCorrect(p, data) {
	if (p == bestPlanForU(data)) {
		correctPlan++;
		return true;
	}
	else {
		wrongPlan++;
		return false;
	}
}

//find out the best plan for that customer
function bestPlanForU(i) {
	// console.log("customer 1:  "+customersList[i].dataUsage);
	if (i < 750) {
		return 1;
		console.log(1);
	}
	else
		if (i >= 750 && i < 1050) {
			return 2;
			console.log(2);
		}
		else
			if (i >= 1050 && i < 4260.87) {
				return 3;
				console.log(3);
			}
			else {
				return 4;
				console.log(4);
			}
}

// Calculates the cost per byte for each plan, then sets two global variables for whichever plan is the best for the company and whichever plan is the best for the customers.
function bestCostPerByte(){
	var totalBytes1 = 0;
	var totalCost1 = 0;
	var totalBytes2 = 0;
	var totalCost2 = 0;
	var totalBytes3 = 0;
	var totalCost3 = 0;
	var totalBytes4 = 0;
	var totalCost4 = 0;
	var ratio1=0;
  var ratio2=0;
  var ratio3=0;
  var ratio4=0;
	
	for (let i = 0; i < customersList.length; i++) {
		if (customersList[i].plan == 1) {
			totalBytes1 = totalBytes1 + customersList[i].dataUsage;
			totalCost1 = totalCost1 + calculateCost(customersList[i].plan, customersList[i].dataUsage);
		}
		if (customersList[i].plan == 2) {
			totalBytes2 = totalBytes2 + customersList[i].dataUsage;
			totalCost2 = totalCost2 + calculateCost(customersList[i].plan, customersList[i].dataUsage);
		}
		if (customersList[i].plan == 3) {
			totalBytes3 = totalBytes3 + customersList[i].dataUsage;
			totalCost3 = totalCost3 + calculateCost(customersList[i].plan, customersList[i].dataUsage);
		}
		if (customersList[i].plan == 4) {
			totalBytes4 = totalBytes4 + customersList[i].dataUsage;
			totalCost4 = totalCost4 + calculateCost(customersList[i].plan, customersList[i].dataUsage);
		}
  }
	  ratio1= totalCost1/totalBytes1;
		ratio2= totalCost2/totalBytes2;
		ratio3= totalCost3/totalBytes3;
		ratio4= totalCost4/totalBytes4;
		if (ratio1 > ratio2 && ratio1 > ratio3 && ratio1 > ratio4)
		{
      console.log("1: "+ratio1);
			return 1;
		}
		else if (ratio2 > ratio1 && ratio2 > ratio3 && ratio2 > ratio4)
		{
			console.log("2: "+ratio2);
			return 2;
		}
		else if (ratio3 > ratio2 && ratio3 > ratio1 && ratio3 > ratio4)
		{
      console.log("3: " + ratio3);
			return 3;
		}
		else if (ratio4 > ratio1 && ratio4 > ratio3 && ratio4 > ratio2)
		{
      console.log("4: " + ratio4);
			return 4;
		}
		
}

function worstCostPerByte(){
	var totalBytes1 = 0;
	var totalCost1 = 0;
	var totalBytes2 = 0;
	var totalCost2 = 0;
	var totalBytes3 = 0;
	var totalCost3 = 0;
	var totalBytes4 = 0;
	var totalCost4 = 0;
	var ratio1=0;
  var ratio2=0;
  var ratio3=0;
  var ratio4=0;
	
	for (let i = 0; i < customersList.length; i++) {
		if (customersList[i].plan == 1) {
			totalBytes1 = totalBytes1 + customersList[i].dataUsage;
			totalCost1 = totalCost1 + calculateCost(customersList[i].plan, customersList[i].dataUsage);
		}
		if (customersList[i].plan == 2) {
			totalBytes2 = totalBytes2 + customersList[i].dataUsage;
			totalCost2 = totalCost2 + calculateCost(customersList[i].plan, customersList[i].dataUsage);
		}
		if (customersList[i].plan == 3) {
			totalBytes3 = totalBytes3 + customersList[i].dataUsage;
			totalCost3 = totalCost3 + calculateCost(customersList[i].plan, customersList[i].dataUsage);
		}
		if (customersList[i].plan == 4) {
			totalBytes4 = totalBytes4 + customersList[i].dataUsage;
			totalCost4 = totalCost4 + calculateCost(customersList[i].plan, customersList[i].dataUsage);
		}
  }
	  ratio1= totalCost1/totalBytes1;
		ratio2= totalCost2/totalBytes2;
		ratio3= totalCost3/totalBytes3;
		ratio4= totalCost4/totalBytes4;

		if (ratio1 < ratio2 && ratio1 < ratio3 && ratio1 < ratio4)
		{
			return 1;
		}
		else if (ratio2 < ratio1 && ratio2 < ratio3 && ratio2 < ratio4)
		{
			return 2;
		}
		else if (ratio3 < ratio2 && ratio3 < ratio1 && ratio3 < ratio4)
		{
			return 3;
		}
		else if (ratio4 < ratio1 && ratio4 < ratio3 && ratio4 < ratio2)
		{
			return 4;
		}
		
}

function unlimitedReplacementPercentage()
{
	 temp=0;
	for (let i = 0; i < customersList.length; i++)
	{
		if (bestPlanForU(customersList[i].plan)!=customersList[i].plan)
		{
			if(bestPlanForU(customersList[i].dataUsage)==4)
			{
				temp++;
			}
		}
	}
	console.log("returning value unlim replacement");
	console.log(temp/(numPlan1 + numPlan2 + numPlan3 + numPlan4));
	return (Math.round(((temp/(numPlan1 + numPlan2 + numPlan3 + numPlan4))*100)*100)/100);
}