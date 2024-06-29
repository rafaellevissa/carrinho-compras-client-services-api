type Paginated<T> = {
  page: number;
  perPage: number;
  data: T;
};
