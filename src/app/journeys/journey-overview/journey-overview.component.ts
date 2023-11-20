import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Journey} from "../../models/Journey";
import {JourneyRatingComponent} from "../journey-rating/journey-rating.component";

@Component({
  selector: 'app-journey-overview',
  standalone: true,
  imports: [CommonModule, JourneyRatingComponent],
  templateUrl: './journey-overview.component.html',
  styleUrl: './journey-overview.component.scss'
})
export class JourneyOverviewComponent implements OnInit {
  public journeys: Journey[] = [];

  private relativeJourneysDataPath = '/assets/journeys/journeys.json';

  ngOnInit(): void {
    fetch(this.relativeJourneysDataPath)
      .then(res => res.json())
      .then((journeys: Journey[]) => {
        this.journeys = journeys;
      })
      .catch(e => {
        console.error(e);
        console.error(`Error occurred while retrieving json file at ${this.relativeJourneysDataPath}. Please copy journeys.example.json to journeys.json`)
      })
  }


}
