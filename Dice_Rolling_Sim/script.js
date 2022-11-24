
function start()
{
  document.getElementById("inputform").reset();
  inputContainer=document.getElementById("inputform");
  confirmOutput=document.getElementById("message");
  diceTable=document.getElementById("dicetable");
  dataTable=document.getElementById('datatable');
  doublesOutput=document.getElementById("doubles");
  triplesOutput=document.getElementById("triples");
  meanOutput=document.getElementById("mean");
  medianOutput=document.getElementById("median");
  modeOutput=document.getElementById("mode");
  doubles=0;
  triples=0;
  mean=0;
  median=0;
  mode=0;
  run=0;
  arr=[];
  doublesOutput.innerHTML=doubles;
  triplesOutput.innerHTML=triples;
  meanOutput.innerHTML=mean;
  medianOutput.innerHTML=median;
  modeOutput.innerHTML=mode;
  confirmOutput.innerHTML="";
}

function runner()
{
  roll();
  calculateAll();
  placeData();
}

function roll()
{
  for (let i = 0; i < amtRolls; i++) 
  {
    var dieRoll=amtDiceGetRndInt(parseInt(amtDice));
    var newRow=dicetable.insertRow();
    var newCell = newRow.insertCell();
    newCell.innerHTML = "Roll "+(i+1);
    newCell = newRow.insertCell();
    newCell.innerHTML = dieRoll;
    arr.push(dieRoll);
  }
  var dieRoll=amtDiceGetRndInt(parseInt(amtDice));
  var newRow=dicetable.insertRow();
  var newCell = newRow.insertCell();
  newCell.innerHTML = "Stop";
  newCell = newRow.insertCell();
  newCell.innerHTML = "Stop";
  arr.push(dieRoll);
}

function calculateAll()
{
  doubles=calculateDoubles();
  doublesOutput.innerHTML=doubles;
  triples=calculateTriples();
  triplesOutput.innerHTML=triples;
  mean=calculateMean();
  meanOutput.innerHTML=mean;
  median=calculateMedian();
  medianOutput.innerHTML=median;
  mode=calculateMode();
  modeOutput.innerHTML=mode;
  run++;
  console.log(run);
}

function placeData()
{
  var dnewRow= datatable.insertRow();
  var dnewCell = dnewRow.insertCell();
  dnewCell.innerHTML = run;
  dnewCell = dnewRow.insertCell();
  dnewCell.innerHTML = doubles;
  dnewCell = dnewRow.insertCell();
  dnewCell.innerHTML = triples;
  dnewCell = dnewRow.insertCell();
  dnewCell.innerHTML = mean;
  dnewCell = dnewRow.insertCell();
  dnewCell.innerHTML = median;
  dnewCell = dnewRow.insertCell();
  dnewCell.innerHTML = mode;

}

function isValid()
{
  if (parseInt(amtDice)>3 || parseInt(amtDice)<1)
  {
    return false;
  }
}

function amtDiceGetRndInt()
{
  if (isValid()==false)
  {
    return "not a valid amount of dice!";
  }
  else if (parseInt(amtDice)==1)
  {
    return getRandomInteger(1,6);
  }
  else if (parseInt(amtDice)==2)
  {
    return getRandomInteger(2,12);
  }
  else if (parseInt(amtDice)==3)
  {
    return getRandomInteger(3,18);
  }
}

function  getRandomInteger(min,max)
{
  return Math.floor(Math.random()*((max - min) + 1) + min);
}

function recordData()
{
  amtRolls= inputContainer.amtRolls.value;
  amtDice= inputContainer.amtDice.value;
  inputContainer.amtRolls = "";
  inputContainer.amtDice = "";
  displayConfirm();
}

function displayConfirm()
{
  confirmOutput.innerHTML= "Amount rolls is " + amtRolls  + " and the amount of Dice is " + amtDice;
}

function calculateDoubles()
{
  var counter=0;
  var duplicates=0;
  var holder=0;
  var tested=arr;
  tested.sort
  for (let i=0;i<tested.length;i++)
  {
    for(let b=i+1;b<tested.length;b++)
    {
      if(tested[i]==tested[b]&&tested[b]!=holder)
      {
        counter++;
      }
    }
    if(counter>=2)
    {
      duplicates++;
      holder=tested[i];
      counter=0;
    }
  }
  return duplicates;
}

function calculateTriples()
{
  var counter=0;
  var duplicates=0;
  var holder=0;
  var tested=arr;
  tested.sort
  for (let i=0;i<tested.length;i++)
  {
    for(let b=i+1;b<tested.length;b++)
    {
      if(tested[i]==tested[b]&&tested[b]!=holder)
      {
        counter++;
      }
    }
    if(counter>=3)
    {
      duplicates++;
      holder=tested[i];
      counter=0;
    }
  }
  return duplicates;
}
      

function calculateMean()
{
  var sum=0;
  var avg=0;
  for (let i=0; i<arr.length; i++)
  {
    sum+=arr[i];
  }
  avg=sum/(arr.length);
  return avg;
}

function calculateMedian()
{
  var newArr=arr
  newArr.sort();
  if (newArr.length%2!=0)
    return newArr[Math.floor(newArr.length/2)]
  return (parseFloat(newArr[newArr.length/2]+newArr[(newArr.length/2)-1]))/2
}

function calculateMode()
{
  var counter=0;
  var holder=0;
  var largestCopy=0;
  var tested=arr;
  tested.sort
  for (let i=0;i<tested.length;i++)
  {
    for(let b=0;b<tested.length;b++)
    {
      if(tested[i]==tested[b]&&tested[b]!=holder)
      {
        counter++;
      }
    }
    if(counter>largestCopy)
    {
      largestCopy=counter;
      holder=tested[i];
      counter=0;
    }
  }
  return holder;
}