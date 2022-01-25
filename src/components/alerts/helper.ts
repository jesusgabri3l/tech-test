import 'sweetalert2/src/sweetalert2.scss';

import Swal from 'sweetalert2';
const defaultProps = {
  background: '#fff',
  allowOutsideClick: false,
  allowEscapeKey: false,
  padding: '2rem',
};
const successAlert = (text = 'Action well done!') => {
  Swal.fire({
    ...defaultProps,
    title: text,
    icon: 'success',
    timer: 5000,
    showConfirmButton: false,
    timerProgressBar: true,
    iconColor: '#0066dd',
    allowOutsideClick: false,
  });
};

export { defaultProps, successAlert };
