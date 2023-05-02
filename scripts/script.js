const encryptButton = document.querySelector('#encrypt-button');
const decryptButton = document.querySelector('#decrypt-button');

const imgContainer = document.querySelector(".img-container");
const notfoundContainer = document.querySelector(".notfound-container");
const hintContainer = document.querySelector(".hint-container");
const infoContainer = document.querySelector(".info-container");

const textDone = document.getElementById('text-done');
const copyButton = document.getElementById('copy-button');

encryptButton.addEventListener('click', encrypt);
decryptButton.addEventListener('click', decrypt);
copyButton.addEventListener('click', copyText);

function hideContainers() {
  imgContainer.style.display = 'none';
  notfoundContainer.style.display = 'none';
  hintContainer.style.display = 'none';
}

function encrypt(){
  hideContainers();

  infoContainer.style.height = "93%";
  textDone.style.display = 'initial';
  copyButton.style.display = 'initial';

  const messageArea = document.getElementById("message-area").value.toLowerCase().trim();
  const encryptedText = messageArea.replace(/e/g, 'enter')
                                    .replace(/i/g, 'imes')
                                    .replace(/a/g, 'ai')
                                    .replace(/o/g, 'ober')
                                    .replace(/u/g, 'ufat');

  textDone.textContent = encryptedText;
}

function decrypt(){
  hideContainers();

  infoContainer.style.height = "93%";
  textDone.style.display = 'initial';
  copyButton.style.display = 'initial';

  const messageArea = document.getElementById("message-area").value.toLowerCase().trim();
  const decryptedText = messageArea.replace(/enter/g, 'e')
                                    .replace(/imes/g, 'i')
                                    .replace(/ai/g, 'a')
                                    .replace(/ober/g, 'o')
                                    .replace(/ufat/g, 'u');

  textDone.textContent = decryptedText;

}

function copyText() {
  const message = document.querySelector("#text-done");
  message.select();
  document.execCommand("copy");
}