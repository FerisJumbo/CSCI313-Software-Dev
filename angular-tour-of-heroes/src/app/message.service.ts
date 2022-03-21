import { Injectable } from '@angular/core';
import { arrow } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = []
  }

  getLastFive(): string[] {
    let lastFive: string[] = this.messages.splice(Math.max(this.messages.length-5, 0));
    this.messages = lastFive;
    return lastFive;
  }

  constructor() { }
}
