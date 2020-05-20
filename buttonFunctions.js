///////////////////////////////Menu//////////////////////////
var visibleMenu = false;

function showMenuBut()
{
 var currentStatus;     

     for (i= 0; i < document.getElementsByClassName('topButton').length-1; i++)
      {      
         currentStatus = document.getElementsByClassName('topButton')[i];
              

         currentStatus.style.display = 'flex';
            
            
         }   
         visibleMenu = true; 
 
 }

 function hideMenuBut()
 {
 var currentStatus;     
  
        for (i= 0; i < document.getElementsByClassName('topButton').length-1; i++)
        {      
            currentStatus = document.getElementsByClassName('topButton')[i];
                
            currentStatus.style.display = 'none';
            
            }   
            visibleMenu = false; 

 }

function changeMenuStatus()
{
    if (visibleMenu == true)
    {
        hideMenuBut();
    }
    else if (visibleMenu == false)
    {
        showMenuBut();

    }


}

////////////////////////////////////SearchButton/////////////////////
var visibleSearch = false; //Useless by the time.

function showUpSearchbox() 
{
document.getElementById("searchBox").style.display = "flex";
visibleSearch = true; 


}