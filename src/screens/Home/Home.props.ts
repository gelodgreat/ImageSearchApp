import {Dispatch, SetStateAction} from 'react';
import {Hit} from 'types/Images';

export interface HomePublicProps {}
export interface HomePrivateProps {
  images: Hit[];
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  loading: boolean;
  onNavigateImageDetails: (imageDetail: Hit) => void;
  loadMore: () => void;
}
export interface HomeProps extends HomePublicProps, HomePrivateProps {}
