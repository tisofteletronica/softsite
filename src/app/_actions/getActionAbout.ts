'use server'

import { aboutService } from "@/services/aboutService";
import { unstable_cache } from "next/cache";

export const getLineTimeCachedData = unstable_cache(async () => {
  const data = await aboutService.getLineTime();
  return data;

}, ['about-linetime'], { revalidate: 60 });

export const getAboutCachedData = unstable_cache(async () => {
  const data = await aboutService.getAbout();
  return data;
}, ['about'], { revalidate: 60 });

