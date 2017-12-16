import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = '/assets/json/messages.json'

@Injectable()
export class MessageService {

  constructor(private http:Http) { }

  list(){
  	return this.http.get(endpoint)
  		.map(response=>response.json())
      .catch(this.handleError)
    }

  get(id){
  	return this.http.get(endpoint)
  		.map(response=>{
  			let data = response.json().filter(item=>{
  				if (item.id == id){
  					return item
  				}
  			})
  			if (data.length == 1){
  				return data[0]
  			}
  			return {}
  		})
  		.catch(this.handleError)
  }

  search(query){
  	return this.http.get(endpoint)
  		.map(response=>{
  			let data = []
  			let req = response.json().filter(item=>{
  				if (item.message.toLowerCase().indexOf(query.toLowerCase()) >= 0){
  					data.push(item)
  				}
  			})
  			return data
  		})
  		.catch(this.handleError)

  }

  private handleError(error:any, caught:any):any{
    console.log(error, caught)
  }

}
