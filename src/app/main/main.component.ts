import { Component, OnInit } from '@angular/core';
import { GenerationLinkImgService } from '../core/services/generation-link-img.service';
import { ImgLinksModel } from '../core/models/img-links.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  elements: ImgLinksModel[]

  constructor(
    private generationLinkImg: GenerationLinkImgService
  ) { }

  ngOnInit(): void {
    this.elements = this.generationLinkImg.getElements()
  }

  randomFunc(type: 'left-right' | 'right-left'): string{
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if(type == 'left-right') return `left-right-animation ${getRandomInt(5, 15) / 10}s ease-in-out`
    if(type == 'right-left') return `right-left-animation ${getRandomInt(5, 15) / 10}s ease-in-out`
  }

}
