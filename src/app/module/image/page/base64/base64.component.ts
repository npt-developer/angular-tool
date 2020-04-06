import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.css']
})
export class ImageBase64Component implements OnInit {

  imageBase64: any;

  constructor() { }

  ngOnInit() {
  }

  changeListener($event) : void {
    console.log($event);
    this.readThis($event.target);
  }
  
  readThis(inputValue: any): void {
    let file:File = inputValue.files[0];
    let myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.imageBase64 = myReader.result;
    }
    myReader.readAsDataURL(file);
  }
}
