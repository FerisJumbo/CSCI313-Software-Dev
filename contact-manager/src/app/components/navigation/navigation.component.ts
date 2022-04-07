import { Component, OnInit } from '@angular/core';
import { contact } from 'src/app/contact';
import { CONTACTS } from 'src/app/contactsdb';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  view: String = 'list';

  contacts: contact[] = CONTACTS;

  constructor(private contactServ: ContactService) { }

  ngOnInit(): void {
  }

  setView(view: String): void {
    this.view = view;
  }

  newContact(c: contact) {
    this.contactServ.addContact(c);
    this.setView('list');
  }

}
