import React, { useState } from 'react';
import { 
  Home as HomeIcon, 
  Shield, 
  MessageSquare, 
  GraduationCap, 
  FileText, 
  PhoneCall, 
  Accessibility, 
  Languages, 
  Sun, 
  Moon, 
  Eye,
  Scale,
  Sparkles
} from 'lucide-react';

import HomeView from './components/HomeView';
import SafetyHubView from './components/SafetyHubView';
import LearningView from './components/LearningView';
import SakhiBotView from './components/SakhiBotView';
import FIRAssistantView from './components/FIRAssistantView';
import LawDetailView from './components/LawDetailView';
import SOSOverlay from './components/SOSOverlay';
import { stopSpeaking } from './utils/speech';

import { Language, ChatMessage } from './types';
import { lawSections } from './data/laws';
import { translations } from './data/lessons';
import { languageNames } from './data/laws';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<'light' | 'dark' | 'high-contrast'>('light');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>('normal');
  const [activeView, setActiveView] = useState<'home' | 'safety' | 'learning' | 'bot' | 'fir' | 'categories'>('home');
  const [selectedLawId, setSelectedLawId] = useState<string | null>(null);
  const [sosOpen, setSosOpen] = useState(false);

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'textSize-large';
      case 'extra-large':
        return 'textSize-xlarge';
      default:
        return 'textSize-normal';
    }
  };

  // States for the High Density Right Column Live Mini Chatbot
  const [miniChatMessages, setMiniChatMessages] = useState<ChatMessage[]>([]);
  const [miniTextInput, setMiniTextInput] = useState('');
  const [miniLoading, setMiniLoading] = useState(false);

  const t = translations[language];

  // Initialize miniChatMessages on language change or mount
  React.useEffect(() => {
    const initMsg: ChatMessage = {
      id: 'mini-init-1',
      sender: 'bot',
      text: language === 'en'
        ? "Hello! I am your Nyaya Sakhi legal assistant. Ask me anything, or type a query on laws under the BNS 2023!"
        : language === 'hi'
          ? "नमस्ते! मैं आपकी न्याय सखी हूँ। भारतीय न्याय संहिता के तहत कोई भी कानूनी प्रश्न सरल भाषा में पूछें!"
          : "నమస్తే! నేను మీ న్యాయ సఖిని. భారతీయ న్యాయ సంహిత (BNS) గురించి ఏదైనా చట్టపరమైన ప్రశ్నను ఇక్కడే అడగండి!",
      timestamp: 'Just now'
    };
    setMiniChatMessages([initMsg]);
  }, [language]);

  const handleSendMiniMessage = async (rawMessage: string) => {
    const trimmed = rawMessage.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: `mini-user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMiniChatMessages((prev) => [...prev, userMsg]);
    setMiniTextInput('');
    setMiniLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: trimmed,
          history: miniChatMessages.slice(-4),
          language: language
        })
      });

      if (!res.ok) throw new Error('Error');
      const data = await res.json();
      
      const botMsg: ChatMessage = {
        id: `mini-bot-${Date.now()}`,
        sender: 'bot',
        text: data.text || 'I could not process that. Ask again, please.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMiniChatMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const errMsg: ChatMessage = {
        id: `mini-err-${Date.now()}`,
        sender: 'bot',
        text: language === 'en' 
          ? 'Network busy. Please call 112 if in danger!' 
          : language === 'hi' 
            ? 'नेटवर्क व्यस्त है। यदि खतरे में हैं तो तुरंत 112 डायल करें!' 
            : 'నెట్‌వర్క్ కనెక్షన్ లో సమస్య ఉంది. ఆపదలో ఉంటే 112 కి కాల్ చేయండి!',
        timestamp: 'Just now'
      };
      setMiniChatMessages((prev) => [...prev, errMsg]);
    } finally {
      setMiniLoading(false);
    }
  };

  // Pick background of root container depending on selected accessibility mode
  const getThemeClass = () => {
    switch (theme) {
      case 'dark':
        return 'dark bg-[#121313] text-gray-100';
      case 'high-contrast':
        return 'high-contrast bg-[#000000] text-[#ffff00] border-yellow-500 selection:bg-yellow-400';
      default:
        return 'bg-[#FDF8F5] text-slate-800';
    }
  };

  const handleSelectLaw = (id: string) => {
    setSelectedLawId(id);
  };

  const handleNavigate = (view: 'home' | 'safety' | 'learning' | 'bot' | 'fir' | 'categories') => {
    setSelectedLawId(null);
    setActiveView(view);
  };

  const currentLaw = selectedLawId ? lawSections.find((l) => l.id === selectedLawId) : null;

  return (
    <div className={`min-h-screen pb-24 font-sans antialiased transition-colors duration-200 ${getThemeClass()} ${getFontSizeClass()}`}>
      
      {/* Top Universal Access Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-[#1a1c1c] border-b border-orange-100 dark:border-zinc-800/80 px-4 py-3 flex items-center justify-between shadow-sm max-w-7xl mx-auto rounded-b-2xl transition-all duration-200">
        {/* App Branding logo */}
        <div 
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-2 cursor-pointer group active:scale-95 duration-100 select-none"
        >
          <div className="bg-[#1E3A8A] text-white p-2 rounded-xl flex items-center justify-center shadow-md">
            <Scale className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-display-lg text-base font-bold text-[#1E3A8A] dark:text-[#b78efe] tracking-tight flex items-center gap-1">
              <span>Nyaya Sakhi</span>
              <span className="text-red-500 font-extrabold text-xs">●</span>
            </h1>
            <p className="text-[10px] text-slate-500 dark:text-zinc-400 font-semibold uppercase tracking-widest leading-none">BNS 2023 • Legal Shield</p>
          </div>
        </div>

        {/* Toolbar selectors */}
        <div className="flex items-center gap-2 text-zinc-900">
          
          {/* Language Toggle */}
          <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-zinc-850 p-1.5 rounded-xl border border-orange-100 dark:border-zinc-800">
            <Languages className="w-3.5 h-3.5 text-gray-500 dark:text-zinc-400 ml-1" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="text-xs font-bold text-slate-700 dark:text-zinc-200 bg-transparent py-0.5 border-none focus:outline-none focus:ring-0"
              style={{ color: 'inherit' }}
            >
              <option value="en" className="text-black bg-white">EN</option>
              <option value="hi" className="text-black bg-white">हिन्दी</option>
              <option value="te" className="text-black bg-white">తెలుగు</option>
              <option value="bn" className="text-black bg-white">বাংলা</option>
              <option value="mr" className="text-black bg-white">मराठी</option>
              <option value="ta" className="text-black bg-white">தமிழ்</option>
            </select>
          </div>

          {/* Elder Citizen Font Resizer Toggles */}
          <div className="flex gap-1 bg-gray-50 dark:bg-zinc-850 p-1 rounded-xl border border-orange-100 dark:border-zinc-800 select-none">
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-1 text-[10px] font-extrabold rounded-lg cursor-pointer transition-colors ${fontSize === 'normal' ? 'bg-[#7C3AED] text-white shadow-xs' : 'text-gray-500 hover:text-gray-700'}`}
              title="A-: Normal Text Size"
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-1 text-[10px] font-extrabold rounded-lg cursor-pointer transition-colors ${fontSize === 'large' ? 'bg-[#7C3AED] text-white shadow-xs' : 'text-gray-500 hover:text-gray-700'}`}
              title="A: Large Text Size"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('extra-large')}
              className={`px-2 py-1 text-[10px] font-extrabold rounded-lg cursor-pointer transition-colors ${fontSize === 'extra-large' ? 'bg-[#7C3AED] text-white shadow-xs' : 'text-gray-500 hover:text-gray-700'}`}
              title="A+: Maximum Text Size"
            >
              A+
            </button>
          </div>

          {/* Accessibility themes dial toggler */}
          <div className="flex gap-1 bg-gray-50 dark:bg-zinc-850 p-1 rounded-xl border border-orange-100 dark:border-zinc-800">
            {/* Light Trigger */}
            <button
              onClick={() => setTheme('light')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'light' ? 'bg-[#7C3AED] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              title="Light Mode"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            {/* Dark Trigger */}
            <button
              onClick={() => setTheme('dark')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'dark' ? 'bg-[#7C3AED] text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
              title="Dark Mode"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
            {/* High Contrast Trigger */}
            <button
              onClick={() => setTheme('high-contrast')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'high-contrast' ? 'bg-yellow-400 text-black shadow-sm' : 'text-gray-500 hover:text-yellow-400'}`}
              title="High Contrast Mode for visually impaired rural citizens"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Grid with Left, Center and Right columns aligned to high density theme on wide screens */}
      <main className="max-w-7xl mx-auto px-4 pt-4 pb-20 relative min-h-[calc(100vh-140px)]">
        <div className="grid grid-cols-12 gap-5 items-start">
          
          {/* LEFT COLUMN: Sidebar Categories & Progress for larger viewports */}
          <aside className="hidden lg:flex lg:col-span-3 flex-col gap-4 sticky top-[84px] max-h-[calc(100vh-120px)] overflow-y-auto pb-4 pr-1">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-sm border border-orange-100 dark:border-zinc-800/80 flex-grow">
              <h2 className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase mb-3 tracking-wider flex items-center gap-1.5 leading-none">
                <span>📂</span>
                <span>Categories</span>
              </h2>
              
              <div className="space-y-1">
                <button 
                  onClick={() => handleNavigate('home')}
                  className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left font-bold text-xs transition-all cursor-pointer ${
                    activeView === 'home' && !selectedLawId
                      ? 'bg-[#F3E8FF] text-[#7C3AED] border-l-4 border-[#7C3AED] dark:bg-purple-950/40 dark:text-[#b78efe] dark:border-[#b78efe]' 
                      : 'hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-300 font-medium'
                  }`}
                >
                  <span className="text-sm">🏠</span> {language === 'en' ? 'Home' : language === 'hi' ? 'मुख्य पृष्ठ' : 'హోమ్ పేజీ'}
                </button>

                <button 
                  onClick={() => handleNavigate('safety')}
                  className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left font-bold text-xs transition-all cursor-pointer ${
                    activeView === 'safety' && !selectedLawId
                      ? 'bg-[#F3E8FF] text-[#7C3AED] border-l-4 border-[#7C3AED] dark:bg-purple-950/40 dark:text-[#b78efe] dark:border-[#b78efe]' 
                      : 'hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-300 font-medium'
                  }`}
                >
                  <span className="text-sm">🛡️</span> {t.safetyHub}
                </button>

                <button 
                  onClick={() => handleNavigate('fir')}
                  className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left font-bold text-xs transition-all cursor-pointer ${
                    activeView === 'fir' && !selectedLawId
                      ? 'bg-[#F3E8FF] text-[#7C3AED] border-l-4 border-[#7C3AED] dark:bg-purple-950/40 dark:text-[#b78efe] dark:border-[#b78efe]' 
                      : 'hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-300 font-medium'
                  }`}
                >
                  <span className="text-sm">📋</span> {language === 'en' ? 'FIR Drafting Desk' : language === 'hi' ? 'एफआईआर सहायक' : 'FIR అసిస్టెంట్'}
                </button>

                <button 
                  onClick={() => handleNavigate('learning')}
                  className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left font-bold text-xs transition-all cursor-pointer ${
                    activeView === 'learning' && !selectedLawId
                      ? 'bg-[#F3E8FF] text-[#7C3AED] border-l-4 border-[#7C3AED] dark:bg-purple-950/40 dark:text-[#b78efe] dark:border-[#b78efe]' 
                      : 'hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-300 font-medium'
                  }`}
                >
                  <span className="text-sm">⚖️</span> {language === 'en' ? 'BNS Study Portal' : language === 'hi' ? 'सीखने का पोर्टल' : 'అభ్యసన పోర్టల్'}
                </button>

                <button 
                  onClick={() => handleNavigate('bot')}
                  className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left font-bold text-xs transition-all cursor-pointer ${
                    activeView === 'bot' && !selectedLawId
                      ? 'bg-[#F3E8FF] text-[#7C3AED] border-l-4 border-[#7C3AED] dark:bg-purple-950/40 dark:text-[#b78efe] dark:border-[#b78efe]' 
                      : 'hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-300 font-medium'
                  }`}
                >
                  <span className="text-sm">🎙️</span> {language === 'en' ? 'Full Sakhi Bot' : language === 'hi' ? 'पूर्ण सखी रोबोट' : 'పూర్తి సఖి బాట్'}
                </button>
              </div>

              {/* Legal Tip of the day */}
              <div className="mt-5 bg-[#FFF1E7] dark:bg-orange-950/20 rounded-xl p-3.5 border border-orange-200 dark:border-orange-900/40">
                <p className="text-[10px] font-bold text-[#EA580C] dark:text-orange-400 uppercase mb-1 tracking-wider leading-none">
                  {t.dailyLegalTip}
                </p>
                <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed italic">
                  {language === 'en'
                    ? '"No officer can refuse to record an FIR for cognitive crimes, and Zero FIR allows filing anywhere!"'
                    : language === 'hi'
                      ? '"कोई भी पुलिस अधिकारी संज्ञेय अपराधों के लिए एफआईआर दर्ज करने से इनकार नहीं कर सकता, और शून्य एफआईआर कहीं भी दर्ज करने की अनुमति देती है!"'
                      : '"పోలీసులు ఎఫ్ఐఆర్ రాయము అనడానికి వీల్లేదు, జీరో ఎఫ్ఐఆర్ ద్వారా ఎక్కడైనా ఫిర్యాదు చేయవచ్చు!"'}
                </p>
              </div>
            </div>

            {/* My Learning Progress Track */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-zinc-805/50">
              <h3 className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase mb-2 tracking-wide leading-none">
                {language === 'en' ? 'My Progress' : language === 'hi' ? 'मेरी प्रगति' : 'నా పురోగతి'}
              </h3>
              <div className="w-full bg-slate-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[65%]" />
              </div>
              <p className="text-[10px] mt-2 font-semibold text-slate-500 dark:text-zinc-400">
                65% Level 1: {language === 'en' ? 'Basic Citizen' : language === 'hi' ? 'बुनियादी नागरिक' : 'ప్రాథమిక పౌరుడు'}
              </p>
            </div>
          </aside>

          {/* CENTER COLUMN: Main Dynamic Responsive viewport Router */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 overflow-hidden">
            {currentLaw ? (
              <LawDetailView
                law={currentLaw}
                language={language}
                onBack={() => setSelectedLawId(null)}
                onTriggerSOS={() => setSosOpen(true)}
              />
            ) : (
              (() => {
                switch (activeView) {
                  case 'safety':
                    return (
                      <SafetyHubView
                        language={language}
                        onSelectLaw={handleSelectLaw}
                        onTriggerSOS={() => setSosOpen(true)}
                        onNavigate={handleNavigate}
                      />
                    );
                  case 'learning':
                    return (
                      <LearningView
                        language={language}
                      />
                    );
                  case 'bot':
                    return (
                      <SakhiBotView
                        language={language}
                        onTriggerSOS={() => setSosOpen(true)}
                      />
                    );
                  case 'fir':
                    return (
                      <FIRAssistantView
                        language={language}
                      />
                    );
                  case 'categories':
                    return (
                      <FIRAssistantView 
                        language={language}
                      />
                    );
                  default:
                    return (
                      <HomeView
                        language={language}
                        onSelectLaw={handleSelectLaw}
                        onNavigate={handleNavigate}
                        onTriggerSOS={() => setSosOpen(true)}
                      />
                    );
                }
              })()
            )}
          </div>

          {/* RIGHT COLUMN: Emergency Help widgets & Mini Chatbot Companion */}
          <aside className="hidden lg:flex lg:col-span-3 flex-col gap-4 sticky top-[84px] max-h-[calc(100vh-120px)] overflow-y-auto pb-4 pl-1">
            {/* Emergency widget */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-4.5 shadow-sm border border-red-100 dark:border-red-950/40">
              <h3 className="text-xs font-bold text-slate-800 dark:text-zinc-300 mb-2.5 uppercase tracking-wide">
                {language === 'en' ? 'Emergency Helpline' : language === 'hi' ? 'आपातकालीन हेल्पलाइन' : 'అత్యవసర హెల్ప్‌లైన్'}
              </h3>
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => setSosOpen(true)}
                  className="w-full py-3 bg-[#DC2626] text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-250 animate-pulse transition-transform active:scale-95 cursor-pointer"
                >
                  <span>🚨</span> SOS: SHOUT HELP
                </button>
                <div className="grid grid-cols-2 gap-1.5 mt-1">
                  <a 
                    href="tel:112"
                    className="p-2.5 text-center bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 font-bold text-[10px] rounded-xl border border-red-100 dark:border-red-900/30 hover:bg-red-100 block transition-all"
                  >
                    📞 112 Police
                  </a>
                  <a 
                    href="tel:181"
                    className="p-2.5 text-center bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 font-bold text-[10px] rounded-xl border border-purple-100 dark:border-purple-900/30 hover:bg-purple-100 block transition-all"
                  >
                    📞 181 Women
                  </a>
                </div>
              </div>
            </div>

            {/* AI Assistant: live Nyaya Sakhi mini-chatbox */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-4 shadow-sm border border-slate-100 dark:border-zinc-800/80 flex flex-col min-h-[320px] max-h-[460px] overflow-hidden">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white border border-purple-100 shadow-sm flex-shrink-0">
                  <img 
                    alt="Nyaya Sakhi mini avatar" 
                    referrerPolicy="no-referrer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK_UKg7a2vp97j9x6r0N1FeqXMuOuBFgrIdPaFXXvX_CKOHrIf5L30U7g6RM8OsaZm-TtnvZTYqvY7bG8AzFIz9kLyMNMi4QiVQVSKz7oibT6g-e0FWA_OdH4Y7f80IMEEo-0KNxaayeTJpXkrB3O1HbMbx3mRwL-T9M3Q6FQ_-HdcAiFTu6c8T8BWPqMImhKWhLZQgz17RfE603_FA-9gYS3stWMFR_4hJZempF3pHgmznY_mrTfLBmFhCvEv1qod7KHowsobpIY"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white animate-pulse" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 dark:text-zinc-200">Chat with Nyaya Sakhi</p>
                  <p className="text-[9px] text-green-500 font-bold uppercase tracking-wide leading-none">Online Now</p>
                </div>
              </div>

              {/* Mini conversation bubble log */}
              <div className="flex-1 space-y-2.5 mb-3 overflow-y-auto pr-1 text-[11px] custom-scrollbar max-h-[220px]">
                {miniChatMessages.map((msg) => {
                  const isBot = msg.sender === 'bot';
                  return (
                    <div 
                      key={msg.id} 
                      className={`p-2.5 rounded-2xl flex flex-col gap-0.5 max-w-[90%] ${
                        isBot 
                          ? 'bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 rounded-tl-none mr-auto border border-slate-100/30' 
                          : 'bg-[#F3E8FF] dark:bg-purple-950/20 text-[#7C3AED] dark:text-[#b78efe] rounded-tr-none ml-auto border border-purple-100/10'
                      }`}
                    >
                      <p className="leading-relaxed">{msg.text}</p>
                      <span className="text-[8px] opacity-60 text-right font-mono">{msg.timestamp}</span>
                    </div>
                  );
                })}
                {miniLoading && (
                  <div className="bg-slate-100 dark:bg-zinc-800 text-slate-500 rounded-2xl rounded-tl-none p-2 ml-1 w-12 flex gap-1 justify-center items-center">
                    <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" />
                    <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}
              </div>

              {/* Suggestion Chips */}
              <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-none flex-shrink-0">
                <button 
                  onClick={() => handleSendMiniMessage("What is Zero FIR?")}
                  className="bg-slate-50 dark:bg-zinc-800 border border-slate-150 dark:border-zinc-700 text-[9px] font-bold px-2 py-1 rounded-full whitespace-nowrap text-slate-600 dark:text-zinc-300 cursor-pointer"
                >
                  What is Zero FIR?
                </button>
                <button 
                  onClick={() => handleSendMiniMessage("Stalking punishment?")}
                  className="bg-slate-50 dark:bg-zinc-800 border border-slate-150 dark:border-zinc-700 text-[9px] font-bold px-2 py-1 rounded-full whitespace-nowrap text-slate-600 dark:text-zinc-300 cursor-pointer"
                >
                  Stalking punishment?
                </button>
              </div>

              {/* Text submission input */}
              <div className="relative mt-auto">
                <input
                  type="text"
                  value={miniTextInput}
                  onChange={(e) => setMiniTextInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSendMiniMessage(miniTextInput);
                  }}
                  placeholder="Type legal question..."
                  className="w-full py-2 pl-3 pr-8 rounded-xl bg-slate-100 dark:bg-zinc-800 text-[11px] focus:outline-none focus:ring-1 focus:ring-[#7C3AED] text-slate-900 dark:text-slate-100 border-none"
                />
                <button 
                  onClick={() => handleSendMiniMessage(miniTextInput)}
                  disabled={!miniTextInput.trim() || miniLoading}
                  className="absolute right-1 top-1 w-6 h-6 bg-[#7C3AED] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg flex items-center justify-center text-xs cursor-pointer hover:bg-purple-700"
                >
                  ↗️
                </button>
              </div>
            </div>
          </aside>

        </div>
      </main>

      {/* Persistent Sticky Bottom Draw Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-[#1a1c1c]/95 border-t border-gray-100 dark:border-zinc-805/40 pb-safe-bottom z-40 max-w-2xl mx-auto rounded-t-3xl shadow-[0_-8px_24px_rgba(0,0,0,0.06)] px-4 py-2 flex items-center justify-around">
        
        {/* Nav Home */}
        <button
          onClick={() => handleNavigate('home')}
          className={`flex flex-col items-center gap-1 py-1.5 px-3 transition-colors cursor-pointer ${
            activeView === 'home' && !selectedLawId
              ? 'text-[#7C3AED] dark:text-[#b78efe] font-bold'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <HomeIcon className="w-5 h-5" />
          <span className="text-[10.5px] font-title-sm tracking-wide">{t.home}</span>
        </button>

        {/* Nav Safety */}
        <button
          onClick={() => handleNavigate('safety')}
          className={`flex flex-col items-center gap-1 py-1.5 px-3 transition-colors cursor-pointer ${
            activeView === 'safety' && !selectedLawId
              ? 'text-[#7C3AED] dark:text-[#b78efe] font-bold'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <Shield className="w-5 h-5" />
          <span className="text-[10.5px] font-title-sm tracking-wide">{t.safety}</span>
        </button>

        {/* Nav Chatbot bot with micro indicator */}
        <button
          onClick={() => handleNavigate('bot')}
          className={`flex flex-col items-center gap-1 py-1.5 px-3 transition-colors relative cursor-pointer ${
            activeView === 'bot' && !selectedLawId
              ? 'text-[#7C3AED] dark:text-[#b78efe] font-bold'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <span className="absolute top-0 right-3 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]"></span>
          </span>
          <MessageSquare className="w-5 h-5" />
          <span className="text-[10.5px] font-title-sm tracking-wide">{t.sakhiBot}</span>
        </button>

        {/* Nav Learning */}
        <button
          onClick={() => handleNavigate('learning')}
          className={`flex flex-col items-center gap-1 py-1.5 px-3 transition-colors cursor-pointer ${
            activeView === 'learning' && !selectedLawId
              ? 'text-[#7C3AED] dark:text-[#b78efe] font-bold'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <GraduationCap className="w-5 h-5" />
          <span className="text-[10.5px] font-title-sm tracking-wide">{t.learning}</span>
        </button>

        {/* Nav FIR Help */}
        <button
          onClick={() => handleNavigate('fir')}
          className={`flex flex-col items-center gap-1 py-1.5 px-3 transition-colors cursor-pointer ${
            (activeView === 'fir' || activeView === 'categories') && !selectedLawId
              ? 'text-[#7C3AED] dark:text-[#b78efe] font-bold'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <FileText className="w-5 h-5" />
          <span className="text-[10.5px] font-title-sm tracking-wide">FIR Desk</span>
        </button>

      </nav>

      {/* Red floating trigger quick launch help assist */}
      <button
        onClick={() => setSosOpen(true)}
        id="universal-floating-sos-trigger"
        className="fixed bottom-24 right-4 z-40 bg-red-656 md:right-8 bg-red-600 text-white p-4.5 rounded-full shadow-lg hover:bg-red-750 hover:shadow-xl hover:scale-105 active:scale-95 transition-all select-none cursor-pointer border border-white/10 animate-pulse duration-1000"
        title="Trigger Emergency SOS Screen"
      >
        <PhoneCall className="w-6 h-6 animate-bounce" />
      </button>

      {/* SOS Overlay Panel */}
      <SOSOverlay
        isOpen={sosOpen}
        onClose={() => setSosOpen(false)}
        language={language}
      />

    </div>
  );
}
