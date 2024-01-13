const btnGenerator = document.getElementById("btnGenerator");
const gradientDisplay = document.getElementById("gradientDisplay");
const body = document.body;

//  evento de clique ao botão
btnGenerator.addEventListener("click", () => {
  const hexNumber = "0123456789ABCDEF";
  let hexCode1 = "";
  let hexCode2 = "";

  for (let i = 0; i < 6; i++) {
    hexCode1 += hexNumber[Math.floor(Math.random() * hexNumber.length)];
    hexCode2 += hexNumber[Math.floor(Math.random() * hexNumber.length)];
  }

  // background após a animação iniciar
  setTimeout(() => {
    body.style.background = `linear-gradient(270deg, #${hexCode1}, #${hexCode2})`;
  }, 0);


  gradientDisplay.textContent = `copiar`;
  gradientDisplay.style.display = "block";

  // adiciona a opção de copiar ao passar o mouse sobre o texto
  gradientDisplay.addEventListener("mouseover", () => {
    gradientDisplay.style.cursor = "pointer";
    gradientDisplay.setAttribute("title", "Clique para copiar");
  });

  // remove eventos antigos de clique no texto gerado
  gradientDisplay.onclick = null;

  // adiciona o novo evento de clique no texto gerado para copiar
  gradientDisplay.onclick = () => {
    copyToClipboard(`#${hexCode1}  #${hexCode2}`);
    Toastify({
      text: "hexadecimais copiados!",
      duration: 3000,
      gravity: "top",
      position: "right",
      className: "copy-notification", 
    }).showToast();
  };

  // toastify — ReactLib 
  Toastify({
    text: `hexadecimais: #${hexCode1} • #${hexCode2}`,
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: `linear-gradient(270deg, #${hexCode1}, #${hexCode2})`,
  }).showToast();
});

// função para copiar texto para a área de transferência
function copyToClipboard(text) {
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
