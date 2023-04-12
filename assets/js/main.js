const encodeBtn = document.getElementById('encode');
const decodeBtn = document.getElementById('decode');
const textToEncode = document.getElementById('textToEncode');
const textEncoded = document.getElementById('textEncoded');
const resultContainer = document.getElementById('result')
const h3 = document.querySelector('h3');
const p = document.querySelector('p');
const copyBtn = document.getElementById('copiar');

const encode = (str) => {
    return str.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    };

const decode = (str) => {
    return str.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    };

const showText = (str) => {
    resultContainer.style.backgroundImage = 'none';
    resultContainer.style.justifyContent = 'space-between';
    h3.style.display = 'none';
    p.style.display = 'none';
    textEncoded.style.display = 'block';
    textEncoded.value = str;
    copyBtn.style.display = 'flex';
}

encodeBtn.addEventListener('click',()=>{

    const textEncoded = encode(textToEncode.value);
    encodeBtn.value = "Codificado!"
    showText(textEncoded);

})

decodeBtn.addEventListener('click',()=>{
    const textToDecode = decode(textToEncode.value);
    showText(textToDecode);
})




const copyToClipboard = () => {
    originalButtonText = copyBtn.textContent;
    const text = textEncoded.value;
    navigator.clipboard.writeText(text);
    copyBtn.textContent = 'Copiado!';
    setTimeout(() => {
        copyBtn.textContent = originalButtonText;
    }, 2000);

};

copyBtn.addEventListener('click', copyToClipboard);