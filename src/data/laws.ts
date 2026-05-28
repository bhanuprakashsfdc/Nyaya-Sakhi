import { LawSection, Language, SafetyCategory } from '../types';

export const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिन्दी (Hindi)',
  te: 'తెలుగు (Telugu)',
  bn: 'বাংলা (Bengali)',
  mr: 'मराठी (Marathi)',
  ta: 'தமிழ் (Tamil)'
};

export const lawSections: LawSection[] = [
  {
    id: 'sec-74',
    sectionNumber: 'Section 74 - BNS',
    title: {
      en: 'Assault to Outrage Modesty',
      hi: 'महिला की मर्यादा को ठेस पहुँचाना',
      te: 'ఆత్మగౌరవానికి భంగం కలిగించడం'
    },
    subtitle: {
      en: 'Protection against unwanted physical contact or force.',
      hi: 'अवांछित शारीरिक स्पर्श या बल के खिलाफ सुरक्षा।',
      te: 'అవాంఛిత శారీరక స్పర్శ లేదా బలాత్కారానికి వ్యతిరేకంగా రక్షణ.'
    },
    category: 'Women Safety',
    whatItMeans: {
      en: 'Simply put: If someone uses criminal force against a woman, or attacks her, with the intention of disrespecting or insulting her personal dignity and modesty, it is a crime. No one has the right to touch you inappropriately or force themselves on you against your will.',
      hi: 'आसान शब्दों में: यदि कोई व्यक्ति किसी महिला के खिलाफ जबरदस्ती (बल) का प्रयोग करता है या उसकी गरिमा और मर्यादा का अनादर करने के इरादे से उस पर हमला करता है, तो यह एक अपराध है। किसी को भी आपको गलत तरीके से छूने का अधिकार नहीं है।',
      te: 'సరళంగా చెప్పాలంటే: ఒక మహిళ ఆత్మగౌరవాన్ని లేదా మర్యాదను భంగపరిచే ఉద్దేశ్యంతో ఎవరైనా ఆమెపై దాడి చేసినా లేదా బలప్రయోగం చేసినా అది తీవ్రమైన నేరం. మీ అనుమతి లేకుండా మిమ్మల్ని తాకడానికి ఎవరికీ హక్కు లేదు.'
    },
    realLifeExample: {
      en: 'Priya is traveling on a crowded bus to college. A man intentionally pushes against her and tries to touch her inappropriately despite her telling him to stop. His intention is clearly to make her feel uncomfortable and violate her personal space. Under Section 74, this is a crime.',
      hi: 'प्रिया कॉलेज जाने के लिए एक भीड़भाड़ वाली बस में यात्रा कर रही है। एक आदमी जानबूझकर उसे धक्का देता है और उसके मना करने के बावजूद उसे गलत तरीके से छूने की कोशिश करता है। उसका इरादा साफ तौर पर प्रिया को असहज करने का है। कानून के अनुसार यह धारा 74 के तहत अपराध है।',
      te: 'ప్రియా రద్దీగా ఉండే బస్సులో కాలేజీకి వెళ్తోంది. ఆమె వద్దని చెప్పినా ఒక వ్యక్తి కావాలని ఆమెపై పడి నెట్టడం, అసభ్యంగా తాకడం చేస్తున్నాడు. దీని అర్థం ఆమె ఆత్మగౌరవాన్ని ప్రైవసీని భంగపరచడమే. సెక్షన్ 74 ప్రకారం ఇది శిక్షార్హమైన నేరం.'
    },
    illustrationUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYe020A-y0x8J82dKiERZ6eOnsoMzQIwDeFLnOwhR9nwn4NlPoM83WZ-6MTyGiXvsIzDIogn7-7X5ECebd_XnKoI319_FkFzyA0TEU5ElFmqMApQXZQs9Ro-2iqSG4JASTfPwWknOMXiVky_ZAws9Jz4eNBKVnyp0DcP108xmG_QHHA_JZFSbBE9sDtS1xFonUbi9YyDIM1wLcviyGZ5BaIDtXVzgYKNtACYfWBe8iMviHKpQVIm4G_EuBFFQiZGOX94BPquF-_XY',
    punishments: {
      en: [
        'Imprisonment (Jail) for 1 to 5 years.',
        'Heavy cash fine.',
        'This is a Non-Bailable offence (police cannot release easily).'
      ],
      hi: [
        '1 से 5 साल तक की जेल की सजा।',
        'भारी नकद जुर्माना।',
        'यह एक गैर-जमानती अपराध है (पुलिस सीधे जमानत नहीं दे सकती)।'
      ],
      te: [
        '1 నుండి 5 సంవత్సరాల వరకు జైలు శిక్ష.',
        'భారీ నగదు జరిమానా.',
        'ఇది నాన్-బెయిలబుల్ నేరం (పోలీసులు సులభంగా బెయిల్ ఇవ్వలేరు).'
      ]
    },
    whatWomenShouldKnow: {
      en: 'Your voice matters. You do not need physical injuries to prove this crime. The intent of the person and how their actions made you feel (violating modesty) is what the law looks at.',
      hi: 'आपकी आवाज महत्वपूर्ण है। इस अपराध को साबित करने के लिए शरीर पर चोट का होना जरूरी नहीं है। उस व्यक्ति की नीयत और उसकी हरकतों से आपको कैसा महसूस हुआ, कानून इसी को देखता है।',
      te: 'మీ గొంతు వినిపించండి. ఈ నేరాన్ని నిరూపించడానికి శారీరక గాయాలు ఉండవలసిన అవసరం లేదు. సదరు వ్యక్తి ఉద్దేశ్యం, అతని చర్యల వల్ల మీ గౌరవానికి ఎంత భంగం వాటిల్లింది అనేదే చట్టం చూస్తుంది.'
    },
    actionSteps: {
      en: [
        { title: 'Raise Your Voice', desc: 'Scream instantly to alert passengers and gather public support. This deters the attacker.' },
        { title: 'Move to Safety', desc: 'Stand near the bus driver, conductor, or another group of women immediately.' },
        { title: 'Call for Help', desc: 'Dial the national emergency number 112 or Women Helpline 1091.' }
      ],
      hi: [
        { title: 'तुरंत जोर से चिल्लाएं', desc: 'आस-पास के लोगों का ध्यान खींचने के लिए चिल्लाएं। इससे हमलावर डर जाएगा।' },
        { title: 'सुरक्षित स्थान पर जाएं', desc: 'तुरंत बस ड्राइवर, कंडक्टर या अन्य महिलाओं के समूह के पास खड़ी हो जाएं।' },
        { title: 'मदद के लिए कॉल करें', desc: 'राष्ट्रीय आपातकालीन नंबर 112 या महिला हेल्पलाइन 1091 डायल करें।' }
      ],
      te: [
        { title: 'గట్టిగా అరవండి', desc: 'చుట్టుపక్కల ఉన్న వారిని అప్రమత్తం చేయడానికి వెంటనే గట్టిగా కేకలు వేయండి. ఇది దుండగుడిని భయపెడుతుంది.' },
        { title: 'రక్షిత ప్రాంతానికి వెళ్ళండి', desc: 'వెంటనే బస్సు డ్రైవర్, కండక్టర్ లేదా ఇతర మహిళల బృందం వద్దకు వెళ్లండి.' },
        { title: 'సహాయం కోసం ఫోన్ చేయండి', desc: 'వెంటనే ఆపద నంబర్ 112 లేదా మహిళా హెల్ప్ లైన్ 1091 కి కాల్ చేయండి.' }
      ]
    },
    faqs: {
      en: [
        { q: 'When to call the police?', a: 'Call immediately when you are safely away from the threat, or ask a bystander to call if you are stuck.' },
        { q: 'Is this a bailable offence?', a: 'No, Section 74 BNS is non-bailable. The accused has to apply in court for permission to get bail.' },
        { q: 'Can I complain if it happened days ago?', a: 'Yes, you can register an FIR anytime. It is better to file it as early as possible so evidence is fresh.' }
      ],
      hi: [
        { q: 'पुलिस को कब फोन करें?', a: 'जैसे ही आप खतरे से बाहर हों तुरंत फोन करें, या फंसे होने की स्थिति में किसी पास के व्यक्ति से फोन करने कहें।' },
        { q: 'क्या इसमें जमानत मिल सकती है?', a: 'नहीं, धारा 74 गैर-जमानती है। आरोपी को जमानत पाने के लिए अदालत में अर्जी देनी होगी।' },
        { q: 'क्या कुछ दिन पहले हुई घटना की शिकायत हो सकती है?', a: 'हाँ, आप कभी भी शिकायत (FIR) दर्ज करा सकती हैं। हालांकि, जितना जल्दी हो सके दर्ज कराना बेहतर है ताकि प्रमाण ताज़ा रहें।' }
      ],
      te: [
        { q: 'పోలీసులకు ఎప్పుడు సమాచారం ఇవ్వాలి?', a: 'మీరు సురక్షిత ప్రాంతానికి చేరిన వెంటనే కాల్ చేయండి. లేదా చుట్టుపక్కల ఉన్న వారిని పిలవండి.' },
        { q: 'దీనిలో బెయిల్ దొరుకుతుందా?', a: 'లేదు, సెక్షన్ 74 నాన్-బెయిలబుల్. నిందితుడు బెయిల్ కోసం కోర్టులోనే దరఖాస్తు చేసుకోవాలి.' },
        { q: 'కొన్ని రోజుల క్రితం జరిగిన విషయానికి పిర్యాదు చేయవచ్చా?', a: 'తప్పకుండా చేయవచ్చు. అయితే జరిగిన వెంటనే పిర్యాదు చేస్తే ఆధారాలు సేకరించడం పోలీసులకు సులువవుతుంది.' }
      ]
    }
  },
  {
    id: 'sec-78',
    sectionNumber: 'Section 78 - BNS',
    title: {
      en: 'Stalking (Physical & Cyber)',
      hi: 'पीछा करना (शारीरिक और इंटरनेट पर)',
      te: 'వేధించడం లేదా వెంబడించడం (స్టాకింగ్)'
    },
    subtitle: {
      en: 'Law against repeatedly following a woman online or offline.',
      hi: 'ऑनलाइन या ऑफलाइन किसी महिला का बार-बार पीछा करने के खिलाफ कानून।',
      te: 'ఆన్‌లైన్ లేదా ఆఫ్‌లైన్‌లో ఒక మహిళను పదేపదే వెంబడించడాన్ని నివారించే చట్టం.'
    },
    category: 'Women Safety',
    whatItMeans: {
      en: 'If a man repeatedly follows, contacts, or attempts to contact a woman against her clear disinterest, or monitors her internet, email, or social media, it is stalking. No one has the right to monitor your movements or spam with messages.',
      hi: 'यदि कोई पुरुष किसी महिला की स्पष्ट अरुचि के बावजूद उसका बार-बार पीछा करता है, उससे संपर्क करने की कोशिश करता है, या उसकी इंटरनेट गतिविधियों, सोशल मीडिया या ईमेल की निगरानी करता है, तो यह पीछा करना (स्टाकिंग) कहलाता है।',
      te: 'ఒక మహిళ తనకి ఇష్టం లేదని స్పష్టంగా చెప్పినా ఒక పురుషుడు పదేపదే వెంబడిస్తూ, మెసేజ్‌లు పంపినా, లేదా ఆన్‌లైన్‌లో సోషల్ మీడియాను నిఘా పెట్టి గమనిస్తూ ఉన్నా దానిని స్టాకింగ్ అంటారు. ఇది తీవ్ర నేరం.'
    },
    realLifeExample: {
      en: 'Anitha works at a retail store. A customer begins following her home daily, and starts spamming her on Instagram with constant messages despite being blocked. This constitutes physical and cyber stalking under Section 78 BNS.',
      hi: 'अनीता एक दुकान में काम करती है। एक ग्राहक रोजाना उसके घर तक उसका पीछा करने लगता है और ब्लॉक किए जाने के बाद भी इंस्टाग्राम पर तरह-तरह के संदेश भेजता है। यह धारा 78 के तहत शारीरिक और साइबर स्टॉकिंग है।',
      te: 'అనిత ఒక షాపులో పని చేస్తుంది. ఒక కస్టమర్ ప్రతిరోజూ ఆమె వెళ్లే దారిలో వెంబడిస్తున్నాడు. ఇన్ స్టాగ్రామ్ లో పదేపదే మెసేజ్ లు పెడుతున్నాడు. ఇష్టం లేదని అనిత బ్లాక్ చేసినా వేరే అకౌంట్లతో విసిగిస్తున్నాడు. ఇది సెక్షన్ 78 కిందకు వస్తుంది.'
    },
    punishments: {
      en: [
        'First Conviction: Up to 3 years in jail + fine.',
        'Second or Subsequent Conviction: Up to 5 years in jail + fine.',
        'First offence is bailable, but repeat offences are strictly non-bailable.'
      ],
      hi: [
        'पहली बार पकड़े जाने पर: 3 साल तक की जेल + जुर्माना।',
        'दूसरी बार या बार-बार करने पर: 5 साल तक की जेल + जुर्माना।',
        'पहली बार में जमानत मिल सकती है, पर दोबारा करने पर कतई नहीं।'
      ],
      te: [
        'మొదటిసారి తప్పు చేస్తే: 3 సంవత్సరాల వరకు జైలు శిక్ష + జరిమానా.',
        'రెండవసారి లేదా పదేపదే చేస్తే: 5 సంవత్సరాల వరకు జైలు శిక్ష + జరిమానా.',
        'మొదటి సారి బెయిల్ రావచ్చు, కానీ మళ్ళీ చేస్తే బెయిల్ ఇవ్వరు.'
      ]
    },
    whatWomenShouldKnow: {
      en: 'Collect screenshots, save the visual evidence, messages and calls. Stalking is an active ground for getting an immediate warning issued to the stalker by the police.',
      hi: 'सारे संदेशों और कॉल रिकॉर्ड्स का स्क्रीनशॉट लें और उन्हें सहेजें। पुलिस पीछा करने वाले को तत्काल चेतावनी जारी कर सकती है और यह बहुत प्रभावी है।',
      te: 'దయచేసి అసభ్య మెసేజ్ లని డిలీట్ చేయకండి. వాటిని స్క్రీన్ షాట్ తీసి భద్రపరుచుకోండి. ఇది మీకు కోర్టులో బలమైన సాక్ష్యంగా నిలుస్తుంది.'
    },
    actionSteps: {
      en: [
        { title: 'Say No Clearly', desc: 'Indicate your total disinterest once. This is legally necessary to prove stalking.' },
        { title: 'Keep Evidence', desc: 'Take screenshots of messages, block lists, call logs, and photographs.' },
        { title: 'Report to Cyber Cell', desc: 'File a complaint on cybercrime.gov.in or visit the local women cell.' }
      ],
      hi: [
        { title: 'साफ मना करें', desc: 'एक बार स्पष्ट रूप से अपनी अरुचि जताएं। यह कानूनन पीछा साबित करने के लिए जरूरी है।' },
        { title: 'सबूत सुरक्षित रखें', desc: 'संदेशों के स्क्रीनशॉट, ब्लॉक सूची, कॉल रिकॉर्ड और तस्वीरें संभाल कर रखें।' },
        { title: 'साइबर सेल में रिपोर्ट करें', desc: 'cybercrime.gov.in पर ऑनलाइन या स्थानीय महिला थाने में शिकायत दर्ज करें।' }
      ],
      te: [
        { title: 'స్పష్టంగా వద్దు అని చెప్పండి', desc: 'మీకు ఇష్టం లేదని ఒక్కసారి తెగేసి చెప్పండి. ఇది చట్టపరంగా మీ నిరసనను తెలుపుతుంది.' },
        { title: 'ఆధారాలు దాచుకోండి', desc: 'మెసేజ్ లు, ఈమెయిళ్ళు స్క్రీన్ షాట్లు తీసుకోండి. బెదిరింపు కాల్స్ రికార్డ్ చేయండి.' },
        { title: 'సైబర్ సెల్ కి ఫిర్యాదు చేయండి', desc: 'cybercrime.gov.in లేదా మహిళా హెల్ప్ డెస్కులో ఆన్ లైన్ ద్వారా పిర్యాదు చేయవచ్చు.' }
      ]
    },
    faqs: {
      en: [
        { q: 'Can I file a complaint online anonymously?', a: 'Yes, on the national cyber crime portal, you can register complaints regarding women safety confidentially.' },
        { q: 'What is physical stalking?', a: 'Repeatedly shadowing someone, waiting outside their home or workplace, following them as they travel.' }
      ],
      hi: [
        { q: 'क्या मैं गुप्त रूप से ऑनलाइन शिकायत कर सकती हूँ?', a: 'हाँ, राष्ट्रीय साइबर अपराध पोर्टल पर महिलाओं से संबंधित अपराधों की शिकायत गोपनीय रखी जा सकती है।' },
        { q: 'शारीरिक रूप से पीछा करने का क्या मतलब है?', a: 'किसी की दैनिक गतिविधियों पर नज़र रखना, उसके घर या काम करने की जगह के बाहर खड़े रहना या चलते समय पीछे आना।' }
      ],
      te: [
        { q: 'నా పేరు బయటపడకుండా ఆన్ లైన్ పిర్యాదు చేయవచ్చా?', a: 'అవును, జాతీయ సైబర్ క్రైమ్ పోర్టల్ ద్వారా మహిళలపై జరిగే వేధింపుల వివరాలు చాలా రహస్యంగా ఉంచబడతాయి.' },
        { q: 'ఆఫ్‌లైన్ స్టాకింగ్ అంటే ఏమిటి?', a: 'మీరు వెళ్లే దారుల్లో ఎదురుపడటం, మీ ఇల్లు లేదా ఆఫీసు వద్ద మాటు వేయడం, మిమ్మల్ని నిరంతరం గమనించడం.' }
      ]
    }
  },
  {
    id: 'sec-85',
    sectionNumber: 'Section 85 - BNS',
    title: {
      en: 'Cruelty by Husband or Relatives',
      hi: 'पति या रिश्तेदारों द्वारा क्रूरता',
      te: 'భర్త లేదా బంధువుల వేధింపులు (క్రూరత్వం)'
    },
    subtitle: {
      en: 'Strong shield against physical, mental, or dowry-related harassment.',
      hi: 'शारीरिक, मानसिक या दहेज उत्पीड़न के खिलाफ मजबूत कानूनी ढाल।',
      te: 'శారీరక, మానసిక లేదా వరకట్న వేధింపులకు వ్యతిరేకంగా బలమైన చట్టం (పాత 498A).'
    },
    category: 'Family Issues',
    whatItMeans: {
      en: 'Its previous form was Section 498A IPC. It states that if a husband or his relative subjects a woman to mental or physical cruelty (harming her health, threatening her, demanding money/dowry), it is a severe crime punishable by jail.',
      hi: 'पुराना रूप धारा 498A था। इसके तहत यदि किसी महिला का पति या ससुराल के लोग उस पर शारीरिक या मानसिक अत्याचार करते हैं (स्वास्थ्य को नुकसान पहुँचाना, दहेज या पैसों के लिए मजबूर करना), तो यह गंभीर अपराध है।',
      te: 'గతంలో దీనిని సెక్షన్ 498A అనేవారు. పెళ్లయిన మహిళను ఆమె భర్త కానీ, లేదా అతని బంధువులు కానీ శారీరకంగా, మానసిక వేధింపులకు గురిచేసి వరకట్నం కోసం పీడించినట్లయితే ఈ శిక్ష వర్తిస్తుంది.'
    },
    realLifeExample: {
      en: 'Sunitha, a homemaker, is constantly taunted and beaten by her husband and mother-in-law, demanding that she bring an extra 5 Lakh cash from her parents to buy a car. This is physical and mental cruelty under Section 85 BNS.',
      hi: 'सुनीता एक गृहिणी है, जिसे उसका पति और सास नई कार खरीदने के लिए अपने मायके से अतिरिक्त 5 लाख रुपये लाने को कहते हैं। ऐसा न करने पर वे उसे खाना नहीं देते और पीटते हैं। यह धारा 85 के तहत क्रूरता है।',
      te: 'సునీత పెళ్లయిన హౌస్ వైఫ్. ఆమె భర్త, అత్తగారు మైకం కారు కొనడం కోసం వాళ్ళ పుట్టింటి నుండి మరిన్ని డబ్బులు తీసుకురావాలని రోజూ కొడుతున్నారు, హింసిస్తున్నారు. ఇది సెక్షన్ 85 కింద వరకట్న క్రూరత్వం.'
    },
    punishments: {
      en: [
        'Imprisonment (Jail) up to 3 years.',
        'Liable to fine.',
        'This is Cognizable & Non-Bailable. Police can arrest immediately without a warrant.'
      ],
      hi: [
        '3 साल तक की जेल की सजा।',
        'आर्थिक जुर्माना।',
        'यह एक संज्ञेय और गैर-जमानती अपराध है। पुलिस बिना वारंट तत्काल गिरफ्तार कर सकती है।'
      ],
      te: [
        '3 సంవత్సరాల వరకు జైలు శిక్ష.',
        'భారీ జరిమానా.',
        'ఇది కాగ్నిజబుల్ మరియు నాన్-బెయిలబుల్ నేరం. వారెంట్ లేకుండానే పోలీసులు నిందితులను అరెస్ట్ చేయవచ్చు.'
      ]
    },
    whatWomenShouldKnow: {
      en: 'Cruelty includes both mental distress and physical harm. Legally, any harassment forcing her to take extreme steps or demanding properties is fully protected here. Also, there is a special section Section 86 for specific details.',
      hi: 'क्रूरता में मानसिक प्रताड़ना और शारीरिक चोट दोनों शामिल हैं। यदि ससुराल वाले आत्महत्या के लिए उकसाते हैं या जबरन जायदाद मांगते हैं, तो महिला को धारा 85 के तहत पूरी सुरक्षा मिलती है।',
      te: 'మానసిక హింస కూడా క్రూరత్వంలో భాగమే. సూటిపోటి మాటలు అనడం, పుట్టింటి వాళ్ళను తిట్టడం, మిమ్మల్ని ఒంటరిని చేయడం మొదలైనవి కూడా మానసిక క్రూరత్వం కిందకే వస్తాయి.'
    },
    actionSteps: {
      en: [
        { title: 'Keep a Diary', desc: 'Write down dates, times, demands, and who said what.' },
        { title: 'Seek Trusted Help', desc: 'Inform your parents, close friends, or a local counselor.' },
        { title: 'Reach Support Group', desc: 'Ring the Women National Helpline on 181 for protection orders.' }
      ],
      hi: [
        { title: 'डायरी में नोट करें', desc: 'तारीख, समय, मांगें और किसने क्या कहा, यह सब लिख लें।' },
        { title: 'भरोसेमंद लोगों को बताएं', desc: 'अपने माता-पिता, सच्चे दोस्तों या कानूनी सलाहकार को सूचित करें।' },
        { title: 'हेल्पलाइन पर बात करें', desc: 'प्रोटेक्शन आर्डर की जानकारी के लिए महिला राष्ट्रीय हेल्पलाइन 181 पर कॉल करें।' }
      ],
      te: [
        { title: 'తేదీలు గుర్తుంచుకోండి', desc: 'ఎవరు ఎప్పుడు ఏ విధంగా వేధించారో రాసి పెట్టుకోండి.' },
        { title: 'ఆత్మీయులతో పంచుకోండి', desc: 'మీ తల్లిదండ్రులు లేదా ఒక మంచి కౌన్సిలర్ సహాయం తీసుకోండి.' },
        { title: 'హెల్ప్ లైన్ ని సంప్రదించండి', desc: 'మహిళా పరిరక్షణ రక్షణ చట్టాల కొరకు 181 నంబర్ కి కాల్ చేయండి.' }
      ]
    },
    faqs: {
      en: [
        { q: 'Can the police patch things up?', a: 'Police cannot force you to compromise. The law provides for legal mediation under protection officers if you choose it.' },
        { q: 'Do I get to stay in the home?', a: 'Yes. Under the Domestic Violence Act, a wife has the legal right to reside in the shared household even if it belongs to the in-laws.' }
      ],
      hi: [
        { q: 'क्या पुलिस समझौता कराने के लिए मजबूर कर सकती है?', a: 'नहीं, पुलिस आपको समझौते के लिए मजबूर नहीं कर सकती। आपकी मर्जी के बिना कोई फैसला नहीं थोपा जा सकता।' },
        { q: 'क्या मुझे घर में रहने का अधिकार है?', a: 'हाँ, घरेलू हिंसा कानून के तहत पत्नी को उसी ससुराल के घर में रहने का पूरा कानूनी अधिकार है।' }
      ],
      te: [
        { q: 'పోలీసులు రాజీ కోసం ఒత్తిడి చేయవచ్చా?', a: 'లేదు, పోలీసులు బలవంతంగా రాజీ చేయలేరు. ఒకవేళ మీరు వెళ్ళాలి అనుకుంటేనే రక్షణ అధికారులు చర్యలు తీసుకుంటారు.' },
        { q: 'నేను ఆ ఇంట్లోనే ఉండవచ్చా?', a: 'అవును, గృహహింస నిరోధక చట్టం ప్రకారం మహిళలకు అదే ఇంట్లో నివసించే సర్వహక్కులూ ఉన్నాయి.' }
      ]
    }
  }
];

