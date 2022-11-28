import { Component, OnInit } from '@angular/core';
import { Results } from 'src/app/model/results';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  //results: Results = new Results;
  public results: Results[] = []

  displayedColumns: string[] = ['Rock', 'Metal', 'Jazz', 'Blues', 'Clasico'];

  dataSource: any;
  
  constructor(
    private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getResults().subscribe(results => {
      this.results = results;
      console.log(this.results)
    })
  }

}
