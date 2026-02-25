export interface SubSubject {
  name: string;
  icon: React.ElementType;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  gradient: string;
  bgLight: string;
  iconBg: string;
  borderColor: string;
  tagline: string;
  subjects: SubSubject[];
}
export interface ContactProps {
  selectedPlan?: string | null;
  onClearPlan?: () => void;
}
