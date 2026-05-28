export type Language = 'en' | 'hi' | 'te' | 'bn' | 'mr' | 'ta';

export interface TranslationSet {
  welcomeTitle: string;
  welcomeSub: string;
  searchPlaceholder: string;
  emergencySos: string;
  safetyHub: string;
  popularTopics: string;
  recentlyViewed: string;
  viewAll: string;
  home: string;
  safety: string;
  learning: string;
  sakhiBot: string;
  backToLearning: string;
  whatThisMeans: string;
  realLifeExample: string;
  thePunishment: string;
  whatWomenShouldKnow: string;
  actionPlan: string;
  commonQuestions: string;
  emergencyTitle: string;
  policeButton: string;
  womenHelplineButton: string;
  shareLocation: string;
  safetyCategories: string;
  resources: string;
  firGuidance: string;
  evidenceChecklist: string;
  askSakhi: string;
  voiceInputSim: string;
  microTitle: string;
  lessonsTitle: string;
  quizzesTitle: string;
  didYouKnow: string;
  dailyLegalTip: string;
  progressText: string;
  quizScore: string;
  firAssistant: string;
  firFormat: string;
}

export interface LawSection {
  id: string;
  sectionNumber: string;
  title: Partial<Record<Language, string>> & Record<'en', string>;
  subtitle: Partial<Record<Language, string>> & Record<'en', string>;
  category: string;
  whatItMeans: Partial<Record<Language, string>> & Record<'en', string>;
  realLifeExample: Partial<Record<Language, string>> & Record<'en', string>;
  illustrationUrl?: string;
  punishments: Partial<Record<Language, string[]>> & Record<'en', string[]>;
  whatWomenShouldKnow: Partial<Record<Language, string>> & Record<'en', string>;
  actionSteps: Partial<Record<Language, { title: string; desc: string }[]>> & Record<'en', { title: string; desc: string }[]>;
  faqs: Partial<Record<Language, { q: string; a: string }[]>> & Record<'en', { q: string; a: string }[]>;
}

export interface SafetyCategory {
  id: string;
  title: Partial<Record<Language, string>> & Record<'en', string>;
  desc: Partial<Record<Language, string>> & Record<'en', string>;
  sectionNum?: string;
  iconName: string;
  bgColor: string;
  textColor: string;
  emergencySteps: Partial<Record<Language, string[]>> & Record<'en', string[]>;
  helplines: string[];
  firGuidance: Partial<Record<Language, string>> & Record<'en', string>;
  evidenceChecklist: Partial<Record<Language, string[]>> & Record<'en', string[]>;
  womensRights?: Partial<Record<Language, string[]>> & Record<'en', string[]>;
}

export interface QuizItem {
  id: string;
  question: Partial<Record<Language, string>> & Record<'en', string>;
  options: Partial<Record<Language, string[]>> & Record<'en', string[]>;
  answerIndex: number;
  explanation: Partial<Record<Language, string>> & Record<'en', string>;
}

export interface MicroLesson {
  id: string;
  title: Partial<Record<Language, string>> & Record<'en', string>;
  category: string;
  readingTime: string;
  story: Partial<Record<Language, string>> & Record<'en', string>;
  keyTakeaway: Partial<Record<Language, string>> & Record<'en', string>;
  cardColor: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}
