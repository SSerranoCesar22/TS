const brazil = document.getElementById('buttonBrazil');
const france = document.getElementById('france');
const badge = document.getElementById('badge');
const champions = document.getElementById('champions');
const copa = document.getElementById('copa');
const ligaEa = document.getElementById('ligaEa');
const fcb = document.getElementById('fcb');
const atm = document.getElementById('atm');
const premier = document.getElementById('premier');
const mbappe = document.getElementById('mbappe');
const superlig = document.getElementById('superliga');
const bar1 = document.getElementById('progress1') as HTMLProgressElement;
const bar2 = document.getElementById('progress2') as HTMLProgressElement;
const bar3 = document.getElementById('progress3') as HTMLProgressElement;
const bar4 = document.getElementById('progress4') as HTMLProgressElement;
const img = document.getElementById('floren')!;
const healthBar = document.getElementById('healthBar') as HTMLProgressElement;
const winValue1 = 30;
const winValue2 = 25;
const lossValue1 = 20;
const lossValue2 = 10;
const idleTime = 60000;
let isWin = true;
let idleTimeout;

if (bar1 && bar2 && bar3 && bar4 && healthBar) {
    const randomValue1 = randomValue(40, 60);
    const randomValue2 = randomValue(40, 60);
    const randomValue3 = randomValue(40, 60);
    const randomValue4 = randomValue(40, 60);
    
    bar1.value = randomValue1;
    bar2.value = randomValue2;
    bar3.value = randomValue3;
    bar4.value = randomValue4;
    
    const averageBar = (randomValue1 + randomValue2 + randomValue3 + randomValue4) / 4;
    updateProgressBar(bar1, randomValue1);
    updateProgressBar(bar2, randomValue2);
    updateProgressBar(bar3, randomValue3);
    updateProgressBar(bar4, randomValue4);
    updateProgressBar(healthBar, averageBar);
}
function averageLife(){
    let value = bar1.value ;
    let value2 = bar2.value ;
    let value3 = bar3.value ;
    let value4 = bar4.value;
    const averageLife =  (value + value2 + value3 + value4) /4;
    updateProgressBar(healthBar, averageLife);
}

function updateProgressBar(element: HTMLProgressElement, value: number) {
    element.style.width = value + '%';

    if (value < 50) {
        element.style.backgroundColor = 'red';
    } else if (value < 80) {
        element.style.backgroundColor = 'orange';
    } else {
        element.style.backgroundColor = 'green';
    }
}

