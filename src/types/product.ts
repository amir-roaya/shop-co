export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type ProductCarouselProps = {
  title: string;
  products: Product[];
};

export type ProductsSearchParams = {
  category: string;
  min: string;
  max: string;
  sort: string;
  page: string;
};
