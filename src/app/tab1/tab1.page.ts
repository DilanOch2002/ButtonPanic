import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Text (Name & Last Name)',
      attributes: {
        maxlength: 25,
      },
    },
    {
      placeholder: 'Text (Father, Mother o Other)' ,
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'tel',
      placeholder: '888-888-8888',
    },
  ];
}
