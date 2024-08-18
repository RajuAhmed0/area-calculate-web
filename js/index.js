// triangle section
function triangles() {

    const hight = document.getElementById('b').value;
    const width = document.getElementById('h').value;

    const hightCalculate = parseFloat(hight);
    const widthCalculate = parseFloat(width);

    if (isNaN(hightCalculate) === false && isNaN(widthCalculate) === false) {
        const area = 0.5 * hightCalculate * widthCalculate;

        const areaCalculation = document.getElementById('order-list');
        const li = document.createElement('li');
        li.innerHTML = `<div id = 'container' class = "flex items-center gap-3">
        <p>Triangle</p>
        <p><span id='area'>${area}</span>.cm^2</p>
        <button id='convertBtn' onclick = "convert()" class = "btn bg-sky-500 text-white hover:bg-sky-800 ">Convert to m^2</button>
        </div>`;

        areaCalculation.appendChild(li)
    } else {
        window.alert('Please Enter Number Only');
        document.getElementById('b').value = '';
        document.getElementById('h').value = '';

    }


}

// cm to m convert button function 
function convert() {
    const areaString = document.getElementById('area').innerText;
    const areaNumber = parseFloat(areaString);
    const cmToM = areaNumber / 100;
    const btn = document.getElementById('convertBtn');
    const pTag = document.createElement('p')
    pTag.innerText = `= ${cmToM} m^2`;
    btn.remove();
    document.getElementById('container').appendChild(pTag);
    document.getElementById('container').id = 'text';
    document.getElementById('area').id = 'none';

}



// rectangle section 
function rectangle() {
    const hight = document.getElementById('w').value;
    const width = document.getElementById('l').value;
    const hightNum = parseFloat(hight);
    const widthNum = parseFloat(width);

    if (isNaN(hightNum) === false && isNaN(widthNum) === false) {
        const area = hightNum * widthNum;

        const areaCalculate = document.getElementById('order-list')
        const li = document.createElement('li');
        li.innerHTML = `
             <div id='container1' class = "flex items-center gap-3">
                 <p>Rectangle</p>
                 <p><span id='area1'>${area}</span>.cm^2</p>
                 <button id = 'convertBtn1' onclick = "convert1()" class="btn bg-sky-500 text-white hover:bg-sky-800">Convert to m^2</button>
             </div>
                         `;
        areaCalculate.appendChild(li)
    } else {
        window.alert('Please Enter number only')
        document.getElementById('w').value = '';
        document.getElementById('l').value = '';
    }
}


// cm to m convert button function 
function convert1() {
    const areaString = document.getElementById('area1').innerText;
    const areaNumber = parseFloat(areaString);
    const cmToM = areaNumber / 100;
    const btn = document.getElementById('convertBtn1');
    const pTag = document.createElement('p')
    pTag.innerText = `= ${cmToM} m^2`;
    btn.remove();
    document.getElementById('container1').appendChild(pTag);
    document.getElementById('container1').id = 'text';
    document.getElementById('area1').id = 'none';

}

// parallelogram section
function parallelogram() {
    const hight = document.getElementById('b1').value;
    const width = document.getElementById('h1').value;
    const hightNum = parseFloat(hight);
    const widthNum = parseFloat(width);

    if (isNaN(hightNum) === false && isNaN(widthNum) === false) {
        const area = hightNum * widthNum;

        const areaCalculate = document.getElementById('order-list')
        const li = document.createElement('li');
        li.innerHTML = `
             <div id= 'container2' class = "flex items-center gap-3">
                 <p>Parallelogram</p>
                  <p><span id='area2'>${area}</span>.cm^2</p>
                 <button id= 'convertBtn2' onclick = "convert2()" class="btn bg-sky-500 text-white hover:bg-sky-800">Convert to m^2</button>
             </div>
                         `;
        areaCalculate.appendChild(li)
    } else {
        window.alert('Please Enter number only')
        document.getElementById('b1').value = '';
        document.getElementById('h1').value = '';
    }
}

// cm to m convert button function 
function convert2() {
    const areaString = document.getElementById('area2').innerText;
    const areaNumber = parseFloat(areaString);
    const cmToM = areaNumber / 100;
    const btn = document.getElementById('convertBtn2');
    const pTag = document.createElement('p')
    pTag.innerText = `= ${cmToM} m^2`;
    btn.remove();
    document.getElementById('container2').appendChild(pTag);
    document.getElementById('container2').id = 'text';
    document.getElementById('area2').id = 'none';

}


