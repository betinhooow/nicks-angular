import { People } from '../models/people.model';
import { Car } from '../models/car.model';

export interface PeopleCars extends People {
  car: Car[];
}
