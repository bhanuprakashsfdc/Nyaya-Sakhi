import React, { useState } from 'react';
import { Search, Mic, ArrowRight, ShieldAlert, Shield, HelpCircle, HardDrive, BookOpen, AlertCircle, Sparkles, Scale, Info } from 'lucide-react';
import { LawSection, Language } from '../types';
import { lawSections } from '../data/laws';
import { translations } from '../data/lessons';

interface HomeViewProps {
  language: Language;
  onSelectLaw: (id: string) => void;
  onNavigate: (view: 'home' | 'safety' | 'learning' | 'bot' | 'fir' | 'categories') => void;
  onTriggerSOS: () => void;
}

export default function HomeView({ language, onSelectLaw, onNavigate, onTriggerSOS }: HomeViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [micActive, setMicActive] = useState(false);
  const [micText, setMicText] = useState('');

  const t = translations[language];

  // Simulated voice recognition prompt
  const handleMicClick = () => {
    setMicActive(true);
    setMicText(language === 'en' ? 'Listening...' : language === 'hi' ? 'सुन रहे हैं...' : 'వింటున్నారు...');
    
    // Simulate detecting voice input questions
    const queries = {
      en: ['Outrage modesty BNS', 'stalking law', 'rights of women arrested'],
      hi: ['महिला की मर्यादा', 'पीछा करना कानून', 'गिरफ्तारी अधिकार'],
      te: ['లొకేషన్ షేరింగ్', 'స్టాకింగ్ శిక్ష', 'మహిళా ఆస్తులు']
    }[language];

    const randomQuery = queries[Math.floor(Math.random() * queries.length)];

    setTimeout(() => {
      setMicText(language === 'en' ? `Recognized: "${randomQuery}"` : language === 'hi' ? `पहचाना गया: "${randomQuery}"` : `గుర్తించబడింది: "${randomQuery}"`);
      setTimeout(() => {
        setSearchQuery(randomQuery);
        setMicActive(false);
      }, 1000);
    }, 2000);
  };

  // Filter legal database based on search query
  const filteredLaws = lawSections.filter((law) => {
    const q = searchQuery.toLowerCase();
    const matchesNumber = law.sectionNumber.toLowerCase().includes(q);
    const matchesTitle = law.title[language].toLowerCase().includes(q) || law.title.en.toLowerCase().includes(q);
    const matchesMeans = law.whatItMeans[language].toLowerCase().includes(q);
    const matchesCategory = law.category.toLowerCase().includes(q);
    return matchesNumber || matchesTitle || matchesMeans || matchesCategory;
  });

  return (
    <div className="space-y-6 pb-20 animate-fade-in">

      {/* Welcome Hero Bento Card */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 soft-shadow border border-gray-100 dark:border-zinc-800 flex items-center justify-between relative overflow-hidden">
        {/* Soft atmospheric gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#bdc2ff]/30 rounded-bl-full filter blur-xl -z-10" />
        
        <div className="z-10 max-w-[62%] md:max-w-[70%] space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#ebdcff] dark:bg-purple-950/40 text-[#491d8a] dark:text-[#ebdcff] px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 fill-[#ebdcff]/20" />
            <span>NITI AAYOG CREDIBILITY APPROVED</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 font-title-md leading-tight">
            {t.welcomeTitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed antialiased">
            {t.welcomeSub}
          </p>
        </div>

        {/* Dynamic Illustrator Circle */}
        <div className="absolute right-0 bottom-0 w-32 h-32 md:w-36 md:h-36 overflow-hidden rounded-bl-full z-0 translate-x-2 translate-y-2 select-none pointer-events-none">
          <img 
            alt="Empowering illustration of an Indian woman" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDos_o9YbZT3GbzDpYlhZ9gO9RwznY1eVwdyzqCVIJkdaHrknvZ98ZD90sXlaqPeQfB7sSoAnVmIvovKgdMMeHKB9LDHf_OTPt2esVnbrs9rRrCtvteLO51zvVvbgAVNkYhRboHkRc4DxEwPFvjQRFik0bdNMJs73i6pY9ndP3PPVRiAkfGaHu-LaHYOknQd7wvb0RTTTqnTB7_WFYgg6hWM43qEE1AWT4HiRCVC9UlodeoFLDkbawZ9wvX2aFew-zIzlNUiC1ZGw4"
          />
        </div>
      </div>

      {/* Search and Voice Bar */}
      <div className="relative w-full soft-shadow text-gray-900">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-12 pr-12 py-4 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-full font-body-md text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6f48b2] focus:border-transparent transition-all shadow-sm text-gray-900 dark:text-gray-100"
          placeholder={t.searchPlaceholder}
          type="text"
          id="law-search-bar"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-12 pr-2 flex items-center text-gray-400 hover:text-gray-600 dark:text-zinc-500"
          >
            ×
          </button>
        )}
        <button
          onClick={handleMicClick}
          id="home-mic-voice-btn"
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#6f48b2] hover:text-[#491d8a] dark:text-[#b78efe] active:scale-95 duration-100"
          title="Voice search"
        >
          <Mic className={`w-5 h-5 ${micActive ? 'animate-bounce text-red-500' : ''}`} />
        </button>

        {micActive && (
          <div className="absolute top-14 left-0 right-0 bg-[#ffeeeb] text-[#ba1a1a] p-3 rounded-2xl text-xs font-semibold text-center mt-2 soft-shadow flex items-center justify-center gap-2 border border-red-200">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span>{micText}</span>
          </div>
        )}
      </div>

      {/* Search results overlay or rendering */}
      {searchQuery && (
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-3xl border border-gray-100 dark:border-zinc-800 soft-shadow space-y-3">
          <div className="flex justify-between items-center px-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              {filteredLaws.length} Search matches for "{searchQuery}"
            </h4>
            <button 
              onClick={() => setSearchQuery('')}
              className="text-xs text-[#6f48b2] hover:underline"
            >
              Clear
            </button>
          </div>
          {filteredLaws.length === 0 ? (
            <div className="text-center py-6 text-gray-500 text-sm">
              No direct matches found. Try searching simple terms like "stalking" or "contact".
            </div>
          ) : (
            <div className="space-y-2">
              {filteredLaws.map((law) => (
                <div
                  key={law.id}
                  onClick={() => {
                    onSelectLaw(law.id);
                    setSearchQuery('');
                  }}
                  className="flex justify-between items-center p-3 rounded-2xl bg-gray-50 hover:bg-purple-50 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 transition-colors pointer-events-auto cursor-pointer border border-transparent hover:border-purple-100 dark:hover:border-zinc-700"
                >
                  <div className="max-w-[85%]">
                    <span className="text-xs font-bold text-[#6f48b2] dark:text-[#b78efe] block">{law.sectionNumber}</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100 block text-sm mt-0.5">{law.title[language]}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#6f48b2] dark:text-[#b78efe]" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Prominent Action Squares (SOS & Women Safety Hub) */}
      <div className="grid grid-cols-2 gap-4">
        {/* Red block: Emergency SOS */}
        <button
          onClick={onTriggerSOS}
          id="home-sos-btn"
          className="bg-red-600 text-white rounded-3xl p-5 flex flex-col items-center justify-center gap-3 shadow-[0_12px_24px_rgba(220,38,38,0.25)] active:scale-[0.96] transition-transform duration-150 relative overflow-hidden group min-h-[140px] cursor-pointer"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div className="bg-white/20 p-3 rounded-full animate-pulse">
            <ShieldAlert className="w-8 h-8 text-white stroke-[2.5]" />
          </div>
          <span className="font-emergency-callout text-[17px] tracking-wide text-center uppercase">{t.emergencySos}</span>
        </button>

        {/* Soft Purple block: Women Safety Hub */}
        <button
          onClick={() => onNavigate('safety')}
          id="home-safety-hub-btn"
          className="bg-[#ebdcff] dark:bg-purple-950/40 text-[#260058] dark:text-[#ebdcff] rounded-3xl p-5 flex flex-col items-center justify-center gap-3 border border-purple-250/30 active:scale-[0.96] transition-transform duration-150 group min-h-[140px] cursor-pointer hover:bg-[#d8c3f5] dark:hover:bg-purple-900/50"
        >
          <div className="bg-white dark:bg-zinc-850 p-3 rounded-full shadow-sm text-[#6f48b2] dark:text-[#b78efe]">
            <Shield className="w-8 h-8 stroke-[2]" />
          </div>
          <span className="font-title-md text-[16px] text-center font-bold">{t.safetyHub}</span>
        </button>
      </div>

      {/* Smart Navigation & Categories bento grid shortcut */}
      <div className="bg-white dark:bg-zinc-900 p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 soft-shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-title-md text-base font-bold text-gray-950 dark:text-gray-50">
            Smart Legal Categories
          </h3>
          <button 
            onClick={() => onNavigate('categories')}
            className="text-xs text-[#6f48b2] dark:text-[#b78efe] font-bold hover:underline"
          >
            {t.viewAll}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <button onClick={() => onNavigate('safety')} className="h-10 px-3 flex items-center gap-2 rounded-2xl bg-red-50 dark:bg-red-950/20 text-[#ba1a1a] font-semibold text-left border border-red-100 dark:border-red-900/20 hover:opacity-85 pointer-events-auto">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Women Safety</span>
          </button>
          <button onClick={() => onNavigate('categories')} className="h-10 px-3 flex items-center gap-2 rounded-2xl bg-[#f5fbf7] dark:bg-[#eaf5ef] text-green-700 font-semibold text-left border border-green-100 hover:opacity-85 pointer-events-auto">
            <BookOpen className="w-3.5 h-3.5" />
            <span>FIR Help Link</span>
          </button>
          <button onClick={() => onNavigate('categories')} className="h-10 px-3 flex items-center gap-2 rounded-2xl bg-[#ebf3fc] text-[#1a237e] font-semibold text-left border border-[#cbdcf2] hover:opacity-85 pointer-events-auto">
            <Scale className="w-3.5 h-3.5" />
            <span>Self Defense</span>
          </button>
          <button onClick={() => onNavigate('categories')} className="h-10 px-3 flex items-center gap-2 rounded-2xl bg-[#fdf5ed] text-amber-700 font-semibold text-left border border-[#f7e3ce] hover:opacity-85 pointer-events-auto">
            <Info className="w-3.5 h-3.5" />
            <span>Police Procedures</span>
          </button>
        </div>
      </div>

      {/* Popular Topics List */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-title-md text-lg text-gray-900 dark:text-gray-100 font-bold">{t.popularTopics}</h3>
          <button 
            onClick={() => onNavigate('categories')}
            className="font-label-lg text-xs font-bold text-[#6f48b2] dark:text-[#b78efe] hover:underline cursor-pointer"
          >
            {t.viewAll}
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-900 dark:text-gray-100">
          {/* Cyber Crime */}
          <div 
            onClick={() => {
              const matches = lawSections.find(law => law.id === 'sec-78');
              if (matches) onSelectLaw(matches.id);
            }}
            className="bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-gray-100 dark:border-zinc-800 soft-shadow flex flex-col items-start gap-3 active:scale-[0.97] transition-all cursor-pointer hover:border-purple-200 dark:hover:border-zinc-700 hover:shadow-md"
          >
            <div className="bg-[#e0e0ff] dark:bg-blue-950 p-2.5 rounded-xl text-[#000767] dark:text-[#bdc2ff]">
              <HardDrive className="w-5 h-5" />
            </div>
            <span className="font-label-lg text-xs font-bold text-gray-800 dark:text-gray-200">Cyber Crime Stalking</span>
          </div>

          {/* Domestic Violence */}
          <div 
            onClick={() => {
              const matches = lawSections.find(law => law.id === 'sec-85');
              if (matches) onSelectLaw(matches.id);
            }}
            className="bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-gray-100 dark:border-zinc-800 soft-shadow flex flex-col items-start gap-3 active:scale-[0.97] transition-all cursor-pointer hover:border-purple-200 dark:hover:border-zinc-700 hover:shadow-md"
          >
            <div className="bg-[#ffdbd0] dark:bg-orange-950 p-2.5 rounded-xl text-[#2f140b] dark:text-[#edbbac]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <span className="font-label-lg text-xs font-bold text-gray-800 dark:text-gray-200">Domestic Abuse</span>
          </div>

          {/* FIR Help */}
          <div 
            onClick={() => onNavigate('fir')}
            className="bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-gray-100 dark:border-zinc-800 soft-shadow flex flex-col items-start gap-3 active:scale-[0.97] transition-all cursor-pointer hover:border-purple-200 dark:hover:border-zinc-700 hover:shadow-md animate-glow"
          >
            <div className="bg-[#eaf5ef] text-green-700 p-2.5 rounded-xl">
              <BookOpen className="w-5 h-5 text-green-700" />
            </div>
            <span className="font-label-lg text-xs font-bold text-gray-800 dark:text-gray-200">Interactive FIR Form</span>
          </div>

          {/* Outrage Modesty */}
          <div 
            onClick={() => {
              const matches = lawSections.find(law => law.id === 'sec-74');
              if (matches) onSelectLaw(matches.id);
            }}
            className="bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-gray-100 dark:border-zinc-800 soft-shadow flex flex-col items-start gap-3 active:scale-[0.97] transition-all cursor-pointer hover:border-purple-200 dark:hover:border-zinc-700 hover:shadow-md"
          >
            <div className="bg-[#ebdcff] dark:bg-purple-950 p-2.5 rounded-xl text-[#260058] dark:text-[#ebdcff]">
              <Scale className="w-5 h-5 text-[#6f48b2] dark:text-[#b78efe]" />
            </div>
            <span className="font-label-lg text-xs font-bold text-gray-800 dark:text-gray-200">Outrage Modesty (Sec 74)</span>
          </div>
        </div>
      </div>

      {/* Recently Viewed Laws list */}
      <div className="space-y-3 overflow-hidden">
        <h3 className="font-title-md text-lg text-gray-950 dark:text-gray-100 font-bold px-1">{t.recentlyViewed}</h3>
        <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-thin scrollbar-thumb-gray-200 scroll-smooth snap-x">
          
          {/* Card 1: Section 74 */}
          <div
            onClick={() => onSelectLaw('sec-74')}
            className="min-w-[250px] bg-[#ffdbd0]/30 dark:bg-orange-950/10 border border-[#ffdbd0] dark:border-orange-900/40 rounded-2xl p-4 snap-start cursor-pointer hover:bg-[#ffdbd0]/50 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2 text-amber-900 dark:text-[#edbbac]">
              <Scale className="w-4 h-4" />
              <span className="font-label-lg text-xs font-bold tracking-wide uppercase">Section 74 - BNS</span>
            </div>
            <h4 className="font-title-md text-sm font-semibold text-gray-900 dark:text-gray-100">
              {language === 'en' ? 'Assault to Outrage Modesty' : language === 'hi' ? 'इज्जत पर हमला' : 'ఆత్మగౌరవ భంగం'}
            </h4>
            <p className="text-gray-600 dark:text-zinc-400 text-xs mt-1.5 line-clamp-2">
              {lawSections.find(l => l.id === 'sec-74')?.subtitle[language] || ''}
            </p>
          </div>

          {/* Card 2: Section 78 */}
          <div
            onClick={() => onSelectLaw('sec-78')}
            className="min-w-[250px] bg-[#ebdcff]/30 dark:bg-purple-950/10 border border-[#ebdcff] dark:border-purple-900/40 rounded-2xl p-4 snap-start cursor-pointer hover:bg-[#ebdcff]/50 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2 text-[#491d8a] dark:text-[#ebdcff]">
              <HardDrive className="w-4 h-4" />
              <span className="font-label-lg text-xs font-bold tracking-wide uppercase">Section 78 - BNS</span>
            </div>
            <h4 className="font-title-md text-sm font-semibold text-gray-900 dark:text-gray-100">
              {language === 'en' ? 'Stalking (Physical/Cyber)' : language === 'hi' ? 'पीछा करना कानून' : 'వెంబడించి వేధించడం'}
            </h4>
            <p className="text-gray-600 dark:text-zinc-400 text-xs mt-1.5 line-clamp-2">
              {lawSections.find(l => l.id === 'sec-78')?.subtitle[language] || ''}
            </p>
          </div>

          {/* Card 3: Section 85 */}
          <div
            onClick={() => onSelectLaw('sec-85')}
            className="min-w-[250px] bg-sky-50 dark:bg-blue-950/10 border border-sky-200 dark:border-blue-900/40 rounded-2xl p-4 snap-start cursor-pointer hover:bg-sky-100 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2 text-sky-800 dark:text-sky-350">
              <Shield className="w-4 h-4" />
              <span className="font-label-lg text-xs font-bold tracking-wide uppercase">Section 85 - BNS</span>
            </div>
            <h4 className="font-title-md text-sm font-semibold text-gray-900 dark:text-gray-100">
              {language === 'en' ? 'Domestic Cruelty Protection' : language === 'hi' ? 'घरेलू हिंसा से बचाव' : 'గృహ క్రూరత్వ రక్షణ'}
            </h4>
            <p className="text-gray-600 dark:text-zinc-400 text-xs mt-1.5 line-clamp-2">
              {lawSections.find(l => l.id === 'sec-85')?.subtitle[language] || ''}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
