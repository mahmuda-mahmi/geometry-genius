let num = 1;

function getValue(id) {
       const getId = document.getElementById(id);
       const idValue = getId.value;
       getId.value = '';
       return idValue;
}

function valueName(idValue) {
       const idName = document.getElementById(idValue);
       return idName.innerText;
}

function appendArea(a, idN) {
       const area = document.createElement('p');
       const title = valueName(idN);
       area.innerHTML = `${num}. The area of ${title}  is: <b> ${a}  cm<sup>2</sup></b> <button class="btn btn-success" id="btn-convert"> Convert to m<sup>2</sup></button>`;
       num++;
       return document.getElementById('area').appendChild(area);
}

/* function convertToMeter(btn){
       const btn = document.getElementById(btn);

} */

document.getElementById('tri-btn').addEventListener('click', function () {
       const triB = getValue('tri-b');
       const triH = getValue('tri-h');
       const triArea = 0.5 * triB * triH;
       appendArea(triArea, 'tri-id');
})

document.getElementById('rect-btn').addEventListener('click', function () {
       const rectW = getValue('r-w');
       const rectL = getValue('r-l');
       const rectArea = rectW * rectL;
       appendArea(rectArea, 'r-id');
})

document.getElementById('p-btn').addEventListener('click', function () {
       const pB = getValue('p-b');
       const pH = getValue('p-h');
       const pArea = pB * pH;
       appendArea(pArea, 'p-id');
})

document.getElementById('rhom-btn').addEventListener('click', function () {
       const rhomD1 = getValue('rhom-d1');
       const rhomD2 = getValue('rhom-d2');
       const rhomArea = 0.5 * rhomD1 * rhomD2;
       appendArea(rhomArea, 'rhom-id');
})

document.getElementById('pent-btn').addEventListener('click', function () {
       const pentP = getValue('pent-p');
       const pentB = getValue('pent-b');
       const pentArea = 0.5 * pentP * pentB;
       appendArea(pentArea, 'pent-id');
})

document.getElementById('elli-btn').addEventListener('click', function () {
       const elliA = getValue('elli-a');
       const elliB = getValue('elli-b');
       const elliArea = Math.PI * elliA * elliB;
       appendArea(elliArea, 'elli-id');
})