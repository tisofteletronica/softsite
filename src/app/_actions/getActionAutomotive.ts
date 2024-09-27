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

export const getProductsUniqueByAutomakerCachedData = unstable_cache(async (slug: string) => {
  const data = await automotiveService.getProductsUniqueByAutomaker(slug);
  return data;
}, ['automotive-getProductsUniqueByAutomaker'], { revalidate: 60 });

export const getProductsLockByLockCachedData = unstable_cache(async (slug: string) => {
  const data = await automotiveService.getProductsLockByLock(slug);
  return data;
}, ['automotive-getProductsLockByLock'], { revalidate: 60 });

export const getProductsLockByActuatorCachedData = unstable_cache(async (slug: string) => {
  const data = await automotiveService.getProductsLockByActuator(slug);
  return data;
}, ['automotive-getProductsLockByActuator'], { revalidate: 60 });
