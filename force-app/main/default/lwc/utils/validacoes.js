import { cpfReg, removerNaoDigitos } from "c/utils";

const cpfValido = (str) => {
    if (!cpfReg.test(str)) return false;
    const cpf = removerNaoDigitos(str);
    if (/^(\d)\1{10}$/.test(cpf)) return false;
    if (!digitoCpfValido(cpf, 9)) return false;
    return digitoCpfValido(cpf, 10);
}

function digitoCpfValido(cpf, indiceDigitoVerificacao) {
    let seq = indiceDigitoVerificacao + 1;
    let soma = 0;
    for (let i = 0; i < indiceDigitoVerificacao; i++) {
        soma += cpf[i] * seq;
        seq--;
    }
    return ((soma * 10) % 11) % 10 == cpf[indiceDigitoVerificacao];
}

export { cpfValido };