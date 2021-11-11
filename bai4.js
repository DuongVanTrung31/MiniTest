function tinhhinhvuong() {
    let inputA = parseInt(document.getElementById('inputA').value);
    let chuvi = 4 * inputA;
    let dientich = inputA * inputA;
    document.getElementById('result').innerHTML = `Chu vi hình vuông là ${chuvi} và diện tích là ${dientich}`
}

function binhphuong() {
    let soA = +document.getElementById('soA').value;
    let soB = +document.getElementById('soB').value;
    let apow2 = soA ** 2
    let apowb = soA ** soB
    document.getElementById('result2').innerHTML = `A bình phương là: ${apow2} và A bình phương B là ${apowb}`
}

function sum() {
    let soDau = + document.getElementById('sodau').value;
    let soCuoi = + document.getElementById('socuoi').value;
    let sum = (soDau + soCuoi)* --soCuoi
    document.getElementById('sum').innerHTML = `Tổng các số bằng ${}`;
}

function theki() {
    let inputYear = + document.getElementById('year').value;
    let theki = inputYear / 100
    document.getElementById('result3') = theki;
}   