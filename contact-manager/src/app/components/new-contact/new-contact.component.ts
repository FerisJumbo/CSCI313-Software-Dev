import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { contact } from 'src/app/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {
  
  @Output() addContact = new EventEmitter<contact>();
  
  con: contact = new contact();

  constructor(private contactServ: ContactService) { }

  ngOnInit(): void {
  }

  add(): void {
    this.addContact.emit(this.con);
  }

  getContacts(): contact[] {
    return this.contactServ.getContacts();
  }

}
