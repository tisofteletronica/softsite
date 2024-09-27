'use server'

import { searchService } from "@/services/searchService";
import { unstable_cache } from "next/cache";

export const getCategoryByModelAndYearCachedData = unstable_cache(async (model: string, year: string) => {
  const data = await searchService.getCategoryByModelAndYear(model, year);
  return data;

}, ['search-getCategoryByModelAndYear'], { revalidate: 60 });

export const getProductsByModelAndCategoryCachedData = unstable_cache(async (model: string, year: string, category: string, page?: number | string, size?: number | string) => {
  const data = await searchService.getProductsByModelAndCategory(model, year, category, page, size);
  return data;
}, ['search-getProductsByModelAndCategory'], { revalidate: 60 });

export const getModelsByIdCachedData = unstable_cache(async (model: string) => {
  const data = await searchService.getModelsById(model);
  return data;
}, ['search-getModelsById'], { revalidate: 60 });

export const getYearsCachedData = unstable_cache(async (idModel: string) => {
  const data = await searchService.getYears(idModel);
  return data;
}, ['search-getYears'], { revalidate: 60 });

export const getAutomakersLockCachedData = unstable_cache(async () => {
  const data = await searchService.getautomakersLock();
  return data;
}, ['search-automakersLock'], { revalidate: 60 });

export const getAutomakersLockActuatorCachedData = unstable_cache(async () => {
  const data = await searchService.getAutomakersLockActuator();
  return data;
}, ['search-getAutomakersLockActuator'], { revalidate: 60 });

export const getAutomakersUniqueCachedData = unstable_cache(async () => {
  const data = await searchService.getAutomakersUnique();
  return data;
}, ['search-automakersUnique'], { revalidate: 60 });

