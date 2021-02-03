import { animate, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeechesService } from '../speeches.service';
import { UserService } from '../user.service';

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

  @ViewChild('title') title: ElementRef;
  @ViewChild('keywords') keywords: ElementRef;
  @ViewChild('content') content: ElementRef;

  constructor(private router: ActivatedRoute,
  private speechService: SpeechesService,
  private userService: UserService) { }
  isEditMode: boolean = false;

  speech;
  user;

  set editMode(v : boolean) {
    this.isEditMode = v;
  }
  
  
  ngOnInit(): void {
    this.router.params.subscribe(x => this.speech = this.speechService.getSpeech(x['id']))
    this.userService.currentUser.subscribe(x => this.user = x)
  }

  private toggleEditableText(){
    this.editMode = !this.isEditMode
  }

  private saveSpeech(){
    this.speech.title = this.title.nativeElement.innerText;
    this.speech.keywords = this.keywords.nativeElement.innerText;
    this.speech.content = this.content.nativeElement.innerText;

    this.speech.author = this.user;

    this.speechService.saveSpeech(this.speech);
    this.toggleEditableText();
  }

  private cancelEdit(){
    this.title.nativeElement.innerText = this.speech.title;
    this.keywords.nativeElement.innerText = this.speech.keywords;
    this.content.nativeElement.innerText = this.speech.content;

    this.toggleEditableText();
  }

  


}
