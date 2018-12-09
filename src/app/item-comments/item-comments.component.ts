import { Component, OnInit } from '@angular/core';
import { HnApiService } from '../services/hn-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit {

  sub: any;
  item;

  constructor(
    private _service: HnApiService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      let itemID = +params['id'];
      this._service.fetchComments(itemID).subscribe(data => {
        this.item = data;
      }, error => console.log('Could not load item' + itemID));
    });
  }

}
