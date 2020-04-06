import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-viewer-json',
  templateUrl: './viewer-json.component.html',
  styleUrls: ['./viewer-json.component.css']
})
export class ViewerJsonComponent implements OnInit {

  formGroup: FormGroup;

  isViewerRender: boolean = true;
  jsonData = {};
  // {
  //   a: {
  //     b: [1, 2]
  //   }
  // };
  jsonDataText: string = '';
    // JSON.stringify({
    //   a: {
    //     b: [1, 2]
    //   }
    // });
  isExpanded: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  onExpandedSlideChange = (event: MatSlideToggleChange) => {
    console.log(event);
  }

  getJsonTextParse = (): any => {
    console.log(this.formGroup.controls.expandedFlag.value)
    return JSON.parse(this.formGroup.controls.jsonDataText.value);
  }
  onJsonTextChange = (event: Event) => {
    
    const element = event.target as HTMLTextAreaElement;
    console.log(event, element.value);
    this.jsonData = JSON.parse(element.value);
  }

  initForm = () => {
    this.formGroup = this.formBuilder.group({
      jsonText: [this.jsonDataText],
      expandedFlag: [this.isExpanded],
    });
  }
}
