'use server'

import { ledsService } from "@/services/ledsService";
import { unstable_cache } from "next/cache";

export const getLedsCachedData = unstable_cache(async () => {
  const data = await ledsService.getLeds();
  return data;

}, ['leds'], { revalidate: 60 });



