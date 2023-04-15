import { ComponentFixture, TestBed } from '@angular/core/testing';
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
      providers: [FormBuilder],
      imports: [ ReactiveFormsModule,MatAutocompleteModule,MatInputModule,NoopAnimationsModule],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

  it('should have insert', () => {
    expect(fixture.debugElement.queryAll(By.css('a')).length).toBe(0)
  });
});
