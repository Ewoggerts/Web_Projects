function start()
{
  //.disabled will make the XO chooser disable after you pick. Starting with false enables it.
  // if you set symbol to x it is side 1 and set player to x
  // if you set symbol to y it is side 2 and set player to o
  //locked is the box(1-9) where the user/bot cannot place a symbol on. Used to make sure the player/bot cannot immediately place a symbol over the opponent on their next turn.
  //lockedBoxes is a string that contains all the boxes(1-9) that has been locked due to a player placing two symbols on it.
  //won is just a variable to see if the game ended. This is to make sure the bot doesn't go after the game has already ended.
  document.getElementById("pickX").disabled = false;
  document.getElementById("pickO").disabled = false;
  player = "-";
  bot = "-";
  box1 = [];
  box2 = [];
  box3 = [];
  box4 = [];
  box5 = [];
  box6 = [];
  box7 = [];
  box8 = [];
  box9 = [];  
  board=[9];
  board[0] = "-";
  board[1] = "-";
  board[2] = "-";
  board[3] = "-";
  board[4] = "-";
  board[5] = "-";
  board[6] = "-";
  board[7] = "-";
  board[8] = "-";
  locked = 0;
  lockedBoxes = "";
  lockAll();
  console.log(board);
  won = "0";
}
//When a player clicks box it checks if the box is not locked and puts in the symbol
function XO(num)
{
  var temp = player;
  //if player hasn't picked either x or o the game stays locked
  if(temp != "-")
  {
    if((num != locked) && (won == "0"))// Makes sure the box the user picked is not locked
    {
      var playercell = "c" + num;
      //prints out c1,c2,c3 ... based off of box
      document.getElementById(playercell).innerHTML = player;
      locked = num;
      updateBox(num, 1);
      // Updates the array corresponding to each box, num is the box number and 1 stands for player.
      isWin();
      botPlay();
    }
    //add another warning for invalid move
  }
  else
  {
    warn();
  }
}

function updateBox(n, who)
{
  if(who == 1)
  {
  if(n == 1)
    box1+=player;
  if(n == 2)
    box2+=player;
  if(n == 3)
    box3+=player;
  if(n == 4)
    box4+=player;
  if(n == 5)
    box5+=player;
  if(n == 6)
    box6+=player;
  if(n == 7)
    box7+=player;
  if(n == 8)
    box8+=player;
  if(n == 9)
    box9+=player;
  }
  if(who == 0)
  {
  if(n == 1)
    box1+=bot;
  if(n == 2)
    box2+=bot;
  if(n == 3)
    box3+=bot;
  if(n == 4)
    box4+=bot;
  if(n == 5)
    box5+=bot;
  if(n == 6)
    box6+=bot;
  if(n == 7)
    box7+=bot;
  if(n == 8)
    box8+=bot;
  if(n == 9)
    box9+=bot;
  }
  
}
//Makes sure the user picks x or o first
function warn()
{
  console.log("warning");
  document.getElementById("warnNoSymbol").innerHTML = "Pick your symbol first!";
}
//button in html uses this function to set who plays x or o
function playerPick(side)
{
  if (side == 1)
    {
      player = "x";
      bot = "o"
    }
  else if(side == 2)
    {
      player = "o";
      bot = "x";
      botPlay();
    }
  document.getElementById("warnNoSymbol").innerHTML = "";
  unlockAll();
  displayPlayerSymbol();
}
//function that deals with how the buttons respond after picking x or o
function displayPlayerSymbol()
{
  document.getElementById("pickX").disabled = true;
  document.getElementById("pickO").disabled = true;
  displayPicked.innerHTML = "Your symbol: " + player;
}

//bot goes, n is random number 1-9, c is the cell corresponding to n. Then updates the innerHTML of cell n to bot's symbol. No check logic yet, like if cell is already full.
function botPlay()
{
  var n = Math.floor(Math.random() * 9) + 1;
  var c = "c" + n;
  if ((n != locked) && (won == "0") && !(lockedBoxes.includes(n.toString()))) // Makes sure the bot can't place where the player just placed their symbol, makes sure the game is still going and makes sure that the random number n is not included in the lockedBoxes string.
  {
    document.getElementById(c).innerHTML = bot;
    locked = n;
    updateBox(n, 0);
    isWin();
  }
  else if (won == "0")
  {
    botPlay(); //Runs botPlay again if n = locked, basically runs until n != locked.
  }
}



