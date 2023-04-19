import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {debounceTime, filter, Subject, tap} from "rxjs";

@Component({
  selector: 'app-autocomp',
  templateUrl: './autocomp.component.html',
  styleUrls: ['./autocomp.component.css']
})
export class AutocompComponent implements OnInit {

  title = 'autocomplete';

  @ViewChild('myValue',{
    static : false
  }) myValue : ElementRef<HTMLInputElement>

  countries = ["Greece","USA","China","N.Korea"];

  filteredOptions : string[];



  formGroup: FormGroup<{country: FormControl<string>}>;
  constructor(){}

  ngOnInit(){
    this.initForm();
    this.getNames();
  }

  initForm(){
    this.formGroup = new FormGroup({
        country: new FormControl()
    })


    this.formGroup.get('country')!.valueChanges.pipe(
      tap(e => {
        console.log('tap1', e);
      }),
      filter(e => {
        return !String(e).toLowerCase().includes('gr')
      }),
      debounceTime(1000),
      tap(e => {
        console.log(e)
      })
    ).subscribe(response => {
      if(response && response.length > 2){
        this.filterData(response);
      }else{
        this.filteredOptions = [];
      }

    })
  }

  filterData(enteredData: string){
    this.filteredOptions = this.countries.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  getNames(){

    this.filteredOptions = this.countries

  }
}