function randomValue(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
brazil?.addEventListener('click', function () {
    isWin = randomBoolean(isWin);
    if (isWin) {
        const newValue = bar1.value + randomValue(winValue1, winValue2);
        bar1.value = newValue <= 100 ? newValue : 100; // Asegura que no supere 100
        updateProgressBar(bar1, bar1.value);
    } else {
        const newValue = bar1.value - randomValue(lossValue1, lossValue2);
        bar1.value = newValue >= 0 ? newValue : 0; // Asegura que no sea menos de 0
        updateProgressBar(bar1, bar1.value);
    }
    averageLife();
    isDead();
});
france?.addEventListener('click', function () {
    isWin = randomBoolean(isWin);
    if (isWin) {
        const newValue = bar1.value + randomValue(winValue1, winValue2);
        bar1.value = newValue <= 100 ? newValue : 100; // Asegura que no supere 100
        updateProgressBar(bar1, bar1.value);
    } else {
        const newValue = bar1.value - randomValue(lossValue1, lossValue2);
        bar1.value = newValue >= 0 ? newValue : 0; // Asegura que no sea menos de 0
        updateProgressBar(bar1, bar1.value);
    }
    averageLife();
    isDead();
});
badge?.addEventListener('click', function () {
    isWin = randomBoolean(isWin);
    if (isWin) {
        const newValue = bar1.value + randomValue(winValue1, winValue2);
        bar1.value = newValue <= 100 ? newValue : 100; // Asegura que no supere 100
        updateProgressBar(bar1, bar1.value);
    } else {
        const newValue = bar1.value - randomValue(lossValue1, lossValue2);
        bar1.value = newValue >= 0 ? newValue : 0; // Asegura que no sea menos de 0
        updateProgressBar(bar1, bar1.value);
    }
    averageLife();
    isDead();
});
champions?.addEventListener('click', function () {
    isWin = randomBoolean(isWin);
    if (isWin) {
        const newValue = bar2.value + randomValue(winValue1, winValue2);
        bar2.value = newValue <= 100 ? newValue : 100; // Asegura que no supere 100
        updateProgressBar(bar2, bar2.value);
    } else {
        const newValue = bar2.value - randomValue(lossValue1, lossValue2);
        bar2.value = newValue >= 0 ? newValue : 0; // Asegura que no sea menos de 0
        updateProgressBar(bar2, bar2.value);
    }
    averageLife();
    isDead();
});
copa?.addEventListener('click', function () {
    isWin = randomBoolean(isWin);
    if (isWin) {
        const newValue = bar2.value + randomValue(winValue1, winValue2);
        bar2.value = newValue <= 100 ? newValue : 100; // Asegura que no supere 100
        updateProgressBar(bar2, bar2.value);
    } else {
        const newValue = bar2.value - randomValue(lossValue1, lossValue2);
        bar2.value = newValue >= 0 ? newValue : 0; // Asegura que no sea menos de 0
        updateProgressBar(bar2, bar2.value);
    }
    averageLife();
    isDead();
});
ligaEa?.addEventListener('click', function () {
    isWin = randomBoolean(isWin);
    if (isWin) {
        const newValue = bar2.value + randomValue(winValue1, winValue2);
        bar2.value = newValue <= 100 ? newValue : 100; // Asegura que no supere 100
        updateProgressBar(bar2, bar2.value);
    } else {
        const newValue = bar2.value - randomValue(lossValue1, lossValue2);
        bar2.value = newValue >= 0 ? newValue : 0; // Asegura que no sea menos de 0
        updateProgressBar(bar2, bar2.value);
    }
    averageLife();
    isDead();
});
fcb?.addEventListener('click', function () {
    isWin = randomBoolean(isWin);
    if (isWin) {
        const newValue = bar3.value + randomValue(winValue1, winValue2);
        bar3.value = newValue <= 100 ? newValue : 100; // Asegura que no supere 100
        updateProgressBar(bar3, bar3.value);
    } else {
        const newValue = bar3.value - randomValue(lossValue1, lossValue2);
        bar3.value = newValue >= 0 ? newValue : 0; // Asegura que no sea menos de 0
        updateProgressBar(bar3, bar3.value);
    }
    averageLife();
    isDead();
});
atm?.addEventListener('click', function () {
    isWin = randomBoolean(isWin);
    if (isWin) {
        const newValue = bar3.value + randomValue(winValue1, winValue2);
        bar3.value = newValue <= 100 ? newValue : 100; // Asegura que no supere 100
        updateProgressBar(bar3, bar3.value);
    } else {
        const newValue = bar3.value - randomValue(lossValue1, lossValue2);
        bar3.value = newValue >= 0 ? newValue : 0; // Asegura que no sea menos de 0
        updateProgressBar(bar3, bar3.value);
    }
    averageLife();
    isDead();
});
premier?.addEventListener('click', function () {
    isWin = randomBoolean(isWin);
    if (isWin) {
        const newValue = bar3.value + randomValue(winValue1, winValue2);
        bar3.value = newValue <= 100 ? newValue : 100; // Asegura que no supere 100
        updateProgressBar(bar3, bar3.value);
    } else {
        const newValue = bar3.value - randomValue(lossValue1, lossValue2);
        bar3.value = newValue >= 0 ? newValue : 0; // Asegura que no sea menos de 0
        updateProgressBar(bar3, bar3.value);
    }
    averageLife();
    isDead();
});
mbappe?.addEventListener('click', function () {
    isWin = randomBoolean(isWin);
    if (isWin) {
        const newValue = bar4.value + randomValue(winValue1, winValue2);
        bar4.value = newValue <= 100 ? newValue : 100; // Asegura que no supere 100
        updateProgressBar(bar4, bar4.value);
    } else {
        const newValue = bar4.value - randomValue(lossValue1, lossValue2);
        bar4.value = newValue >= 0 ? newValue : 0; // Asegura que no sea menos de 0
        updateProgressBar(bar4, bar4.value);
    }
    averageLife();
    isDead();
});
superlig?.addEventListener('click', function () {
    isWin = randomBoolean(isWin);
    if (isWin) {
        const newValue = bar4.value + randomValue(winValue1, winValue2);
        bar4.value = newValue <= 100 ? newValue : 100; // Asegura que no supere 100
        updateProgressBar(bar4, bar4.value);
    } else {
        const newValue = bar4.value - randomValue(lossValue1, lossValue2);
        bar4.value = newValue >= 0 ? newValue : 0; // Asegura que no sea menos de 0
        updateProgressBar(bar4, bar4.value);
    }
    averageLife();
    isDead();
});


function randomBoolean(bool : boolean){
    const randomValue = Math.random();
    let probability = 0.455555;
    if (randomValue < probability) {
        bool = !bool;
    }
    return bool;

}
function isDead(){

    if(bar1.value <= 0 || bar2.value <= 0 || bar3.value <= 0 || bar4.value <= 0){
        img.style.filter = 'brightness(0)';
        alert("floren is dead 😭😭😭😭");
    }
    else if (healthBar.value <= 25 ){
        img.style.filter = 'brightness(0)';
        alert("floren is dead 😭😭😭😭");
        
    } 
    else if (healthBar.value === 50 ){
        img.style.filter = 'brightness(0.5)';
    }
    else if (healthBar.value === 100 ){
        alert("WOOOOW you are the best flore won all🏆🏆");
    }
    else {

        img.style.filter = 'brightness(1)';
}
}