//returns 1 if x wins return 0 if o wins

function setBoard()
{
    if(box1.length == 2)
    {
      //sets temp board as 2nd value of the box
      board[0]=box1[1];
    }
    else //if(box1.length == 1)
    {
      //set temp board as 1st value of the box
      board[0]=box1[0];
    }

    if(box2.length == 2)
    {
      //sets temp board as 2nd value of the box
      board[1]=box2[1];
    }
    else
    {
      //set temp board as 1st value of the box
      board[1]=box2[0];
    }

    if(box3.length == 2)
    {
      //sets temp board as 2nd value of the box
      board[2]=box3[1];
    }
    else
    {
      //set temp board as 1st value of the box
      board[2]=box3[0];
    }

    if(box4.length == 2)
    {
      //sets temp board as 2nd value of the box
      board[3]=box4[1];
    }
    else
    {
      //set temp board as 1st value of the box
      board[3]=box4[0];
    }
    
    if(box5.length == 2)
    {
      //sets temp board as 2nd value of the box
      board[4]=box5[1];
    }
    else
    {
      //set temp board as 1st value of the box
      board[4]=box5[0];
    }

        if(box6.length == 2)
    {
      //sets temp board as 2nd value of the box
      board[5]=box6[1];
    }
    else
    {
      //set temp board as 1st value of the box
      board[5]=box6[0];
    }

    if(box7.length == 2)
    {
      //sets temp board as 2nd value of the box
      board[6]=box7[1];
    }
    else
    {
      //set temp board as 1st value of the box
      board[6]=box7[0];
    }
    
    if(box8.length == 2)
    {
      //sets temp board as 2nd value of the box
      board[7]=box8[1];
    }
    else
    {
      //set temp board as 1st value of the box
      board[7]=box8[0];
    }
    if(box9.length == 2)
    {
      //sets temp board as 2nd value of the box
      board[8]=box9[1];
    }
    else
    {
      //set temp board as 1st value of the box
      board[8]=box9[0];
    }
}

// Checks if each box has two of the same consecutive symbols, if so locks the box so the symbol is permanent for that box.
function shouldLock()
{
  //if box2.length is == 2 
 
    if(box1.length == 2)
      {
        document.getElementById("c1").disabled = true;
        lockedBoxes+="1";
      }
  
  
    if(box2.length == 2)
    {
      document.getElementById("c2").disabled = true;
      lockedBoxes+="2";
    }
  
  
    if(box3.length == 2)
    {
      document.getElementById("c3").disabled = true;
      lockedBoxes+="3";
    }
  
  
    if(box4.length == 2)
    {
      document.getElementById("c4").disabled = true;
      lockedBoxes+="4";
    }
  
    if(box5.length == 2)
    {
      document.getElementById("c5").disabled = true;
      lockedBoxes+="5";
    }
  
  
    if(box6.length == 2)
    {
      document.getElementById("c6").disabled = true;
      lockedBoxes+="6";
    }
  
  
    if(box7.length == 2)
    {
      document.getElementById("c7").disabled = true;
      lockedBoxes+="7";
    }
  

    if(box8.length == 2)
    {
      document.getElementById("c8").disabled = true;
      lockedBoxes+="8";
    }
  
    if(box9.length == 2)
    {
      document.getElementById("c9").disabled = true;
      lockedBoxes+="9";
    }
  
}

