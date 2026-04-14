function calcularTotal() {
    const quantB = parseInt(document.getElementById('dogB').value) || 0;
    const quantC = parseInt(document.getElementById('dogC').value) || 0;
    const quantS = parseInt(document.getElementById('dogS').value) || 0;
    const quantRefri3 = parseInt(document.getElementById('refri3').value) || 0;
    const quantRefri2 = parseInt(document.getElementById('refri2').value) || 0;

    const totalB = quantB * 22.00;
    const totalC = quantC * 26.00;
    const totalS = quantS * 29.00;
    const totalRefri3 = quantRefri3 * 5.00;
    const totalRefri2 = quantRefri2 * 8.00;

    const totalPedido = totalB + totalC + totalS + totalRefri3 + totalRefri2;

    document.getElementById('outputTotal').innerText = `Valor total do pedido: R$ ${totalPedido.toFixed(2)}`;

    document.getElementById('dogB').value = '';
    document.getElementById('dogC').value = '';
    document.getElementById('dogS').value = '';
    document.getElementById('refri3').value = '';
    document.getElementById('refri2').value = '';
}