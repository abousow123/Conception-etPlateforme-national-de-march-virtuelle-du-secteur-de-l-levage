import { Component, OnInit } from '@angular/core';

import { Animals } from './shared/Animals.model';
import { AnimalsService } from './shared/Animals.service';

@Component({
	moduleId: module.id,
	selector: 'Animals',
	templateUrl: 'Animals.component.html',
	providers: [AnimalsService]
})

export class AnimalsComponent implements OnInit {
	Animals: Animals[] = [];

	constructor(private AnimalsService: AnimalsService) { }

	ngOnInit() {
		this.AnimalsService.getList().subscribe((res) => {
			this.Animals = res;
		});
	}
}