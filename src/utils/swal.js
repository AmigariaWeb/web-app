import Swal from 'sweetalert2/dist/sweetalert2.all'

export const swal = (type, title, message) => {
  if (type === "success") {
    Swal.fire({
      title: title,
      text: message,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#71CC98",
      iconHtml: "<img width='100px' src='/src/assets/images/modal-success.svg'>",
      imageAlt: 'éxito',
      background: "#fff"
    })
  }
  if (type === "error") {
    Swal.fire({
      title: title,
      text: message,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#71CC98",
      iconHtml: "<img width='100px' src='/src/assets/images/modal-error.svg'>",
      imageAlt: 'error',
      background: "#fff"
    })
  }
  if (type === "info") {
    Swal.fire({
      title: title,
      text: message,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#71CC98",
      iconHtml: "<img width='100px' src='/src/assets/images/modal-info.svg'>",
      imageAlt: 'info',
      background: "#fff"
    })
  }
}