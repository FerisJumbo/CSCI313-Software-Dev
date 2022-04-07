import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { contact } from 'src/app/contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  @Input() contact: contact = new contact();

  @Output() edittedContact = new EventEmitter<contact>();

  constructor() { }

  ngOnInit(): void {
  }

  editted(): void {
    this.edittedContact.emit(this.contact);
  }

}
