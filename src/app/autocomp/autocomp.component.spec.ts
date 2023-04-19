import {ComponentFixture, fakeAsync, flush, TestBed, tick} from '@angular/core/testing';
import { AutocompComponent } from './autocomp.component';
import {FormBuilder, ReactiveFormsModule,} from "@angular/forms";
import {MatAutocomplete} from "@angular/material/autocomplete";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";



fdescribe('AutocompComponent', () => {
  let component: AutocompComponent;
  let fixture: ComponentFixture<AutocompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompComponent,MatAutocomplete],
    //  providers: [FormBuilder],
      imports: [ ReactiveFormsModule,MatAutocompleteModule,MatInputModule,NoopAnimationsModule],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have countries', fakeAsync(() => {
    component.ngOnInit();
   // console.log(component.filteredOptions);
    expect(component.filteredOptions).toBeTruthy();

  }));

  it('should get greece', fakeAsync(() => {
    component.ngOnInit();
    //component.filterData('USA');

    component.formGroup.controls.country.setValue('greece');
    tick(1000);
    console.log('testlog1', component.filteredOptions);
    expect(component.filteredOptions.includes('greece')).toBeFalsy();
   // console.log(component.filteredOptions);
   // expect(component.filteredOptions == 'USA').toBeTruthy();

  }));

  it('should get usa', fakeAsync(() => {
    component.ngOnInit();
    //component.filterData('USA');

    component.formGroup.controls.country.setValue('usa');
    tick(1000);
    console.log('testlog2', component.filteredOptions);
    expect(component.filteredOptions).toContain('USA');
    // console.log(component.filteredOptions);
    // expect(component.filteredOptions == 'USA').toBeTruthy();

  }));


  it('should get html', fakeAsync(() => {
    component.ngOnInit();
    tick();
    component.filterData('USA');
   fixture.detectChanges();
   console.log(fixture.debugElement);
   expect(fixture.debugElement.query(By.css('.container'))).toBeTruthy();

  }));

});
