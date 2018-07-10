import { Review } from './review.model';
export class User {
    userName: string = null;
    key: string = null;
    pic_source: string = "http://gazettereview.com/wp-content/uploads/2016/03/facebook-avatar.jpg";
    reviews: Review[] = [];
}
