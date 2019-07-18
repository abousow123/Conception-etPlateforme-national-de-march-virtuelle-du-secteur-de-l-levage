import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { Animals } from './Animals.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable()
export class AnimalsService {

	constructor(private http: Http) { }

	getList(): Observable<Animals[]> {
		return this.http.get('/api/list').pipe(map(res => res.json() as Animals[]));
	}
}