import { getCategories } from "./getCategories";
import { getProductsById } from "./getProductById";
import { getProductsByCategoryId } from "./getProductsByCategoryId";
import { getProductsLockByActuator } from "./getProductsLockByActuator";
import { getProductsLockByLock } from "./getProductsLockByLock";
import { getProductsUniqueByAutomaker } from "./getProductsUnique";

export const automotiveService = {
  getCategories,
  getProductsByCategoryId,
  getProductsById,
  getProductsUniqueByAutomaker,
  getProductsLockByLock,
  getProductsLockByActuator
}
