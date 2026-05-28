import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Sparkles, Phone, HelpCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { Language, ChatMessage } from '../types';
import { translations } from '../data/lessons';

interface SakhiBotViewProps {
  language: Language;
  onTriggerSOS: () => void;
}

export default function SakhiBotView({ language, onTriggerSOS }: SakhiBotViewProps) {
  const t = translations[language];

  const defaultMessages: Partial<Record<Language, ChatMessage[]>> & Record<'en', ChatMessage[]> = {
    en: [
      {
        id: 'init-1',
        sender: 'bot',
        text: 'Hello! I am your Nyaya Sakhi. I can explain any law under the Bharatiya Nyaya Sanhita (BNS) 2023 in incredibly simple terms, just like a supportive friend. Tell me, what can I help you understand today?',
        timestamp: 'Just now'
      }
    ],
    hi: [
      {
        id: 'init-1',
        sender: 'bot',
        text: 'नमस्ते! मैं आपकी न्याय सखी हूँ। मैं भारतीय न्याय संहिता (BNS) 2023 के तहत किसी भी कानून को आपके लिए बहुत ही आसान भाषा में समझा सकती हूँ, बिल्कुल एक प्यारी सहेली की तरह। बताइए, आज मैं आपके किस प्रश्न का समाधान करूँ?',
        timestamp: 'अभी-अभी'
      }
    ],
    te: [
      {
        id: 'init-1',
        sender: 'bot',
        text: 'నమస్తే! నేను మీ న్యాయ సఖిని. భారతీయ న్యాయ సంహిత (BNS) 2023 చట్టాలను నేను మీకు చాలా ప్రాథమిక రూపంలో ఒక మంచి స్నేహితురాలిలాగా వివరించగలను. ఈరోజు మీకు ఏ చట్టం గురించి తెలుసుకోవాలని ఉంది?',
        timestamp: 'ఇప్పుడే'
      }
    ]
  };

  const [messages, setMessages] = useState<ChatMessage[]>(defaultMessages[language] || defaultMessages['en']);
  const [textInput, setTextInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false);
  const [voiceSimulatedText, setVoiceSimulatedText] = useState('');

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Reset chat helper
  const handleClearMessages = () => {
    setMessages(defaultMessages[language] || defaultMessages['en']);
  };

  // Pre-loaded chips suggestion tags
  const chipsListMap: Partial<Record<Language, string[]>> & Record<'en', string[]> = {
    en: [
      'What is an FIR?',
      'Help: Someone is stalking me online',
      'Tell me my equal property rights',
      'What is Section 74 BNS?'
    ],
    hi: [
      'एफआईआर (FIR) क्या है?',
      'मदद करें: कोई ऑनलाइन पीछा (stalk) कर रहा है',
      'पिता की संपत्ति में अधिकार बताएं',
      'बीएनएस धारा 74 (Sec 74) क्या है?'
    ],
    te: [
      'FIR అంటే ఏమిటి?',
      'సహాయం: ఎవరో ఆన్‌లైన్‌లో వేధిస్తున్నారు',
      'ఆస్తి హక్కుల గురించి వివరించండి',
      'సెక్షన్ 74 చట్టం అంటే ఏమిటి?'
    ]
  };
  const chipsKeys = chipsListMap[language] || chipsListMap['en'];

  // Send API request
  const handleSendMessage = async (rawMessage: string) => {
    const trimmed = rawMessage.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setTextInput('');
    setLoading(true);

    try {
      // Call Express full-stack API endpoint
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: trimmed,
          history: messages.slice(-6), // pass recent messages to allow conversational back & forth
          language: language
        })
      });

      if (!res.ok) {
        throw new Error('Server responded with error');
      }

      const data = await res.json();
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: data.text || 'I could not process that fully. Please ask again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: `error-${Date.now()}`,
        sender: 'bot',
        text: language === 'en' 
          ? "I am finding it hard to reach the network right now. If you are in distress, please press the red EMERGENCY SOS button instantly or call 112 / 181 immediately! I'm here for you." 
          : language === 'hi' 
            ? "मैं अभी नेटवर्क से जुड़ने में असमर्थ हूँ। यदि आप किसी संकट में हैं, तो कृपया तुरंत लाल आपातकालीन SOS बटन दबाएं या सीधे 112 / 181 पर कॉल करें!"
            : "ప్రస్తుతం నెట్‌వర్క్ కనెక్షన్ లో సమస్య ఉంది. ఒకవేళ ఆపదలో ఉంటే దయచేసి ఎరుపు అత్యవసర SOS బటన్ నొక్కండి లేదా 112 / 181 కాల్ చేయండి!",
        timestamp: 'Just now'
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  // Simulate Mic voice triggers
  const handleVoiceSimulate = () => {
    setVoiceActive(true);
    setVoiceSimulatedText(language === 'en' ? 'Sensing voice...' : language === 'hi' ? 'आवाज़ पहचान रहे हैं...' : 'అప్రమత్తంగా వింటున్నాను...');

    const voiceOptions = {
      en: 'What is a Zero FIR copy cost?',
      hi: 'ज़ीरो एफआईआर कॉपी की कीमत क्या है?',
      te: 'జీరో ఎఫ్.ఐ.ఆర్ కాపీ ఉచితమేనా?'
    }[language];

    setTimeout(() => {
      setTextInput(voiceOptions);
      setVoiceActive(false);
      setVoiceSimulatedText('');
    }, 2000);
  };

  return (
    <div className="flex flex-col h-[680px] md:h-[720px] bg-white dark:bg-[#111212] rounded-[30px] border border-gray-100 dark:border-zinc-800 soft-shadow overflow-hidden relative animate-fade-in text-gray-900">
      
      {/* Bot Chat Banner Header */}
      <div className="bg-[#6f48b2] text-white p-4 flex items-center justify-between border-b border-[#5a3696] relative overflow-hidden flex-shrink-0">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
        
        <div className="flex items-center gap-3 z-10">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white border-2 border-purple-200 select-none shadow-md flex-shrink-0">
            <img 
              alt="Nyaya Sakhi AI assistant" 
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK_UKg7a2vp97j9x6r0N1FeqXMuOuBFgrIdPaFXXvX_CKOHrIf5L30U7g6RM8OsaZm-TtnvZTYqvY7bG8AzFIz9kLyMNMi4QiVQVSKz7oibT6g-e0FWA_OdH4Y7f80IMEEo-0KNxaayeTJpXkrB3O1HbMbx3mRwL-T9M3Q6FQ_-HdcAiFTu6c8T8BWPqMImhKWhLZQgz17RfE603_FA-9gYS3stWMFR_4hJZempF3pHgmznY_mrTfLBmFhCvEv1qod7KHowsobpIY"
              className="w-full h-full object-cover"
            />
            {/* active green bubble */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-sm tracking-tight flex items-center gap-1.5 font-title-md">
              <span>Nyaya Sakhi AI</span>
              <Sparkles className="w-3.5 h-3.5 text-[#e1d5eb] fill-[#e1d5eb]/20" />
            </h3>
            <p className="text-[10px] text-purple-100 tracking-wide font-medium">Empathetic Legal Supporter</p>
          </div>
        </div>

        <button 
          onClick={handleClearMessages}
          className="text-white bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-all cursor-pointer active:scale-95 duration-100 flex-shrink-0"
          title="Restart Conversation"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Feed View port */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50 dark:bg-zinc-950/20">
        {messages.map((msg) => {
          const isBot = msg.sender === 'bot';
          return (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[85%] md:max-w-[80%] ${isBot ? 'mr-auto items-start' : 'ml-auto flex-row-reverse items-end'}`}
            >
              {isBot && (
                <div className="w-8 h-8 rounded-full overflow-hidden bg-white border border-purple-100 shadow-sm flex-shrink-0 select-none">
                  <img 
                    alt="Nyaya Sakhi avatar bubble" 
                    referrerPolicy="no-referrer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK_UKg7a2vp97j9x6r0N1FeqXMuOuBFgrIdPaFXXvX_CKOHrIf5L30U7g6RM8OsaZm-TtnvZTYqvY7bG8AzFIz9kLyMNMi4QiVQVSKz7oibT6g-e0FWA_OdH4Y7f80IMEEo-0KNxaayeTJpXkrB3O1HbMbx3mRwL-T9M3Q6FQ_-HdcAiFTu6c8T8BWPqMImhKWhLZQgz17RfE603_FA-9gYS3stWMFR_4hJZempF3pHgmznY_mrTfLBmFhCvEv1qod7KHowsobpIY"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="space-y-1">
                <div 
                  className={`p-3.5 rounded-2xl text-xs font-semibold leading-relaxed shadow-sm  whitespace-pre-wrap select-text antialiased ${
                    isBot 
                      ? 'bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-105 border border-gray-100 dark:border-zinc-805/30 rounded-tl-none' 
                      : 'bg-[#6f48b2] text-white rounded-br-none font-bold'
                  }`}
                >
                  {msg.text}
                </div>
                <p className={`text-[9px] text-gray-400 font-bold px-1 ${isBot ? 'text-left' : 'text-right'}`}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {loading && (
          <div className="flex gap-3 max-w-[75%] mr-auto items-start">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white border border-purple-100 flex-shrink-0 select-none">
              <img 
                alt="Nyaya Sakhi waiting indicator" 
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK_UKg7a2vp97j9x6r0N1FeqXMuOuBFgrIdPaFXXvX_CKOHrIf5L30U7g6RM8OsaZm-TtnvZTYqvY7bG8AzFIz9kLyMNMi4QiVQVSKz7oibT6g-e0FWA_OdH4Y7f80IMEEo-0KNxaayeTJpXkrB3O1HbMbx3mRwL-T9M3Q6FQ_-HdcAiFTu6c8T8BWPqMImhKWhLZQgz17RfE603_FA-9gYS3stWMFR_4hJZempF3pHgmznY_mrTfLBmFhCvEv1qod7KHowsobpIY"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-3.5 rounded-2xl rounded-tl-none text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce delay-75" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce delay-150" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce delay-225" />
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Suggestion Chips Tag area */}
      <div className="px-3 py-2 border-t border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-zinc-900/15 flex overflow-x-auto gap-2 scrollbar-none flex-shrink-0">
        {chipsKeys.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(chip)}
            className="bg-white dark:bg-zinc-900 hover:bg-purple-50 hover:border-purple-200 dark:hover:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 px-3.5 py-1.5 rounded-full text-xs font-bold text-zinc-900 dark:text-zinc-200 cursor-pointer whitespace-nowrap active:scale-[0.97] transition-all flex-shrink-0"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Prompt inputs and microfone voice simulations */}
      <div className="p-3 border-t border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex gap-2 items-center relative overflow-hidden flex-shrink-0">
        
        {/* Voice indicator bar overlay */}
        {voiceActive && (
          <div className="absolute inset-0 bg-red-500/10 backdrop-blur-sm border-t border-red-500 flex items-center justify-center gap-2 animate-fade-in z-20">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-red-600 font-bold text-xs">{voiceSimulatedText}</span>
          </div>
        )}

        {/* Voice Recognition Simulator Mic Icon */}
        <button
          onClick={handleVoiceSimulate}
          id="sakhi-chat-mic-trigger"
          className="p-3 bg-red-50 text-red-600 rounded-2xl border border-red-100 hover:bg-red-100 active:scale-95 duration-100 cursor-pointer flex-shrink-0"
          title="Simulate Voice input"
        >
          <Mic className="w-5 h-5" />
        </button>

        {/* Text Area Input */}
        <input
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage(textInput);
          }}
          placeholder={t.askSakhi}
          className="flex-1 text-xs md:text-sm p-3.5 border border-gray-100 dark:border-zinc-800 rounded-2xl bg-gray-50 focus:outline-[#6f48b2] text-gray-950"
          type="text"
          id="sakhi-chat-input"
        />

        {/* Send arrow icon */}
        <button
          onClick={() => handleSendMessage(textInput)}
          disabled={!textInput.trim() || loading}
          id="sakhi-chat-submit"
          className={`p-3.5 rounded-2xl flex items-center justify-center transition-all cursor-pointer flex-shrink-0 active:scale-95 ${
            !textInput.trim() || loading 
              ? 'bg-gray-100 text-gray-400 dark:bg-zinc-900 cursor-not-allowed' 
              : 'bg-[#6f48b2] text-white hover:bg-[#593994]'
          }`}
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
