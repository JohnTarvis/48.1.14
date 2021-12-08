// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    function swapLetters(msg,a,b){
        let back = '';
        for(let count = 0; count < msg.length; count++){
            if(count === a){
                back += msg[b];
            } else 
            if(count === b){
                back += msg[a];
            } else {
                back += msg[count];
            }
        }
    }
    let found = false;
    let testMsg = msg;
    for(let i = 0; i < msg.length; i++){
        for(let j = 0; j < msg.length; j++){
            if(i != j){
                testMsg = swapLetters(msg,i,j);
                if(msg === testMsg){
                    found = true;
                }
            }
        }
    }
    return found;
}
