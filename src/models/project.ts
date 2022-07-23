import { Technique } from "./technique";

export type Project = {
  id: string;
  title: string;
  type: string;
  description: string;
  techniques: Technique[];
  preview: string;
  previewFull: string;
  url: string;
};
