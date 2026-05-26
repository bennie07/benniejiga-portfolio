export interface MethodologyTab {
  id: string;
  label: string;
}

export const methodologyTabs: MethodologyTab[] = [
  { id: 'addie', label: 'ADDIE Model' },
  { id: 'sam', label: 'SAM' },
  { id: 'backwards', label: 'Backwards Design' },
  { id: 'blooms', label: "Bloom's Taxonomy" },
  { id: 'gagne', label: "Gagne's Nine Events" },
  { id: 'cognitive', label: 'Cognitive Load Theory' },
  { id: 'scenario', label: 'Scenario-Based Learning' },
  { id: 'micro', label: 'Microlearning' },
];

export interface ComparisonRow {
  methodology: string;
  whenIUseIt: string;
  keyBenefits: string;
  projectExamples: string;
}

export const comparisonTable: ComparisonRow[] = [
  {
    methodology: 'ADDIE',
    whenIUseIt: 'Complex programs, regulated content, comprehensive curricula',
    keyBenefits: 'Systematic approach, thorough documentation, comprehensive analysis',
    projectExamples: 'Metso Outotec Compliance Training, Financial Services Technical Training',
  },
  {
    methodology: 'SAM',
    whenIUseIt: 'Rapid development needs, innovative solutions, iterative projects',
    keyBenefits: 'Quick prototyping, stakeholder involvement, continuous improvement',
    projectExamples: 'The Diversity Movement Training Transformation, Onboarding Redesign',
  },
  {
    methodology: 'Backwards Design',
    whenIUseIt: 'Performance-focused initiatives, competency development',
    keyBenefits: 'Outcome clarity, assessment alignment, focused development',
    projectExamples: 'Skillieo Professional Development Program, Leadership Training',
  },
];
