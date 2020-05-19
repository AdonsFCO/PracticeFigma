
var visible = false;

function showBut()
{
 var currentStatus;     

     for (i= 0; i < document.getElementsByClassName('topButton').length-1; i++)
      {      
         currentStatus = document.getElementsByClassName('topButton')[i];
              
             currentStatus.style.display = 'flex';
            
         }   
         visible = true; 
 
 }

 function hideBut()
 {
 var currentStatus;     
  
        for (i= 0; i < document.getElementsByClassName('topButton').length-1; i++)
        {      
            currentStatus = document.getElementsByClassName('topButton')[i];
                
                currentStatus.style.display = 'none';
            
            }   
            visible = false; 

 }

function changeStatus()
{
    if (visible == true)
    {
        hideBut();
    }
    else if (visible == false)
    {
        showBut();

    }


}

