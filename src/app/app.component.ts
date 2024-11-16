import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from '../Components/Base/main/main.component';
import { FooterComponent } from '../Components/Base/footer/footer.component';
import { HeaderComponent } from '../Components/Base/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent,FooterComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortCamilo';
}
