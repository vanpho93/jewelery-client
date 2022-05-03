import {Component, OnInit} from '@angular/core';
import {TitleService} from '../../services/title.service';

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: ['./dashboard-default.component.css'],
})
export class DashboardDefaultComponent implements OnInit {
  // Filter when get listing use to data binding to show carousel
  latest = 'latest';
  closingSoon = 'closing_soon';

  constructor(
    private titleService: TitleService,
  ) {
  }

  ngOnInit() {
    this.titleService.setDefaultTitleAndMetaTab();
    this.titleService.removeDataStructure();
    this.titleService.createDataStructure();
  }

}
