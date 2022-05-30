import Swal from 'sweetalert2/dist/sweetalert2.all'

export const swal = (type, title, message, confirmMethod, confirmResponse = true) => {
  if (type === "success") {
    Swal.fire({
      title: title,
      text: message,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#71CC98",
      iconHtml: `
        <svg width="100" height="100" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.75434 11.6192L6.70969 9.57328L6.70963 9.57322C6.60678 9.47037 6.48468 9.38878 6.3503 9.33312C6.21591 9.27746 6.07188 9.24881 5.92643 9.24881C5.78097 9.24881 5.63694 9.27746 5.50256 9.33312C5.36818 9.38878 5.24608 9.47037 5.14322 9.57322C4.9355 9.78094 4.81881 10.0627 4.81881 10.3564C4.81881 10.6502 4.9355 10.9319 5.14322 11.1396L7.97111 13.9675C7.97126 13.9677 7.97141 13.9678 7.97156 13.968C8.07412 14.0712 8.19608 14.1532 8.33041 14.2091C8.46496 14.2652 8.60926 14.294 8.755 14.294C8.90074 14.294 9.04504 14.2652 9.17959 14.2091C9.31396 14.1532 9.43594 14.0712 9.53852 13.9679C9.53864 13.9678 9.53877 13.9676 9.53889 13.9675L15.3938 8.11117C15.3941 8.11091 15.3943 8.11066 15.3946 8.11041C15.4985 8.00813 15.5811 7.88633 15.6378 7.75202L15.4075 7.65481L15.6378 7.75202C15.6946 7.61737 15.7242 7.4728 15.7249 7.32666C15.7256 7.18051 15.6973 7.03568 15.6418 6.9005C15.5862 6.76534 15.5044 6.64251 15.4011 6.5391L15.2242 6.71577L15.4011 6.5391C15.2978 6.4357 15.1751 6.35377 15.04 6.29803C14.9049 6.2423 14.7601 6.21387 14.6139 6.21437C14.4678 6.21488 14.3232 6.24432 14.1885 6.30099C14.0541 6.35752 13.9322 6.44003 13.8298 6.54378C13.8296 6.54404 13.8293 6.5443 13.829 6.54456L8.75434 11.6192ZM10 0.25C12.5859 0.25 15.0658 1.27723 16.8943 3.10571C18.7228 4.93419 19.75 7.41414 19.75 10C19.75 12.5859 18.7228 15.0658 16.8943 16.8943C15.0658 18.7228 12.5859 19.75 10 19.75C7.41414 19.75 4.93419 18.7228 3.10571 16.8943C1.27723 15.0658 0.25 12.5859 0.25 10C0.25 7.41414 1.27723 4.93419 3.10571 3.10571C4.93419 1.27723 7.41414 0.25 10 0.25Z"
            fill="#71CC98"
            stroke="white"
            stroke-width="0.5"
          />
        </svg>
      `,
      imageAlt: 'éxito',
      background: "#fff",
    })
  }
  if (type === "error") {
    Swal.fire({
      title: title,
      text: message,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#71CC98",
      iconHtml: `
        <svg width="100" height="100" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.99973 19.75C4.61492 19.7499 0.25 15.3848 0.25 10C0.25 4.61507 4.61507 0.25 10 0.25C15.3848 0.25 19.7499 4.61492 19.75 9.99973C19.7442 15.3819 15.3819 19.7442 9.99973 19.75ZM10 12.75C9.30964 12.75 8.75 13.3096 8.75 14C8.75 14.6904 9.30964 15.25 10 15.25C10.6904 15.25 11.25 14.6904 11.25 14C11.25 13.3096 10.6904 12.75 10 12.75ZM10 4.75C9.30964 4.75 8.75 5.30964 8.75 6V10C8.75 10.6904 9.30964 11.25 10 11.25C10.6904 11.25 11.25 10.6904 11.25 10V6C11.25 5.30964 10.6904 4.75 10 4.75Z"
            fill="#E5C34D"
            stroke="white"
            stroke-width="0.5"
          />
        </svg>
      `,
      imageAlt: 'error',
      background: "#fff",
      footer: '<a href="/FAQ">¿Necesita más información?</a>',
    })
  }
  if (type === "info") {
    Swal.fire({
      title: title,
      text: message,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#71CC98",
      iconHtml: `
        <svg width="100" height="100" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="36" height="36" rx="18" fill="#F8E08E" stroke="#003A70"/>
          <path
            d="M21.5051 26.3129V31.1874C21.4941 31.6316 21.1322 31.9892 20.6849 32H15.7547C15.5387 31.9948 15.3331 31.9078 15.1802 31.7569C15.0273 31.6061 14.939 31.403 14.9334 31.1896V26.314C14.9444 25.8697 15.3062 25.5133 15.7547 25.5024H20.6892C21.1388 25.5133 21.5007 25.8708 21.5117 26.314V26.315L21.5051 26.3129ZM28 14.1271C28.0013 15.4123 27.6357 16.6719 26.9451 17.7611L26.9616 17.7329C26.6463 18.1822 26.2695 18.5862 25.842 18.9334L25.831 18.942C25.479 19.2476 25.0941 19.5379 24.6884 19.8023L24.6489 19.8261C24.347 20.0089 23.9288 20.2491 23.3945 20.5467C22.8296 20.8648 22.3502 21.3122 21.9963 21.8511L21.9865 21.8663C21.6789 22.2568 21.4838 22.7221 21.4217 23.2131L21.4206 23.2261C21.417 23.4682 21.3296 23.7019 21.1728 23.8881L21.1739 23.8859C21.1105 23.9798 21.0253 24.0574 20.9253 24.112C20.8253 24.1667 20.7135 24.1969 20.5993 24.2001H15.6648C15.5511 24.1921 15.4418 24.1532 15.3491 24.0876C15.2563 24.022 15.1838 23.9323 15.1396 23.8285L15.1385 23.8241C14.9994 23.594 14.9249 23.3315 14.9224 23.0635V22.148C14.9468 20.9595 15.4242 19.8239 16.2591 18.968L16.258 18.9691C17.0546 18.0496 18.0384 17.3065 19.1453 16.7881L19.1979 16.7664C19.8463 16.5091 20.4339 16.1221 20.9239 15.6299L20.925 15.6288C21.2846 15.1934 21.4678 14.6417 21.4393 14.0805V14.0859C21.4215 13.7779 21.3255 13.4792 21.1602 13.2175C20.9948 12.9558 20.7653 12.7395 20.493 12.5886L20.4831 12.5842C19.8324 12.1445 19.0584 11.9175 18.2702 11.9352H18.2735C17.4839 11.9044 16.7037 12.1131 16.0376 12.5333L16.053 12.5236C15.243 13.2073 14.5142 13.9797 13.8807 14.8259L13.8533 14.8639C13.78 14.9632 13.6842 15.0444 13.5736 15.1008C13.463 15.1572 13.3407 15.1874 13.2162 15.1889C13.0314 15.1831 12.8521 15.1261 12.6986 15.0242L12.7019 15.0264L9.33108 12.4878C9.1633 12.3672 9.04933 12.187 9.01308 11.9851L9.01199 11.9807C8.97735 11.7829 9.01839 11.5794 9.12712 11.4098L9.12493 11.413C10.9419 8.16369 14.3873 6 18.3459 6C18.4588 6 18.5707 6.00217 18.6825 6.00542H18.6661C19.8212 6.0111 20.9649 6.2324 22.0369 6.65767L21.9744 6.636C23.0658 7.04407 24.0859 7.61839 24.9976 8.33813L24.9757 8.32079C25.8567 9.0208 26.5893 9.88566 27.1315 10.8659L27.1535 10.9103C27.6831 11.8388 27.9956 12.9483 27.9967 14.1293L28 14.1271Z"
            fill="#003A70"
          />
        </svg>      
      `,
      imageAlt: 'info',
      background: "#fff",
      footer: '<a href="/FAQ">¿Necesita más información?</a>',

    })
  }
  if (type === "confirm") {
    Swal.fire({
      title: title,
      text: message,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#71CC98",
      showCancelButton: true,
      cancelButtonColor: "#003A70",
      iconHtml: `
        <svg width="100" height="100" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="36" height="36" rx="18" fill="#F8E08E" stroke="#003A70"/>
          <path
            d="M21.5051 26.3129V31.1874C21.4941 31.6316 21.1322 31.9892 20.6849 32H15.7547C15.5387 31.9948 15.3331 31.9078 15.1802 31.7569C15.0273 31.6061 14.939 31.403 14.9334 31.1896V26.314C14.9444 25.8697 15.3062 25.5133 15.7547 25.5024H20.6892C21.1388 25.5133 21.5007 25.8708 21.5117 26.314V26.315L21.5051 26.3129ZM28 14.1271C28.0013 15.4123 27.6357 16.6719 26.9451 17.7611L26.9616 17.7329C26.6463 18.1822 26.2695 18.5862 25.842 18.9334L25.831 18.942C25.479 19.2476 25.0941 19.5379 24.6884 19.8023L24.6489 19.8261C24.347 20.0089 23.9288 20.2491 23.3945 20.5467C22.8296 20.8648 22.3502 21.3122 21.9963 21.8511L21.9865 21.8663C21.6789 22.2568 21.4838 22.7221 21.4217 23.2131L21.4206 23.2261C21.417 23.4682 21.3296 23.7019 21.1728 23.8881L21.1739 23.8859C21.1105 23.9798 21.0253 24.0574 20.9253 24.112C20.8253 24.1667 20.7135 24.1969 20.5993 24.2001H15.6648C15.5511 24.1921 15.4418 24.1532 15.3491 24.0876C15.2563 24.022 15.1838 23.9323 15.1396 23.8285L15.1385 23.8241C14.9994 23.594 14.9249 23.3315 14.9224 23.0635V22.148C14.9468 20.9595 15.4242 19.8239 16.2591 18.968L16.258 18.9691C17.0546 18.0496 18.0384 17.3065 19.1453 16.7881L19.1979 16.7664C19.8463 16.5091 20.4339 16.1221 20.9239 15.6299L20.925 15.6288C21.2846 15.1934 21.4678 14.6417 21.4393 14.0805V14.0859C21.4215 13.7779 21.3255 13.4792 21.1602 13.2175C20.9948 12.9558 20.7653 12.7395 20.493 12.5886L20.4831 12.5842C19.8324 12.1445 19.0584 11.9175 18.2702 11.9352H18.2735C17.4839 11.9044 16.7037 12.1131 16.0376 12.5333L16.053 12.5236C15.243 13.2073 14.5142 13.9797 13.8807 14.8259L13.8533 14.8639C13.78 14.9632 13.6842 15.0444 13.5736 15.1008C13.463 15.1572 13.3407 15.1874 13.2162 15.1889C13.0314 15.1831 12.8521 15.1261 12.6986 15.0242L12.7019 15.0264L9.33108 12.4878C9.1633 12.3672 9.04933 12.187 9.01308 11.9851L9.01199 11.9807C8.97735 11.7829 9.01839 11.5794 9.12712 11.4098L9.12493 11.413C10.9419 8.16369 14.3873 6 18.3459 6C18.4588 6 18.5707 6.00217 18.6825 6.00542H18.6661C19.8212 6.0111 20.9649 6.2324 22.0369 6.65767L21.9744 6.636C23.0658 7.04407 24.0859 7.61839 24.9976 8.33813L24.9757 8.32079C25.8567 9.0208 26.5893 9.88566 27.1315 10.8659L27.1535 10.9103C27.6831 11.8388 27.9956 12.9483 27.9967 14.1293L28 14.1271Z"
            fill="#003A70"
          />
        </svg>      
      `,
      imageAlt: 'info',
      background: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        confirmMethod()
        if (confirmResponse) {
          Swal.fire({
            title: 'Actividad eliminada correctamente',
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#71CC98",
            iconHtml: `
              <svg width="100" height="100" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.75434 11.6192L6.70969 9.57328L6.70963 9.57322C6.60678 9.47037 6.48468 9.38878 6.3503 9.33312C6.21591 9.27746 6.07188 9.24881 5.92643 9.24881C5.78097 9.24881 5.63694 9.27746 5.50256 9.33312C5.36818 9.38878 5.24608 9.47037 5.14322 9.57322C4.9355 9.78094 4.81881 10.0627 4.81881 10.3564C4.81881 10.6502 4.9355 10.9319 5.14322 11.1396L7.97111 13.9675C7.97126 13.9677 7.97141 13.9678 7.97156 13.968C8.07412 14.0712 8.19608 14.1532 8.33041 14.2091C8.46496 14.2652 8.60926 14.294 8.755 14.294C8.90074 14.294 9.04504 14.2652 9.17959 14.2091C9.31396 14.1532 9.43594 14.0712 9.53852 13.9679C9.53864 13.9678 9.53877 13.9676 9.53889 13.9675L15.3938 8.11117C15.3941 8.11091 15.3943 8.11066 15.3946 8.11041C15.4985 8.00813 15.5811 7.88633 15.6378 7.75202L15.4075 7.65481L15.6378 7.75202C15.6946 7.61737 15.7242 7.4728 15.7249 7.32666C15.7256 7.18051 15.6973 7.03568 15.6418 6.9005C15.5862 6.76534 15.5044 6.64251 15.4011 6.5391L15.2242 6.71577L15.4011 6.5391C15.2978 6.4357 15.1751 6.35377 15.04 6.29803C14.9049 6.2423 14.7601 6.21387 14.6139 6.21437C14.4678 6.21488 14.3232 6.24432 14.1885 6.30099C14.0541 6.35752 13.9322 6.44003 13.8298 6.54378C13.8296 6.54404 13.8293 6.5443 13.829 6.54456L8.75434 11.6192ZM10 0.25C12.5859 0.25 15.0658 1.27723 16.8943 3.10571C18.7228 4.93419 19.75 7.41414 19.75 10C19.75 12.5859 18.7228 15.0658 16.8943 16.8943C15.0658 18.7228 12.5859 19.75 10 19.75C7.41414 19.75 4.93419 18.7228 3.10571 16.8943C1.27723 15.0658 0.25 12.5859 0.25 10C0.25 7.41414 1.27723 4.93419 3.10571 3.10571C4.93419 1.27723 7.41414 0.25 10 0.25Z"
                  fill="#71CC98"
                  stroke="white"
                  stroke-width="0.5"
                />
              </svg>
            `,
            imageAlt: 'éxito',
            background: "#fff",
          })
        }
      }
    })
  }
  if (type === "infoMaps") {
    Swal.fire({
      title: title,
      html: message,
      iconHtml: `
        <svg width="100" height="100" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="36" height="36" rx="18" fill="#F8E08E" stroke="#003A70"/>
          <path
            d="M21.5051 26.3129V31.1874C21.4941 31.6316 21.1322 31.9892 20.6849 32H15.7547C15.5387 31.9948 15.3331 31.9078 15.1802 31.7569C15.0273 31.6061 14.939 31.403 14.9334 31.1896V26.314C14.9444 25.8697 15.3062 25.5133 15.7547 25.5024H20.6892C21.1388 25.5133 21.5007 25.8708 21.5117 26.314V26.315L21.5051 26.3129ZM28 14.1271C28.0013 15.4123 27.6357 16.6719 26.9451 17.7611L26.9616 17.7329C26.6463 18.1822 26.2695 18.5862 25.842 18.9334L25.831 18.942C25.479 19.2476 25.0941 19.5379 24.6884 19.8023L24.6489 19.8261C24.347 20.0089 23.9288 20.2491 23.3945 20.5467C22.8296 20.8648 22.3502 21.3122 21.9963 21.8511L21.9865 21.8663C21.6789 22.2568 21.4838 22.7221 21.4217 23.2131L21.4206 23.2261C21.417 23.4682 21.3296 23.7019 21.1728 23.8881L21.1739 23.8859C21.1105 23.9798 21.0253 24.0574 20.9253 24.112C20.8253 24.1667 20.7135 24.1969 20.5993 24.2001H15.6648C15.5511 24.1921 15.4418 24.1532 15.3491 24.0876C15.2563 24.022 15.1838 23.9323 15.1396 23.8285L15.1385 23.8241C14.9994 23.594 14.9249 23.3315 14.9224 23.0635V22.148C14.9468 20.9595 15.4242 19.8239 16.2591 18.968L16.258 18.9691C17.0546 18.0496 18.0384 17.3065 19.1453 16.7881L19.1979 16.7664C19.8463 16.5091 20.4339 16.1221 20.9239 15.6299L20.925 15.6288C21.2846 15.1934 21.4678 14.6417 21.4393 14.0805V14.0859C21.4215 13.7779 21.3255 13.4792 21.1602 13.2175C20.9948 12.9558 20.7653 12.7395 20.493 12.5886L20.4831 12.5842C19.8324 12.1445 19.0584 11.9175 18.2702 11.9352H18.2735C17.4839 11.9044 16.7037 12.1131 16.0376 12.5333L16.053 12.5236C15.243 13.2073 14.5142 13.9797 13.8807 14.8259L13.8533 14.8639C13.78 14.9632 13.6842 15.0444 13.5736 15.1008C13.463 15.1572 13.3407 15.1874 13.2162 15.1889C13.0314 15.1831 12.8521 15.1261 12.6986 15.0242L12.7019 15.0264L9.33108 12.4878C9.1633 12.3672 9.04933 12.187 9.01308 11.9851L9.01199 11.9807C8.97735 11.7829 9.01839 11.5794 9.12712 11.4098L9.12493 11.413C10.9419 8.16369 14.3873 6 18.3459 6C18.4588 6 18.5707 6.00217 18.6825 6.00542H18.6661C19.8212 6.0111 20.9649 6.2324 22.0369 6.65767L21.9744 6.636C23.0658 7.04407 24.0859 7.61839 24.9976 8.33813L24.9757 8.32079C25.8567 9.0208 26.5893 9.88566 27.1315 10.8659L27.1535 10.9103C27.6831 11.8388 27.9956 12.9483 27.9967 14.1293L28 14.1271Z"
            fill="#003A70"
          />
        </svg>      
      `,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#71CC98",
      imageAlt: 'info',
      background: "#fff",
      footer: '<a href="/FAQ">¿Necesita más información?</a>',
    })
  }
  if (type === "confirmWorkshops") {
    Swal.fire({
      title: title,
      text: message,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#71CC98",
      showCancelButton: true,
      cancelButtonColor: "#003A70",
      iconHtml: `
        <svg width="100" height="100" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="36" height="36" rx="18" fill="#F8E08E" stroke="#003A70"/>
          <path
            d="M21.5051 26.3129V31.1874C21.4941 31.6316 21.1322 31.9892 20.6849 32H15.7547C15.5387 31.9948 15.3331 31.9078 15.1802 31.7569C15.0273 31.6061 14.939 31.403 14.9334 31.1896V26.314C14.9444 25.8697 15.3062 25.5133 15.7547 25.5024H20.6892C21.1388 25.5133 21.5007 25.8708 21.5117 26.314V26.315L21.5051 26.3129ZM28 14.1271C28.0013 15.4123 27.6357 16.6719 26.9451 17.7611L26.9616 17.7329C26.6463 18.1822 26.2695 18.5862 25.842 18.9334L25.831 18.942C25.479 19.2476 25.0941 19.5379 24.6884 19.8023L24.6489 19.8261C24.347 20.0089 23.9288 20.2491 23.3945 20.5467C22.8296 20.8648 22.3502 21.3122 21.9963 21.8511L21.9865 21.8663C21.6789 22.2568 21.4838 22.7221 21.4217 23.2131L21.4206 23.2261C21.417 23.4682 21.3296 23.7019 21.1728 23.8881L21.1739 23.8859C21.1105 23.9798 21.0253 24.0574 20.9253 24.112C20.8253 24.1667 20.7135 24.1969 20.5993 24.2001H15.6648C15.5511 24.1921 15.4418 24.1532 15.3491 24.0876C15.2563 24.022 15.1838 23.9323 15.1396 23.8285L15.1385 23.8241C14.9994 23.594 14.9249 23.3315 14.9224 23.0635V22.148C14.9468 20.9595 15.4242 19.8239 16.2591 18.968L16.258 18.9691C17.0546 18.0496 18.0384 17.3065 19.1453 16.7881L19.1979 16.7664C19.8463 16.5091 20.4339 16.1221 20.9239 15.6299L20.925 15.6288C21.2846 15.1934 21.4678 14.6417 21.4393 14.0805V14.0859C21.4215 13.7779 21.3255 13.4792 21.1602 13.2175C20.9948 12.9558 20.7653 12.7395 20.493 12.5886L20.4831 12.5842C19.8324 12.1445 19.0584 11.9175 18.2702 11.9352H18.2735C17.4839 11.9044 16.7037 12.1131 16.0376 12.5333L16.053 12.5236C15.243 13.2073 14.5142 13.9797 13.8807 14.8259L13.8533 14.8639C13.78 14.9632 13.6842 15.0444 13.5736 15.1008C13.463 15.1572 13.3407 15.1874 13.2162 15.1889C13.0314 15.1831 12.8521 15.1261 12.6986 15.0242L12.7019 15.0264L9.33108 12.4878C9.1633 12.3672 9.04933 12.187 9.01308 11.9851L9.01199 11.9807C8.97735 11.7829 9.01839 11.5794 9.12712 11.4098L9.12493 11.413C10.9419 8.16369 14.3873 6 18.3459 6C18.4588 6 18.5707 6.00217 18.6825 6.00542H18.6661C19.8212 6.0111 20.9649 6.2324 22.0369 6.65767L21.9744 6.636C23.0658 7.04407 24.0859 7.61839 24.9976 8.33813L24.9757 8.32079C25.8567 9.0208 26.5893 9.88566 27.1315 10.8659L27.1535 10.9103C27.6831 11.8388 27.9956 12.9483 27.9967 14.1293L28 14.1271Z"
            fill="#003A70"
          />
        </svg>      
      `,
      imageAlt: 'info',
      background: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        confirmMethod()
        if (confirmResponse) {
          Swal.fire({
            title: 'Taller eliminado correctamente',
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#71CC98",
            iconHtml: `
              <svg width="100" height="100" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.75434 11.6192L6.70969 9.57328L6.70963 9.57322C6.60678 9.47037 6.48468 9.38878 6.3503 9.33312C6.21591 9.27746 6.07188 9.24881 5.92643 9.24881C5.78097 9.24881 5.63694 9.27746 5.50256 9.33312C5.36818 9.38878 5.24608 9.47037 5.14322 9.57322C4.9355 9.78094 4.81881 10.0627 4.81881 10.3564C4.81881 10.6502 4.9355 10.9319 5.14322 11.1396L7.97111 13.9675C7.97126 13.9677 7.97141 13.9678 7.97156 13.968C8.07412 14.0712 8.19608 14.1532 8.33041 14.2091C8.46496 14.2652 8.60926 14.294 8.755 14.294C8.90074 14.294 9.04504 14.2652 9.17959 14.2091C9.31396 14.1532 9.43594 14.0712 9.53852 13.9679C9.53864 13.9678 9.53877 13.9676 9.53889 13.9675L15.3938 8.11117C15.3941 8.11091 15.3943 8.11066 15.3946 8.11041C15.4985 8.00813 15.5811 7.88633 15.6378 7.75202L15.4075 7.65481L15.6378 7.75202C15.6946 7.61737 15.7242 7.4728 15.7249 7.32666C15.7256 7.18051 15.6973 7.03568 15.6418 6.9005C15.5862 6.76534 15.5044 6.64251 15.4011 6.5391L15.2242 6.71577L15.4011 6.5391C15.2978 6.4357 15.1751 6.35377 15.04 6.29803C14.9049 6.2423 14.7601 6.21387 14.6139 6.21437C14.4678 6.21488 14.3232 6.24432 14.1885 6.30099C14.0541 6.35752 13.9322 6.44003 13.8298 6.54378C13.8296 6.54404 13.8293 6.5443 13.829 6.54456L8.75434 11.6192ZM10 0.25C12.5859 0.25 15.0658 1.27723 16.8943 3.10571C18.7228 4.93419 19.75 7.41414 19.75 10C19.75 12.5859 18.7228 15.0658 16.8943 16.8943C15.0658 18.7228 12.5859 19.75 10 19.75C7.41414 19.75 4.93419 18.7228 3.10571 16.8943C1.27723 15.0658 0.25 12.5859 0.25 10C0.25 7.41414 1.27723 4.93419 3.10571 3.10571C4.93419 1.27723 7.41414 0.25 10 0.25Z"
                  fill="#71CC98"
                  stroke="white"
                  stroke-width="0.5"
                />
              </svg>
            `,
            imageAlt: 'éxito',
            background: "#fff",
          })
        }
      }
    })
  }
}
