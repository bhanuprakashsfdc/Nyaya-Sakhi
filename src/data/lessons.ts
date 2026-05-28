import { MicroLesson, QuizItem, TranslationSet, Language } from '../types';

export const translations: Record<Language, TranslationSet> = {
  en: {
    welcomeTitle: 'Know Your Rights Easily',
    welcomeSub: 'Empowering you with accessible legal knowledge and trusted support.',
    searchPlaceholder: 'Search crimes, rights, punishments...',
    emergencySos: 'Emergency SOS',
    safetyHub: 'Women Safety Hub',
    popularTopics: 'Popular Topics',
    recentlyViewed: 'Recently Viewed Laws',
    viewAll: 'View All',
    home: 'Home',
    safety: 'Safety',
    learning: 'Learning',
    sakhiBot: 'Sakhi Bot',
    backToLearning: 'Back to Learning',
    whatThisMeans: 'What this means',
    realLifeExample: 'Real-life example',
    thePunishment: 'The Punishment',
    whatWomenShouldKnow: 'What women should know',
    actionPlan: 'Action Plan: If this happens',
    commonQuestions: 'Common Questions',
    emergencyTitle: 'What to do in an emergency?',
    policeButton: 'Call 112 (Police)',
    womenHelplineButton: 'Call 181 (Women)',
    shareLocation: 'Share Live Location',
    safetyCategories: 'Safety Categories',
    resources: 'Resources & Handouts',
    firGuidance: 'FIR Guidance Step-by-Step',
    evidenceChecklist: 'Critical Evidence Checklist',
    askSakhi: 'Ask legal questions simply',
    voiceInputSim: 'Tap microphone to speak simply',
    microTitle: 'Micro Learning',
    lessonsTitle: '2-Minute Lessons',
    quizzesTitle: 'Legal Quizzes',
    didYouKnow: 'Did You Know?',
    dailyLegalTip: 'Daily Legal Tip',
    progressText: 'Your Learning Journey Progress',
    quizScore: 'Score: ',
    firAssistant: 'Interactive FIR Assistant',
    firFormat: 'FIR Format Template'
  },
  hi: {
    welcomeTitle: 'अपने अधिकार आसानी से जानें',
    welcomeSub: 'सुलभ कानूनी ज्ञान और विश्वसनीय सहायता से आपको सशक्त बनाना।',
    searchPlaceholder: 'अपराध, अधिकार, सजा खोजें...',
    emergencySos: 'आपातकालीन SOS',
    safetyHub: 'महिला सुरक्षा हब',
    popularTopics: 'लोकप्रिय विषय',
    recentlyViewed: 'हाल ही में देखे गए कानून',
    viewAll: 'सभी देखें',
    home: 'मुख्य पृष्ठ',
    safety: 'सुरक्षा हब',
    learning: 'शिक्षा',
    sakhiBot: 'सखी बॉट',
    backToLearning: 'वापस शिक्षा पर जाएं',
    whatThisMeans: 'इसका क्या अर्थ है',
    realLifeExample: 'वास्तविक जीवन का उदाहरण',
    thePunishment: 'कानूनी सजा',
    whatWomenShouldKnow: 'महिलाओं को क्या पता होना चाहिए',
    actionPlan: 'कार्य योजना: यदि ऐसा होता है',
    commonQuestions: 'सामान्य प्रश्न (FAQ)',
    emergencyTitle: 'आपातकाल में क्या करें?',
    policeButton: 'कॉल करें 112 (पुलिस)',
    womenHelplineButton: 'कॉल करें 181 (महिलाएं)',
    shareLocation: 'लाइव साझा करें स्थान (लोकेशन)',
    safetyCategories: 'सुरक्षा श्रेणियां',
    resources: 'संसाधन और हैंडआउट',
    firGuidance: 'एफआईआर (FIR) मार्गदर्शन चरण-दर-चरण',
    evidenceChecklist: 'महत्वपूर्ण साक्ष्य चेकलिस्ट',
    askSakhi: 'कानूनी सवाल सीधे पूछें',
    voiceInputSim: 'बोलने के लिए माइक्रोफ़ोन दबाएं',
    microTitle: 'माइक्रो लर्निंग पोर्टल',
    lessonsTitle: '2-मिनट के पाठ',
    quizzesTitle: 'कानूनी क्विज़ चुनौती',
    didYouKnow: 'क्या आप जानते हैं?',
    dailyLegalTip: 'दैनिक कानूनी सलाह',
    progressText: 'आपकी सीखने की यात्रा प्रगति',
    quizScore: 'अंक: ',
    firAssistant: 'इंटरैक्टिव एफआईआर सहायक',
    firFormat: 'एफआईआर प्रारूप टेम्पलेट'
  },
  te: {
    welcomeTitle: 'మీ హక్కులను సులభంగా తెలుసుకోండి',
    welcomeSub: 'అందుబాటులో ఉండే చట్టపరమైన విజ్ఞానం మరియు నమ్మకమైన మద్దతుతో మిమ్మల్ని శక్తివంతం చేయడం.',
    searchPlaceholder: 'నేరాలు, హక్కులు, శిక్షలు వెతకండి...',
    emergencySos: 'అత్యవసర SOS',
    safetyHub: 'మహిళా సేఫ్టీ హబ్',
    popularTopics: 'ప్రజాదరణ పొందిన అంశాలు',
    recentlyViewed: 'ఇటీవల చూసిన చట్టాలు',
    viewAll: 'అన్నీ చూడు',
    home: 'హోమ్ పేజీ',
    safety: 'భద్రత',
    learning: 'నేర్చుకోండి',
    sakhiBot: 'సఖి బాట్',
    backToLearning: 'తిరిగి నేర్చుకోవడానికి వెళ్లండి',
    whatThisMeans: 'దీని అర్థం ఏమిటి',
    realLifeExample: 'నిజ జీవిత ఉదాహరణ',
    thePunishment: 'శిక్షలు',
    whatWomenShouldKnow: 'మహిళలు తెలుసుకోవలసినవి',
    actionPlan: 'యాక్షన్ ప్లాన్: ఒకవేళ ఇది జరిగితే',
    commonQuestions: 'సాధారణ ప్రశ్నలు',
    emergencyTitle: 'అత్యవసర సమయంలో ఏమి చేయాలి?',
    policeButton: '112 కి కాల్ చేయండి (పోలీస్)',
    womenHelplineButton: '181 కి కాల్ చేయండి (మహిళలు)',
    shareLocation: 'లైవ్ లొకేషన్ షేర్ చేయండి',
    safetyCategories: 'భద్రతా విభాగాలు',
    resources: 'ఉపయోగకరమైన పత్రాలు',
    firGuidance: 'FIR నమోదు చేసుకునే విధానం',
    evidenceChecklist: 'ముఖ్యమైన సాక్ష్యాల జాబితా',
    askSakhi: 'చట్టపరమైన ప్రశ్నలు అడగండి',
    voiceInputSim: 'మాట్లాడటానికి మైక్రోఫోన్ నొక్కండి',
    microTitle: 'మైక్రో లెర్నింగ్',
    lessonsTitle: '2 నిమిషాల పాఠాలు',
    quizzesTitle: 'చట్టపరమైన క్విజ్ పోటీ',
    didYouKnow: 'మీకు తెలుసా?',
    dailyLegalTip: 'రోజువారీ చట్టపరమైన సలహా',
    progressText: 'మీ అభ్యసన పురోగతి',
    quizScore: 'స్కోరు: ',
    firAssistant: 'ఇంటరాక్టివ్ FIR అసిస్టెంట్',
    firFormat: 'FIR నమూనా పత్రం'
  },
  bn: {
    welcomeTitle: 'আপনার অধিকার সহজে জানুন',
    welcomeSub: 'সহজ আইনি জ্ঞান এবং বিশ্বস্ত সহায়তা দিয়ে আপনাকে ক্ষমতায়ন করা।',
    searchPlaceholder: 'অপরাধ, অধিকার, শাস্তি খুঁজুন...',
    emergencySos: 'জরুরি SOS',
    safetyHub: 'নারী সুরক্ষা হাব',
    popularTopics: 'জনপ্রিয় বিষয়',
    recentlyViewed: 'সম্প্রতি দেখা আইন',
    viewAll: 'সব দেখুন',
    home: 'হোম',
    safety: 'সুরক্ষা',
    learning: 'শিক্ষা',
    sakhiBot: 'সখী বট',
    backToLearning: 'শিক্ষায় ফিরে যান',
    whatThisMeans: 'এর মানে কি',
    realLifeExample: 'বাস্তব জীবনের উদাহরণ',
    thePunishment: 'নির্ধারিত শাস্তি',
    whatWomenShouldKnow: 'নারীদের যা জানা উচিত',
    actionPlan: 'কর্মপরিকল্পনা: যদি এটি ঘটে',
    commonQuestions: 'সাধারণ প্রশ্নাবলী',
    emergencyTitle: 'জরুরি পরিস্থিতিতে কি করবেন?',
    policeButton: 'কল ১১২ (পুলিশ)',
    womenHelplineButton: 'কল ১৮১ (মহিলা)',
    shareLocation: 'লাইভ লোকেশন শেয়ার করুন',
    safetyCategories: 'সুরক্ষা বিভাগ',
    resources: 'সম্পদ ও সহায়িকা',
    firGuidance: 'ধাপে ধাপে এফআইআর নির্দেশিকা',
    evidenceChecklist: 'গুরুত্বপূর্ণ প্রমাণ চেকলিস্ট',
    askSakhi: 'আইনি প্রশ্ন সরাসরি জিজ্ঞাসা করুন',
    voiceInputSim: 'বলার জন্য মাইক্রোফোনে আলতো চাপুন',
    microTitle: 'মাইক্রো লার্নিং',
    lessonsTitle: '২ মিনিটের পাঠ',
    quizzesTitle: 'আইনি কুইজ',
    didYouKnow: 'আপনি কি জানেন?',
    dailyLegalTip: 'দৈনিক আইনি টিপস',
    progressText: 'আপনার শেখার অগ্রগতি',
    quizScore: 'স্কোর: ',
    firAssistant: 'ইন্টারেক্টিভ এফআইআর সহকারী',
    firFormat: 'এফআইআর ফরম্যাট টেমপ্লেট'
  },
  mr: {
    welcomeTitle: 'तुमचे हक्क सहज समजून घ्या',
    welcomeSub: 'सुलभ कायदेशीर ज्ञान आणि विश्वासार्ह समर्थनासह तुम्हाला सक्षम बनवणे.',
    searchPlaceholder: 'गुन्हे, हक्क, शिक्षा शोधा...',
    emergencySos: 'अत्यत्कालीन SOS',
    safetyHub: 'महिला सुरक्षा हब',
    popularTopics: 'लोकप्रिय विषय',
    recentlyViewed: 'नुकतेच पाहिलेले कायदे',
    viewAll: 'सर्व पहा',
    home: 'मुख्यपृष्ठ',
    safety: 'सुरक्षा',
    learning: 'शिक्षण',
    sakhiBot: 'सखी बॉट',
    backToLearning: 'शिक्षणाकडे परत जा',
    whatThisMeans: 'याचा अर्थ काय',
    realLifeExample: 'वास्तविक जीवनातील उदाहरण',
    thePunishment: 'शिक्षेची तरतूद',
    whatWomenShouldKnow: 'महिलांनी काय जाणून घ्यावे',
    actionPlan: 'कृती योजना: असे घडल्यास',
    commonQuestions: 'वारंवार विचारले जाणारे प्रश्न',
    emergencyTitle: 'आणीबाणीच्या परिस्थितीत काय करावे?',
    policeButton: 'कॉल करा ११२ (पोलीस)',
    womenHelplineButton: 'कॉल करा १८१ (महिला)',
    shareLocation: 'थेट लोकेशन शेअर करा',
    safetyCategories: 'सुरक्षा श्रेणी',
    resources: 'संसाधने आणि मार्गदर्शिका',
    firGuidance: 'एफआयआर दाखल करण्याचे टप्पे',
    evidenceChecklist: 'महत्वाचे पुरावे तपासणी यादी',
    askSakhi: 'कायदेशीर प्रश्न थेट विचारा',
    voiceInputSim: 'बोलण्यासाठी मायक्रोफोनवर टॅप करा',
    microTitle: 'मायक्रो लर्निंग',
    lessonsTitle: '२-मिनिटांचे धडे',
    quizzesTitle: 'कायदेशीर प्रश्नमंजुषा',
    didYouKnow: 'तुम्हाला माहिती आहे का?',
    dailyLegalTip: 'दैनंदिन कायदेशीर टीप',
    progressText: 'तुमच्या शिक्षणाची प्रगती',
    quizScore: 'गुण: ',
    firAssistant: 'पर्यायी एफआयआर सहाय्यक',
    firFormat: 'एफआयआर नमुना हस्तपत्रिका'
  },
  ta: {
    welcomeTitle: 'உங்கள் உரிமைகளை எளிதாக அறியுங்கள்',
    welcomeSub: 'எளிய சட்ட அறிவும் நம்பகமான ஆதரவும் உங்களை வழிநடத்தும்.',
    searchPlaceholder: 'குற்றங்கள், உரிமைகள், தண்டனைகள் தேடுக...',
    emergencySos: 'அவசர SOS',
    safetyHub: 'பெண்கள் பாதுகாப்பு மையம்',
    popularTopics: 'பிரபலமான தலைப்புகள்',
    recentlyViewed: 'சமீபத்தில் பார்த்த சட்டங்கள்',
    viewAll: 'அனைத்தையும் காண்க',
    home: 'முகப்பு',
    safety: 'பாதுகாப்பு',
    learning: 'கற்றல்',
    sakhiBot: 'சகி பாட்',
    backToLearning: 'கற்றலுக்குத் திரும்பு',
    whatThisMeans: 'இதன் பொருள் என்ன',
    realLifeExample: 'நிஜ வாழ்க்கை உதாரணம்',
    thePunishment: 'சட்டப்படி தண்டனை',
    whatWomenShouldKnow: 'பெண்கள் அறிய வேண்டியவை',
    actionPlan: 'செயல் திட்டம்: இது நடந்தால்',
    commonQuestions: 'பொதுவான கேள்விகள்',
    emergencyTitle: 'அவசரகாலத்தில் என்ன செய்ய வேண்டும்?',
    policeButton: 'அழைக்கவும் 112 (காவல்துறை)',
    womenHelplineButton: 'அழைக்கவும் 181 (பெண்கள் உதவி)',
    shareLocation: 'பகிர்வு நேரடி இருப்பிடம்',
    safetyCategories: 'பாதுகாப்பு பிரிவுகள்',
    resources: 'ஆதாரங்கள் மற்றும் கையேடுகள்',
    firGuidance: 'வழிகாட்டி FIR படிமுறைகள்',
    evidenceChecklist: 'முக்கிய ஆதாரங்களின் சரிபார்ப்புப் பட்டியல்',
    askSakhi: 'சட்ட கேள்விகளை எளிதாகக் கேட்கவும்',
    voiceInputSim: 'பேச மைக்ரோஃபோனைத் தட்டவும்',
    microTitle: 'நுண் கற்றல்',
    lessonsTitle: '2 நிமிடப் பாடங்கள்',
    quizzesTitle: 'சட்ட வினாடி வினா',
    didYouKnow: 'உங்களுக்குத் தெரியுமா?',
    dailyLegalTip: 'தினசரி சட்டக் குறிப்பு',
    progressText: 'உங்கள் கற்றல் முன்னேற்றம்',
    quizScore: 'மதிப்பெண்: ',
    firAssistant: 'எஃப்ஐஆர் உதவியாளர்',
    firFormat: 'எஃப்ஐஆர் மாதிரி வடிவம்'
  }
};

