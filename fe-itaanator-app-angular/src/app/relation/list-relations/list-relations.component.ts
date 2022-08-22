import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../company';
import { Relation } from '../relation';
import { RelationService } from '../relation.service';



@Component({
  selector: 'app-list-relations',
  templateUrl: './list-relations.component.html',
  styles: [
  ]
})
export class ListRelationsComponent implements OnInit {
  relationsList: Company[];

  constructor(private route:ActivatedRoute, private router:Router,private relationService: RelationService) { }

  ngOnInit(): void {
    this.relationService.getRelationsList().subscribe(responses=>this.relationsList=responses)
  }

  //redirect to adding relation page
  goToAddRelation(){
    this.router.navigate(['/relation'])

  }

}