export const safetyHubCategories: SafetyCategory[] = [
  {
    id: 'domestic-violence',
    title: {
      en: 'Domestic Violence',
      hi: 'घरेलू हिंसा',
      te: 'గృహ హింస'
    },
    desc: {
      en: 'Protect yourself from physical, verbal, mental, or sexual abuse at home.',
      hi: 'घर पर शारीरिक, मौखिक, मानसिक या यौन शोषण से खुद को सुरक्षित रखें।',
      te: 'ఇంట్లో జరిగే శారీరక, మానసిక, లైంగిక వేధింపుల నుండి మిమ్మల్ని రక్షించుకోండి.'
    },
    sectionNum: 'Section 85 - BNS',
    iconName: 'home_health',
    bgColor: 'bg-tertiary-fixed/30',
    textColor: 'text-on-tertiary-fixed',
    emergencySteps: {
      en: [
        'Lock yourself in a secure room if there is immediate danger.',
        'Call the helpline 181 or 112 directly.',
        'Inform a trusted family member or neighbor about the danger.'
      ],
      hi: [
        'यदि तुरंत खतरा हो, तो खुद को एक कमरे में बंद कर लें।',
        'हेल्पलाइन 181 या 112 पर कॉल करें।',
        'अपने किसी भरोसेमंद रिश्तेदार या पड़ोसी को घटना के बारे में बताएं।'
      ],
      te: [
        'ఆపద సమయంలో మిమ్మల్ని ఒక గదిలో రక్షితంగా తాళం వేసుకోండి.',
        'వెంటనే 181 లేదా 112 కి సమచారం పంపండి.',
        'మీరు నమ్మిన స్నేహితులకు లేదా పొరుగువారికి ఫోన్ చేసి పిలవండి.'
      ]
    },
    helplines: ['181 (Women Helpline)', '1091 (Sankat Kaleen)', '112 (Police Signal)'],
    firGuidance: {
      en: 'You can go to the nearest Police Station or contact a Protection Officer under the Protection of Women from Domestic Violence Act (PWDVA). If you are injured, police must conduct a medical examination immediately.',
      hi: 'आप निकटतम पुलिस स्टेशन जा सकती हैं या घरेलू हिंसा से महिला संरक्षण अधिनियम के तहत संरक्षण अधिकारी से मिल सकती हैं। चोट लगने पर मेडिकल परीक्षण जरूरी है।',
      te: 'మీరు దగ్గరలోని పోలీస్ స్టేషనుకు వెళ్ళవచ్చు లేదా గృహహింస రక్షణ అధికారిని సంప్రదించవచ్చు. గాయాలైతే ఉచిత వైద్య పరీక్ష చేయించుకోవలిసిన బాధ్యత పోలీసులది.'
    },
    evidenceChecklist: {
      en: [
        'Medical reports and doctor prescriptions of physical injuries.',
        'Photographs of bruises, torn clothes, or broken household items.',
        'Audio/Video recordings of threats or abuse (if safe to take).',
        'Text messages, emails, or WhatsApp chats with threats.'
      ],
      hi: [
        'शारीरिक चोटों की मेडिकल रिपोर्ट और डॉक्टर की पर्चियां।',
        'चोट के निशान, फटे कपड़े या टूटे घरेलू सामानों की तस्वीरें।',
        'धमकियों या गाली-गलौज की ऑडियो/वीडियो रिकॉर्डिंग।',
        'धमकी भरे टेक्स्ट मैसेज, ईमेल या व्हाट्सएप चैट।'
      ],
      te: [
        'గాయాలైనప్పుడు వైద్యులు రాసిచ్చిన రిపోర్టులు.',
        'దెబ్బల తాలూకు ఫోటోలు, చిరిగిన బట్టలు, పగిలిన వస్తువుల చిత్రాలు.',
        'భూతులు తిడుతుంటే లేదా చంపేస్తామని బెదిరిస్తుంటే చేసిన ఆడియో రికార్డింగులు.',
        'వాట్సాప్ లేదా ఎస్ఎంఎస్ లో వచ్చిన బెదిరింపు సందేశాలు.'
      ]
    },
    womensRights: {
      en: [
        'Right to live in the shared household (cannot be thrown out).',
        'Right to secure protection orders against the abuser.',
        'Right to monthly monetary maintenance and temporary custody of children.',
        'Right to free legal aid from DLSA.'
      ],
      hi: [
        'साझा घर में रहने का अधिकार (आपको निकाला नहीं जा सकता)।',
        'उत्पीड़क के खिलाफ सुरक्षा आदेश पाने का अधिकार।',
        'मासिक खर्च (गुज़ारा भत्ता) और बच्चों की अस्थायी कस्टडी का अधिकार।',
        'जिला कानूनी सेवा प्राधिकरण (DLSA) से मुफ्त कानूनी सहायता।'
      ],
      te: [
        'సహ నివాస గృహంలో ఉండే హక్కు (మిమ్మల్ని ఇంట్లో నుండి బయటకు నెట్టడానికి వీల్లేదు).',
        'వేధించే వారిపై కోర్టు ద్వారా ప్రవేశాన్ని నియంత్రించే రక్షణ ఉత్తర్వులు పొందే హక్కు.',
        'నెలవారీ మనోవర్తి (భరణం) మరియు పిల్లల తాత్కాలిక సంరక్షణ హక్కు.',
        'DLSA ద్వారా ఉచిత చట్టపరమైన న్యాయవాది సహాయం పొందే హక్కు.'
      ]
    }
  },
  {
    id: 'cyber-crimes',
    title: {
      en: 'Cyber Crimes',
      hi: 'साइबर अपराध',
      te: 'సైబర్ నేరాలు'
    },
    desc: {
      en: 'Dealing with fake profiles, online stalking, morphing, and blackmailing.',
      hi: 'फर्जी प्रोफाइल, ऑनलाइन पीछा, अश्लील छेड़छाड़ और ब्लैकमेलिंग से निपटें।',
      te: 'నకిలీ ప్రొఫైళ్లు, ఆన్‌లైన్ వేధింపులు, మరియు బ్లాక్‌మెయిలింగ్‌కు వ్యతిరేకంగా పోరాడండి.'
    },
    sectionNum: 'IT Act 66D / 66E',
    iconName: 'devices',
    bgColor: 'bg-primary-fixed/20',
    textColor: 'text-on-primary-fixed',
    emergencySteps: {
      en: [
        'Do not pay any money if blackmailed with morphed pictures.',
        'Deactivate or block the profiles but do not delete the evidence chats.',
        'Complain immediately on cybercrime.gov.in.'
      ],
      hi: [
        'छेड़छाड़ की गई तस्वीरों से ब्लैकमेल किए जाने पर कभी पैसे न दें।',
        'प्रोफ़ाइल ब्लॉक करें लेकिन सबूत स्क्रीनशॉट लेना न भूलें।',
        'तत्काल cybercrime.gov.in पर रिपोर्ट दर्ज करें।'
      ],
      te: [
        'మార్ఫింగ్ ఫోటోలతో బ్లాక్‌మెయిల్ చేస్తే ఒక్క రూపాయి కూడా ఇవ్వద్దు.',
        'సదరు ప్రొఫైల్ బ్లాక్ చేయండి కానీ చాట్ అధారాలను డిలీట్ చేయకండి.',
        'వెంటనే cybercrime.gov.in పోర్టల్ లో పిర్యాదు చేయండి.'
      ]
    },
    helplines: ['1930 (Cyber Fraud Helpline)', '112 (Emergencies)'],
    firGuidance: {
      en: 'You can register an online complaint on the central portal or visit your local Cyber Crime Police Station. Every district has a cyber cell specifically designed to address women-safety cases anonymously.',
      hi: 'आप केंद्रीय ऑनलाइन पोर्टल पर शिकायत दर्ज करा सकती हैं या स्थानीय साइबर अपराध पुलिस स्टेशन जा सकती हैं। प्रत्येक जिले में महिला सुरक्षा के लिए साइबर सेल होता है।',
      te: 'ఆన్‌లైన్‌లో ఫిర్యాదు చేయవచ్చు లేదా స్థానిక సైబర్ క్రైమ్ పోలీస్ స్టేషన్‌ని సందర్శించవచ్చు. మీ పేరు రహస్యంగా ఉంచి నిందితులను పట్టుకుంటారు.'
    },
    evidenceChecklist: {
      en: [
        'Screenshots of the abusive/fake profile URLs.',
        'Chat histories, email headers, and direct messages sent.',
        'History of transactions if extortion occurred.',
        'The exact phone numbers or email addresses used by the perpetrator.'
      ],
      hi: [
        'गाली-गलौज या नकली प्रोफाइल के लिंक (URLs) के स्क्रीनशॉट।',
        'चैट इतिहास, ईमेल हेडर और भेजे गए संदेश।',
        'यदि पैसे ऐठे गए हैं, तो लेन-देन के रिकॉर्ड और रसीदें।',
        'आरोपी द्वारा उपयोग किए गए फोन नंबर या ईमेल पते।'
      ],
      te: [
        'ఫేక్ ప్రొఫైల్స్ కు సంబంధించిన లింకులు, వెబ్ అడ్రస్లు.',
        'వేధించిన చాట్ గ్రూపులు, మెసేజ్ ల పూర్తి స్క్రీన్ షాట్లు.',
        'డబ్బులు పంపినట్లయితే దానికి సంబంధించిన బ్యాంక్ లావాదేవీల రసీదులు.',
        'దుండగుడి మొబైల్ నంబరు లేదా ఐపీ మెయిల్ చిరునామా.'
      ]
    },
    womensRights: {
      en: [
        'Right to ask social media platforms to remove morphed or intimate content within 24 hours (Rule 3(2)(b) of IT Rules).',
        'Right to keep your identity confidential during the investigation of identity theft.',
        'Right to secure help under IT Act Section 67 for cyber obscenity.'
      ],
      hi: [
        'सोशल मीडिया प्लेटफॉर्म से 24 घंटे के भीतर छेड़छाड़ की गई या निजी सामग्री हटवाने का अधिकार (आईटी नियम 3 (2) (बी))।',
        'जांच के दौरान अपनी पहचान को पूरी तरह गुप्त रखने का अधिकार।',
        'साइबर अश्लीलता के खिलाफ आईटी अधिनियम की धारा 67 के तहत त्वरित मदद पाने का अधिकार।'
      ],
      te: [
        'అసభ్య లేదా మార్ఫింగ్ చిత్రాలను 24 గంటల్లోగా సోషల్ మీడియా సంస్థల నుండి తొలగించేలా కోరే హక్కు (IT రూల్స్ 3(2)(b)).',
        'కేసు విచారణ సమయంలో బాధితురాలి పూర్తి వివరాలు రహస్యంగా ఉంచే హక్కు.',
        'సైబర్ అశ్లీలతకు వ్యతిరేకంగా ఐటి చట్టం సెక్షన్ 67 కింద ఆర్డర్లు పొందే హక్కు.'
      ]
    }
  }
];
