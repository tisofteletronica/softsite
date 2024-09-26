'use server'

import { homeService } from "@/services/homeService";
import { unstable_cache } from "next/cache";

export const getHomeSectorsCachedData = unstable_cache(async () => {
  const data = await homeService.getSectors();
  return data;

}, ['home-sectors'], { revalidate: 60 });

export const getCatalogsCachedData = unstable_cache(async () => {
  const data = await homeService.getCatalogs();
  return data;

}, ['home-catalogs'], { revalidate: 60 });

