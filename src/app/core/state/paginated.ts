export interface Paginated<T> {
  items: T[];
  meta: Meta;
}
export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
