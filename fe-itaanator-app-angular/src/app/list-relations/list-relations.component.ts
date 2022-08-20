import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-list-relations',
  templateUrl: './list-relations.component.html',
  styles: [
  ]
})
export class ListRelationsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  //redirect to adding relation page
  goToAddRelation(){
    this.router.navigate(['/relation'])

  }

}
