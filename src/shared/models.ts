

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

export interface ISet {
  id: number
  inv_part_id: number
  part: Part
  set_num: string
  quantity: number
  is_spare: boolean
  element_id?: string
  num_sets: number
}

export interface Part {
  part_num: string
  name: string
  part_cat_id: number
  part_url: string
  part_img_url: string
}

export type Theme = {
  id: number;
  name: string;
  parent_id: null;
};