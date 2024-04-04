export interface IInfiniteQueryData<T> {
  data: T;
  links: {
    first: string;
    last: string;
    next: string | undefined;
    prev: string | undefined;
  };
}
