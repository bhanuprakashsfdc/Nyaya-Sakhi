import React, { useState } from 'react';
import { ArrowLeft, BrainCircuit, BookOpen, AlertCircle, Sparkles, CheckSquare, Square, ChevronDown, ChevronUp, Phone, Volume2 } from 'lucide-react';
import { LawSection, Language } from '../types';
import { translations } from '../data/lessons';
import { speakText } from '../utils/speech';

interface LawDetailViewProps {
  law: LawSection;
  language: Language;
  onBack: () => void;
  onTriggerSOS: () => void;
}

export default function LawDetailView({ law, language, onBack, onTriggerSOS }: LawDetailViewProps) {
  const [checkedActions, setCheckedActions] = useState<Record<number, boolean>>({});
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const t = translations[language];

  const handleSpeak = () => {
    const titleVal = law.title[language] || law.title['en'] || '';
    const subtitleVal = law.subtitle[language] || law.subtitle['en'] || '';
    const meaningVal = law.whatItMeans[language] || law.whatItMeans['en'] || '';
    const textToSpeak = `${titleVal}. ${subtitleVal}. ${meaningVal}`;
    speakText(textToSpeak, language);
  };

  const toggleAction = (index: number) => {
    setCheckedActions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => prev === index ? null : index);
  };

  return (
    <div className="space-y-6 pb-24 animate-fade-in-up">
      
      {/* Back Header navigation */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          id="law-detail-back-btn"
          className="p-2 -ml-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-850 active:scale-95 duration-100 cursor-pointer"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <span className="font-label-lg text-sm text-gray-500 dark:text-zinc-400 font-semibold uppercase tracking-wide">
          {t.backToLearning}
        </span>
      </div>

      {/* Hero Title Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 bg-[#ffdbd0] dark:bg-orange-950/40 text-[#613e33] dark:text-[#ffdbd0] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider border border-[#edbbac]/30">
            <BookOpen className="w-3.5 h-3.5 text-amber-800 dark:text-[#edbbac]" />
            <span>{law.sectionNumber}</span>
          </div>
          <button
            onClick={handleSpeak}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFF1E7] hover:bg-[#FFE4D6] dark:bg-orange-950/20 dark:hover:bg-orange-900/40 text-[#EA580C] dark:text-orange-400 text-xs font-bold rounded-xl border border-orange-200 dark:border-orange-900/40 transition-all cursor-pointer select-none active:scale-95 duration-100"
            title="Listen to Section and Explanation"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Read Aloud (सुनें)</span>
          </button>
        </div>
        <h1 className="text-2xl md:text-3xl font-display-lg font-bold text-gray-950 dark:text-white leading-tight">
          {law.title[language] || law.title['en']}
        </h1>
        <p className="text-gray-600 dark:text-zinc-300 text-sm leading-relaxed antialiased">
          {law.subtitle[language] || law.subtitle['en']}
        </p>
      </div>

      {/* "What this means" Glassmorphic bento card */}
      <div className="bg-white dark:bg-zinc-900 rounded-[24px] p-6 soft-shadow border border-gray-100 dark:border-zinc-800 relative overflow-hidden">
        {/* Decorative background shape */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#e0e0ff]/30 dark:bg-blue-950/20 rounded-bl-full filter blur-xl -z-10" />
        
        <div className="flex items-start gap-4">
          <div className="bg-[#1a237e] text-white p-3 rounded-2xl flex-shrink-0 shadow-md">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <div className="space-y-1.5">
            <h2 className="text-base font-bold text-gray-950 dark:text-gray-50 font-title-md">
              {t.whatThisMeans}
            </h2>
            <p className="text-gray-700 dark:text-zinc-300 text-sm leading-relaxed antialiased">
              {law.whatItMeans[language] || law.whatItMeans['en']}
            </p>
          </div>
        </div>
      </div>

      {/* Real-life Example */}
      <div className="bg-[#ebdcff] dark:bg-purple-950/20 rounded-[24px] p-6 soft-shadow border border-purple-100 dark:border-purple-900/30">
        <h2 className="text-base font-bold text-[#260058] dark:text-[#ebdcff] mb-4 flex items-center gap-2 font-title-md">
          <BookOpen className="w-5 h-5" />
          <span>{t.realLifeExample}</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* rel-life illustration container */}
          {law.illustrationUrl && (
            <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-md relative group select-none flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-transparent mix-blend-overlay" />
              <img
                alt="Relatable illustration of Indian context representing civil scenario"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                src={law.illustrationUrl}
              />
            </div>
          )}
          <div className="flex-1 space-y-3">
            <p className="text-gray-850 dark:text-zinc-200 italic bg-white/70 dark:bg-zinc-900/40 p-4 rounded-2xl border border-white/20 dark:border-zinc-800/35 text-sm leading-relaxed antialiased">
              "{law.realLifeExample[language] || law.realLifeExample['en']}"
            </p>
            <p className="text-xs font-bold text-[#491d8a] dark:text-[#b78efe] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-[#cbdcf2]/20" />
              <span>THE LAW SAYS: offense under {law.sectionNumber}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bento Grid: Punishment and Empower Tip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Punishment Card */}
        <div className="bg-[#ffdad6] dark:bg-red-950/20 text-[#2f140b] dark:text-[#ffdad6] rounded-[24px] p-6 border border-[#ffdad6] dark:border-red-900/30 soft-shadow flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 text-red-700 dark:text-red-400">
              <AlertCircle className="w-6 h-6" />
              <h3 className="font-title-md text-base font-bold text-gray-950 dark:text-gray-50">{t.thePunishment}</h3>
            </div>
            <ul className="space-y-2 text-sm leading-relaxed">
              {(law.punishments[language] || law.punishments['en']).map((pun, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-red-500 mt-1 font-semibold text-xs">•</span>
                  <span className="text-gray-800 dark:text-zinc-300 font-medium">{pun}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What women should know / Empower guidance */}
        <div className="bg-white dark:bg-zinc-900 rounded-[24px] p-6 soft-shadow border border-gray-100 dark:border-zinc-800 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -bottom-4 -right-4 text-[#bdc2ff]/10 opacity-20 select-none pointer-events-none">
            <Sparkles className="w-24 h-24" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#6f48b2] dark:text-[#b78efe]">
              <Sparkles className="w-5 h-5 fill-[#6f48b2]/10" />
              <h3 className="font-title-md text-base font-bold text-gray-950 dark:text-gray-50">{t.whatWomenShouldKnow}</h3>
            </div>
            <p className="text-gray-750 dark:text-zinc-300 text-sm leading-relaxed antialiased">
              {law.whatWomenShouldKnow[language] || law.whatWomenShouldKnow['en']}
            </p>
          </div>
        </div>

      </div>

      {/* Action Plan Interactive Checklist */}
      <div className="bg-white dark:bg-zinc-900 rounded-[24px] p-6 border border-gray-100 dark:border-zinc-800 soft-shadow">
        <h2 className="text-base font-bold text-gray-950 dark:text-white mb-4 flex items-center gap-2 font-title-md">
          <CheckSquare className="w-5 h-5 text-[#6f48b2] dark:text-[#b78efe]" />
          <span>{t.actionPlan}</span>
        </h2>

        <div className="space-y-3">
          {(law.actionSteps[language] || law.actionSteps['en']).map((step, idx) => {
            const isChecked = !!checkedActions[idx];
            return (
              <div 
                key={idx}
                onClick={() => toggleAction(idx)}
                className="flex items-start gap-3 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-zinc-850/50 transition-colors cursor-pointer group"
              >
                <button
                  type="button"
                  className="mt-0.5 text-[#6f48b2] dark:text-[#b78efe] focus:outline-none"
                >
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-green-600 fill-green-500/10" />
                  ) : (
                    <Square className="w-5 h-5 text-gray-400 group-hover:text-purple-600" />
                  )}
                </button>
                <div className="space-y-1 select-none flex-1">
                  <p className={`font-semibold text-xs text-uppercase tracking-wider uppercase ${isChecked ? 'text-gray-400 line-through' : 'text-[#6f48b2] dark:text-[#b78efe]'}`}>
                    {step.title}
                  </p>
                  <p className={`text-sm leading-relaxed ${isChecked ? 'text-gray-400 dark:text-zinc-505 line-through' : 'text-gray-700 dark:text-zinc-300'}`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency SOS inside detail screen */}
        <div className="mt-6 pt-4 border-t border-gray-50 dark:border-zinc-800">
          <button
            onClick={onTriggerSOS}
            id="law-detail-emergency-sos-btn"
            className="w-full bg-red-600 text-white font-title-md font-bold py-4 rounded-2xl shadow-md hover:bg-red-700 transition-all active:scale-[0.98] duration-150 flex justify-center items-center gap-2 cursor-pointer uppercase text-sm tracking-wider"
          >
            <Phone className="w-4 h-4 fill-white animate-bounce" />
            <span>Emergency SOS (112)</span>
          </button>
        </div>
      </div>

      {/* Accordion FAQs */}
      <div className="space-y-3">
        <h2 className="font-title-md text-base font-bold text-gray-950 dark:text-white px-2">
          {t.commonQuestions}
        </h2>
        
        <div className="space-y-2.5">
          {(law.faqs[language] || law.faqs['en']).map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden soft-shadow"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-zinc-850/30 transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-4 text-xs font-medium text-gray-600 dark:text-zinc-400 leading-relaxed border-t border-gray-50 dark:border-zinc-850/30 pt-3 animate-fade-in text-sm leading-relaxed antialiased">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
