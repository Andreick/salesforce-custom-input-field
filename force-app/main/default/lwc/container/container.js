import { LightningElement } from 'lwc';
import { obterIdade } from 'c/utils';

export default class Container extends LightningElement {

    menorDezoitoAnos = value => obterIdade(value) < 18;

    handleChange(event) {
        console.log(event.target.value);
    }
}