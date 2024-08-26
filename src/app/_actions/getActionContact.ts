'use server'

import { contactService } from "@/services/contactService";
import { unstable_cache } from "next/cache";

export const getCentralCachedData = unstable_cache(async () => {
  const data = await contactService.getCentral();
  return data;

}, ['contact-central'], { revalidate: 60 });

export const getRepresentativesCachedData = unstable_cache(async () => {
  const data = await contactService.getRepresentatives();
  return data;
}, ['contact-representatives'], { revalidate: 60 });

export const getStatesCachedData = unstable_cache(async (state: string) => {
  const data = await contactService.getStates(state);
  return data;
}, ['contact-states'], { revalidate: 60 });

