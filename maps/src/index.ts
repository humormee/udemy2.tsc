/// <reference types="@types/google.maps" />

import { faker } from '@faker-js/faker';
import { User } from './User';
import { Company } from './company';

console.log('log at index.ts');
let element: HTMLElement | null;
element = document.getElementById('map');

if (element) {
  new google.maps.Map(element, {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0,
    },
  });
}

// let user = new User();
// let company = new Company();

// console.table([user, company]);
