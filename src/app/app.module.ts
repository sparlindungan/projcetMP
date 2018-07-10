import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MealPlanHomePage } from '../pages/mp_home/mp_home';
import { MealPlanNewPage } from '../pages/mp_new/mp_new';
import { MealPlanReviewPage } from '../pages/mp_review/mp_review';
import { MealPlanPlacePage } from '../pages/mp_place/mp_place';
import { MealPlanTaskPage } from '../pages/mp_task/mp_task';

import { MealPlanTabsPage } from '../pages/mp_tabs/mp_tabs';

import { MealPlanTagsPage } from '../pages/mp_tags/mp_tags';

import { MealPlanProfilePage } from '../pages/mp_userProfile/mp_userProfile';

import { MealPlanJoinPage } from '../pages/mp_join/mp_join';
import { MealPlanSelectedJoinPage } from '../pages/mp_selectedJoin/mp_selectedJoin';
import { MealPlanSelectedHomeCard } from '../pages/mp_selectedHomeCard/mp_selectedHomeCard';
import { MealPlanProvider } from '../../providers/meal_plan/meal_plan';
import { UserProvider } from '../../providers/user/user';
import { ExistingMealPlanProvider } from '../../providers/existing_meal_plan/existing_meal_plan';
import { MealPlan } from '../../models/meal_plan.model';
import { Review } from '../../models/review.model';
import { User } from '../../models/user.model';
import { GroceryItem } from '../../models/grocery_item.model';
import { Participant } from '../../models/participant.model';
import { RestServiceProvider } from '../providers/rest-service/rest-service';
import { HttpModule } from '@angular/http';
import { MealPlanGroceryPage } from '../pages/mp_groceries/mp_groceries';
import { ContributePage } from '../pages/contribute/contribute';

// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';


@NgModule({
  declarations: [
    MyApp,
    MealPlanHomePage,
    MealPlanNewPage,
    MealPlanTabsPage,
    MealPlanPlacePage,
    MealPlanTaskPage,
    MealPlanTagsPage,
    MealPlanJoinPage,
    MealPlanSelectedJoinPage,
    MealPlanGroceryPage,
    MealPlanSelectedHomeCard,
    MealPlanReviewPage,
    MealPlanProfilePage,
    ContributePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MealPlanHomePage,
    MealPlanNewPage,
    MealPlanTabsPage,
    MealPlanPlacePage,
    MealPlanTaskPage,
    MealPlanTagsPage,
    MealPlanJoinPage,
    MealPlanSelectedJoinPage,
    MealPlanSelectedHomeCard,
    MealPlanGroceryPage,
    MealPlanReviewPage,
    MealPlanProfilePage,
    ContributePage
  ],
  providers: [
    HttpModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MealPlanProvider,
    UserProvider,
    MealPlan,
    Review,
    User,
    GroceryItem,
    Participant,
    RestServiceProvider,
    ExistingMealPlanProvider
  ]
})
export class AppModule {}
