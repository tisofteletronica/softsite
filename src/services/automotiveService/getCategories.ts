import { httpClient } from "../httpClient";

export interface CategoriesResponse {
  content: {
    id: string;
    name: string;
    imgUrl: string;
  }[]
}

export async function getCategories() {
  const { data } = await httpClient.get<CategoriesResponse>("/categoriesproducts-commercial");

  return data;
}
