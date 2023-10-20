import {Component} from '@angular/core'

@Component({
  selector: "custom-button",
  templateUrl: "./button.component.html",
  styleUrls: ['./button.component.css']
})



export class ButtonComponent {
  icons = [ 'fa-house','fa-magnifying-glass','fa-user', 'fa-phone','fa-check','fa-download','fa-bars']
  iconName = ''

  randomIcon(){
   const ind = Math.floor(Math.random() * (this.icons.length));
   this.iconName = this.icons[ind]
  }

  changeIcon() {
    setTimeout(() => {
      this.randomIcon()
    }, 3000);
  }

}
