import { OnInit } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrl: './darkmode.component.scss'
})
export class DarkmodeComponent implements OnInit{
  @Output()modeChange = new EventEmitter<string>();
  valueMode : boolean = false ;
  labelMode :string = 'Dark';
  ngOnInit(): void {
      this.onChangeMode();
  }
  onChangeMode(){
      this.labelMode =  this.valueMode ? 'Dark' : 'Light';
      this.valueMode = !this.valueMode;
      this.modeChange.emit(this.labelMode); 
  }
  
}
