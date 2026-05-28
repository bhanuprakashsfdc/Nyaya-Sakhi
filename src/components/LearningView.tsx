import React, { useState } from 'react';
import { Sparkles, Trophy, BookOpen, Clock, CheckCircle, AlertCircle, RefreshCw, Star, Info, Volume2 } from 'lucide-react';
import { quizItems, microLessons, didYouKnowFacts, dailyTips } from '../data/lessons';
import { Language } from '../types';
import { speakText } from '../utils/speech';

interface LearningViewProps {
  language: Language;
}

export default function LearningView({ language }: LearningViewProps) {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const [openedStoryId, setOpenedStoryId] = useState<string | null>(null);

  // Pick random fact and tip
  const facts = didYouKnowFacts[language] || didYouKnowFacts['en'];
  const tips = dailyTips[language] || dailyTips['en'];

  // We want to persist stable indexes in component trigger to prevent infinite toggling on re-renders. Use static or simple maths.
  const staticFactIndex = 0;
  const staticTipIndex = 0;

  const currentQuiz = quizItems[currentQuizIndex];

  const handleOptionSelect = (optionIdx: number) => {
    if (isSubmitted) return;
    setSelectedOption(optionIdx);
  };

  const handleNextSubmit = () => {
    if (!isSubmitted) {
      if (selectedOption === null) return;
      setIsSubmitted(true);
      if (selectedOption === currentQuiz.answerIndex) {
        setScore((prev) => prev + 1);
      }
    } else {
      // Go to next question
      if (currentQuizIndex < quizItems.length - 1) {
        setCurrentQuizIndex((prev) => prev + 1);
        setSelectedOption(null);
        setIsSubmitted(false);
      } else {
        setQuizFinished(true);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  const currentProgress = Math.round(((currentQuizIndex) / quizItems.length) * 100);

  return (
    <div className="space-y-6 pb-24 animate-fade-in">
      
      {/* Learning Progress Metric Header */}
      <div className="bg-white dark:bg-[#1a1c1c] rounded-3xl p-5 border border-gray-100 dark:border-zinc-800 soft-shadow">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Legal Quotient Level</span>
          <span className="text-xs font-bold text-[#6f48b2] bg-[#ebdcff] px-2.5 py-0.5 rounded-full">Level 2: Vigilant Citizen</span>
        </div>
        <div className="w-full bg-gray-100 dark:bg-zinc-800 rounded-full h-3 overflow-hidden">
          <div className="bg-gradient-to-r from-[#6f48b2] to-[#b78efe] h-full rounded-full transition-all duration-500" style={{ width: `${currentProgress || 35}%` }} />
        </div>
        <p className="text-[11px] text-gray-500 mt-2">
          Complete quizzes and review lessons to reach Level 3: Empowered Protector!
        </p>
      </div>

      {/* Quizzes Challenge Section */}
      <div className="bg-white dark:bg-zinc-900 rounded-[24px] border border-gray-100 dark:border-zinc-800 p-6 soft-shadow space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-title-md text-base font-bold text-gray-950 dark:text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500 fill-amber-500/10" />
            <span>Interactive Quiz Challenge</span>
          </h3>
          <span className="text-xs font-bold text-gray-500 font-mono">
            {currentQuizIndex + 1}/{quizItems.length}
          </span>
        </div>

        {!quizFinished ? (
          <div className="space-y-4">
            {/* Question title */}
            <p className="font-bold text-[#1c1c1a] dark:text-zinc-100 text-sm leading-relaxed antialiased bg-purple-50/50 dark:bg-zinc-850 p-4 rounded-2xl border border-purple-50 dark:border-zinc-800">
              {currentQuiz.question[language] || currentQuiz.question['en']}
            </p>

            {/* Options list */}
            <div className="space-y-2">
              {(currentQuiz.options[language] || currentQuiz.options['en']).map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQuiz.answerIndex;
                
                let optionStyle = 'border-gray-100 dark:border-zinc-840 hover:bg-gray-50 dark:hover:bg-zinc-800';
                if (isSelected) {
                  optionStyle = 'border-[#6f48b2] bg-[#ebdcff]/30 text-[#491d8a] dark:text-[#b78efe]';
                }
                if (isSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'border-green-600 bg-green-500/10 text-green-700 dark:text-green-400 font-bold';
                  } else if (isSelected) {
                    optionStyle = 'border-red-600 bg-red-500/10 text-red-700 dark:text-red-400 font-bold';
                  } else {
                    optionStyle = 'opacity-50 border-gray-100 dark:border-zinc-800';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={isSubmitted}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all text-xs font-semibold flex items-center justify-between pointer-events-auto cursor-pointer ${optionStyle}`}
                  >
                    <span>{option}</span>
                    {isSubmitted && isCorrect && <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />}
                    {isSubmitted && isSelected && !isCorrect && <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Explanation box */}
            {isSubmitted && (
              <div className="p-4 rounded-2xl bg-[#ebf3fc] text-[#000666] dark:bg-blue-950/25 dark:text-blue-300 text-xs font-medium leading-relaxed border border-blue-100 dark:border-blue-900/30 animate-fade-in antialiased mt-2">
                <Info className="w-4 h-4 stroke-[2.5] text-[#1a237e] dark:text-[#b7c2fe] inline mr-1.5 float-left" />
                <span>{currentQuiz.explanation[language] || currentQuiz.explanation['en']}</span>
              </div>
            )}

            {/* Submit / Next Button */}
            <button
              onClick={handleNextSubmit}
              disabled={selectedOption === null}
              className={`w-full font-bold py-3.5 rounded-2xl shadow-sm text-xs transition-all active:scale-[0.98] cursor-pointer ${
                selectedOption === null 
                  ? 'bg-gray-100 text-gray-400 dark:bg-zinc-800 cursor-not-allowed' 
                  : 'bg-[#6f48b2] text-white hover:bg-[#593994]'
              }`}
            >
              {isSubmitted ? (currentQuizIndex === quizItems.length - 1 ? 'Finish Results' : 'Next Question') : 'Verify Answer'}
            </button>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#eaf5ef] rounded-full text-green-700 shadow-md">
              <Star className="w-9 h-9 fill-green-650" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Congratulations!</h4>
            <p className="text-gray-600 dark:text-zinc-300 text-xs leading-relaxed max-w-[90%] mx-auto">
              You scored <span className="text-[#6f48b2] font-bold text-base">{score}/{quizItems.length}</span> correct answers. 
              You are becoming incredibly vigilant on women legal safeties!
            </p>
            <button
              onClick={resetQuiz}
              className="px-6 py-2.5 bg-[#6f48b2] text-white rounded-full text-xs font-bold hover:bg-[#593994] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm mx-auto"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry and Learn Again</span>
            </button>
          </div>
        )}
      </div>

      {/* 2-Minute lessons story list */}
      <div className="space-y-3">
        <h3 className="font-title-md text-base font-bold text-gray-950 dark:text-white px-1 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#6f48b2] dark:text-[#b78efe]" />
          <span>Interactive 2-Minute Stories</span>
        </h3>
        
        <div className="space-y-3">
          {microLessons.map((les) => {
            const isOpen = openedStoryId === les.id;
            return (
              <div
                key={les.id}
                className={`border rounded-[24px] p-5 soft-shadow transition-all ${les.cardColor}`}
              >
                <div 
                  onClick={() => setOpenedStoryId(isOpen ? null : les.id)}
                  className="flex justify-between items-start gap-4 cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#6f48b2] dark:text-[#b78efe] block mb-1">
                      {les.category} • {les.readingTime}
                    </span>
                    <h4 className="font-title-md text-[15px] font-bold text-gray-950 dark:text-white leading-snug">
                      {les.title[language] || les.title['en']}
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-[#6f48b2] dark:text-[#b78efe] hover:underline whitespace-nowrap">
                    {isOpen ? 'Close' : 'Read Now'}
                  </span>
                </div>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5 space-y-3 animate-fade-in-up text-xs font-medium text-gray-700 dark:text-zinc-300">
                    <p className="text-sm leading-relaxed antialiased">
                      {les.story[language] || les.story['en']}
                    </p>
                    
                    {/* Speak Story Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakText(`${les.title[language] || les.title['en']}. ${les.story[language] || les.story['en']}. Key takeaway: ${les.keyTakeaway[language] || les.keyTakeaway['en']}`, language);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFF1E7] hover:bg-[#FFE4D6] border border-orange-200 text-[#EA580C] text-[10px] font-bold rounded-xl mt-1 cursor-pointer transition select-none active:scale-95 duration-100 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Hear Story (सुनें)</span>
                    </button>

                    <div className="bg-white/80 dark:bg-zinc-900/40 p-3.5 rounded-xl border border-white/20">
                      <p className="text-[10px] uppercase font-bold text-[#491d8a] dark:text-[#b78efe] tracking-wider mb-1 flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
                        <span>Key Takeaway</span>
                      </p>
                      <p className="text-xs text-gray-900 dark:text-gray-100 font-bold leading-relaxed antialiased">
                        {les.keyTakeaway[language] || les.keyTakeaway['en']}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* "Did You Know?" daily fact block & Daily legal tip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Daily tip card */}
        <div className="bg-gradient-to-br from-[#12185c] to-[#1a237e] text-white rounded-[24px] p-5 shadow-sm space-y-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full" />
          <h4 className="text-[10px] uppercase font-bold tracking-widest text-sky-200">Daily Safety Instruction</h4>
          <p className="text-xs text-slate-100 font-bold leading-relaxed antialiased">
            "{tips[staticTipIndex]}"
          </p>
        </div>

        {/* Fact card */}
        <div className="bg-[#ebdcff] dark:bg-purple-950/20 border border-[#ebdcff] dark:border-purple-900/30 rounded-[24px] p-5 shadow-sm space-y-2 relative overflow-hidden text-gray-900 dark:text-gray-100">
          <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#491d8a] dark:text-[#b78efe]">Did You Know?</h4>
          <p className="text-xs text-gray-800 dark:text-zinc-300 font-bold leading-relaxed antialiased">
            {facts[staticFactIndex]}
          </p>
        </div>

      </div>

    </div>
  );
}
