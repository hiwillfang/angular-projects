import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
	apikey: string;

	constructor(private _jsonp:Jsonp) {
		this.apikey = '188af9f70f12acdfefd148c1cb512d9d';
		console.log('MovieService Initialized...');
	}
}