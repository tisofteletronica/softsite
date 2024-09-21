'use server'

import { homeService } from "@/services/homeService";
import { unstable_cache } from "next/cache";

export const getHomeSectorsCachedData = unstable_cache(async () => {
  const data = await homeService.getSectors();
  return data;

}, ['home-sectors'], { revalidate: 60 });



