import { Component, OnInit } from '@angular/core';
import { HnApiService } from '../services/hn-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  typeSub: any;
  pageSub: any;
  items;
  storiesType;
  pageNum: number;
  listStart: number;

  constructor(
    private _service: HnApiService,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.typeSub = this._route.data.subscribe((data) => {
      this.storiesType = (data as any).storiesType;
      // debugger;
    });
    this.pageSub = this._route.params.subscribe(params => {
      this.pageNum = +params['page'] ? +params['page'] : 1;

      this._service.fetchStories(this.storiesType, this.pageNum)
        .subscribe(

          (items) => {
            this.items = items
          },
          error => console.log('Error fetching' + this.storiesType + 'stories'),
          () => {
            this.listStart = ((this.pageNum - 1) * 30) + 1;
            window.scrollTo(0, 0);
          }
        );

    });
  }

}
