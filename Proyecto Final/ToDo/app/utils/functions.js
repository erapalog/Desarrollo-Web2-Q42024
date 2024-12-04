import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function alerta(msg, icon) {
    onfocus();
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title: msg,
        icon: icon,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
    });

    function onfocus() {
        document.getElementById('nota1').focus();
    }
}

export function alertReactCrud(msg, icon) {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title: msg,
        icon: icon,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
    });
}

export function focus(id) {
    document.getElementById(id).focus();
}

export function closeModal(id) {
    document.getElementById(id).click();
}

export function clearId(id) {
    document.getElementById(id).value = "";
}