export const microLessons: MicroLesson[] = [
  {
    id: 'les-1',
    title: {
      en: 'What is a Zero FIR?',
      hi: 'ज़ीरो एफआईआर (Zero FIR) क्या है?',
      te: 'జీరో ఎఫ్ఐఆర్ (Zero FIR) అంటే ఏమిటి?'
    },
    category: 'Police Procedures',
    readingTime: '2 mins read',
    story: {
      en: 'If a crime happens in place A, but you are currently stuck in place B, you do not need to travel back to report. You can walk into ANY police station, and they must write your complaint. This is called a Zero FIR. They will assign it a serial number "0" and transfer it to the correct station for investigation. No officer can deny writing it under penalty of law!',
      hi: 'यदि कोई घटना स्थान क पर होती है, लेकिन आप अभी स्थान ख में हैं, तो आपको रिपोर्ट करने के लिए वापस जाने की आवश्यकता नहीं है। आप किसी भी पुलिस स्टेशन में जा सकती हैं, और वे आपकी शिकायत दर्ज करने के लिए कानूनी रूप से बाध्य हैं। इसे ज़ीरो एफआईआर (Zero FIR) कहा जाता है। वे इसे "0" नंबर देंगे और जांच के लिए सही स्टेशन को ट्रांसफर कर देंगे।',
      te: 'ఒక నేరం ఒక ప్రాంతంలో జరిగి, మీరు ప్రస్తుతం వేరే ప్రాంతంలో ఉంటే, పిర్యాదు కోసం నేరం జరిగిన చోటకే వెళ్లనవసరం లేదు. మీరు ఏ పోలీస్ స్టేషనుకు వెళ్ళినా వారు తప్పకుండా పిర్యాదు రాసుకోవాలి. దీనినే జీరో ఎఫ్.ఐ.ఆర్ అంటారు. వారు దీనికి క్రమ సంఖ్య "0" ఇచ్చి ఆపై సంబంధిత పోలీస్ స్టేషనుకు బదిలీ చేస్తారు.'
    },
    keyTakeaway: {
      en: 'You can register an FIR at ANY police station in India, regardless of where the crime took place.',
      hi: 'भारत के किसी भी पुलिस स्टेशन में आप तुरंत FIR लिखवा सकती हैं, चाहे अपराध कहीं भी हुआ हो।',
      te: 'నేరం ఎక్కడ జరిగినా సరే, భారతదేశంలోని ఏ పోలీస్ స్టేషనులోనైనా మీరు FIR నమోదు చేసుకోవచ్చు.'
    },
    cardColor: 'bg-primary-fixed/20 border-primary-fixed-dim'
  },
  {
    id: 'les-2',
    title: {
      en: 'Rights of Women During Arrest',
      hi: 'गिरफ्तारी के समय महिलाओं के अधिकार',
      te: 'అరెస్ట్ సమయంలో మహిళల హక్కులు'
    },
    category: 'Police Procedures',
    readingTime: '2 mins read',
    story: {
      en: 'Under Section 46(4) of CrPC (now integrated similarly in BNSS), no woman can be arrested before 6:00 AM (Sunrise) or after 6:00 PM (Sunset) unless there is an exceptional circumstance and a written order from a first-class magistrate. Furthermore, a woman must only be arrested in the presence of a female police officer, and her search must be done strictly by a woman with complete decency.',
      hi: 'सीआरपीसी की धारा 46(4) (अब बीएनएसएस के तहत) के अनुसार, किसी भी महिला को सूर्योदय से पहले (सुबह 6 बजे से पहले) या सूर्यास्त के बाद (शाम 6 के बाद) गिरफ्तार नहीं किया जा सकता, जब तक कि कोई असाधारण परिस्थिति न हो और मजिस्ट्रेट का लिखित आदेश न हो। गिरफ्तारी महिला अधिकारी की मौजूदगी में ही होनी चाहिए।',
      te: 'చట్టం ప్రకారం ఏ మహిళను కూడా సూర్యాస్తమయం తర్వాత (సాయంత్రం 6 గంటల తరువాత) మరియు సూర్యోదయానికి ముందు (ఉదయం 6 గంటల లోపు) ఒక ఫస్ట్ క్లాస్ మెజిస్ట్రేట్ ప్రత్యేక ఉత్తర్వులు ఉంటే తప్ప రాత్రి సమయంలో అరెస్ట్ చేయడానికి వీల్లేదు. అరెస్ట్ చేసేటప్పుడు తప్పనిసరిగా మహిళా కానిస్టేబుల్ ఉండాలి.'
    },
    keyTakeaway: {
      en: 'No sunset-to-sunrise arrests for women, and only female officers can search or touch women during arrest.',
      hi: 'सूर्यास्त के बाद और सूर्योदय से पहले कोई गिरफ्तारी नहीं, और तलाशी केवल महिला अधिकारी ही ले सकती हैं।',
      te: 'రాత్రి సమయాల్లో మహిళలను నిర్బంధించకూడదు, కేవలం మహిళా అధికారులు మాత్రమే బాడీ సెర్చ్ చేయాలి.'
    },
    cardColor: 'bg-secondary-fixed/30 border-secondary-fixed-dim'
  },
  {
    id: 'les-3',
    title: {
      en: 'Right to Equal Property',
      hi: 'पैतृक संपत्ति में समान अधिकार',
      te: 'ఆస్తి హక్కులో సమానత్వం'
    },
    category: 'Family Issues',
    readingTime: '3 mins read',
    story: {
      en: 'In India, under the Hindu Succession Act (Amendment) 2005, daughters are coparceners from birth. This means a daughter has the exact same rights to her father\'s self-acquired or ancestral property as a son does. Getting married does not change or end this right. Even in other personal laws, reforms guarantee protective shares and dower (Mahr) for safety.',
      hi: 'हिंदू उत्तराधिकार (संशोधन) अधिनियम 2005 के तहत, बेटियों को जन्म से ही पिता की संपत्ति पर पूरा अधिकार प्राप्त है। यानी जितना हक बेटे का है, उतना ही हक शादीशुदा या अविवाहित बेटी का भी पिता की पैतृक और अर्जित संपत्ति पर है। विवाह होने से यह अधिकार समाप्त नहीं होता।',
      te: 'హిందూ వారసత్వ సవరణ చట్టం 2005 ప్రకారం, ఆడపిల్లలకు పుట్టుకతోనే తండ్రి ఆస్తిపై సమాన హక్కులు లభిస్తాయి. కొడుకుతో సమానంగా కూతురు కూడా ఆస్తిని పంచుకోవచ్చు. పెళ్లి కావడం వల్ల ఈ హక్కు కోల్పోరు.'
    },
    keyTakeaway: {
      en: 'Daughters have 100% equal rights to family inheritance properties by birth, identical to sons.',
      hi: 'बेटियों का जन्म सिद्ध अधिकार बेटों के समान संपत्ति के बंटवारे में बराबर का होता है।',
      te: 'ఆడపిల్లలకు తండ్రి పూర్వీకుల ఆస్తిలో కొడుకులతో సమానంగా హక్కు ఉంటుంది.'
    },
    cardColor: 'bg-tertiary-fixed/30 border-tertiary-fixed-dim'
  }
];

