
AOS.init({ duration:800, once:true });
function enviarFormulario(e) {
  e.preventDefault();
  const msg = document.getElementById('mensajeExito');
  msg.classList.remove('d-none');
  setTimeout(() => {
    msg.classList.add('d-none');
    e.target.reset();
  }, 3000);
}
