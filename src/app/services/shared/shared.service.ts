import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  num = 0;
  private variableSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  variable = this.variableSubject.asObservable();
  private variable1Subject: Subject<number> = new Subject<number>();
  variable1 = this.variable1Subject.asObservable();
  constructor() {}
  setVariable() {
    this.variableSubject.next(this.variableSubject.value + 1);
  }
  setVariable1() {
    this.variable1Subject.next(this.num + 1);
    this.num++;
  }
  // 0 1 2
  // 2 3 4
}
