import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor() { }

  public get currentUser(){
    return of({
      username: 'skyward42',
      firstname: 'Mark',
      lastname: 'Michaels'
    })
  }
}
