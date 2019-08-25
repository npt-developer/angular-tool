import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CopyToClipboardService } from '@services/CopyToClipboard.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-random-uuid',
  templateUrl: './uuid.component.html',
  styleUrls: ['./uuid.component.css']
})
export class UuidComponent implements OnInit {

  formGroup: FormGroup;
  uuidV1: string;
  uuidV4: string;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private copyToClipboardService: CopyToClipboardService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  resetUuidV1 = () => {
    this.formGroup.controls.uuidV1.setValue(uuid.v1());
  }

  copyUuidV1 = () => {
    const copyData = this.formGroup.controls.uuidV1.value;
    if (this.copyToClipboardService.copyToClipboardFromText(copyData)) {
      this.openSnackBar('Copied!');
    } else {
      this.openSnackBar('Cannot Copy!');
    }
  }

  resetUuidV4 = () => {
    this.formGroup.controls.uuidV4.setValue(uuid.v4());
  }

  copyUuidV4 = () => {
    const copyData = this.formGroup.controls.uuidV4.value;
    if (this.copyToClipboardService.copyToClipboardFromText(copyData)) {
      this.openSnackBar('Copied!');
    } else {
      this.openSnackBar('Cannot Copy!');
    }
  }

  openSnackBar = (message: string) => {
    this.snackBar.open(message, null, {
      duration: 500, //1s
    });
  }

  initForm = () => {
    const uuidV1 = uuid.v1();
    const uuidV4 = uuid.v4();
    this.formGroup = this.formBuilder.group({
      uuidV1: [uuidV1],
      uuidV4: [uuidV4],
    });
  }

}
