const TIMER_OFF = -1;
const TIMESPEED = [250,500,1000,2000,4000];
const TIMEOUTPUT= ["4x","2x","1x","0.5x","0.25x"];

function initialize(){
  counterTimer = TIMER_OFF;
  logOut="";
  timeSpeed = 2;
	hh = 12;
	hours = "12";
	mm = 0;
	minutes = "00";
	ss = "AM";
	runs = 0;
	theTime = hours + ":" + minutes + " " + ss;
	car=0;
	truck=0;
	motorcycle=0;
	bus=0;
	resident=0;
	totalToll=0;
	plateToll=0;
	ezToll=0;
	ezCar=0;
	ezTruck=0;
	ezMotorcycle=0;
	document.getElementById("time").innerHTML=theTime;
  document.getElementById("timeSpeedOutput").innerHTML = "Timer Speed: "+TIMEOUTPUT[timeSpeed];
}

function display()
{
	theTime = hours + ":" + minutes + " " + ss;
  document.getElementById("time").innerHTML=theTime;
  //console.log(theTime + " runs: "+runs);

  document.getElementById("timeSpeedOutput").innerHTML = "Timer Speed: "+TIMEOUTPUT[timeSpeed];
}

function count()
{
    incrementTime();
    genPerSec(25,25,25,25,1,10);
    display();
}

function startCounter()
{
  if(counterTimer == TIMER_OFF)
  counterTimer = setInterval("count();", 1000);
  
}

function stopCounter()
{
  clearInterval(counterTimer);
  counterTimer = TIMER_OFF;
}

function incrementTime()
{
	mm++;
	if (mm == 60) {
		mm = 0;
		minutes = "00";
		hh++;
		if (hh == 12) {
      runs++;
			if (ss === "AM" && runs >= 1) {
				ss = "PM";
			}
			else if (ss === "PM" && runs >=1) {
				ss = "AM";
			}
      }
      if(hh>12){
        hh=1;
        hours="1";
    }
		}

	if (mm < 10) {
		minutes = ("0" + mm.toString());
	}
	else {
		minutes = mm.toString();
	}

	if (hh < 10) {
		hours = ("0" + hh.toString());
	}
	else {
		hours = hh.toString();
	}
	//display();
  if(runs==2)
  {
    stopCounter();
  }
}

function changeTime(int){
  stopCounter();
  counterTimer = setInterval("count();", int);
}

function slowDownTime()
{
  if(timeSpeed<4)
    timeSpeed++;
  changeTime(TIMESPEED[timeSpeed]);
  display();
}

function speedUpTime()
{
  if(timeSpeed>0)
    timeSpeed--;
  changeTime(TIMESPEED[timeSpeed]);
  display();
}

function pickNum()
{
	return Math.floor(Math.random() * 100) + 1;
}
function randomGen(car,truck,motorcycle,bus)
{
	start=1;
	total1=car;
	total2=car+truck;
	total3=car+truck+motorcycle;
	total4=100;
	var temp = pickNum();
  if (temp >= start && temp <= total1)
	{
		return 1;
	} else
  if(temp>total1 && temp<=total2)
  {
    return 2;
  } else
  if(temp>total2 && temp<=total3)
  {
    return 3;
  } else
    return 4;
}

function pickNum2(min,max)
{
	return Math.floor(Math.random() * max) + min;
}

function genPerSec(car,truck,motorcycle,bus,base,max)
{
	totalChancing=pickNum2(base,max);
	for (let i=base;i<=totalChancing;i++)
	{
		temp=randomGen(car,truck,motorcycle,bus);
		
		if(temp==1){
			car++;
      calcPayment(1);
		}
		if(temp==2){
			truck++;
      calcPayment(2);
		}
		if(temp==3){
			motorcycle++;
      calcPayment(3);
		}
		if(temp==4){
			bus++
      calcPayment(4);
		}
	}
	console.log(totalChancing);
}

function convertToMoney(val){
    return (Math.floor(val*100).toFixed(0)/100).toFixed(2);
}
function calcPayment(v)
{
  var tcost=0;
  resident=false;
  ezPass=false;
  if(v==1)
  {
    car++;
    tcost = 12;
    logResident="";
    logEZ="";
    if(pickNum2(0,10)<=7)
    {
      ezPass=true;
      logEZ="with EZ-pass ";
    }
    if(pickNum2(0,10)<=6)
    {
      resident=true;
      logResident="residential ";
    }
    if(resident===true && ezPass===true)
    {
      tcost-=tcost*0.4;
      resident++;
      ezToll+=tcost;
      ezCar++;
      
    }else
    if(resident===false && ezPass===true)
    {
      tcost-=tcost*0.1;
      ezToll+=tcost;
      ezCar++;
    }else
    if(resident===true && ezPass===false)
    {
      resident++;
      plateToll+=tcost;
    }
    else
    {
      plateToll+=tcost;
    }
    //update log
    logOut = theTime+ " - A "+logResident+"car "+logEZ+"paid $" + convertToMoney(tcost) +".<br />"+ logOut;
    log.innerHTML = logOut;
  }
  if(v==2)
  {
    motorcycle++;
    tcost = 8;
    logResident="";
    logEZ="";
    if(pickNum2(0,10)<=7)
    {
      ezPass=true;
      logEZ="with EZ-pass ";
    }
    if(pickNum2(0,10)<=6)
    {
      resident=true;
      logResident="residential ";
    }
     if(resident===true && ezPass===true)
    {
      tcost-=tcost*0.4;
      resident++;
      ezToll+=tcost;
      ezMotorcycle++;
      
    }else
    if(resident===false && ezPass===true)
    {
      tcost-=tcost*0.1;
      ezToll+=tcost;
      ezMotorcycle++;
    }else
    if(resident===true && ezPass===false)
    {
      resident++;
      plateToll+=tcost;
    }
    else
    {
      plateToll+=tcost;
    }

    //update log
    logOut = theTime+ " - A "+logResident+"Motorcycle "+logEZ+"paid $"+ convertToMoney(tcost) +".<br />"+ logOut;
    log.innerHTML = logOut;
  }
  if(v==3)
  {
    truck++;
    tcost=13;
    logEZ="";
    if(pickNum2(0,10)<=9)
    {
      ezPass=true;
      logEZ="with EZ-pass ";
    }
    if(ezPass===true)
    {
      tcost-=tcost*0.1;
      ezToll+=tcost;
      ezTruck++;
    }
    else
    {
      plateToll+=tcost;
    }

    //update log
    logOut = theTime+ " - A truck "+logEZ+"paid $"+ convertToMoney(tcost)  +".<br />"+ logOut;
    log.innerHTML = logOut;
  }
  if(v==4)
  {
		bus++;
    logOut = theTime+ " - A Bus passed." + "<br />"+logOut;
    log.innerHTML = logOut;
  }
}