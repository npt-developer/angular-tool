import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-file-image',
  templateUrl: './input-file-image.component.html',
  styleUrls: ['./input-file-image.component.css']
})
export class InputFileImageComponent implements OnInit {

  @Output()
  onImageBase64: EventEmitter<string | ArrayBuffer> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onFileChange = (event: HTMLInputEvent) => {
    console.log(event);
    // EventTarget not contains files attribute => convert to HTMLInputElement
    const inputFile: HTMLInputElement = event.target
    if (inputFile.files && inputFile.files[0]) {
      let reader: FileReader = new FileReader();
      reader.onload = (e) => {
        // reader complete
        // when access e.target.result => Error Property 'result' does not exist on type 'EventTarget'
        // => Fix Using reader.result
        this.onImageBase64.emit(reader.result);
      }
      reader.readAsDataURL(inputFile.files[0]);
    }
  }
}

/**
 * Cast event.target
 * https://stackoverflow.com/a/43176930
 */
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}