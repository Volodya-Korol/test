export type TFeatureSection = {
  title: string;
  description: string;
  image: string;
  bgcolor: string;
  isShowLog?: boolean;
  features: {
    icon: string;
    label: string;
  }[];
};
