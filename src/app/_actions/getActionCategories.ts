'use server'

import { automotiveService } from "@/services/automotiveService";
import { ProductsByCategoryIdResponse } from "@/services/automotiveService/getProductsByCategoryId";

export default async function getActionCategories(id: string): Promise<ProductsByCategoryIdResponse> {
  const products = await automotiveService.getProductsByCategoryId(id);
  return products;
}
