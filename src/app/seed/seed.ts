export interface Seed {
  category: Category;
  img: string;
  createTime: string;
  id: string;
  title: string;
  subTitle: string;
  size: 'normal' | 'large';
}

export type Category = '' | 'brand' | 'illustration' | 'uiux';
