// src/types/types.ts
export interface Exercise {
  id: string;
  name: string;
  icon: string;
  category: string;
  series: number;
  repetitions: number;
  description: string;
  steps: string[];
}
