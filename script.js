// ---------- DECLARING VARIABLES
var init,powerOn, btnOff,step,li0,li1,li2,li21,li22,li23,li24,li25,li26,li3,li31,li32,li33,li34,li35,li36,li4,li5,bottomOn,reset,knobEdit,knobRun,knobMdi,knobJog,knobHome,knobPointer,jogInfoBox,knobXYZ,knobSpeed,dial,exit,keyG,key5,line1;

// ---------- GIVING VARIABLES VALUES
powerOn = document.querySelector('.btn-on');
btnOff = document.querySelector('.btn-off');
screen = document.querySelector('.screen');
li1 = document.querySelector('.li-1');
li2 = document.querySelector('.li-2');
    li21 = document.querySelector('.li-2-1');
    li22 = document.querySelector('.li-2-2');
    li23 = document.querySelector('.li-2-3');
    li24 = document.querySelector('.li-2-4');
    li25 = document.querySelector('.li-2-5');
    li26 = document.querySelector('.li-2-6');
li3 = document.querySelector('.li-3');
    li31 = document.querySelector('.li-3-1');
    li32 = document.querySelector('.li-3-2');
    li33 = document.querySelector('.li-3-3');
    li34 = document.querySelector('.li-3-4');
    li35 = document.querySelector('.li-3-5');
    li36 = document.querySelector('.li-3-6');
li4 = document.querySelector('.li-4');
li5 = document.querySelector('.li-5');
li6 = document.querySelector('.li-6');
bottomOn = document.querySelector('#bottom-panel-on');
reset = document.querySelector('#key-reset');
knobEdit = document.querySelector('#knob-edit');
knobRun = document.querySelector('#knob-run');
knobMdi = document.querySelector('#knob-mdi');
knobJog = document.querySelector('#knob-jog');
knobHome = document.querySelector('#knob-home');
knobPointer = document.querySelector('#knob-pointer');
jogInfoBox = document.querySelector('.jog-info-box');
knobXYZ = document.querySelector('.knob-pointer-side');
knobSpeed = document.querySelector('.knob-pointer-side-bottom');
dial = document.querySelector('.dial');
exit = document.querySelector('.fas');
keyG = document.querySelector('#key-g');
key5 = document.querySelector('#key-5');
step = 0;

// ---------- INIT
li1.style.color = 'yellow';

// ---------- CLICK EVENTS

btnOff.addEventListener('click',function(){
    li1.style.textDecoration = "none";
    li1.style.color = 'yellow';
    li2.style.color = 'rgb(105, 105, 105)';
    li21.style.color = 'rgb(105, 105, 105)';
    step = 0;
    screen.innerHTML = ''
});
   
