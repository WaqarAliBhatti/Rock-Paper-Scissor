let Sentence="You're Beautiful";
console.log("Again :",Sentence.repeat(24));//'repeat' repeats for number of times that are specified.

let word=['W','a','q','a','r'];
console.log(word.join(""));//'Join' joins the string from array into one word.
//create a function that returns [randomly] 'Rock', Paper Scissors Lizard and spock randomly
Button=document.querySelector('#btn').addEventListener('click',rpsls);
function rpsls(){
    let random=Math.random();
    if(random<.2){
        return 'rock'
    }
    else if(random<.4){
        return 'paper'
       }
    else if(random<.6){
        return 'scissors'
    }
    else if(random<.8){
        return 'lizard'
        }
    else{
        return 'spock'
       }
}
function checkWin(choice){
    let botChoice=rpsls();
    if((choice==='rock'&& botChoice==='scissors'||choice==='paper'&& botChoice==='rock'||choice==='scissors'&& botChoice==='paper'||choice==='spock'&& botChoice==='rock'||choice==='spock'&& botChoice==='scissors'||choice==='lizard'&& botChoice==='paper'||choice==='lizard'&& botChoice==='spock'||choice==='scissors'&& botChoice==='lizard'||choice==='paper'&& botChoice==='spock'||choice==='rock'&& botChoice==='lizard'||choice==='rock'&& botChoice==='scissors')){
        alert('You won');
    }
    else if(choice===botChoice){alert("Tie, no body won");}
    else{
        alert("Lose");
    }

}
checkWin('paper');