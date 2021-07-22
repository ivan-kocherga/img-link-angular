import { Injectable } from '@angular/core';
import { ImgLinksModel } from '../models/img-links.model';

@Injectable({
  providedIn: 'root'
})
export class GenerationLinkImgService {
  private elements: ImgLinksModel[] = (localStorage.getItem('info') !== null) ? JSON.parse(localStorage.getItem('info')) : []

  constructor() { }

  public getElements(): ImgLinksModel[] {
    return this.elements
  }

  public setNewElem(elem: ImgLinksModel): void{
    this.elements.push(elem)
    localStorage.setItem('info', JSON.stringify(this.elements))
  }


}