powerOn.addEventListener('click',function(){
    if (step === 0){
        document.querySelector('.btn-on').classList.remove('highlight');
        document.querySelector('#bottom-panel-on').classList.add('highlight');
        li1.style.textDecoration = "line-through";
        li1.style.color = 'rgb(55, 55, 55)';
        li2.style.color = 'yellow';
        li21.style.color = 'rgb(160, 160, 0)';

        step = 1;
        screen.innerHTML = '<div class="screen-left">\
        <div class="left-sub left-sub1">\
            <div class="prog-actual-position">ACTUAL POSITION</div>\
            <div class="prog-part-number">CL1211-20</div>\
        </div>\
        <div class="left-sub left-sub2"></div>\
        <div class="left-sub left-sub3">(ABSOLUTE)</div>\
        <div class="left-sub axis-sub left-sub4">\
            <div class="left-axis axis-x">X</div>\
            <div class="left-axis-x-value">0.00000</div>\
        </div>\
        <div class="left-sub axis-sub left-sub5">\
            <div class="left-axis axis-y">Y</div>\
            <div class="left-axis-y-value">3.00000</div>\
        </div>\
        <div class="left-sub axis-sub left-sub6">\
            <div class="left-axis axis-z">Z</div>\
            <div class="left-axis-z-value">4.00000</div>\
        </div>\
        <div class="left-sub left-sub7"></div>\
        <div class="left-sub left-sub8">\
            <div>(MODAL)</div>\
            <div></div>\
        </div>\
        <div class="left-sub modals left-sub9">\
            <div></div>\
            <div></div>\
            <div></div>\
            <div></div>\
            <div></div>\
            <div></div>\
        </div>\
        <div class="left-sub modals left-sub10">\
            <div>G00</div>\
            <div>G40</div>\
            <div><span id="g54">G54</span></div>\
            <div class="blue-letter">F</div>\
            <div>60.00 <span class="blue-letter">M</span></div>\
            <div class="modal-last">30</div>\
        </div>\
        <div class="left-sub modals left-sub11">\
            <div>G17</div>\
            <div>G49</div>\
            <div>G64</div>\
            <div></div>\
            <div></div>\
            <div></div>\
        </div>\
        <div class="left-sub modals left-sub12">\
            <div>G90</div>\
            <div>G80</div>\
            <div>G69</div>\
            <div class="blue-letter">H</div>\
            <div></div>\
            <div></div>\
        </div>\
        <div class="left-sub modals left-sub13">\
            <div>G22</div>\
            <div>G98</div>\
            <div>G15</div>\
            <div class="blue-letter">D</div>\
            <div class="blue-letter">T</div>\
            <div></div>\
        </div>\
        <div class="left-sub modals left-sub14">\
            <div>G94</div>\
            <div>G50</div>\
            <div>G25</div>\
            <div></div>\
            <div></div>\
            <div></div>\
        </div>\
        <div class="left-sub modals left-sub15">\
            <div>G20</div>\
            <div>G67</div>\
            <div></div>\
            <div class="blue-letter">S</div>\
            <div>0</div>\
            <div></div>\
        </div>\
        <div class="left-sub modals left-sub16">\
            <div></div>\
            <div></div>\
            <div></div>\
            <div class="blue-letter">SACT</div>\
            <div>0</div>\
            <div></div>\
        </div>\
        <div class="left-sub left-sub17">\
            <div class="soft-key-menu-left"></div>\
            <div class="soft-key-menu-left"></div>\
            <div class="soft-key-menu-left"></div>\
            <div class="soft-key-menu-left"></div>\
            <div class="soft-key-menu-left"></div>\
            <div class="soft-key-menu-left"></div>\
        </div>\
    </div>\
    <div class="screen-right">\
        <div class="right-sub right-sub1">\
            <div class="yellow-letter">O0001</div>\
            <div class="yellow-letter">N00010</div>\
        </div>\
        <div class="right-sub right-sub2">\
            <div>F</div>\
            <div>0.00</div>\
            <div class="inch">\
                <div></div>\
                <div id="inch-min">INCH/M</div>\
            </div>\
        </div>\
        <div class="right-sub right-sub3">\
            <div></div>\
            <div class="part-count">\
                <div class="blue-letter">PART COUNT</div>\
                <div>0</div>\
            </div>\
        </div>\
        <div class="right-sub right-sub4">\
            <div class="blue-letter">RUN TIME</div>\
            <div>12<span class="blue-letter">H</span> 30<span class="blue-letter">M</span></div>\
            <div class="blue-letter">CYCLE TIME</div>\
            <div>0<span class="blue-letter">H</span> 1<span class="blue-letter">M</span> 2<span class="blue-letter">S</span></div>\
        </div>\
        <div class="right-sub right-sub5">\
        <div class="line line-1"></div>\
        </div>\
        <div class="right-sub right-sub6">\
            <div class="yellow-letter">HND **** *** ***</div>\
            <div>00:41:00</div>\
        </div>\
        <div class="right-sub right-sub7">\
            <div class="soft-key-menu-right"></div>\
            <div class="soft-key-menu-right"></div>\
            <div class="soft-key-menu-right"></div>\
            <div class="soft-key-menu-right"></div>\
            <div class="soft-key-menu-right"></div>\
            <div class="soft-key-menu-right"></div>\
        </div>\
    </div>'
    }
});

bottomOn.addEventListener('click',function(){
    if(step === 1){
        document.querySelector('#bottom-panel-on').classList.remove('highlight');
        document.querySelector('#key-reset').classList.add('highlight');
        li21.style.textDecoration = "line-through";
        li21.style.color = 'rgb(55, 55, 55)';
        li2.style.color = 'yellow';
        li22.style.color = 'rgb(160, 160, 0)';
        step = 2;
    }
});

