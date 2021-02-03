import { animate, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeechesService } from '../speeches.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
  // animations:[
  //   trigger('InOut',[
  //     transition(':enter',[
  //       style([]) //force no aimations at start
  //     ]),
  //     transition('editOff => editOn',[
  //       query('#edit-icon',[
  //         animate('.2s ease-out',style({transform:'rotate(180deg)', display:'none'}))
  //       ]),
  //       query('#save-icon',[
  //         animate('.6s ease-out',keyframes([
  //           style({transform:'rotate(180deg)', offset: 0}),
  //           style({transform:'rotate(359deg)', offset: 0.5})
  //         ]))
  //       ]),
  //       query('#cancel-icon',[
  //         style({display:'none'})
  //       ])
  //     ])
  // ])]
})
export class ContentComponent implements OnInit {

  constructor(private router: ActivatedRoute,
  private speechService: SpeechesService) { }
  isEditMode: boolean = false;

  speech;
  set editMode(v : boolean) {
    this.isEditMode = v;
  }
  
  
  ngOnInit(): void {
    this.router.params.subscribe(x => this.speech = this.speechService.getSpeech(x['id']))
  }

  private toggleEditableText(){
    this.editMode = !this.isEditMode
  }

  private saveSpeech(){
    this.speechService.saveSpeech(this.speech);
    console.log(this.speech, this.speechService.getSpeech(this.speech.id))
    this.toggleEditableText();
  }

  


}
