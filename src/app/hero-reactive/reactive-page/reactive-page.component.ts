import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/hero/models/hero';
import { MyValidator } from 'src/app/shared/myValidator';

@Component({
  selector: 'app-reactive-page',
  templateUrl: './reactive-page.component.html',
  styleUrls: ['./reactive-page.component.css']
})
export class ReactivePageComponent {

  // myObservable: Observable<string> | null = null;
  //myFormControl: FormControl = new FormControl('valore iniziale');
  myForm: FormGroup | null = null;
  superpowers = ["Invisibility", "Genius", "Strength"];

  constructor(private formBuilder: FormBuilder) {

   this.myForm = formBuilder.group(
      {
        name: ['Mr. Fantastic', [Validators.required, Validators.minLength(5), MyValidator] ],
        alias: [''],
        powers:['Invisibility'], 
      }
   );


    // this.myObservable = this.myFormControl.valueChanges;

    // this.myObservable.subscribe( x => {
    //     if(x.length > 15) {
    //       this.myFormControl.setValue('---');
    //     } // });


    }

  get name() {return this.myForm?.get('name');}


   onSubmit(){
    console.log(this.myForm);
    var name = this.myForm?.get('name')?.value as string;

    var hero = new Hero(1,name, "","");
    console.log(hero);
   }
}