// rhombus section 
function rhombus() {
    const hight = document.getElementById('d^1').value;
    const width = document.getElementById('d^2').value;
    const hightNum = parseFloat(hight);
    const widthNum = parseFloat(width);

    if (isNaN(hightNum) === false && isNaN(widthNum) === false) {
        const area = 0.5 * hightNum * widthNum;

        const areaCalculate = document.getElementById('order-list')
        const li = document.createElement('li');
        li.innerHTML = `
             <div id = 'container3' class = "flex items-center gap-3">
                 <p>Rhombus </p>
                 <p><span id='area3'>${area}</span>.cm^2</p>
                 <button id = 'convertBtn3' onclick = "convert3()" class="btn bg-sky-500 text-white hover:bg-sky-800">Convert to m^2</button>
             </div>
                         `;
        areaCalculate.appendChild(li)
    } else {
        window.alert('Please Enter number only')
        document.getElementById('d^1').value = '';
        document.getElementById('d^2').value = '';
    }
}

// cm to m convert button function 
function convert3() {
    const areaString = document.getElementById('area3').innerText;
    const areaNumber = parseFloat(areaString);
    const cmToM = areaNumber / 100;
    const btn = document.getElementById('convertBtn3');
    const pTag = document.createElement('p')
    pTag.innerText = `= ${cmToM} m^2`;
    btn.remove();
    document.getElementById('container3').appendChild(pTag);
    document.getElementById('container3').id = 'text';
    document.getElementById('area3').id = 'none';

}


// pentagon section  
function pentagon() {
    const hight = document.getElementById('p2').value;
    const width = document.getElementById('b2').value;
    const hightNum = parseFloat(hight);
    const widthNum = parseFloat(width);

    if (isNaN(hightNum) === false && isNaN(widthNum) === false) {
        const area = 0.5 * hightNum * widthNum;

        const areaCalculate = document.getElementById('order-list')
        const li = document.createElement('li');
        li.innerHTML = `
             <div id = 'container4' class = "flex items-center gap-3">
                 <p>Pentagon</p>
                 <p><span id='area4'>${area}</span>.cm^2</p>
                 <button id = 'convertBtn4' onclick = 'convert4()' class="btn bg-sky-500 text-white hover:bg-sky-800">Convert to m^2</button>
             </div>
                         `;
        areaCalculate.appendChild(li)
    } else {
        window.alert('Please Enter number only')
        document.getElementById('p2').value = '';
        document.getElementById('b2').value = '';
    }
}


// cm to m convert button function 
function convert4() {
    const areaString = document.getElementById('area4').innerText;
    const areaNumber = parseFloat(areaString);
    const cmToM = areaNumber / 100;
    const btn = document.getElementById('convertBtn4');
    const pTag = document.createElement('p')
    pTag.innerText = `= ${cmToM} m^2`;
    btn.remove();
    document.getElementById('container4').appendChild(pTag);
    document.getElementById('container4').id = 'text';
    document.getElementById('area4').id = 'none';

}



// ellipse section  
function pentagon() {
    const hight = document.getElementById('a3').value;
    const width = document.getElementById('b3').value;
    const hightNum = parseFloat(hight);
    const widthNum = parseFloat(width);

    if (isNaN(hightNum) === false && isNaN(widthNum) === false) {
        const area = Math.PI * hightNum * widthNum;

        const areaCalculate = document.getElementById('order-list')
        const li = document.createElement('li');
        li.innerHTML = `
             <div id = "container5" class = "flex items-center gap-3">
                 <p>Rectangle</p>
                 <p><span id='area5'>${area}</span>.cm^2</p>
                 <button id = 'convertBtn5' onclick = "convert5()" class="btn bg-sky-500 text-white hover:bg-sky-800 pr-2">Convert to m^2</button>
             </div>
                         `;
        areaCalculate.appendChild(li)
    } else {
        window.alert('Please Enter number only')
        document.getElementById('a3').value = '';
        document.getElementById('b3').value = '';
    }
}


// cm to m convert button function 
function convert5() {
    const areaString = document.getElementById('area5').innerText;
    const areaNumber = parseFloat(areaString);
    const cmToM = areaNumber / 100;
    const btn = document.getElementById('convertBtn5');
    const pTag = document.createElement('p')
    pTag.innerText = `= ${cmToM} m^2`;
    btn.remove();
    document.getElementById('container5').appendChild(pTag);
    document.getElementById('container5').id = 'text';
    document.getElementById('area5').id = 'none';

}

