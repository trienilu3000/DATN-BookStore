import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  onModeChange (mode:string){
    document.body.setAttribute('data-theme',mode);
  }
}
