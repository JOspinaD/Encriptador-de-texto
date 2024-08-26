function encriptarTexto(texto) {
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i) + 3;
        textoEncriptado += String.fromCharCode(charCode);
    }
    return textoEncriptado;
}


function desencriptarTexto(texto) {
    let textoDesencriptado = '';
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i) - 3; 
        textoDesencriptado += String.fromCharCode(charCode);
    }
    return textoDesencriptado;
}


const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');


encryptButton.addEventListener('click', () => {
    const textoOriginal = inputText.value;
    const textoEncriptado = encriptarTexto(textoOriginal);
    outputText.value = textoEncriptado;
    inputText.value = ''; 
});

decryptButton.addEventListener('click', () => {
    const textoEncriptado = outputText.value;
    const textoDesencriptado = desencriptarTexto(textoEncriptado);
    inputText.value = textoDesencriptado;
    outputText.value = ''; 
});
