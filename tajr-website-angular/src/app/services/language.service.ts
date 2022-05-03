import {Injectable} from '@angular/core';
import {AR, EN} from '../shared/global';
import {ShareTranslateMessage} from '../shared/shared.message';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _language = AR;
  private listMessage = ShareTranslateMessage;

  constructor() {
  }

  /**
   * Text message text will show from local check.
   * @param  {string} message Text available in "listMessage".
   */
  public findMessageByLanguage = function(message) {

    if (typeof message === undefined) {
      return;
    }
    // get Input values
    let mess;
    // show arabic language if arabic was selected
    if (this.language == AR) {
      for (let i = 0; i < this.listMessage.length; i++) {
        if (this.listMessage[i].text == message) {
          mess = this.listMessage[i].language.arabic;
          break;
        }
      }
    }
    // show english language if english was selected
    if (this.language == EN) {
      for (let i = 0; i < this.listMessage.length; i++) {
        if (this.listMessage[i].text == message) {
          mess = this.listMessage[i].language.english;
          break;
        }
      }
    }

    return mess;
  };

  /**
   * Text message text will show from local check.
   * @param  {string} message Text available in "listMessage".
   */
  public messageFromServer = function(message) {

    if (typeof message == undefined) {
      return;
    }

    switch (this.language) {
      case AR:
        return message.arabic;
      case EN:
        return message.english;
    }
  };

  /**
   * sorts out right ot left string
   */
  public wrapDir(dir, str) {
    if (dir === 'rtl') {
      return '\u202B' + str + '\u202C';
    }
    return '\u202A' + str + '\u202C';
  }

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }
}
