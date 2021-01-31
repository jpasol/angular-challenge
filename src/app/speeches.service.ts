import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
interface speech{
  id: number;
  title: string;
  author: string;
  keywords: string[],
  modified: Date;
  content: string;
}
export class SpeechesService {

  speeches: speech[] = [
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

  speechSubject: BehaviorSubject<speech[]> = new BehaviorSubject(this.speeches)
  constructor() { }
  
  public get Speeches(){
    return this.speechSubject.asObservable();
  }

  public deleteSpeech(speech: any){
    delete this.speeches[this.speeches.findIndex(x => x.title == speech.title)];
    this.speeches = this.speeches.filter(x => {return x != null})
    this.speechSubject.next(this.speeches)
  }
}
