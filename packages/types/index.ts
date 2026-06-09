export interface User {
  id: string;
  name: string;
  email: string;
  country: 'germany' | 'uae' | 'both';
}

export interface AssessmentResult {
  userId: string;
  country: 'germany' | 'uae';
  score: number;
  eligibility: 'eligible' | 'partial' | 'not-eligible';
  createdAt: string;
}