reset.addEventListener('click',function(){
    if(step === 2){
        document.querySelector('#key-reset').classList.remove('highlight');
        document.querySelector('.jog-highlight').classList.add('highlight');
        li22.style.textDecoration = "line-through";
        li22.style.color = 'rgb(55, 55, 55)';
        li2.style.color = 'yellow';
        li23.style.color = 'rgb(160, 160, 0)';
        step = 3;
    }
});

knobJog.addEventListener('click',function(){
    if(step === 3){
        document.querySelector('.knob-pointer').classList.remove('rotate-run');
        document.querySelector('.knob-pointer').classList.add('rotate-jog');
        document.querySelector('.jog-highlight').classList.remove('highlight');
        document.querySelector('.dial').classList.add('highlight-blue');
        document.querySelector('.knob-pointer-side-bottom').classList.add('highlight-green');
        document.querySelector('.knob-pointer-side').classList.add('highlight-red');
        jogInfoBox.style.display = "block";
        li23.style.textDecoration = "line-through";
        li23.style.color = 'rgb(55, 55, 55)';
        li2.style.color = 'yellow';
        li24.style.color = 'rgb(160, 160, 0)';
        step = 4;
    }
});

exit.addEventListener('click',function(){
    if (step === 4){
        jogInfoBox.style.display = 'none';
        li24.style.textDecoration = "line-through";
        li24.style.color = 'rgb(55, 55, 55)';
        li2.style.color = 'yellow';
        li25.style.color = 'rgb(160, 160, 0)';
        document.querySelector('.span-home').classList.add('highlight');
        document.querySelector('.dial').classList.remove('highlight-blue');
        document.querySelector('.knob-pointer-side-bottom').classList.remove('highlight-green');
        document.querySelector('.knob-pointer-side').classList.remove('highlight-red');
        step = 5;

    } 
});

knobHome.addEventListener('click',function(){
    if(step === 5){
        document.querySelector('.knob-pointer').classList.remove('rotate-jog');
        document.querySelector('.knob-pointer').classList.add('rotate-home');
        li25.style.textDecoration = "line-through";
        li25.style.color = 'rgb(55, 55, 55)';
        li2.style.color = 'yellow';
        li26.style.color = 'rgb(160, 160, 0)';
        document.querySelector('.span-home').classList.remove('highlight');
        document.querySelector('#bottom-panel-on').classList.add('highlight');
        step = 6;
    }
});

bottomOn.addEventListener('click', function(){
    if(step === 6){
        document.querySelector('#bottom-panel-on').classList.remove('highlight');
        document.querySelector('.mdi-highlight').classList.add('highlight');
        li26.style.textDecoration = "line-through";
        li26.style.color = 'rgb(55, 55, 55)';
        li2.style.textDecoration = "line-through";
        li2.style.color = 'rgb(55, 55, 55)';
        li3.style.color = 'yellow';
        li31.style.color = 'rgb(160, 160, 0)';
        step = 7;
    }
});

knobMdi.addEventListener('click',function(){
    if(step === 7){
        document.querySelector('.mdi-highlight').classList.remove('highlight');
        li31.style.textDecoration = "line-through";
        li31.style.color = 'rgb(55, 55, 55)';
        li32.style.color = 'rgb(160, 160, 0)';
        document.querySelector('.knob-pointer').classList.remove('rotate-home');
        document.querySelector('.knob-pointer').classList.add('rotate-mdi');
        document.querySelector('#key-g').classList.add('highlight');
        step = 8;
    }
});

keyG.addEventListener('click',function(){
    if(step === 8){
        line1 = document.querySelector('.line-1');
        document.querySelector('#key-g').classList.remove('highlight');
        document.querySelector('#key-5').classList.add('highlight');
        line1.textContent = "G";
        step = 9;
    }
});
key5.addEventListener('mouseup',function(){
    if(step === 9){
        line1.textContent = "G5";
    }
    step = 10;
});

key5.addEventListener('click',function(){
    if(step === 10){
        document.querySelector('#key-5').classList.remove('highlight');
        line1.textContent = "G55";
        step = 11;
    }
});



/*document.querySelector('').classList.remove('');
document.querySelector('').classList.add('');*/