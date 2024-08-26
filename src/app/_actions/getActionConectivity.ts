'use server'

import { conectivityService } from "@/services/conectivityService";
import { unstable_cache } from "next/cache";

export const getConectivityCachedData = unstable_cache(async () => {
  const data = await conectivityService.getConectivity();
  return data;
}, ['conectivity'], { revalidate: 60 });

export const getProductByIdCachedData = unstable_cache(async (id: string) => {
  const data = await conectivityService.getProductById(id);
  return data;
}, ['conectivity-products'], { revalidate: 60 });
