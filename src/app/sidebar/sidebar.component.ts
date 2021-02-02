import { Component, Input, OnInit } from '@angular/core';
import { SpeechesService } from '../speeches.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  speeches: any[] = [];
  selected: any;
  @Input() choice: any;
  
  constructor(private speechService: SpeechesService) { }
  
  ngOnInit(): void {
    this.speechService.Speeches.subscribe(x => {
      this.speeches = x
    })
  }

  deleteSpeech(speech:any){
    if(window.confirm('Are you sure you want to delete this?')){
      this.speechService.deleteSpeech(speech)
    }
  }

  createSpeech(){
    this.speechService.createSpeech();
  }


}
