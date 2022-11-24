function start()
{
  //appetizer
  outputDiv = document.getElementById("total")
  outputDiv1 = document.getElementById("acal")
  outputDiv1a = document.getElementById("afat")
  outputDiv1b = document.getElementById("acarb")
  outputDiv1c = document.getElementById("apro")
  total=0;
  app=0;
  afat=0;
  acarb=0;
  apro=0;
  outputDiv.innerHTML= total
  outputDiv1.innerHTML= app
  outputDiv1a.innerHTML= afat
  outputDiv1b.innerHTML= acarb
  outputDiv1c.innerHTML= apro
  //entree
  outputDiv2 = document.getElementById("ecal")
  outputDiv2a = document.getElementById("efat")
  outputDiv2b = document.getElementById("ecarb")
  outputDiv2c = document.getElementById("epro")
  entree=0;
  efat=0;
  ecarb=0;
  epro=0;
  outputDiv2.innerHTML= entree
  outputDiv2a.innerHTML= efat
  outputDiv2b.innerHTML= ecarb
  outputDiv2c.innerHTML= epro
  //Dessert
  outputDiv3 = document.getElementById("dcal")
  outputDiv3a = document.getElementById("dfat")
  outputDiv3b = document.getElementById("dcarb")
  outputDiv3c = document.getElementById("dpro")
  dessert=0;
  dfat=0;
  dcarb=0;
  dpro=0;
  outputDiv3.innerHTML= dessert
  outputDiv3a.innerHTML= dfat
  outputDiv3b.innerHTML= dcarb
  outputDiv3c.innerHTML= dpro
  //reset
  outputDiv4 = document.getElementById("reset")
}
//App functions
function fatA()
{
  app=app+9;
  outputDiv1.innerHTML= app;
  afat=afat+1;
  outputDiv1a.innerHTML= afat;
  total=total+9;
  outputDiv.innerHTML= total;

}
function carbA()
{
  app=app+4;
  outputDiv1.innerHTML= app;
  acarb=acarb+1;
  outputDiv1b.innerHTML= acarb;
  total=total+9;
  outputDiv.innerHTML= total;
}
function proA()
{
  app=app+4;
  outputDiv1.innerHTML= app;
  apro=apro+1;
  outputDiv1c.innerHTML= apro;
  total=total+9;
  outputDiv.innerHTML= total;
}
function mfatA()
{
  if (app<1)
  {
    outputDiv1.innerHTML= app;
  }
  else if (afat<1)
  {
    outputDiv1a.innerHTML= afat;
  }
  else if (total<1)
  {
    outputDiv.innerHTML=total;
  }
  else
  {
    app=app-9;
    outputDiv1.innerHTML= app;
    afat=afat-1;
    outputDiv1a.innerHTML= afat;
    total=total-9;
    outputDiv.innerHTML= total;
  }
}
function mcarbA()
{
  if (app<1)
  {
    outputDiv1.innerHTML= app;
  }
  else if (acarb<1)
  {
    outputDiv1b.innerHTML= acarb;
  }
  else if (total<1)
  {
    outputDiv.innerHTML=total;
  }
  else
  {
    app=app-4;
    outputDiv1.innerHTML= app;
    acarb=acarb-1;
    outputDiv1b.innerHTML= acarb;
    total=total-9;
    outputDiv.innerHTML= total;
  }
}
function mproA()
{
  if (app<1)
  {
    outputDiv1.innerHTML= app;
  }
  else if (apro<1)
  {
    outputDiv1c.innerHTML= apro;
  }
  else if (total<1)
  {
    outputDiv.innerHTML=total;
  }
  else
  {
    app=app-4;
    outputDiv1.innerHTML= app;
    apro=apro-1;
    outputDiv1c.innerHTML= apro;
    total=total-9;
    outputDiv.innerHTML= total;
  }
}
//Entree
function fatE()
{
  entree=entree+9;
  outputDiv2.innerHTML= entree;
  efat=efat+1;
  outputDiv2a.innerHTML= efat;
  total=total+9;
  outputDiv.innerHTML= total;

}
function carbE()
{
  entree=entree+4;
  outputDiv2.innerHTML= entree;
  ecarb=ecarb+1;
  outputDiv2b.innerHTML= ecarb;
  total=total+9;
  outputDiv.innerHTML= total;
}
function proE()
{
  entree=entree+4;
  outputDiv2.innerHTML= entree;
  epro=epro+1;
  outputDiv2c.innerHTML= epro;
  total=total+9;
  outputDiv.innerHTML= total;
}
function mfatE()
{
  if (entree<1)
  {
    outputDiv2.innerHTML= entree;
  }
  else if (efat<1)
  {
    outputDiv2a.innerHTML= efat;
  }
  else if (total<1)
  {
    outputDiv.innerHTML=total;
  }
  else
  {
    entree=entree-9;
    outputDiv2.innerHTML= entree;
    efat=efat-1;
    outputDiv2a.innerHTML= efat;
    total=total-9;
    outputDiv.innerHTML= total;
  }
}
function mcarbE()
{
  if (entree<1)
  {
    outputDiv2.innerHTML= entree;
  }
  else if (ecarb<1)
  {
    outputDiv2b.innerHTML= ecarb;
  }
  else if (total<1)
  {
    outputDiv.innerHTML=total;
  }
  else
  {
    entree=entree-4;
    outputDiv2.innerHTML= entree;
    ecarb=ecarb-1;
    outputDiv2b.innerHTML= ecarb;
    total=total-9;
    outputDiv.innerHTML= total;
  }
}
function mproE()
{
  if (entree<1)
  {
    outputDiv2.innerHTML= entree;
  }
  else if (epro<1)
  {
    outputDiv2c.innerHTML= epro;
  }
  else if (total<1)
  {
    outputDiv.innerHTML=total;
  }
  else
  {
    entree=entree-4;
    outputDiv2.innerHTML= entree;
    epro=epro-1;
    outputDiv2c.innerHTML= epro;
    total=total-9;
    outputDiv.innerHTML= total;
  }
}
//Dessert
function fatD()
{
  dessert=dessert+9;
  outputDiv3.innerHTML= dessert;
  dfat=dfat+1;
  outputDiv3a.innerHTML= dfat;
  total=total+9;
  outputDiv.innerHTML= total;
}
function carbD()
{
  dessert=dessert+4;
  outputDiv3.innerHTML= dessert;
  dcarb=dcarb+1;
  outputDiv3b.innerHTML= dcarb;
  total=total+9;
  outputDiv.innerHTML= total;
}
function proD()
{
  dessert=dessert+4;
  outputDiv3.innerHTML= dessert;
  dpro=dpro+1;
  outputDiv3c.innerHTML= dpro;
  total=total+9;
  outputDiv.innerHTML= total;
}
function mfatD()
{
  if (dessert<1)
  {
    outputDiv3.innerHTML= dessert;
  }
  else if (dfat<1)
  {
    outputDiv3a.innerHTML= dfat;
  }
  else if (total<1)
  {
    outputDiv.innerHTML=total;
  }
  else
  {
    dessert=dessert-9;
    outputDiv3.innerHTML= dessert;
    dfat=dfat-1;
    outputDiv3a.innerHTML= dfat;
    total=total-9;
    outputDiv.innerHTML= total;
  }
}
function mcarbD()
{
  if (dessert<1)
  {
    outputDiv3.innerHTML= dessert;
  }
  else if (dcarb<1)
  {
    outputDiv3b.innerHTML= dcarb;
  }
  else if (total<1)
  {
    outputDiv.innerHTML=total;
  }
  else
  {
    dessert=dessert-4;
    outputDiv3.innerHTML= dessert;
    dcarb=dcarb-1;
    outputDiv3b.innerHTML= dcarb;
    total=total-9;
    outputDiv.innerHTML= total;
  }
}
function mproD()
{
  if (dessert<1)
  {
    outputDiv3.innerHTML= dessert;
  }
  else if (dpro<1)
  {
    outputDiv3c.innerHTML= dpro;
  }
  else if (total<1)
  {
    outputDiv.innerHTML=total;
  }
  else
  {
    entree=entree-4;
    outputDiv3.innerHTML= dessert;
    dpro=dpro-1;
    outputDiv3c.innerHTML= dpro;
    total=total-9;
    outputDiv.innerHTML= total;
  }
}
//reset
function reset()
{
  total=0;
  app=0;
  afat=0;
  acarb=0;
  apro=0;
  outputDiv.innerHTML= total
  outputDiv1.innerHTML= app
  outputDiv1a.innerHTML= afat
  outputDiv1b.innerHTML= acarb
  outputDiv1c.innerHTML= apro

  entree=0;
  efat=0;
  ecarb=0;
  epro=0;
  outputDiv2.innerHTML= entree
  outputDiv2a.innerHTML= efat
  outputDiv2b.innerHTML= ecarb
  outputDiv2c.innerHTML= epro
  
  dessert=0;
  dfat=0;
  dcarb=0;
  dpro=0;
  outputDiv3.innerHTML= dessert
  outputDiv3a.innerHTML= dfat
  outputDiv3b.innerHTML= dcarb
  outputDiv3c.innerHTML= dpro


}