export const quizItems: QuizItem[] = [
  {
    id: 'q-1',
    question: {
      en: 'Can a police officer refuse to write your FIR because the crime happened in another district?',
      hi: 'क्या एक पुलिस अधिकारी आपकी एफआईआर (FIR) लिखने से मना कर सकता है क्योंकि अपराध किसी अन्य क्षेत्र में हुआ था?',
      te: 'నేరం వేరే పోలీస్ స్టేషన్ పరిధిలో జరిగిందని చెప్పి, పోలీసులు FIR రాయడానికి నిరాకరించవచ్చా?'
    },
    options: {
      en: [
        'Yes, you must go to the correct police station.',
        'No, they must write a "Zero FIR" and transfer it.',
        'Yes, but only if it is a major crime.'
      ],
      hi: [
        'हाँ, आपको सही पुलिस स्टेशन में ही जाना होगा।',
        'नहीं, वे "ज़ीरो एफआईआर" दर्ज करने और इसे स्थानांतरित करने के लिए बाध्य हैं।',
        'हाँ, लेकिन केवल तभी जब यह बहुत बड़ा अपराध हो।'
      ],
      te: [
        'అవును, మీరు కచ్చితంగా నేరం జరిగిన స్టేషనుకే వెళ్ళాలి.',
        'లేదు, వారు తప్పకుండా "జీరో ఎఫ్ఐఆర్" రాసి సంబంధిత స్టేషనుకు పంపాలి.',
        'అవును, కానీ అది పెద్ద నేరం అయితేనే.'
      ]
    },
    answerIndex: 1,
    explanation: {
      en: 'Correct! By law, any police station must register your complaint under "Zero FIR" first and forward it to the designated station.',
      hi: 'सही उत्तर! कानूनन, कोई भी पुलिस स्टेशन आपकी शिकायत को पहले "ज़ीरो एफआईआर" के रूप में लिखेगा और फिर उसे सही स्टेशन भेजेगा।',
      te: 'సరైన సమాధానం! చట్టం ప్రకారం ఏ పోలీస్ స్టేషన్ అయినా మీ పిర్యాదును "జీరో ఎఫ్ఐఆర్" గా మొదట నమోదు చేసి బదిలీ చేయాల్సిందే.'
    }
  },
  {
    id: 'q-2',
    question: {
      en: 'What is the national emergency help number for immediate police assistance across India?',
      hi: 'पूरे भारत में तत्काल पुलिस सहायता के लिए राष्ट्रीय आपातकालीन नंबर क्या है?',
      te: 'భారతదేశం అంతటా తక్షణ పోలీసు సహాయం కోసం అత్యవసర ఫోన్ నెంబర్ ఏది?'
    },
    options: {
      en: ['100', '1091', '112'],
      hi: ['100', '1091', '112'],
      te: ['100', '1091', '112']
    },
    answerIndex: 2,
    explanation: {
      en: 'Correct! 112 is the single unified National Emergency Response System (NERS) number across India for police, fire, and ambulance.',
      hi: 'सही उत्तर! 112 पूरे भारत में पुलिस, फायर ब्रिगेड और एम्बुलेंस के लिए एकल एकीकृत राष्ट्रीय आपातकालीन प्रतिक्रिया सेवा (NERS) नंबर है।',
      te: 'సరైన సమాధానం! 112 అనేది భారతదేశం అంతటా పోలీస్, ఫైర్, మరియు అంబులెన్స్ సహాయం కోసం ఏకీకృత అత్యవసర నంబరు.'
    }
  },
  {
    id: 'q-3',
    question: {
      en: 'True or False: A woman can be arrested by a male police officer at midnight without special magistrate approvals.',
      hi: 'सही या गलत: एक महिला को आधी रात को बिना किसी विशेष मजिस्ट्रेट की मंजूरी के एक पुरुष पुलिस अधिकारी द्वारा गिरफ्तार किया जा सकता है।',
      te: 'నిజమా లేదా అబద్ధమా: ఒక మహిళను అర్ధరాత్రి పూట మెజిస్ట్రేట్ ప్రత్యేక ఉత్తర్వులు లేకుండా కేవలం ఒక మగ పోలీస్ ఆఫీసర్ అరెస్ట్ చేయవచ్చు.'
    },
    options: {
      en: ['True, if it is serious.', 'False, it is strictly forbidden.'],
      hi: ['सही, अगर मामला गंभीर हो।', 'गलत, यह पूरी तरह से प्रतिबंधित है।'],
      te: ['నిజం, చాలా పెద్ద నేరం అయితే.', 'అబద్ధం, చట్ట ప్రకారం రాత్రి సమయంలో అరెస్ట్ చేయకూడదు.']
    },
    answerIndex: 1,
    explanation: {
      en: 'Correct! No women can be arrested between sunset and sunrise except under exceptional conditions with written magistrate approval, and ONLY by a female officer.',
      hi: 'सही उत्तर! किसी भी महिला को सूर्यास्त और सूर्योदय के बीच केवल विशेष परिस्थितियों में लिखित मजिस्ट्रेट की अनुमति से और केवल महिला अधिकारी द्वारा ही गिरफ्तार किया जा सकता है।',
      te: 'సరైన సమాధానం! సూర్యాస్తమయం తరువాత మరియు సూర్యోదయానికి ముందు మహిళను అరెస్ట్ చేయకూడదు మరియు కచ్చితంగా మహిళా పోలీస్ అధికారి సమక్షంలోనే అరెస్ట్ జరగాలి.'
    }
  }
];

