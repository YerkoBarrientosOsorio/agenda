import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../model/contact.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  contactList: ContactModel[] = [];
  filteredContactList: ContactModel[] = [];
  contact: ContactModel = new ContactModel(0, "Nombre", 1238749834, "add@sdklf", "sdjhfd", "dskjf", new Date(), "Temuco", new Date(), "Temuco");
  filter = "";
  show = true;
  title = 'agenda';
  editing: boolean = false;
  count = 0;
  contactId = 0;
  dateFromInput = new Date();
  
  
  constructor() {
    
  }

  ngOnInit(): void {

    this.loadLocalStorage();
    this.filteredContactList = this.contactList;
  }

  ngAfterViewInit(): void {
    
  }

  searchFilter(){
    if(this.filter!=""){
      this.filteredContactList = this.contactList.filter(s => s.name.toLowerCase().includes(this.filter.toLowerCase()));
    }
    else {
      this.filteredContactList = this.contactList;
    }
    
  }

  loadLocalStorage(){
    const list = localStorage.getItem('Lista');
    console.log(list);
    if(localStorage.getItem('Lista')){
      this.contactList = JSON.parse(list!);
    }
    
  }

  showDate(){
    console.log(this.dateFromInput);
  }
 
  openForms(){
    this.showComponent();
    this.cleanList();
  }

  filterInput(){
    /* this.filter = this.contactList.filter(
      contact => contact.store_id === this.store.id); */

      /* this.contactList.forEach(contact => 

      ); */
  }


  showContact(){
    console.log(this.contact);
    console.log(this.contactList);
  }

  backToList(){
    this.showComponent();
  }


  showComponent(){
    this.show = !this.show;
  }

  editContact(i: number){
    this.editing = true;
    this.contactId = i;
    this.showComponent();
    this.contact = new ContactModel(
      this.contactList[this.contactId].id,
      this.contactList[this.contactId].name, 
      this.contactList[this.contactId].phone, 
      this.contactList[this.contactId].email, 
      this.contactList[this.contactId].address,
      this.contactList[this.contactId].rut, 
      this.contactList[this.contactId].creationDate, 
      this.contactList[this.contactId].city,
      this.contactList[this.contactId].birthDate,
      this.contactList[this.contactId].commune);
    console.log(i);
    console.log("HOLA")
  }


  addContactToList(){
    this.count++;
    this.contactList.
    push(new ContactModel(
      this.contact.id, 
      this.contact.name, 
      this.contact.phone, 
      this.contact.email, 
      this.contact.address, 
      this.contact.rut, 
      this.contact.creationDate, 
      this.contact.city, 
      this.contact.birthDate, 
      this.contact.commune));
    console.log("ADD", this.contactList);
    this.searchFilter();
    localStorage.setItem("Lista", JSON.stringify(this.contactList));
  }

  editContactFromList(){
    this.contactList[this.contactId] = new ContactModel(
      this.contact.id, 
      this.contact.name, 
      this.contact.phone, 
      this.contact.email, 
      this.contact.address, 
      this.contact.rut, 
      this.contact.creationDate, 
      this.contact.city, 
      this.contact.birthDate, 
      this.contact.commune);
    console.log("EDIT: ", this.contactList);
    this.editing = false;
    this.searchFilter();
    localStorage.setItem("Lista", JSON.stringify(this.contactList));
  }

  cleanList(){
    this.contact = new ContactModel(0, "", 0, "", "", "", new Date(), "", new Date(), "");
  }

  removeContactFromList(i: number){
    this.contactId = i;
    this.contactList.splice(this.contactId, 1);
    this.searchFilter();
    localStorage.setItem("Lista", JSON.stringify(this.contactList));   
  }

  data(){
    console.log(this.contactList[0]);
  }




}
