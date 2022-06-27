/// <reference types="@types/google.maps" />

import { faker } from '@faker-js/faker';
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { Mappable } from './Mappable';

let map = new CustomMap('map');
map.addMarker(new Company());
map.addMarker(new User());
