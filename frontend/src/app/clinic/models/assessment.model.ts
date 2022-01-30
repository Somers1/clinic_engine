export class Assessment {
  student: string;
  bot_score: string;
  bot_percentile: number;
  beery_score: string;
  beery_percentile: number;
  mc_masters_score: number;
  mc_masters_percentile: number;
  self_reg_score: string;
  self_reg_percentile: number;
  summary: string;
  year_grade: string;
  report_due: Date | string | null;
  completed_by: string;
}

export const scores = {
  AVERAGE: 'average',
  BELOW_AVERAGE: 'below average',
  WELL_BELOW_AVERAGE: 'well below average'
}
