const celularReg = /^\([1-9]{2}\) ?9[1-9]\d{3}\-\d{4}$/;
const telefoneReg = /^\([1-9]{2}\) ?[2-8]\d{3}\-\d{4}$/;
const celularOuTelefoneReg = /^\([1-9]{2}\) ?(?:9[1-9]|[2-8])\d{3}\-\d{4}$/;
const cepReg = /^\d{5}\-\d{3}$/;
const cpfReg = /^(?:\d{11}|\d{3}\.\d{3}\.\d{3}\-\d{2})$/;
const emailReg = /^(?:[^\W_]|[^\W_][_.-][^\W_])(?:[^\W_]|[_.-][^\W_])*@(?:[^\W_]|[^\W_]\-[^\W_])(?:[^\W_]|\-[^\W_])*\.[a-z]{2,4}$/;

export { celularReg, telefoneReg, celularOuTelefoneReg, cepReg, cpfReg, emailReg };