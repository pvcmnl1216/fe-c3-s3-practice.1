import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../assets/resources/contact';
import { CONTACTS } from '../../assets/resources/contacts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {


  @Input()
  
  contacts: Contact[] = CONTACTS;


  
  onSearchTextChanged(contactName: string) {
    if(contactName === '' || !contactName)
      this.contacts = CONTACTS;
    else
    {
      this.contacts = CONTACTS;
      this.contacts = this.contacts.filter(contact => contact.firstName?.startsWith(contactName));
    }
  }
}