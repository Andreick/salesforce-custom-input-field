const removerNaoDigitos = str => str.replace(/\D+/g, '');

const obterIdade = (dateString) => {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    if (age > 0) {
        today = new Date(2000, today.getMonth(), today.getDate());
        birthDate = new Date(2000, birthDate.getMonth(), birthDate.getDate());
        if (today < birthDate) age--;
    }
    return age;
}

export {
    removerNaoDigitos,
    obterIdade
};

export * from './masks';
export * from './regex';