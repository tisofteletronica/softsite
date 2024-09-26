import { getCategories } from "./getCategories";
import { getProductsById } from "./getProductById";
import { getProductsByCategoryId } from "./getProductsByCategoryId";
import { getProductsUniqueByAutomaker } from "./getProductsUnique";

export const automotiveService = {
  getCategories,
  getProductsByCategoryId,
  getProductsById,
  getProductsUniqueByAutomaker
}
