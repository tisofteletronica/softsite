'use server'

import { unitsService } from "@/services/unitsService";
import { unstable_cache } from "next/cache";

export const getUnitsCachedData = unstable_cache(async () => {
  const data = await unitsService.getUnits();
  return data;

}, ['units'], { revalidate: 60 });