//Checks if someone has won, if they won, set won to 1 so the bot doesn't go after the game has ended and runs winScreen which displays the winner.
function isWin()
{
  setBoard();
  shouldLock();
  console.log(board);
  //horizontal
  if ((board[0]==board[1]) && (board[1] == board[2]))
  {
    if((board[0]=="x") && (board[1]=="x") && (board[2]=="x"))
    {
     won="1";
      winScreen(1);
      
    }
    else if((board[0]=="o") && (board[1]=="o") && (board[2]=="o"))
    {
      won="1";
      winScreen(0);
    }
  }
  
  if ((board[3]==board[4]) && (board[4] == board[5]))
  {
    if((board[3]=="x") && (board[4]=="x") && (board[5]=="x"))
    {
     won="1";
      winScreen(1);
      
    }
    else if((board[3]=="o") && (board[4]=="o") && (board[5]=="o"))
    {
      won="1";
      winScreen(0);
    }
  }
  
  if ((board[6]==board[7]) && (board[7] == board[8]))
  {
    if((board[6]=="x") && (board[7]=="x") && (board[8]=="x"))
    {
     won="1";
      winScreen(1);
      
    }
    else if((board[6]=="o") && (board[7]=="o") && (board[8]=="o"))
    {
      won="1";
      winScreen(0);
    }
  }
  //vertical
  if ((board[0]==board[3]) && (board[3] == board[6]))
  {
    if((board[0]=="x") && (board[3]=="x") && (board[6]=="x"))
    {
     won="1";
      winScreen(1);
      
    }
    else if((board[0]=="o") && (board[3]=="o") && (board[6]=="o"))
    {
     won="1";
      winScreen(0);
    }
  }
  
  if ((board[1]==board[4]) && (board[4] == board[7]))
  {
    if((board[1]=="x") && (board[4]=="x") && (board[7]=="x"))
    {
      won="1";
      winScreen(1);
      
    }
    else if((board[1]=="o") && (board[4]=="o") && (board[7]=="o"))
    {
      won="1";
      winScreen(0);
    }
  }
  
  if ((board[2]==board[5]) && (board[5] == board[8]))
  {
    if((board[2]=="x") && (board[5]=="x") && (board[8]=="x"))
    {
       won="1";
      winScreen(1);
      
    }
    else if((board[2]=="o") && (board[5]=="o") && (board[8]=="o"))
    {
       won="1";
      winScreen(0);
    }
  }
  //diagonal
  if ((board[0]==board[4]) && (board[4] == board[8]))
  {
    if((board[0]=="x") && (board[4]=="x") && (board[8]=="x"))
    {
       won="1";
      winScreen(1);
      
    }
    else if((board[0]=="o") && (board[4]=="o") && (board[8]=="o"))
    {
       won="1";
      winScreen(0);
    }
  }
  
  if ((board[2]==board[4]) && (board[4] == board[6]))
  {
    if((board[2]=="x") && (board[4]=="x") && (board[6]=="x"))
    {
      won="1";
      winScreen(1);
      
    }
    else if((board[2]=="o") && (board[4]=="o") && (board[6]=="o"))
    {
      won="1";
      winScreen(0);
    }
  }
}

function winScreen(int)
{
  if (int==1)
  {
    //console.log("testwinscreen");
    document.getElementById("winMSG").innerHTML = "X has won! GG";
    lockAll();
  }
  if(int==0)
  {
    //console.log("testwinscreen");
    document.getElementById("winMSG").innerHTML = "O has won! GG";
    lockAll();
  }
}

function reset()
{
  document.getElementById("c1").innerHTML = "c1";
  document.getElementById("c2").innerHTML = "c2";
  document.getElementById("c3").innerHTML = "c3";
  document.getElementById("c4").innerHTML = "c4";
  document.getElementById("c5").innerHTML = "c5";
  document.getElementById("c6").innerHTML = "c6";
  document.getElementById("c7").innerHTML = "c7";
  document.getElementById("c8").innerHTML = "c8";
  document.getElementById("c9").innerHTML = "c9";

  unlockAll();
  document.getElementById("winMSG").innerHTML = "";
  start();
}

function unlockAll()
{
  document.getElementById("c1").disabled = false;
  document.getElementById("c2").disabled = false;
  document.getElementById("c3").disabled = false;
  document.getElementById("c4").disabled = false;
  document.getElementById("c5").disabled = false;
  document.getElementById("c6").disabled = false;
  document.getElementById("c7").disabled = false;
  document.getElementById("c8").disabled = false;
  document.getElementById("c9").disabled = false;  
}
function lockAll()
{
  document.getElementById("c1").disabled = true;
  document.getElementById("c2").disabled = true;
  document.getElementById("c3").disabled = true;
  document.getElementById("c4").disabled = true;
  document.getElementById("c5").disabled = true;
  document.getElementById("c6").disabled = true;
  document.getElementById("c7").disabled = true;
  document.getElementById("c8").disabled = true;
  document.getElementById("c9").disabled = true;
}