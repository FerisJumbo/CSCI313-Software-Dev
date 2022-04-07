import { Injectable } from '@angular/core';
import { contact } from '../contact';
import { CONTACTS } from '../contactsdb';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): contact[] {
    return CONTACTS;
  }

  setContact(con: contact, i: number): void {
    CONTACTS[i] = con;
  }

  addContact(con: contact): void {
    CONTACTS.push(con);
  }

  deleteContact(i:number): void {
    CONTACTS.splice(i, 1);
  }
}
