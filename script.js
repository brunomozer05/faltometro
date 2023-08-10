function calcularPresenca() {
  const totalAulas = parseInt(document.getElementById("totalAulas").value);
  const aulasFaltadas = parseInt(document.getElementById("aulasFaltadas").value);

  let porcentagemPresenca = (aulasFaltadas / totalAulas) * 100;
  porcentagemPresenca = porcentagemPresenca.toFixed(2);

  porcentagemPresenca = 100 - porcentagemPresenca;


  const progressBar = document.querySelector(".circular-progress");
  const valueContainer = document.querySelector(".value-container");


  let progressValue = 0;
  const progressEndValue = isNaN(porcentagemPresenca) ? 0 : porcentagemPresenca;
  const speed = 1;


  const progress = setInterval(() => {
    
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        black ${progressValue * 3.6}deg,
        #FFAA00 ${progressValue * 3.6}deg
    )`;
    if (progressValue >= progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}


