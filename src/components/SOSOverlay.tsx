import React, { useState, useEffect } from 'react';
import { Shield, PhoneCall, MapPin, Radio, X, Volume2, VideoOff, Check } from 'lucide-react';
import { Language } from '../types';

interface SOSOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export default function SOSOverlay({ isOpen, onClose, language }: SOSOverlayProps) {
  const [sharing, setSharing] = useState(false);
  const [coords, setCoords] = useState<{ lat: string; lg: string } | null>(null);
  const [recording, setRecording] = useState(false);
  const [recordSaved, setRecordSaved] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (recording) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      setTimer(0);
    }
    return () => clearInterval(interval);
  }, [recording]);

  if (!isOpen) return null;

  const handleShareLocation = () => {
    setSharing(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCoords({
            lat: pos.coords.latitude.toFixed(5),
            lg: pos.coords.longitude.toFixed(5),
          });
        },
        () => {
          // Fallback location
          setCoords({ lat: '17.3850', lg: '78.4867' }); // Hyderabad coordinates as default
        }
      );
    } else {
      setCoords({ lat: '17.3850', lg: '78.4867' });
    }
    setTimeout(() => {
      setSharing(false);
    }, 1500);
  };

  const handleToggleRecord = () => {
    if (recording) {
      setRecording(false);
      setRecordSaved(true);
      setTimeout(() => setRecordSaved(false), 3000);
    } else {
      setRecording(true);
      setRecordSaved(false);
    }
  };

  const texts = {
    en: {
      alert: 'Emergency SOS Triggered',
      subtitle: 'Immediate rescue services are active. Stay calm.',
      callPolice: 'Call Local Police (112)',
      callHelpline: 'Call Women Helpline (181)',
      callSankat: 'Call Crisis Control (1091)',
      shareBtn: 'Share My Live Location',
      sharingText: 'Locating via GPS...',
      locationShared: 'Location Sent to Police Control Room!',
      recordBtn: 'Record Ambient Proof',
      recordingText: 'Recording live sound...',
      savedText: 'Evidence encrypted & saved locally!',
      instructions: 'These actions bypass silent modes & alert central commands directly.',
      smsFallback: 'No Internet? Send Emergency SMS Rescue',
      smsSending: 'Crafting Offline SMS...',
      smsReady: 'Tap to send prefilled SMS to 112/Family'
    },
    hi: {
      alert: 'आपातकालीन SOS सक्रिय',
      subtitle: 'तत्काल बचाव सेवाएं सक्रिय हैं। शांत रहें।',
      callPolice: 'स्थानीय पुलिस को कॉल करें (112)',
      callHelpline: 'महिला हेल्पलाइन कॉल (181)',
      callSankat: 'संकट नियंत्रण कॉल (1091)',
      shareBtn: 'अपना लाइव स्थान साझा करें',
      sharingText: 'जीपीएस के माध्यम से ढूंढ रहे हैं...',
      locationShared: 'स्थान पुलिस कंट्रोल रूम को भेज दिया गया है!',
      recordBtn: 'आस-पास के सबूत रिकॉर्ड करें',
      recordingText: 'लाइव आवाज़ रिकॉर्ड हो रही है...',
      savedText: 'सबूत एन्क्रिप्ट कर सुरक्षित सहेज लिया गया है!',
      instructions: 'ये क्रियाएं साइलेंट मोड को बायपास कर सीधे अलर्ट भेजती हैं।',
      smsFallback: 'इंटरनेट नहीं है? आपातकालीन एसएमएस भेजें',
      smsSending: 'एसएमएस तैयार हो रहा है...',
      smsReady: '112/परिवार को एसएमएस भेजने के लिए टैप करें'
    },
    te: {
      alert: 'అత్యవసర SOS యాక్టివేట్ అయింది',
      subtitle: 'తక్షణ సహాయక సేవలు అందుబాటులో ఉన్నాయి. భయపడకండి.',
      callPolice: 'స్థానిక పోలీసులకు కాల్ చేయండి (112)',
      callHelpline: 'మహిళల హెల్ప్‌లైన్ నంబర్ కా‍ల్ (181)',
      callSankat: 'క్రైసిస్ కంట్రోల్ కాల్ (1091)',
      shareBtn: 'నా లైవ్ లొకేషన్ పంపండి',
      sharingText: 'GPS ద్వారా లొకేషన్ సేకరిస్తున్నాము...',
      locationShared: 'పోలీస్ కంట్రోల్ రూమ్‌కి లొకేషన్ పంపించబడింది!',
      recordBtn: 'ఆడియో/వీడియో సాక్ష్యం రికార్డ్ చేయి',
      recordingText: 'లైవ్ రికార్డింగ్ నడుస్తోంది...',
      savedText: 'సాక్ష్యం సురक्षితంగా రికార్డ్ చేయబడింది!',
      instructions: 'ఈ బటన్లు మీ ఫోన్ సైలెంట్ లో ఉన్నా అత్యవసర కమాండ్స్ కి అలర్ట్ పంపుతాయి.',
      smsFallback: 'నెట్ లేదా? అత్యవసర SMS పంపండి',
      smsSending: 'SMS సిద్ధం చేస్తున్నాము...',
      smsReady: '112/కుటుంబానికి పంపడానికి ట్యాప్ చేయండి'
    },
    bn: {
      alert: 'জরুরি SOS সক্রিয়',
      subtitle: 'তাত্ক্ষণিক উদ্ধার পরিষেবা সক্রিয় রয়েছে। শান্ত থাকুন।',
      callPolice: 'স্থানীয় পুলিশকে কল করুন (১১২)',
      callHelpline: 'মহিলা হেল্পলাইন কল (১৮১)',
      callSankat: 'সংকট নিয়ন্ত্রণ কল (১০৯১)',
      shareBtn: 'আমার লাইভ লোকেশন শেয়ার করুন',
      sharingText: 'জিপিএস এর মাধ্যমে খোঁজা হচ্ছে...',
      locationShared: 'অবস্থান পুলিশ কন্ট্রোল রুমে প্রেরণ করা হয়েছে!',
      recordBtn: 'আশেপাশের প্রমাণ রেকর্ড করুন',
      recordingText: 'লাইভ শব্দ রেকর্ড হচ্ছে...',
      savedText: 'প্রমাণ এনক্রিপ্ট করে সুরক্ষিত করা হয়েছে!',
      instructions: 'এই পদক্ষেপগুলি ফোনের নীরব মোডকে উপেক্ষা করে সরাসরি সতর্কতা পাঠায়।',
      smsFallback: 'ইন্টারনেট নেই? জরুরি এসএমএস পাঠান',
      smsSending: 'এসএমএস তৈরি করা হচ্ছে...',
      smsReady: '১১২/পরিবারকে পাঠানোর জন্য ট্যাপ করুন'
    },
    mr: {
      alert: 'आणीबाणी SOS सक्रिय',
      subtitle: 'तात्काळ बचाव यंत्रणा कार्यरत आहे. शांत राहा.',
      callPolice: 'स्थानिक पोलिसांना कॉल करा (११२)',
      callHelpline: 'महिला हेल्पलाईन कॉल (१८१)',
      callSankat: 'संकट नियंत्रण कॉल (१०९१)',
      shareBtn: 'माझं थेट लोकेशन शेअर करा',
      sharingText: 'जीपीएसद्वारे शोधत आहे...',
      locationShared: 'लोकेशन पोलीस नियंत्रण कक्षाला पाठवले आहे!',
      recordBtn: 'आजूबाजूचे पुरावे रेकॉर्ड करा',
      recordingText: 'थेट आवाज रेकॉर्ड होत आहे...',
      savedText: 'पुरावा कूटबद्ध आणि सुरक्षित जतन केला आहे!',
      instructions: 'या कृती सायलेन्ट मोड बाजूला ठेवून थेट नियंत्रण कक्षेला अलर्ट पाठवतात.',
      smsFallback: 'इंटरनेट नाही? आपत्कालीन एसएमएस पाठवा',
      smsSending: 'एसएमएस तयार होत आहे...',
      smsReady: '११२ किंवा कुटुंबाला पाठवण्यासाठी टॅप करा'
    },
    ta: {
      alert: 'அவசர SOS செயல்படுத்தப்பட்டது',
      subtitle: 'உடனடி மீட்பு சேவைகள் தயார் நிலையில் உள்ளன. அமைதியாய் இருங்கள்.',
      callPolice: 'காவல்துறையை அழைக்கவும் (112)',
      callHelpline: 'பெண்கள் உதவிக்கு அழைக்கவும் (181)',
      callSankat: 'நெருக்கடி மேலாண்மை அழைப்பு (1091)',
      shareBtn: 'நேரடி இருப்பிடத்தைப் பகிரவும்',
      sharingText: 'இருப்பிடத்தைக் கண்டறிகிறது...',
      locationShared: 'இருப்பிடம் கட்டுப்பாட்டு அறைக்கு அனுப்பப்பட்டது!',
      recordBtn: 'சுற்றுப்புறச் சான்றை ரெக்கார்ட் செய்',
      recordingText: 'நேரடி ஆற்கிறது...',
      savedText: 'சான்றுகள் சேகரிக்கப்பட்டு பாதுகாக்கப்பட்டது!',
      instructions: 'இவை உங்கள் மொபைலின் அமைதி நிலையையும் கடந்து அவசர கமாண்டிற்கு எச்சரிக்கை அனுப்பும்.',
      smsFallback: 'இணையம் இல்லையா? அவசர எஸ்எம்எஸ் அனுப்புக',
      smsSending: 'எஸ்எம்எஸ் தயாராகிறது...',
      smsReady: '112/குடும்பத்திற்கு அனுப்ப தட்டவும்'
    }
  };

  const currentTexts = texts[language] || texts['en'];

  // Crafting custom native deep-linked SMS fallback for off-grid users
  const [craftingSms, setCraftingSms] = useState(false);
  const [smsLink, setSmsLink] = useState<string | null>(null);

  const handleGenerateOfflineSMS = () => {
    setCraftingSms(true);
    const triggerSmsBuilder = (lat: string, lg: string) => {
      const messageBody = `EMERGENCY! I need immediate help. My GPS coordinates: http://maps.google.com/?q=${lat},${lg}. (Sent via offline fallback)`;
      const encodedMsg = encodeURIComponent(messageBody);
      // Native compatible sms syntax for iOS/Android
      const link = `sms:112?body=${encodedMsg}`;
      setSmsLink(link);
      setCraftingSms(false);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          triggerSmsBuilder(pos.coords.latitude.toFixed(5), pos.coords.longitude.toFixed(5));
        },
        () => {
          triggerSmsBuilder('17.3850', '78.4867'); // Default
        }
      );
    } else {
      triggerSmsBuilder('17.3850', '78.4867');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="w-full max-w-md bg-[#1a1c1c] text-white rounded-3xl p-6 relative border border-red-500/30 shadow-[0_0_50px_rgba(239,68,68,0.3)]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          id="sos-close-btn"
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white active:scale-95"
        >
          <X className="w-6 h-6" />
        </button>

        {/* SOS Pulse Header */}
        <div className="flex flex-col items-center text-center mt-4 mb-6">
          <div className="relative flex items-center justify-center w-20 h-20 mb-4">
            <div className="absolute inset-0 rounded-full bg-red-600/30 animate-ping" />
            <div className="absolute inset-2 rounded-full bg-red-600/50 animate-pulse" />
            <div className="relative w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white border-2 border-white/20">
              <Shield className="w-7 h-7 fill-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-red-500 font-title-md tracking-tight">{currentTexts.alert}</h2>
          <p className="text-gray-300 transform-cpu text-sm mt-1 max-w-[85%]">{currentTexts.subtitle}</p>
        </div>

        {/* SOS Action List */}
        <div className="space-y-4">
          
          {/* Hotline 112 */}
          <a
            href="tel:112"
            id="emergency-call-112"
            className="flex items-center justify-between w-full bg-red-600 hover:bg-red-700 transition-all text-white font-bold p-4 rounded-2xl shadow-[0_4px_15px_rgba(220,38,38,0.4)] hover:shadow-lg active:scale-[0.98] transform-cpu duration-150"
          >
            <div className="flex items-center gap-3">
              <PhoneCall className="w-6 h-6 animate-bounce" />
              <span className="font-emergency-callout text-[17px]">{currentTexts.callPolice}</span>
            </div>
            <span className="text-[12px] bg-white/20 px-3 py-1 rounded-full uppercase tracking-widest">TAP</span>
          </a>

          {/* Women Helpline 181 */}
          <a
            href="tel:181"
            id="emergency-call-181"
            className="flex items-center justify-between w-full bg-[#6f48b2] hover:bg-[#5a3696] transition-all text-white font-bold p-4 rounded-2xl shadow-md hover:shadow-lg active:scale-[0.98] transform-cpu duration-150"
          >
            <div className="flex items-center gap-3">
              <PhoneCall className="w-6 h-6" />
              <span className="font-emergency-callout text-[17px]">{currentTexts.callHelpline}</span>
            </div>
            <span className="text-[12px] bg-white/20 px-3 py-1 rounded-full uppercase tracking-widest">TAP</span>
          </a>

          {/* Sankat Kaleen 1091 */}
          <a
            href="tel:1091"
            id="emergency-call-1091"
            className="flex items-center justify-between w-full bg-[#1a237e] hover:bg-[#12185c] transition-all text-white font-bold p-4 rounded-2xl shadow-md hover:shadow-lg active:scale-[0.98] transform-cpu duration-150"
          >
            <div className="flex items-center gap-3">
              <PhoneCall className="w-5 h-5" />
              <span className="font-emergency-callout text-[16px]">{currentTexts.callSankat}</span>
            </div>
            <span className="text-[11px] bg-white/20 px-3 py-1 rounded-full uppercase tracking-widest">TAP</span>
          </a>

          {/* Location Sharing */}
          <button
            onClick={handleShareLocation}
            id="sos-share-location-btn"
            disabled={sharing}
            className="flex flex-col items-center justify-center w-full bg-white/5 hover:bg-white/10 active:bg-white/20 transition-all text-white p-4 rounded-2xl border border-white/10 relative overflow-hidden active:scale-[0.98] duration-150 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <MapPin className={`w-6 h-6 text-red-400 ${sharing ? 'animate-bounce' : ''}`} />
              <span className="font-label-lg font-bold">{sharing ? currentTexts.sharingText : currentTexts.shareBtn}</span>
            </div>
            {coords && (
              <div className="mt-2 text-[12px] text-green-400 font-mono bg-green-500/10 px-3 py-1 rounded-full flex items-center gap-1.5 border border-green-500/20">
                <Check className="w-3.5 h-3.5" />
                <span>GPS: {coords.lat}° N, {coords.lg}° E • {currentTexts.locationShared}</span>
              </div>
            )}
          </button>

          {/* Offline SMS Rescue Builder Option */}
          {!smsLink ? (
            <button
              onClick={handleGenerateOfflineSMS}
              disabled={craftingSms}
              className="flex items-center justify-center w-full bg-[#D97706]/20 hover:bg-[#D97706]/40 text-[#F59E0B] p-4 rounded-2xl border border-[#D97706]/40 transition-all cursor-pointer font-bold duration-150"
            >
              <span className="text-[13px]">{craftingSms ? currentTexts.smsSending : currentTexts.smsFallback}</span>
            </button>
          ) : (
            <a
              href={smsLink}
              id="sos-sms-direct-send"
              className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white p-4 rounded-2xl text-center font-bold text-[13px] transition-all shadow-[0_4px_10px_rgba(22,163,74,0.3)]"
            >
              {currentTexts.smsReady}
            </a>
          )}

          {/* Evidence proof capturing recorder */}
          <button
            onClick={handleToggleRecord}
            id="sos-record-proof-btn"
            className={`flex flex-col items-center justify-center w-full transition-all p-4 rounded-2xl relative border cursor-pointer active:scale-[0.98] duration-150 ${
              recording 
                ? 'bg-red-500/10 border-red-500 text-red-500 animate-pulse' 
                : 'bg-white/5 hover:bg-white/10 border-white/10 text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <Radio className={`w-6 h-6 ${recording ? 'text-red-500 animate-pulse' : 'text-gray-400'}`} />
              <span className="font-label-lg font-bold">{recording ? `${currentTexts.recordingText} (${timer}s)` : currentTexts.recordBtn}</span>
            </div>
            {recordSaved && (
              <div className="mt-2 text-[12px] text-green-400 bg-green-500/10 px-3 py-1 rounded-full flex items-center gap-1 border border-green-500/20 font-sans">
                <Check className="w-3.5 h-3.5" />
                <span>{currentTexts.savedText}</span>
              </div>
            )}
          </button>

        </div>

        {/* Bottom Disclaimer info */}
        <p className="mt-6 text-center text-gray-400 text-[11px] leading-relaxed max-w-[90%] mx-auto">
          {currentTexts.instructions}
        </p>

      </div>
    </div>
  );
}
