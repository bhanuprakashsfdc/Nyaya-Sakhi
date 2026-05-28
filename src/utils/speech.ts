import { Language } from '../types';

let currentUtterance: SpeechSynthesisUtterance | null = null;

export function speakText(text: string, lang: Language) {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    console.warn('Speech synthesis is not supported in this browser.');
    return;
  }

  // Cancel any active speech to prevent queuing
  window.speechSynthesis.cancel();

  // Strip HTML or markdown tags to read cleanly
  const cleanText = text.replace(/[*#`_\[\]()]/g, ' ').replace(/\s+/g, ' ').trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  currentUtterance = utterance;

  // Assign specific locales for Indian speakers
  switch (lang) {
    case 'hi':
      utterance.lang = 'hi-IN';
      break;
    case 'te':
      utterance.lang = 'te-IN';
      break;
    case 'bn':
      utterance.lang = 'bn-IN';
      break;
    case 'mr':
      utterance.lang = 'mr-IN';
      break;
    case 'ta':
      utterance.lang = 'ta-IN';
      break;
    default:
      utterance.lang = 'en-IN'; // Indian Accent English
      break;
  }

  utterance.rate = 0.95; // Slightly slower for clear instruction
  utterance.pitch = 1.0;

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

export function isSpeakingActive(): boolean {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    return window.speechSynthesis.speaking;
  }
  return false;
}
