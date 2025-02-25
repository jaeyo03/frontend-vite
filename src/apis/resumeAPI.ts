import axios from "axios";
import {Resume} from "@/types/type.ts";

const resumeAPI = axios.create({
  baseURL: '',
  timeout: 1000,
});

export async function getResumeData() : Promise<Resume[]> {
  const result = await resumeAPI.get('/mockResumeData.json');
  return result.data;
}