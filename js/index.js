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
        li.innerHTML = `<div class = "flex items-center gap-3">
        <p>Triangle</p>
        <p>${area} cm^2</p>
        <button class = "btn bg-sky-500 text-white hover:bg-sky-800 ">Convert to m^2</button>
        </div>`;

        areaCalculation.appendChild(li)
    } else {
        window.alert('Please Enter Number Only');
        document.getElementById('b').value = '';
        document.getElementById('h').value = '';

    }


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
             <div class = "flex items-center gap-3">
                 <p>Rectangle</p>
                 <p>${area} cm^2</p>
                 <button class="btn bg-sky-500 text-white hover:bg-sky-800">Convert to m^2</button>
             </div>
                         `;
        areaCalculate.appendChild(li)
    } else {
        window.alert('Please Enter number only')
        document.getElementById('w').value = '';
        document.getElementById('l').value = '';
    }
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
             <div class = "flex items-center gap-3">
                 <p>Rectangle</p>
                 <p>${area} cm^2</p>
                 <button class="btn bg-sky-500 text-white hover:bg-sky-800">Convert to m^2</button>
             </div>
                         `;
        areaCalculate.appendChild(li)
    } else {
        window.alert('Please Enter number only')
        document.getElementById('b1').value = '';
        document.getElementById('h1').value = '';
    }
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
             <div class = "flex items-center gap-3">
                 <p>Rectangle</p>
                 <p>${area} cm^2</p>
                 <button class="btn bg-sky-500 text-white hover:bg-sky-800">Convert to m^2</button>
             </div>
                         `;
        areaCalculate.appendChild(li)
    } else {
        window.alert('Please Enter number only')
        document.getElementById('d^1').value = '';
        document.getElementById('d^2').value = '';
    }
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
             <div class = "flex items-center gap-3">
                 <p>Rectangle</p>
                 <p>${area} cm^2</p>
                 <button class="btn bg-sky-500 text-white hover:bg-sky-800">Convert to m^2</button>
             </div>
                         `;
        areaCalculate.appendChild(li)
    } else {
        window.alert('Please Enter number only')
        document.getElementById('p2').value = '';
        document.getElementById('b2').value = '';
    }
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
             <div class = "flex items-center gap-3">
                 <p>Rectangle</p>
                 <p>${area} cm^2</p>
                 <button class="btn bg-sky-500 text-white hover:bg-sky-800 pr-2">Convert to m^2</button>
             </div>
                         `;
        areaCalculate.appendChild(li)
    } else {
        window.alert('Please Enter number only')
        document.getElementById('a3').value = '';
        document.getElementById('b3').value = '';
    }
}


