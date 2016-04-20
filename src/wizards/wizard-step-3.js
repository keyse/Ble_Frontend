import {inject} from 'aurelia-framework';
import {Wizard} from './wizard';

@inject(Wizard)
export class WizardStep3 {
  constructor(wizard) {
    this.wizard = wizard;
  }
}
