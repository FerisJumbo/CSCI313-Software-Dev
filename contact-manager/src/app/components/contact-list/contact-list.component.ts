import { Component, Input, OnInit } from '@angular/core';
import { contact } from 'src/app/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  view: String = 'list';
  contacts: contact[] = [];

  selectedContact: contact = new contact();
  selectedIndex: number = -1;

  constructor(private contactServ: ContactService) { }

  ngOnInit(): void {
    this.contacts = this.contactServ.getContacts();
  }
  
  setView(view: String): void {
    this.view = view;
  }

  setContact(c: contact): void {
    this.selectedContact = c;
    this.selectedIndex = this.contacts.indexOf(this.selectedContact);
    this.view = 'edit';
  }

  editContact(c: contact): void {
    this.contactServ.setContact(c, this.selectedIndex);
    this.view = 'list';
  }

  delContact(c: contact): void {
    this.contactServ.deleteContact(this.contacts.indexOf(c));
  }

}
