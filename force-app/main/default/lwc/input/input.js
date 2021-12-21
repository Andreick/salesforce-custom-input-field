import { LightningElement, api } from 'lwc';
import { celular, telefone, email, cpf, cep,
    formatarCelular, formatarTelefone, formatarCep, formatarCpf
} from 'c/utils';

export default class Input extends LightningElement {
    @api type; @api label; @api value;
    @api placeholder; @api fieldLevelHelp;
    @api disabled; @api required; @api pattern;
    @api min; @api max; @api minLength; @api maxLength;
    @api formatter; @api step;
    @api customValidation; @api customValidationMessage;
    @api badInputMessage;
    @api requiredMessage;
    @api patternMessage;
    @api minMessage;
    @api maxMessage;
    @api minLengthMessage;
    @api maxLengthMessage;
    @api numberMessage = 'Digite somente números!';
    @api celularMessage = 'Celular inválido! Tente outro!';
    @api telefoneMessage = 'Telefone inválido! Tente outro!';
    @api emailMessage = 'Email inválido! Tente outro!';
    @api cpfMessage = 'CPF inválido! Tente outro!';
    @api cepMessage = 'CEP inválido! Tente outro!';
    formatValue;

    connectedCallback() {
        switch (this.type) {
            case 'number': this.numberSetup(); break;
            case 'celular': this.celularSetup(); break;
            case 'telefone': this.telefoneSetup(); break;
            case 'email': this.emailSetup(); break;
            case 'cep': this.cepSetup(); break;
            case 'cpf': this.cpfSetup(); break;
            case 'date': case 'datetime': case 'time':
            case 'password': case 'url': break;
            default: this.type = 'text';
        }
    }

    handleChange(event) {
        this.applyMask(event.srcElement);
    }

    handleBlur(event) {
        this.validate(event.srcElement);
    }

    applyMask(element) {
        if (!!this.formatValue) {
            this.value = this.formatValue(element.value);
            element.value = this.value;
        }
    }

    validate(element) {
        if (!!this.customValidation) {
            if (this.customValidation(element.value))
                element.setCustomValidity(this.customValidationMessage);
            else element.setCustomValidity('');
            element.reportValidity();
        }
    }

    numberSetup() {
        this.badInputMessage = this.numberMessage;
    }

    celularSetup() {
        this.formatValue = formatarCelular;
        this.customValidation = (value) => !celular.test(value);
        this.customValidationMessage = this.celularMessage;
        this.type = 'tel';
    }

    telefoneSetup() {
        this.formatValue = formatarTelefone;
        this.customValidation = (value) => !telefone.test(value);
        this.customValidationMessage = this.telefoneMessage;
        this.type = 'tel';
    }

    emailSetup() {
        this.customValidation = (value) => !email.test(value);
        this.customValidationMessage = this.emailMessage;
    }

    cpfSetup() {
        this.formatValue = formatarCpf;
        this.customValidation = (value) => !cpf.test(value);
        this.customValidationMessage = this.cpfMessage;
        this.type = 'text';
    }

    cepSetup() {
        this.formatValue = formatarCep;
        this.customValidation = (value) => !cep.test(value);
        this.customValidationMessage = this.cepMessage;
        this.type = 'text';
    }
}