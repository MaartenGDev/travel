import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Journey} from "../../models/Journey";
import {journeys} from "../../data/journeys";
import {JourneyRatingComponent} from "../journey-rating/journey-rating.component";

@Component({
  selector: 'app-journey-overview',
  standalone: true,
  imports: [CommonModule, JourneyRatingComponent],
  templateUrl: './journey-overview.component.html',
  styleUrl: './journey-overview.component.scss'
})
export class JourneyOverviewComponent {
  public journeys: Journey[] = journeys;
}
