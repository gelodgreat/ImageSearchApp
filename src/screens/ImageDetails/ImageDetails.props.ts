import {Dispatch, SetStateAction} from 'react';
import {Hit} from 'types/Images';

export interface ImageDetailsPublicProps {}
export interface ImageDetailsPrivateProps {}
export interface ImageDetailsProps
  extends ImageDetailsPublicProps,
    ImageDetailsPrivateProps {}
