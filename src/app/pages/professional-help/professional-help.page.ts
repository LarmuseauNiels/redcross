import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Time } from '@angular/common';
import { FormResult } from 'src/app/services/formResult.model';
import { FormStoreService } from 'src/app/services/formStore.service';

@Component({
  selector: 'rc-professional-help',
  templateUrl: './professional-help.page.html',
  styleUrls: ['./professional-help.page.scss'],
})
export class ProfessionalHelpPage implements OnInit {

  phTypes: string[] = ['Ambulance', 'GP', 'Nurses', 'Community Health Workers', 'Red Cross Volunteers', 'Traditional Healer'];
  phTimeToArrive: string[] = ['<15 minutes','15-30 minutes', '30-45 minutes', '45-60 minutes', '>60 minutes','Unknown']
  hrChoices: string[] = ['Yes', 'No', 'Unknown'];
  phNeededChoices: string[] = ['Yes', 'No', 'Unknown'];

  public formResult: FormResult;
  public showError = false;

  constructor(public router: Router, public formStore: FormStoreService) {
    formStore.formResult.subscribe((result) => {this.formResult = result; });
  }

  ngOnInit() {
  }

  prev(){
    this.router.navigate(['/page4']);
  }

  next(){
    if (!this.formResult.phNeeded){
      this.showError = true;
      return;
    }

    if (this.formResult.phNeeded == 'Yes'){
      if (!this.formResult.phType){
        this.showError = true;
        return;
      }

      if (!this.formResult.phTimeToArrive){
        this.showError = true;
        return;
      }

      if (!this.formResult.phTimeToArrive){
        this.showError = true;
        return;
      }

      if (!this.formResult.hospitalisationRequired){
        this.showError = true;
        return;
      }
    }

    this.formStore.setFormResult(this.formResult);
    console.log(this.formStore.formResult);
    this.router.navigate(['/page6']);
  }

}
