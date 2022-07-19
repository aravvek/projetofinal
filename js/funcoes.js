function abrirModal() {
    document.getElementById('cortina').style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.getElementById('modal').style.marginTop = '80px';
    document.getElementById('abrir').style.marginTop = '-800px';
}

function fecharModal() {
    document.getElementById('cortina').style.backgroundColor = "";
    document.getElementById('modal').style.marginTop = '';
    document.getElementById('abrir').style.marginTop = '';
}
function darDesconto(){
    document.getElementById('p1').textContent = 'R$26.91';
    document.getElementById('p2').textContent = 'R$62.99';
    document.getElementById('p3').textContent = 'R$143.91';
    document.getElementById('p4').textContent = 'R$26.91';
    document.getElementById('p5').textContent = 'R$44.99';
    document.getElementById('p6').textContent = 'R$80.91';
    document.getElementById('cortina').style.backgroundColor = "";
    document.getElementById('modal').style.marginTop = '';
}