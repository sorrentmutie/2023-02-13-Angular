import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Episode, Season } from '../../models/got';
import { GotService } from '../../services/got.service';

@Component({
  selector: 'app-got-page',
  templateUrl: './got-page.component.html',
  styleUrls: ['./got-page.component.css']
})
export class GotPageComponent {
  formGroup: FormGroup;
  seasons: Observable<Season[]> | null = null;
  episodes: Observable<Episode[]> | null = null;
  constructor(formBuilder: FormBuilder,
              private service: GotService){
    this.formGroup = formBuilder.group(
      {
        season: ['', Validators.required],
        episode: ['']
    }
    )
    this.seasons = this.service.getSeasons();
    this.formGroup.get('season')?.valueChanges.subscribe(x => {
      this.episodes = this.service.getEpisodes(parseInt(x,10));
      //this.formGroup.get('episode')?.setValue(-1);
      console.log(this.formGroup.get('episode')?.value)
      this.formGroup.get('episode')?.setValidators([Validators.required, Validators.min(1)]);
      this.formGroup.get('episode')?.updateValueAndValidity();
      console.log(this.formGroup)

    });
    this.formGroup.get('episode')?.valueChanges.subscribe(x => {
      if(x!==''){this.onCreate()}
    })
  }
  onCreate(){
    this.formGroup.addControl('scene', new FormControl(''));
    console.log(this.formGroup.get('scene')?.value)
  }
  onSubmit(){
    console.log(this.formGroup)
  }
  get checkScene(){
    return this.formGroup.get('scene')?.value!=='' ? false:true
  }


}
