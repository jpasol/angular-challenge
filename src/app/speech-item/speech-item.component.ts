import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-speech-item',
  templateUrl: './speech-item.component.html',
  styleUrls: ['./speech-item.component.scss']
})
export class SpeechItemComponent implements OnInit {

  @Input() active: boolean;
  @Input() speechName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
