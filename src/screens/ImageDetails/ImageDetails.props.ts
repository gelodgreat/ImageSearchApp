import {Hit} from 'types/Images';

export interface ImageDetailsPublicProps {}
export interface ImageDetailsPrivateProps {
  details: Hit;
}
export interface ImageDetailsProps
  extends ImageDetailsPublicProps,
    ImageDetailsPrivateProps {}
