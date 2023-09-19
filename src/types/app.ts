import { EHeaderTypes, EScrollableSections } from '.';

export type TScrollCounts = Record<EScrollableSections, number>;

export type TAppContext = {
  headerType: EHeaderTypes;
  setHeaderType: React.Dispatch<React.SetStateAction<EHeaderTypes>>;
  scrollCounts: TScrollCounts;
  scrollWithCount: (targetSection: EScrollableSections) => void;
};
