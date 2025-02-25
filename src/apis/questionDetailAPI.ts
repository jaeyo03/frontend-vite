import axios, {AxiosResponse} from "axios";
import {QuestionAnswer} from "@/types/type.ts";

const questionDetailAPI = axios.create({
  baseURL: '',
  timeout: 1000,
});

export async function getDetailData(id: string): Promise<QuestionAnswer[]> {
  const response: AxiosResponse<QuestionAnswer[]> = await questionDetailAPI.get('/mockQAData.json');
  return response.data.filter(item => item.resumeID === id);
}