import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { AnimalsComponent } from './Animals.component';
import { AnimalsService } from './shared/Animals.service';
import { Animals } from './shared/Animals.model';
import { Observable } from 'rxjs';


describe('a Animals component', () => {
	let component: AnimalsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: AnimalsService, useClass: MockAnimalsService },
				AnimalsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AnimalsComponent], (AnimalsComponent) => {
		component = AnimalsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original Animals service
class MockAnimalsService extends AnimalsService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
