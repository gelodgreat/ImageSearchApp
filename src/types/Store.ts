import {Hit} from './Images';

export interface Store {
  detail: {detailsId: string | number};
  images: {images: Hit[]};
}
