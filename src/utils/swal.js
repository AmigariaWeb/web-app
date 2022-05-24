import Swal from 'sweetalert2/dist/sweetalert2.all'
import iconSucces from '../assets/images/modal-success.svg'
import iconInfo from '../assets/images/modal-info.svg'
import iconError from '../assets/images/modal-error.svg'


export const swal = (type, title, message) => {
  if (type === "success") {
    Swal.fire({
      title: title,
      text: message,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#71CC98",
      iconHtml: `<img width='100px' src='${iconSucces}'>`,
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
      iconHtml: `<img width='100px' src='${iconError}'>`,
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
      iconHtml: `<img width='100px' src='${iconInfo}'>`,
      imageAlt: 'info',
      background: "#fff"
    })
  }
    if (type === "infoMaps") {
    Swal.fire({
      title: title,
      html: message,
      iconHtml: "<img width='100px' src='/src/assets/images/modal-info.svg'>",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#71CC98",
      imageAlt: 'info',
      background: "#fff"
    })
  }
}