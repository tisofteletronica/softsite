'use server'

import { automotiveService } from "@/services/automotiveService";
import { unstable_cache } from "next/cache";

export const getProductsByCategoryIdCachedData = unstable_cache(async (id: string, page ?: number | string, size ?: number | string) => {
  const data = await automotiveService.getProductsByCategoryId(id, page, size);
  return data;

}, ['automotive-getProductsByCategoryId'], { revalidate: 60 });

export const getProductsByIdAutomotiveCachedData = unstable_cache(async (id: string) => {
  const data = await automotiveService.getProductsById(id);
  return data;
}, ['automotive-getProductsById'], { revalidate: 60 });
