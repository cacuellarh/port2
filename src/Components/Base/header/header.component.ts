import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activeIndex! : number;

  OpenMenu(element : HTMLElement)
  {
    element.classList.toggle("top-[4.7rem]")
    element.classList.toggle("top-[-10rem]")
  }

  Active(index : number)
  {
    this.activeIndex = index
  }
}
