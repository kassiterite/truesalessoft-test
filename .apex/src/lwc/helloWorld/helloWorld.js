import { LightningElement, track } from 'lwc';
import getHelloWorld from '@salesforce/apex/HelloWorldController.getHelloWorld';

export default class HelloWorld extends LightningElement {

    @track greeting;

    connectedCallback(){
    getHelloWorld({'name': 'Kasseta'})
    .then(result => {
    this.greeting = result;
    })
    .catch(error => {
    console.error(error);
    });
    }
}