export const didYouKnowFacts: Partial<Record<Language, string[]>> & Record<'en', string[]> = {
  en: [
    'You are entitled to a 100% free printed copy of your FIR immediately. Do not pay any police officer for this!',
    'If a police officer refuses to write an FIR for a serious crime, they can be prosecuted under Section 166A IPC (now BNS) and jailed for up to 2 years!',
    'Every hospital (government or private) is legally bound to provide immediate free medical aid and treatment to survivors of acid attack or sexual assault without waiting for police reports.',
    'A woman has the right to file an FIR from her home via email or registered post to the Police Commissioner if she feels afraid to go in person.'
  ],
  hi: [
    'आपको अपनी प्राथमिकी (FIR) की एक मुद्रित प्रति (कॉपी) तुरंत मुफ्त पाने का पूरा कानूनी हक है। इसके लिए किसी को भुगतान न करें।',
    'यदि कोई पुलिस अधिकारी गंभीर अपराध के लिए प्राथमिकी लिखने से मना करता है, तो उसे 2 साल तक की जेल हो सकती है!',
    'कोई भी सरकारी या निजी अस्पताल बलात्कार या एसिड अटैक पीड़ित का पूरा इलाज मुफ्त में तत्काल करने के लिए जिम्मेदार है, बिना पुलिस कार्रवाई का इंतजार किए।',
    'यदि कोई महिला थाने जाने से डरती है, तो वह घर बैठे ईमेल या रजिस्टर्ड पोस्ट के जरिए पुलिस कमिश्नर को अपनी शिकायत भेज सकती है।'
  ],
  te: [
    'నమోదు చేసిన FIR యొక్క ప్రింటెడ్ కాపిని ఉచితంగా పొందే హక్కు మీకు ఉంది. దీని కొరకు ఎవరికీ డబ్బులు ఇవ్వకండి!',
    'పోలీసులు తీవ్రమైన నేరాలపై FIR రాయడానికి నిరాకరిస్తే, వారికి 2 సంవత్సరాల వరకు జైలు శిక్ష పడే చట్టం అమల్లో ఉంది!',
    'ఏ ప్రైవేట్ లేదా ప్రభుత్వ ఆసుపత్రి అయినా దాడికి గురైన మహిళలకు ఉచితంగా ప్రథమ చికిత్స అందించాలి. పోలీస్ కేస్ నమోదు అయ్యే వరకు ఆగకూడదు.',
    'మహిళలు పోలీస్ స్టేషనుకు వెళ్ళడానికి భయపడితే, ఆన్ లైన్ ద్వారా లేదా ఈమెయिल లో కమిషనరుకి ఫిర్యాదు పంపవచ్చు.'
  ]
};

