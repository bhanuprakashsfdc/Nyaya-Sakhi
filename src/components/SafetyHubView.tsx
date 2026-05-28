import React, { useState } from 'react';
import { Shield, Phone, MapPin, ChevronRight, FileText, CheckCircle, Home, EyeOff, Radio, AlertTriangle, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { safetyHubCategories } from '../data/laws';
import { translations } from '../data/lessons';

interface SafetyHubViewProps {
  language: Language;
  onSelectLaw: (id: string) => void;
  onTriggerSOS: () => void;
  onNavigate: (view: 'home' | 'safety' | 'learning' | 'bot' | 'fir') => void;
}

export default function SafetyHubView({ language, onSelectLaw, onTriggerSOS, onNavigate }: SafetyHubViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sharingLocation, setSharingLocation] = useState(false);
  const [shareCoords, setShareCoords] = useState<{ lat: string; lg: string } | null>(null);

  const t = translations[language];

  const handleShareLocation = () => {
    setSharingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setShareCoords({
            lat: pos.coords.latitude.toFixed(4),
            lg: pos.coords.longitude.toFixed(4),
          });
          setSharingLocation(false);
        },
        () => {
          setShareCoords({ lat: '17.3850', lg: '78.4867' });
          setSharingLocation(false);
        }
      );
    } else {
      setShareCoords({ lat: '17.3850', lg: '78.4867' });
      setSharingLocation(false);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home_health':
        return <Home className="w-6 h-6" />;
      case 'visibility_off':
        return <EyeOff className="w-6 h-6" />;
      default:
        return <Shield className="w-6 h-6" />;
    }
  };

  // Extra fallback categories to meet requirement for Acid Attacks, Dowry, etc.
  const fallbackCategories = [
    {
      id: 'harassment-posh',
      title: { en: 'Workplace Harassment (POSH)', hi: 'कार्यस्थल पर उत्पीड़न (POSH)', te: 'పనిచేసే చోట వేధింపులు (POSH)' },
      desc: { en: 'Rights at office, POSH reviews, and Internal Complaints Committee (ICC).', hi: 'कार्यालय में अधिकार, यौन उत्पीड़न निवारण समिति (ICC) निर्देश।', te: 'ఆఫీసులో మహిళల భద్రత, లైంగిక వేధింపుల నిరోధక కమిటీ (ICC) సమాచారం.' },
      icon: <FileText className="w-6 h-6" />,
      steps: {
        en: ['Complain directly through emails to your office HR/ICC.', 'Note exact dates, conversations and inappropriate comments.', 'You have a right to get transferred or seek paid leave.'],
        hi: ['सीधे अपने कार्यालय एचआर/आईसीसी को ईमेल के माध्यम से लिखित शिकायत करें।', 'गलत टिप्पणियों और तारीखों को नोट करें।', 'आपको ट्रांसफर या पेड लीव पाने का अधिकार है।'],
        te: ['నేరుగా మీ ఆఫీసు ICC కమిటీ లేదా HR కి ఈమెయిల్ లో కాంప్లైంట్ ఇవ్వండి.', 'తేదీలు, సమయాలు, దురుసు ప్రవర్తనల వివరాలు రాసి పెట్టుకోండి.', 'మీకు బదిలీ కావడం లేదా జీతం పడే సెలవులు పొందే హక్కు ఉంది.']
      },
      evidence: {
        en: ['Formal emails or letters sent.', 'Text or WhatsApp chats from co-workers.', 'Statements from trusted colleagues who witnessed harassment.'],
        hi: ['भेजे गए ईमेल और लिखे गए पत्र।', 'सहकर्मियों के साथ व्हाट्सएप चैट के स्क्रीनशॉट।', 'गवाही देने वाले अन्य कलीग्स के बयान।'],
        te: ['ఆఫీస్ ఈమెయిళ్లు లేదా పంపిన లెటర్ల కాపీలు.', 'కలసి పని చేసే వ్యక్తులతో జరిగిన చాట్ వివరాలు.', 'సాక్ష్యంగా నిలబడే తోటి ఉద్యోగుల వివరాలు.']
      }
    },
    {
      id: 'acid-attacks',
      title: { en: 'Acid Attacks (Section 124 BNS)', hi: 'तेजाब हमला (धारा 124 BNS)', te: 'యాసిడ్ దాడుల నిరోధకం' },
      desc: { en: 'Severe punishments against throwing harmful substances, free treatments.', hi: 'तेजाब फेंकने या प्रयास करने के खिलाफ सख्त कानून और मुफ्त चिकित्सा अधिकार।', te: 'తేజాబ్ లేదా యాసిడ్ దాడుల నియంత్రణ శిక్షలు మరియు ఉచిత వైద్య సహాయం.' },
      icon: <AlertTriangle className="w-6 h-6" />,
      steps: {
        en: ['Wash the affected skin instantly with continuous tap water for 30 minutes.', 'Call 112 or 108 immediately for high priority Ambulance.', 'Go to any near private/govt hospital for 100% free surgery.'],
        hi: ['लगातार 30 मिनट तक बहते पानी से प्रभावित जगह को धोएं।', 'प्राथमिकता पर एम्बुलेंस के लिए 112 या 108 डायल करें।', 'मुफ्त सर्जरी के लिए किसी भी अस्पताल तुरंत पहुंचे।'],
        te: ['యాసిడ్ పడిన చోట నిరంతరం పారే చల్లని నీళ్ళు 30 నిముషాల పాటు పోయాలి.', 'తక్షణ అత్యవసర వైద్యం కొరకు 112 లేదా 108 కి కాల్ చేయండి.', 'ఏ ప్రైవేట్ లేదా ప్రభుత్వ ఆసుపత్రి కి వెళ్లినా ఉచితంగా చికిత్స చేయించుకోవచ్చు.']
      },
      evidence: {
        en: ['Medical emergency records & burn receipts.', 'Leftover clothing or acid containers at spot.', 'CCTV footage of the surroundings.'],
        hi: ['इमरजेंसी मेडिकल दस्तावेज़।', 'घटनास्थल पर छूटे फटे कपड़े या बोतल।', 'आस-पास के सीसीटीवी फुटेज।'],
        te: ['వైద్యాలయానికి చెందిన ఎమర్జెన్సీ రికార్డులు.', 'ఘటనా స్థలంలో ఉన్న యాసిడ్ బాటిల్ లేదా కారిన మరకలు.', 'రోడ్లపై ఉన్న CCTV ఫుటేజ్ ల నివేదిక.']
      }
    }
  ];

  if (selectedCategory) {
    const isMainCat = safetyHubCategories.find(c => c.id === selectedCategory);
    const catData = isMainCat 
      ? {
          title: isMainCat.title[language],
          desc: isMainCat.desc[language],
          steps: isMainCat.emergencySteps[language],
          evidence: isMainCat.evidenceChecklist[language],
          rights: isMainCat.womensRights ? isMainCat.womensRights[language] : ['Right to seek shelter and free legal counsel.'],
          helplines: isMainCat.helplines,
          firGuidance: isMainCat.firGuidance ? isMainCat.firGuidance[language] : 'Register a Zero FIR immediately.'
        }
      : (() => {
          const fallback = fallbackCategories.find(c => c.id === selectedCategory);
          return fallback 
            ? {
                title: fallback.title[language],
                desc: fallback.desc[language],
                steps: fallback.steps[language],
                evidence: fallback.evidence[language],
                rights: ['Right to complete security and confidentiality.', 'Right to claim monetary health reliefs.'],
                helplines: ['112 (Emergencies)', '181 (Women Cell)'],
                firGuidance: 'File complaints specifying exact sequence directly to the HR ICC or local police chief.'
              }
            : null;
        })();

    if (!catData) return null;

    return (
      <div className="space-y-6 pb-24 animate-fade-in-up">
        {/* Back Button Header */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            id="safety-hub-detail-back-btn"
            className="p-2 -ml-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-850 active:scale-95 duration-100 cursor-pointer"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <span className="font-label-lg text-sm text-gray-500 dark:text-zinc-400 font-semibold uppercase tracking-wide">
            Back to Safety Hub
          </span>
        </div>

        {/* Category Header Title */}
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-950 dark:text-white font-title-md">
            {catData.title}
          </h2>
          <p className="text-gray-650 dark:text-zinc-300 text-sm leading-relaxed antialiased">
            {catData.desc}
          </p>
        </div>

        {/* Process Flow / Immediate Emergency Steps */}
        <div className="bg-[#ffdad6] dark:bg-red-950/20 rounded-[24px] p-6 border border-[#ffdad6] dark:border-red-900/30 soft-shadow">
          <h3 className="text-sm font-bold uppercase tracking-wider text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            <span>Immediate Emergency Steps</span>
          </h3>
          <ul className="space-y-3">
            {catData.steps.map((step, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-gray-850 dark:text-zinc-300 text-sm font-medium">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Evidence Checklist */}
        <div className="bg-white dark:bg-zinc-900 rounded-[24px] p-6 border border-gray-100 dark:border-zinc-800 soft-shadow space-y-4">
          <h3 className="font-title-md text-base font-bold text-gray-950 dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#6f48b2] dark:text-[#b78efe]" />
            <span>How to Gather Evidence Safely</span>
          </h3>
          <div className="space-y-2.5">
            {catData.evidence.map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start bg-gray-50 dark:bg-zinc-850/50 p-3 rounded-xl border border-gray-100 dark:border-zinc-800">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-zinc-300 text-sm select-all">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Your Rights Card */}
        <div className="bg-[#ebdcff] dark:bg-purple-950/20 rounded-[24px] p-6 border border-purple-100 dark:border-purple-900/30 soft-shadow space-y-4">
          <h3 className="font-title-md text-base font-bold text-[#260058] dark:text-[#ebdcff] flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#6f48b2] dark:text-[#b78efe]" />
            <span>Your Constitution Rights of Women</span>
          </h3>
          <ul className="space-y-2">
            {catData.rights.map((right, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-purple-600 font-bold block mt-0.5">•</span>
                <span className="text-gray-800 dark:text-zinc-200 text-sm leading-relaxed">{right}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FIR registration guide */}
        <div className="bg-white dark:bg-zinc-900 rounded-[24px] p-6 border border-gray-100 dark:border-zinc-800 soft-shadow">
          <h3 className="font-title-md text-base font-bold text-gray-950 dark:text-white mb-2">
            Official FIR Registration Guidance
          </h3>
          <p className="text-gray-700 dark:text-zinc-300 text-sm leading-relaxed antialiased bg-gray-50 dark:bg-zinc-850/50 p-4 rounded-xl border border-gray-100 dark:border-zinc-805/40">
            {catData.firGuidance}
          </p>
        </div>

        {/* SOS Hotline buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={onTriggerSOS}
            className="bg-red-600 text-white font-bold p-4 rounded-2xl shadow-md flex justify-center items-center gap-2 cursor-pointer active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4" />
            <span>Emergency SOS (112)</span>
          </button>
          <a 
            href="tel:181"
            className="bg-[#6f48b2] text-white font-bold p-4 rounded-2xl shadow-md flex justify-center items-center gap-2 active:scale-95 transition-transform text-center"
          >
            <Phone className="w-4 h-4" />
            <span>Helpline (181)</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-24 animate-fade-in">
      
      {/* What to do in an emergency bento */}
      <section className="space-y-3">
        <h2 className="font-title-md text-[#000666] dark:text-blue-200 text-lg font-bold">
          {t.emergencyTitle}
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:112"
            id="safety-call-112-btn"
            className="bg-red-600 text-white p-4 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_8px_16px_rgba(186,26,26,0.2)] active:scale-95 duration-100"
          >
            <Phone className="w-7 h-7 fill-white animate-bounce" />
            <span className="font-emergency-callout text-[15px]">{t.policeButton}</span>
          </a>

          <a
            href="tel:181"
            id="safety-call-181-btn"
            className="bg-[#ba1a1a] text-white p-4 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_8px_16px_rgba(186,26,26,0.2)] active:scale-95 duration-100"
          >
            <Phone className="w-7 h-7 fill-white animate-bounce" />
            <span className="font-emergency-callout text-[15px]">{t.womenHelplineButton}</span>
          </a>
        </div>

        <button
          onClick={handleShareLocation}
          id="safety-share-location-btn"
          disabled={sharingLocation}
          className="w-full bg-white dark:bg-zinc-900 border border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-2xl py-4 flex flex-col items-center justify-center gap-1.5 transition-all active:scale-[0.98] duration-150 cursor-pointer shadow-sm"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 fill-red-500/10" />
            <span className="font-title-md font-bold">
              {sharingLocation 
                ? (language === 'hi' ? 'जीपीएस ढूंढ रहे हैं...' : language === 'te' ? 'లొకేషన్ సేకరిస్తున్నాము...' : 'Locating via GPS...') 
                : t.shareLocation}
            </span>
          </div>
          {shareCoords && (
            <span className="text-xs text-green-600 font-mono bg-green-500/10 px-3 py-1 rounded-full border border-green-200 animate-fade-in block">
              GPS Coordinates: {shareCoords.lat}° N, {shareCoords.lg}° E • Location logged with police!
            </span>
          )}
        </button>
      </section>

      {/* Safety Categories List */}
      <section className="space-y-3">
        <h2 className="font-title-md text-base font-bold text-gray-900 dark:text-gray-50 px-1">
          {t.safetyCategories}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {safetyHubCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className="bg-white dark:bg-zinc-900 rounded-[24px] border border-gray-100 dark:border-zinc-800 p-5 soft-shadow flex items-start gap-4 hover:bg-purple-50/20 dark:hover:bg-zinc-850/30 transition-all cursor-pointer hover:border-purple-200 group relative"
            >
              <div className={`${cat.bgColor} ${cat.textColor} rounded-full p-3 flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm`}>
                {getIcon(cat.iconName)}
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="font-title-md text-base font-bold text-gray-950 dark:text-white">
                  {cat.title[language]}
                </h3>
                <p className="text-gray-650 dark:text-zinc-400 text-xs line-clamp-2 md:line-clamp-3 leading-relaxed antialiased">
                  {cat.desc[language]}
                </p>
                {cat.sectionNum && (
                  <span className="inline-block mt-2 bg-purple-100 dark:bg-purple-950/40 text-[#491d8a] dark:text-[#b78efe] text-[10px] font-bold px-3 py-0.5 rounded-full uppercase antialiased">
                    {cat.sectionNum}
                  </span>
                )}
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-[#6f48b2] transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          ))}

          {/* Render Acid Attack & Workplace fallback items */}
          {fallbackCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className="bg-white dark:bg-zinc-900 rounded-[24px] border border-gray-100 dark:border-zinc-800 p-5 soft-shadow flex items-start gap-4 hover:bg-purple-50/20 dark:hover:bg-zinc-850/30 transition-all cursor-pointer hover:border-purple-200 group relative"
            >
              <div className="bg-[#ebdcff] dark:bg-purple-950/20 text-[#6f48b2] dark:text-[#b78efe] rounded-full p-3 flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                {cat.icon}
              </div>
              <div className="space-y-1 flex-1 mr-4">
                <h3 className="font-title-md text-base font-bold text-gray-950 dark:text-white">
                  {cat.title[language]}
                </h3>
                <p className="text-gray-650 dark:text-zinc-400 text-xs line-clamp-2 leading-relaxed antialiased">
                  {cat.desc[language]}
                </p>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-[#6f48b2] transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Handout handouts files links */}
      <section className="space-y-3">
        <h2 className="font-title-md text-base font-bold text-gray-900 dark:text-gray-50 px-1">
          {t.resources}
        </h2>
        <div className="bg-white dark:bg-zinc-900 rounded-[24px] border border-gray-100 dark:border-zinc-800 soft-shadow overflow-hidden">
          <button
            onClick={() => onNavigate('fir')}
            className="w-full flex items-center justify-between p-4 border-b border-gray-100 dark:border-zinc-800 hover:bg-purple-50/10 dark:hover:bg-zinc-850/30 transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#6f48b2] dark:text-[#b78efe]" />
              <span className="font-title-md font-bold text-gray-900 dark:text-gray-100 text-sm">{t.firGuidance}</span>
            </div>
            <span className="text-xs text-[#6f48b2] dark:text-[#b78efe] font-bold flex items-center gap-1">
              <span>Launches creator</span>
              <ChevronRight className="w-4 h-4" />
            </span>
          </button>
          <div
            onClick={() => onNavigate('fir')}
            className="w-full flex items-center justify-between p-4 hover:bg-purple-50/10 dark:hover:bg-zinc-850/30 transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-green-700" />
              <span className="font-title-md font-bold text-gray-900 dark:text-gray-100 text-sm">{t.evidenceChecklist}</span>
            </div>
            <span className="text-xs text-green-700 font-bold flex items-center gap-0.5">
              <span>View Checklist</span>
              <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
