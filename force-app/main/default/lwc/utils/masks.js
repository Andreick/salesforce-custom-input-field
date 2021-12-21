import { removerNaoDigitos } from "./utils";

const formatarCelular = (str) => {
    return formatarNumeroTelefone(str, /(\d{2})(\d{1,5})(\d{0,4})/);
}

const formatarTelefone = (str) => {
    return formatarNumeroTelefone(str, /(\d{2})(\d{1,4})(\d{0,4})/);
}

function formatarNumeroTelefone(str, regex) {
    const digits = removerNaoDigitos(str);
    const m = digits.match(regex);
    if (!m) return digits;
    if (m[3]) return `(${m[1]})${m[2]}-${m[3]}`;
    if (m[2]) return `(${m[1]})${m[2]}`;
    return `(${m[1]})`;
}

const formatarCep = (str) => {
    const m = removerNaoDigitos(str).match(/(\d{0,5})(\d{0,3})/);
    if (m[2]) return `${m[1]}-${m[2]}`;
    return m[1];
}

const formatarCpf = (str) => {
    const m = removerNaoDigitos(str).match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    if (m[4]) return `${m[1]}.${m[2]}.${m[3]}-${m[4]}`;
    if (m[3]) return `${m[1]}.${m[2]}.${m[3]}`;
    if (m[2]) return `${m[1]}.${m[2]}`;
    return m[1];
}

export {
    formatarCelular, formatarTelefone, formatarCep, formatarCpf
};