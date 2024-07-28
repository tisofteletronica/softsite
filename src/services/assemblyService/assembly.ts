import { httpClient } from "../httpClient";

export interface AssemblyResponse {
  content: {
    id: string;
    descricao: string;
    urlImg: string;
    urlImg_2: string;
    urlImg_3: string;
    urlImg_4: string;
    urlImg_5: string;
    urlImg_6: string;
    urlImg_7: string;
    urlImg_8: string;
    urlImg_9: string;
    urlImg_10: string;
    urlImg_11: string;
    urlImg_12: string;
    urlImg_13: string;
    urlImg_14: string;
    urlImg_15: string;
    urlImg_16: string;
    urlImg_17: string;
    urlImg_18: string;
    urlImg_19: string;
    urlImg_20: string;
    urlImg_21: string;
    urlImg_22: string;
    urlImg_23: string;
    urlImg_24: string;
    urlImg_25: string;
    urlImg_26: string;
    urlImg_27: string;
    urlImg_28: string;
    urlImg_29: string;
    urlImg_30: string;
  }[]
}

export async function getAssembly() {
  const { data } = await httpClient.get<AssemblyResponse>("/montagem-soft");

  return data;
}
