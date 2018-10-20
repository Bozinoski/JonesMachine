var btnOn, btnOff, power;
var startUp;
btnOn = document.querySelector('.btn-on');
btnOff = document.querySelector('.btn-off');
screen = document.querySelector('.screen');
power = 0;
step = 0;

btnOn.addEventListener('click',function(){
    if (step === 0 && power === 0){
        power = 1;
        step = 1;
        screen.style.backgroundColor = "red";
        console.log('hi');
    }
})


    




