import { Component, OnInit } from '@angular/core';
import { contact } from 'src/app/contact';
import { CONTACTS } from 'src/app/contactsdb';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  view: String = 'list';

  contacts: contact[] = CONTACTS;

  constructor() { }

  ngOnInit(): void {
  }

  setView(view: String): void {
    this.view = view;
  }

}
