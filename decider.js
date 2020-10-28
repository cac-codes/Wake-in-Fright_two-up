
function coinFlip() {  
    
    x = (Math.floor(Math.random() * 2) == 0);
    y = (Math.floor(Math.random() * 2) == 0);
    if (x==true && y==true){
        console.log(x,y);
        console.log("heads");
        coin_toss_gif.src='./gifs/heads_once.gif'
    } if(x==false & y==true) {
        console.log(x,y);
        console.log("one of each");
        coin_toss_gif.src='./gifs/one_of_each_once.gif'  
    
    } if (x==false & y==false){
        console.log(x,y);
        console.log("tails");
        coin_toss_gif.src='./gifs/tails_once.gif'
        
    }
    setTimeout(function () { location.reload(1); }, 8000); 
};


function hideButton() {
    document.querySelector("#coinFlip").style.visibility = 'hidden'; 
}


document.querySelector('#coinFlip').addEventListener("click", coinFlip);

document.querySelector('#coinFlip').addEventListener("click", hideButton);



