'use server'

import { assemblyService } from "@/services/assemblyService";
import { unstable_cache } from "next/cache";

export const getServicesCachedData = unstable_cache(async () => {
  const data = await assemblyService.getServices();
  return data;

}, ['assembly-services'], { revalidate: 60 });

export const getDifferencesCachedData = unstable_cache(async () => {
  const data = await assemblyService.getDifferences();
  return data;
}, ['assembly-differences'], { revalidate: 60 });

export const getStructureCachedData = unstable_cache(async (value?: string) => {
  const data = await assemblyService.getStructure(value);
  return data;
}, ['assembly-structure'], { revalidate: 60 });

export const getAssemblyCachedData = unstable_cache(async () => {
  const data = await assemblyService.getAssembly();
  return data;
}, ['assembly'], { revalidate: 60 });
