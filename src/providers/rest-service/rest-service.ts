import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MealPlan } from '../../../models/meal_plan.model';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestServiceProvider {

	jsonObject: string;
	userId: string;

  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
    this.jsonObject = "in constructor";
    this.userId = "brysontest";
  }

  getApiUrl : string = "https://meal-plan-gt.firebaseio.com/mealPlans.json?auth=yQJAoFHc7OPo3NhP1A6Gtg9K6TxUnO5cDzNTIM2L";


  get() {
    return  this.http.get(this.getApiUrl)
            .do((res : Response ) => console.log(res))
            .map((res : Response ) => res.json());
	}

	post(object:string) {
    console.log('test', object);
    return this.http.post('https://meal-plan-gt.firebaseio.com/mealPlans.json?auth=yQJAoFHc7OPo3NhP1A6Gtg9K6TxUnO5cDzNTIM2L', object)
    .subscribe(
      data => {
        console.log(data);
      },
      err => { 
          console.log(err);
      }
    );
  }

  putMealPlan(object:MealPlan) {
    console.log('test', object);
    return this.http.put('https://meal-plan-gt.firebaseio.com/mealPlans/' + object.key + '.json?auth=yQJAoFHc7OPo3NhP1A6Gtg9K6TxUnO5cDzNTIM2L', JSON.stringify(object))
    .subscribe(
      data => {
        console.log(data);
      },
      err => { 
          console.log(err);
      }
    );
  }

  userUrl : string = "https://meal-plan-gt.firebaseio.com/users.json?auth=yQJAoFHc7OPo3NhP1A6Gtg9K6TxUnO5cDzNTIM2L";
  getUsers() {
    return this.http.get(this.userUrl)
            .do((res : Response ) => console.log(res))
            .map((res : Response ) => res.json());
  }

  updateReview(object:string, userid:string) {
    console.log('test', object);
    return this.http.put('https://meal-plan-gt.firebaseio.com/users/'.concat(userid).concat('.json?auth=yQJAoFHc7OPo3NhP1A6Gtg9K6TxUnO5cDzNTIM2L'), object)
    .subscribe(
      data => {
        console.log(data);
      },
      err => { 
          console.log(err);
      }
    );
  }

  removeMealPlan(mealPlanId:string) {
    return this.http.delete('https://meal-plan-gt.firebaseio.com/mealPlans/'.concat(mealPlanId).concat('.json?auth=yQJAoFHc7OPo3NhP1A6Gtg9K6TxUnO5cDzNTIM2L'))
    .subscribe(
      data => {
        console.log(data);
      },
      err => { 
          console.log(err);
      }
    );
  }
}
