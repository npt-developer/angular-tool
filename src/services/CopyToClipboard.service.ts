import { Injectable, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Injectable()
export class CopyToClipboardService {

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _window: Window,
  ) {

  }

  private selectElementText = (el: Element): void => {
    let range = this._document.createRange();
    range.selectNodeContents(el);
    let selection = this._window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  private getSelectedText = (): string => {
    let t: string = '';
    if (this._window.getSelection) {
      t = this._window.getSelection().toString();
    } else if (this._document.getSelection) {
      t = this._document.getSelection().toString();
    }
    return t;
  }

  copyToClipboardFromText = (text: string): boolean => {
    // from https://stackoverflow.com/a/52949299
    let listener = (e: ClipboardEvent) => {
      let clipboard = e.clipboardData;
      clipboard.setData('text/plain', text);
      e.preventDefault();
    };
    this._document.addEventListener('copy', listener, false);
    const copyResult: boolean = this._document.execCommand('copy');
    this._document.removeEventListener('copy', listener, false);
    // remove all ranges after copy
    this._window.getSelection().removeAllRanges();
    return copyResult;
  };

  copyToClipboardFromElementRef = (el: ElementRef): boolean => {
    this.selectElementText(el.nativeElement);
    const copyText = this.getSelectedText();
    return this.copyToClipboardFromText(copyText);
  }

}