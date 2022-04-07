import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { contact } from 'src/app/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  @Input() contact: contact = new contact();

  @Output() edittedContact = new EventEmitter<contact>();

  constructor(private contactServ: ContactService) { }

  ngOnInit(): void {
  }

  editted(): void {
    this.edittedContact.emit(this.contact);
  }

  getContacts(): contact[] {
    return this.contactServ.getContacts();
  }

}
