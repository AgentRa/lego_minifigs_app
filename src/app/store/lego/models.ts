

export interface ServerResponse<T> {
  count: number
  next: string
  previous: string | null
  results: T[]
}

export interface IMinifig {
  set_num: string
  name: string
  num_parts: number
  set_img_url: string
  set_url: string
  last_modified_dt: string
}

export type Theme = {
  id: number;
  name: string;
  parent_id: null;
};