export const dailyTips: Partial<Record<Language, string[]>> & Record<'en', string[]> = {
  en: [
    'Always carry the helpline numbers saved on speed dial. Dialing 112 instantly shares your geographical coordinates with the central police cell.',
    'If you are staying in a hotel or PG, you can use a simple door stopper to block unwanted entry and feel safe.',
    'Always collect a medical report (wound certificate) as first priority if any physical fight or domestic abuse happens.',
    'Your signature is not required on the FIR if you cannot read. You can write your thumb expression instead.'
  ],
  hi: [
    'आपातकालीन नंबरों को अपने स्पीड डायल पर सहेजें। 112 डायल करने से पुलिस कंट्रोल को आपके अक्षांश और देशांतर की सटीक जानकारी तुरंत मिल जाती है।',
    'होटल या पीजी में रहते समय, सुरक्षा के लिए आप दरवाजे के नीचे एक साधारण रबर स्टॉपर का उपयोग कर सकती हैं।',
    'शारीरिक हिंसा की स्थिति में डॉक्टर से घाव का प्रमाण पत्र (Wound Certificate) लेना सबसे पहला काम होना चाहिए।',
    'यदि आप पढ़ नहीं सकतीं, तो FIR पर आपके हस्ताक्षर होना अनिवार्य नहीं है; आप अंगूठे का निशान लगा सकती हैं।'
  ],
  te: [
    'మీ ఆపద నంబర్లను స్పీడ్ డయల్ లో ఉంచుకోండి. 112 నొక్కిన వెంటనే కంట్రోల్ రూమ్ కి మీ లొకేషన్ వివరాలు అందుతాయి.',
    'పి.జి లేదా హోటల్ గదుల్లో ఉన్నప్పుడు తలుపు గొళ్ళెం పాటు క్రిందన ఒక చిన్న డోర్ స్టాపర్ రబ్బరు వస్తువు ఉంచడం ద్వారా ప్రైవసీ పెంచుకోవచ్చు.',
    'వేధింపులు లేదా గొడవలు జరిగినప్పుడు ప్రథమ ప్రాధాన్యతగా ఉచిత ప్రభుత్వ ఆసుపత్రి నుండి ఉండు సర్టిఫికేట్ సేకరించండి.',
    'ఒకవేళ చదవడం రాయడం రాకపోతే FIR లో సంతకం పెట్టనవసరం లేదు. మీ బొటనవేలి ముద్ర వేయవచ్చు.'
  ]
};
export const processJourneySteps: Partial<Record<Language, { step: string; title: string; desc: string }[]>> & Record<'en', { step: string; title: string; desc: string }[]> = {
  en: [
    { step: '1', title: 'Happening of Incident', desc: 'Any victim or witness can gather mental peace and head to the station or register online.' },
    { step: '2', title: 'Filing of FIR', desc: 'The Station House Officer writes down the complaint verbatim, reads it back to you, and gives a free copy.' },
    { step: '3', title: 'Investigation Starts', desc: 'The police officer visits the spot, records witness statements, and compiles physical/digital evidence.' },
    { step: '4', title: 'Filing of Charge Sheet', desc: 'Within 60-90 days, police submit the final compiled evidence report to the judicial magistrate court.' },
    { step: '5', title: 'Judicial Trial', desc: 'The magistrate listens to both sides, verifies documents/witnesses, and delivers the final judgment/verdict.' }
  ],
  hi: [
    { step: '1', title: 'घटना का होना', desc: 'पीड़िता या कोई भी गवाह घटना के बाद शांत मन से पुलिस से संपर्क करता है या ऑनलाइन शिकायत करता है।' },
    { step: '2', title: 'एफआईआर (FIR) दर्ज होना', desc: 'थाना प्रभारी घटना के शब्द-दर-शब्द शिकायत लिखते हैं, आपको पढ़कर सुनाते हैं और मुफ्त प्रति देते हैं।' },
    { step: '3', title: 'जांच (Investigation) की शुरुआत', desc: 'जांच अधिकारी घटनास्थल का दौरा करते हैं, गवाहों के बयान दर्ज करते हैं और सबूत जुटाते हैं।' },
    { step: '4', title: 'चार्जशीट दाखिल होना', desc: '60-90 दिनों के भीतर, पुलिस सभी सबूतों और बयानों की अंतिम रिपोर्ट अदालत में पेश करती है।' },
    { step: '5', title: 'न्यायालयी मुकदमा (Trial)', desc: 'न्यायाधीश दोनों पक्षों की दलीलें सुनते हैं, सबूतों की पुष्टि करते हैं और अपना अंतिम फैसला सुनाते हैं।' }
  ],
  te: [
    { step: '1', title: 'నేరం జరగడం', desc: 'బాధిత మహిళ లేదా ప్రత్యక్ష సాక్షి మనోధైర్యం తెచ్చుకొని పోలీస్ స్టేషనుకు వెళ్లడం లేదా ఆన్ లైన్ వెబ్ లో పిర్యాదు చేయడం.' },
    { step: '2', title: 'FIR నమోదు', desc: 'స్టేషన్ హౌస్ ఆఫీసర్ మీ పిర్యాదును నమోదు చేసి, మీకు తిరిగి చదివి వినిపించి, ఉచిత ప్రతిన ఇస్తారు.' },
    { step: '3', title: 'పోలీస్ విచారణ', desc: 'పరిశోధనా అధికారి ఘటనా స్థలాన్ని సందర్శించి, సాక్ష్యాల స్టేట్మెంట్లు, డిజిటల్ ఆధారాలను సేకరిస్తారు.' },
    { step: '4', title: 'చార్జ్ షీట్ దాఖలు', desc: '60 నుండి 90 రోజుల్లోగా నిందితుల తప్పులను సాక్ష్యాలతో కూడిన నివేదికను మెజిస్ట్రేట్ కోర్టుకు అందజేస్తారు.' },
    { step: '5', title: 'కోర్టు విచారణ', desc: 'కోర్టు జడ్జిの両 పక్షాల వాదనలను విని, సాక్ష్యాల నిజాలను నిర్ధారించి తుది తీర్పు జైలు శిక్ష ఖరారు చేస్తారు.' }
  ]
};
