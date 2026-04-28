let score=0;
let rand_num;
let msg = document.getElementById('msg');
let score_text = document.getElementById('score-text');

function guess_number(){
    
    
    let guess_num = document.getElementById('number').value;
    let game_level= document.getElementById('level').value;
    let level_text = document.getElementById('select_level_text');
    
    if(game_level == 'easy'){
     rand_num  = Math.floor(Math.random()*10)+1;
     level_text.innerText='Select a number between 1 to 10'
    }
    else if(game_level == 'medium'){
     rand_num  = Math.floor(Math.random()*50)+1;
     level_text.innerText='Select a number between 1 to 50'
    }
    else {
     rand_num  = Math.floor(Math.random()*100)+1;
     level_text.innerText='Select a number between 1 to 100'
    }
        
    if(guess_num != ''){
    if(rand_num == guess_num){
        //    document.getElementById('game-box').style.backgroundImage="url('popper.gif')"
            msg.innerText=`Congrats! your guessed number is correct.`
            msg.classList.remove('failed-msg')
            msg.classList.add('success-msg');
            score++;
            score_text.innerText = `Score: ${score}`
        } 
        else{
            msg.innerText=`Sorry! Try Again. Correct number is ${rand_num}`
            msg.classList.remove('success-msg');
            msg.classList.add('failed-msg') 
        }
    }


}
function reset_game(){
    msg.innerText='';
    score = 0;
    document.getElementById('number').value=''
    msg.classList.remove('failed-msg','success-msg')
    score_text.innerText = `Score: ${score}`
    // document.getElementById('level').value='';
    // document.getElementById('game-box').classList.add('d-none');
    // document.getElementById('level-box').classList.remove('d-none');
    
}

function start_game()
{
    level= document.getElementById('level').value;   
    if(level == ''){
      alert('Please select a game level.')
    }
    else{
        document.getElementById('game-box').classList.remove('d-none');
        document.getElementById('level-box').classList.add('d-none');
        guess_number();
    }
}