
let display_value = document.getElementById('cdt');
let message = document.getElementById('message');
function start(){
    let input = document.getElementById('number').value;
    // console.log(input);

    let restart = true;
    if(input != Number(input)){
        message.innerHTML = "Please enter a number!" ; 
        display_value.innerHTML = 0;
        delay(0, restart)
    }
    else{
        message.innerHTML = "" ; 
        let startTime = Math.floor(input);
        // display_value.innerHTML = startTime; 
        delay(startTime, restart);
    }
    
}


let id = undefined;
function delay(time_limit, restart){
    if(restart === true && id ){clearTimeout(id)}
    id = setTimeout(() => {
        display_value.innerHTML = time_limit;
        console.log(time_limit);

        if(time_limit > 0){
            time_limit --;
            restart = false;
            delay(time_limit, restart);
        }
        
    }, 1000);
    
}




let keyevent = document.getElementById('number');
keyevent.addEventListener('keydown', function(e){
    // console.log(e);
    if(e.key == "Enter"){
        start()
    }
})