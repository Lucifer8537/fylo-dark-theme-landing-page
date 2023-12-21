import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent {
  @Input() title!: string;
  @Input() imgSrc!: string;
  @Input() context!: string;
}
