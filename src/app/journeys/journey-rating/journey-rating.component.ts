import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Journey} from "../../models/Journey";

@Component({
  selector: 'app-journey-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './journey-rating.component.html',
  styleUrl: './journey-rating.component.scss'
})
export class JourneyRatingComponent {
  @Input()
  public journey: Journey = {name: '', imageUrl: '', pros: [], cons: []};
}
