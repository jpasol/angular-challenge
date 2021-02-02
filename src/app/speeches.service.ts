import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export interface speech{
//   id: number;
//   title: string;
//   author: string;
//   keywords: string[],
//   modified: Date;
//   content: string;
// };
export class SpeechesService {

  speeches: any[] = [
  {id: 1,
    title:'Speech# 1',
  author: 'James Bond',
  keywords:['Angular', 'AngularJS'],
  modified: new Date(),
  content: 'shit'},
  {id: 2,
    title:'Speech# 2',
    author: 'Arthur',
    keywords:['Angular', 'AngularJS'],
    modified: new Date(),
    content: 'is'},
  {id:3 ,
    title:'Speech# 3',
    author: 'James Bond',
    keywords:['Jasmine', 'Protractor'],
    modified: new Date(),
    content: 'real'}]

  speechSubject: BehaviorSubject<any[]> = new BehaviorSubject(this.speeches)
  constructor() { }

  private idCounter = 3; //just for mocking data, controls id 
  
  public get Speeches(){
    return this.speechSubject.asObservable();
  }

  public deleteSpeech(speech: any){
    delete this.speeches[this.speeches.findIndex(x => x.title == speech.title)];
    this.speeches = this.speeches.filter(x => {return x != null})
    this.speechSubject.next(this.speeches)
  }

  public createSpeech(){
    this.idCounter++ //just for mocking data
    this.speeches.push({
      id: this.idCounter,
      title:'Untitled',
      author: '',
      keywords:[],
      modified: new Date(),
      content: ''
    })
  }

  public getSpeech(id){
    return this.speeches.find(x => x.id == id);
  }

  public saveSpeech(speech){
    this.speeches[this.speeches.findIndex(x => x.id == speech.id)] = speech
  }

  
}
