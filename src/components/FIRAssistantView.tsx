import React, { useState } from 'react';
import { FileText, MapPin, Printer, HelpCircle, CheckCircle, ShieldAlert, ArrowRight, BookOpen, UserCheck, Milestone, Search } from 'lucide-react';
import { Language } from '../types';
import { processJourneySteps } from '../data/lessons';

interface FIRAssistantViewProps {
  language: Language;
}

export default function FIRAssistantView({ language }: FIRAssistantViewProps) {
  const [activeTab, setActiveTab] = useState<'journey' | 'creator' | 'finder' | 'rights'>('journey');

  // FIR Creator state
  const [reporterName, setReporterName] = useState('');
  const [victimName, setVictimName] = useState('');
  const [suspectDetails, setSuspectDetails] = useState('');
  const [incidentDate, setIncidentDate] = useState('');
  const [incidentLocation, setIncidentLocation] = useState('');
  const [incidentDescription, setIncidentDescription] = useState('');
  const [draftGenerated, setDraftGenerated] = useState(false);

  // Finder state
  const [pinCode, setPinCode] = useState('');
  const [searchedCells, setSearchedCells] = useState<any[] | null>(null);

  const steps = processJourneySteps[language];

  // Print function
  const handlePrint = () => {
    window.print();
  };

  // Locate nearest police cell simulation
  const handleFindCells = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinCode || pinCode.length < 6) return;

    // Simulated authentic locations around India
    const cellsByPinPrefix = {
      '1': [
        { name: 'Women Police Station, Central Delhi', phone: '011-23315533', address: 'Parliament Street, New Delhi, PIN: 110001' },
        { name: 'District Women Help Cell, North Delhi', phone: '011-27419822', address: 'Maurice Nagar, Delhi University Campus, PIN: 110007' }
      ],
      '2': [
        { name: 'Mahila Police Cell, Lucknow', phone: '0522-2623355', address: 'Hazratganj, Lucknow, Uttar Pradesh, PIN: 226001' }
      ],
      '3': [
        { name: 'Rajasthan Mahila Thana, Jaipur', phone: '0141-2371233', address: 'Gandhi Nagar, Jaipur, Rajasthan, PIN: 302015' }
      ],
      '4': [
        { name: 'Women Police Cell, Mumbai Fort', phone: '022-22620111', address: 'Crawford Market Area, Mumbai, Maharashtra, PIN: 400001' }
      ],
      '5': [
        { name: 'Mahila Suraksha Cell, Hyderabad Central', phone: '040-27852445', address: 'CCS Building, Basheerbagh, Hyderabad, PIN: 500029' }
      ],
      '6': [
        { name: 'All Women Police Station, Bangalore Central', phone: '080-22942441', address: 'Infantry Road, Vasanth Nagar, Bengaluru, Karnataka, PIN: 560001' }
      ],
      '7': [
        { name: 'All Women Police Station, South Chennai', phone: '044-23452588', address: 'Adyar Police Station Complex, Adyar, Chennai, PIN: 600020' }
      ]
    };

    const firstChar = pinCode.charAt(0);
    const resolved = cellsByPinPrefix[firstChar as keyof typeof cellsByPinPrefix] || [
      { name: 'State HQ All-Women Police Cell', phone: '040-23456789 (Local Branch)', address: 'District Police Headquarters Women Protection Cell, PIN: ' + pinCode }
    ];

    setSearchedCells(resolved);
  };

  const rightHeaders = {
    en: {
      zeroFir: 'Zero FIR Protection',
      zeroFirDesc: 'You can file a complaint in ANY station regardless of jurisdiction. Refusal is an offence.',
      femaleStaff: 'Presence of Female Officers',
      femaleStaffDesc: 'Your statement in sexual assaults can only be taken by a female sub-inspector/officer.',
      freeCopy: 'Free Certified FIR Copy',
      freeCopyDesc: 'You have a constitutional right to get a 100% free physical printed copy of FIR instantly.',
      medicalRight: 'Immediate Medical Aid First',
      medicalRightDesc: 'Treatment for sexual assault and acid attacks is 100% free at all hospitals. Immediate duty.'
    },
    hi: {
      zeroFir: 'ज़ीरो एफआईआर का अधिकार',
      zeroFirDesc: 'आप अपनी एफआईआर किसी भी पुलिस स्टेशन में दर्ज करा सकती हैं। मना करने पर सजा हो सकती है।',
      femaleStaff: 'महिला पुलिस अधिकारी की मौजूदगी',
      femaleStaffDesc: 'यौन उत्पीड़न मामलों में आपका बयान केवल एक महिला पुलिस अधिकारी ही दर्ज कर सकती है।',
      freeCopy: 'मुफ्त एफआईआर प्रिंट प्रति',
      freeCopyDesc: 'सांविधिक तौर पर तुरंत 100% मुफ्त में एफआईआर की एक लिखित प्रिंट प्रति प्राप्त करने का अधिकार।',
      medicalRight: 'मुफ्त चिकित्सा सर्वोच्च प्राथमिकता',
      medicalRightDesc: 'एसिड हमले या गंभीर मामलों में सभी अस्पतालों में पीड़िता का इलाज मुफ्त और तुरंत होना अनिवार्य है।'
    },
    te: {
      zeroFir: 'జీరో ఎఫ్ఐఆర్ (Zero FIR) హక్కు',
      zeroFirDesc: 'నేరం జరిగిన ప్రదేశంతో సంబంధం లేకుండా భారతదేశంలోని ఏ పోలీస్ స్టేషనులోనైనా ఫిర్యాదు రాసుకోవచ్చు.',
      femaleStaff: 'మహిళా అధికారి సమక్షం',
      femaleStaffDesc: 'లైంగిక నేరాలపై మీ పిర్యాదు స్టేట్మెంట్ ని ఒక మహిళా పోలీస్ అధికారి మాత్రమే నమోదు చేయాలి.',
      freeCopy: 'ఉచిత FIR కాపీ హక్కు',
      freeCopyDesc: 'మీరు నమోదు చేసుకున్న FIR ప్రింట్ కాపీని పోలీసుల నుండి వెంటనే ఉచితంగా పొందే హక్కు ఉంది.',
      medicalRight: 'ఉచిత తక్షణ వైద్యం హక్కు',
      medicalRightDesc: 'యాసిడ్ లేదా వేధింపుల దాడి జరిగితే ఏ ప్రైవేట్ లేదా ప్రభుత్వ ఆసుపత్రి అయినా ఉచితంగా తక్షణ ప్రథమ చికిత్స చేయాలి.'
    }
  }[language];

  return (
    <div className="space-y-6 pb-24 animate-fade-in text-gray-900">
      
      {/* Top Slider Navigation Links */}
      <div className="flex bg-white dark:bg-zinc-900 rounded-2xl p-1.5 border border-gray-100 dark:border-zinc-805 soft-shadow scrollbar-none overflow-x-auto gap-1">
        
        <button
          onClick={() => setActiveTab('journey')}
          className={`flex-1 min-w-[120px] text-center font-bold py-3 px-1 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
            activeTab === 'journey'
              ? 'bg-[#6f48b2] text-white shadow-sm'
              : 'text-gray-500 dark:text-zinc-400 hover:text-gray-800'
          }`}
        >
          <Milestone className="w-4 h-4" />
          <span>{language === 'en' ? 'Legal Journey' : language === 'hi' ? 'कानूनी यात्रा' : 'న్యాయ ప్రయాణం'}</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('creator');
            setDraftGenerated(false);
          }}
          className={`flex-1 min-w-[120px] text-center font-bold py-3 px-1 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
            activeTab === 'creator'
              ? 'bg-[#6f48b2] text-white shadow-sm'
              : 'text-gray-500 dark:text-zinc-400 hover:text-gray-800'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>{language === 'en' ? 'FIR Creator' : language === 'hi' ? 'FIR सहायक' : 'FIR క్రియేటర్'}</span>
        </button>

        <button
          onClick={() => setActiveTab('finder')}
          className={`flex-1 min-w-[120px] text-center font-bold py-3 px-1 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
            activeTab === 'finder'
              ? 'bg-[#6f48b2] text-white shadow-sm'
              : 'text-gray-500 dark:text-zinc-400 hover:text-gray-805'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>{language === 'en' ? 'Police Finder' : language === 'hi' ? 'पुलिस स्टेशन' : 'పోలీస్ సెల్ వెతుకు'}</span>
        </button>

        <button
          onClick={() => setActiveTab('rights')}
          className={`flex-1 min-w-[120px] text-center font-bold py-3 px-1 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
            activeTab === 'rights'
              ? 'bg-[#6f48b2] text-white shadow-sm'
              : 'text-gray-500 dark:text-zinc-400 hover:text-gray-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>{language === 'en' ? 'Your Rights' : language === 'hi' ? 'मुख्य अधिकार' : 'మీ హక్కులు'}</span>
        </button>

      </div>

      {/* Tab 1: Visual Timeline Journey */}
      {activeTab === 'journey' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 rounded-[24px] p-6 border border-gray-100 dark:border-zinc-800 soft-shadow">
            <h3 className="text-base font-bold text-gray-950 dark:text-white mb-2 flex items-center gap-2">
              <Milestone className="w-5 h-5 text-[#6f48b2] dark:text-[#b78efe]" />
              <span>Interactive Post-FIR Journey Map</span>
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">
              Learn what actually happens after a crime is reported to the police. This timeline guides you safely from the initial event into court proceedings.
            </p>

            {/* Vertical Flow Timeline */}
            <div className="relative border-l-2 border-dashed border-[#bdc2ff] dark:border-purple-900 pl-6 ml-4 space-y-8">
              {steps.map((st, idx) => (
                <div key={idx} className="relative animate-fade-in">
                  
                  {/* Circle Pin Marker */}
                  <span className="absolute -left-10 top-0.5 w-7 h-7 bg-[#6f48b2] text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-900 shadow-sm">
                    {st.step}
                  </span>

                  {/* Flow Steps detail container */}
                  <div className="bg-gray-50 dark:bg-zinc-850/60 p-4 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:bg-[#ebdcff]/10 transition-colors">
                    <h4 className="font-bold text-sm text-gray-900 dark:text-gray-100">
                      {st.title}
                    </h4>
                    <p className="text-xs text-gray-650 dark:text-zinc-300 mt-1 leading-relaxed antialiased">
                      {st.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Interactive FIR Template generator creator */}
      {activeTab === 'creator' && (
        <div className="space-y-6">
          {!draftGenerated ? (
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setDraftGenerated(true);
              }}
              className="bg-white dark:bg-zinc-900 p-6 rounded-[24px] border border-gray-100 dark:border-zinc-800 soft-shadow space-y-4"
            >
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-2">
                <FileText className="w-6 h-6 text-[#6f48b2] dark:text-[#b78efe]" />
                <div>
                  <h3 className="font-bold text-sm text-gray-950 dark:text-white">Draft Complaint Generator</h3>
                  <p className="text-[10px] text-gray-500">Draft your incident facts simply. Print and carry this directly to stamp it as FIR.</p>
                </div>
              </div>

              {/* Grid 2 Column fields */}
              <div className="grid grid-cols-2 gap-3 text-gray-900">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 dark:text-zinc-300">Your Full Name (Reporter)</label>
                  <input
                    required
                    value={reporterName}
                    onChange={(e) => setReporterName(e.target.value)}
                    placeholder="Enter family/first name"
                    className="w-full text-xs p-3 border border-gray-100 dark:border-zinc-800 rounded-xl bg-gray-50 dark:bg-zinc-850/50 focus:outline-[#6f48b2] text-gray-900 dark:text-gray-100"
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 dark:text-zinc-300">Victim's Full Name</label>
                  <input
                    required
                    value={victimName}
                    onChange={(e) => setVictimName(e.target.value)}
                    placeholder="Enter 'Self' or other name"
                    className="w-full text-xs p-3 border border-gray-100 dark:border-zinc-805 rounded-xl bg-gray-50 dark:bg-zinc-850/50 focus:outline-[#6f48b2] text-gray-900 dark:text-gray-100"
                    type="text"
                  />
                </div>
              </div>

              {/* suspect info */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 dark:text-zinc-300">Suspect/Accused (If known)</label>
                <input
                  value={suspectDetails}
                  onChange={(e) => setSuspectDetails(e.target.value)}
                  placeholder="e.g. Unknown (Crowd passenger), Name, or vehicle numbers"
                  className="w-full text-xs p-3 border border-gray-100 dark:border-zinc-800 rounded-xl bg-gray-50 dark:bg-zinc-500/10 focus:outline-[#6f48b2] text-gray-900 dark:text-gray-100"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 dark:text-zinc-300">Date & Approximate Time</label>
                  <input
                    required
                    value={incidentDate}
                    onChange={(e) => setIncidentDate(e.target.value)}
                    className="w-full text-xs p-3 border border-gray-100 dark:border-zinc-800 rounded-xl bg-gray-50 dark:bg-zinc-500/10 focus:outline-[#6f48b2] text-gray-900 dark:text-gray-100"
                    type="text"
                    placeholder="e.g. 28-05-2026 at 4:30 PM"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 dark:text-zinc-300">Specific Location Place</label>
                  <input
                    required
                    value={incidentLocation}
                    onChange={(e) => setIncidentLocation(e.target.value)}
                    placeholder="e.g. Route 4 bus, Secunderabad"
                    className="w-full text-xs p-3 border border-gray-100 dark:border-zinc-800 rounded-xl bg-gray-50 dark:bg-zinc-500/10 focus:outline-[#6f48b2] text-gray-900 dark:text-gray-100"
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 dark:text-zinc-305">Describe What Happened Simply (Honest facts)</label>
                <textarea
                  required
                  rows={4}
                  value={incidentDescription}
                  onChange={(e) => setIncidentDescription(e.target.value)}
                  placeholder="Explain exactly how they physically touched you, followed you, or threatened you. Do not omit facts; specify exact dates and evidence available of any harassment."
                  className="w-full text-xs p-3 border border-gray-100 dark:border-zinc-800 rounded-xl bg-gray-50 dark:bg-zinc-500/10 focus:outline-[#6f48b2] text-gray-900 dark:text-gray-100 leading-relaxed font-semibold"
                />
              </div>

              <button
                type="submit"
                id="fir-generate-draft-btn"
                className="w-full bg-[#6f48b2] hover:bg-[#5a3696] font-bold text-sm text-white py-3.5 rounded-2xl cursor-pointer shadow-md text-center active:scale-95 duration-100"
              >
                Compile Draft Complaint Copy
              </button>

            </form>
          ) : (
            <div className="space-y-4 animate-fade-in-up">
              
              {/* Draft Complaint Printable Sheet */}
              <div 
                id="printable-fir-draft-sheet" 
                className="bg-white text-zinc-900 p-6 rounded-[24px] border-4 border-double border-zinc-300 shadow-md relative overflow-hidden"
              >
                {/* Draft Badge Watermark logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-12 select-none opacity-5 hover:opacity-10 pointer-events-none">
                  <span className="text-7xl font-bold tracking-widest text-[#6f48b2]">DRAFT</span>
                </div>

                <div className="text-center border-b-2 border-zinc-200 pb-4 mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">BHARATIYA NYAYA SANHITA (BNS) 2023</h4>
                  <h1 className="text-lg font-bold text-zinc-900 font-serif mt-1">INFORMAL CRIME COMPLAINT SCHEME</h1>
                  <p className="text-[10px] text-zinc-550 italic mt-0.5">Prepared via Nyaya Sakhi Legal Empowerment Portal</p>
                </div>

                <div className="space-y-3.5 text-xs text-zinc-800 leading-relaxed">
                  
                  <div className="grid grid-cols-2 border-b border-zinc-100 pb-2">
                    <div>
                      <p className="font-bold text-zinc-500">REPORTER (COMPLAINANT)</p>
                      <p className="font-bold text-zinc-900 font-body-sm text-sm">{reporterName}</p>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-500">VICTIM NAME</p>
                      <p className="font-bold text-zinc-900 font-body-sm text-sm">{victimName}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 border-b border-zinc-100 pb-2">
                    <div>
                      <p className="font-bold text-slate-500">INCIDENT OCCURRED DATE / TIME</p>
                      <p className="font-semibold text-zinc-900">{incidentDate}</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-500">INCIDENT LOCATION PLACE</p>
                      <p className="font-semibold text-zinc-900">{incidentLocation}</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-bold text-slate-500 mb-0.5">ACCUSED (SUSPECT DETAILS)</p>
                    <p className="font-semibold text-zinc-900 bg-zinc-50 p-2.5 rounded-xl border border-zinc-100">{suspectDetails || 'Unknown details (Need police to trace perpetrator)'}</p>
                  </div>

                  <div className="pt-2">
                    <p className="font-bold text-slate-500 mb-1">FACTUAL DESCRIPTION OF COMPLAINT</p>
                    <p className="bg-zinc-50/50 p-4 rounded-2xl border border-zinc-100 text-zinc-900 italic font-medium whitespace-pre-wrap leading-relaxed">
                      "{incidentDescription}"
                    </p>
                  </div>

                  <div className="pt-6 border-t-2 border-dashed border-zinc-250 flex justify-between items-end">
                    <div className="text-center w-1/3">
                      <div className="h-0.5 border-t border-zinc-300 w-full mb-1" />
                      <p className="text-[9px] text-slate-400 font-bold uppercase">Signature of Officer</p>
                    </div>
                    <div className="text-center w-1/3">
                      <div className="h-0.5 border-t border-zinc-300 w-full mb-1" />
                      <p className="text-[9px] text-slate-400 font-bold uppercase">Signature of Complainant</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Buttons list */}
              <div className="flex gap-3">
                <button
                  onClick={() => setDraftGenerated(false)}
                  className="flex-1 bg-zinc-100 text-zinc-700 py-3.5 rounded-2xl text-xs font-bold hover:bg-zinc-200 transition-colors cursor-pointer text-center active:scale-95 shadow-sm"
                >
                  Edit Input Values
                </button>
                <button
                  onClick={handlePrint}
                  id="fir-print-draft-btn"
                  className="flex-1 bg-green-700 hover:bg-green-800 text-white font-bold py-3.5 rounded-2xl text-xs transition-colors flex justify-center items-center gap-2 cursor-pointer active:scale-95 shadow-md text-center"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print & Download Draft</span>
                </button>
              </div>

              {/* helpful tip */}
              <div className="bg-green-50 text-green-800 p-4 rounded-2xl text-xs leading-relaxed border border-green-100 flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>
                  <strong>Print this!</strong> Under the Bharatiya Nagarik Suraksha Sanhita (BNSS), police must accept this written sheet format and stamp a free receipt instantly.
                </span>
              </div>

            </div>
          )}
        </div>
      )}

      {/* Tab 3: Pin Code Police Station Finder */}
      {activeTab === 'finder' && (
        <div className="space-y-6">
          <form 
            onSubmit={handleFindCells}
            className="bg-white dark:bg-zinc-900 p-6 rounded-[24px] border border-gray-100 dark:border-zinc-800 soft-shadow space-y-4"
          >
            <div className="space-y-1.5 text-center">
              <h3 className="text-base font-bold text-gray-950 dark:text-white font-title-md">
                Nearest Women Protection Cell Finder
              </h3>
              <p className="text-xs text-gray-500 max-w-[90%] mx-auto leading-relaxed">
                Enter your 6-digit PIN code to pull official addresses, special women-help numbers, and active helpline teams near your locale.
              </p>
            </div>

            <div className="flex gap-2">
              <input
                required
                maxLength={6}
                value={pinCode}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, ''); // numbers only
                  setPinCode(val);
                }}
                className="flex-1 text-center font-bold text-sm tracking-widest py-3 border border-gray-100 dark:border-zinc-800 rounded-xl bg-gray-50 focus:outline-[#6f48b2] text-gray-901"
                placeholder="PIN CODE (6 Digits)"
                type="text"
                id="search-pincode-input"
              />
              <button
                type="submit"
                id="search-pincode-submit-btn"
                className="bg-[#6f48b2] hover:bg-[#5a3696] text-white p-3.5 rounded-xl active:scale-95 duration-100 cursor-pointer flex-shrink-0"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Searched cells list */}
          {searchedCells && (
            <div className="space-y-3 animate-fade-in-up">
              {searchedCells.map((cell, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-[20px] p-5 soft-shadow space-y-3 relative overflow-hidden"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-sky-100 p-2.5 rounded-xl text-sky-850">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm text-gray-950 dark:text-white leading-tight">
                        {cell.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium">
                        {cell.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-1">
                    <a
                      href={`tel:${cell.phone}`}
                      className="flex-1 bg-sky-50 dark:bg-zinc-850 text-sky-800 dark:text-sky-350 p-2 text-center rounded-xl text-xs font-bold border border-sky-100 dark:border-zinc-805 hover:bg-sky-100 active:scale-95 duration-100"
                    >
                      Call Cell: {cell.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Legal Rights info sheet */}
      {activeTab === 'rights' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Right 1: Zero FIR */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-[24px] p-5 soft-shadow flex flex-col justify-between">
            <div className="space-y-2">
              <span className="bg-[#ebdcff] text-[#260058] px-2.5 py-1 rounded-full text-[10px] font-bold block w-fit">ZERO FIR</span>
              <h4 className="font-title-md text-sm font-bold text-gray-900 dark:text-gray-100">{rightHeaders.zeroFir}</h4>
              <p className="text-gray-650 dark:text-zinc-300 text-xs leading-relaxed antialiased">{rightHeaders.zeroFirDesc}</p>
            </div>
          </div>

          {/* Right 2: Female officer */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-[24px] p-5 soft-shadow flex flex-col justify-between">
            <div className="space-y-2">
              <span className="bg-sky-100 text-[#1a237e] px-2.5 py-1 rounded-full text-[10px] font-bold block w-fit">FEMALE STAFF</span>
              <h4 className="font-title-md text-sm font-bold text-gray-900 dark:text-gray-100">{rightHeaders.femaleStaff}</h4>
              <p className="text-gray-650 dark:text-zinc-300 text-xs leading-relaxed antialiased">{rightHeaders.femaleStaffDesc}</p>
            </div>
          </div>

          {/* Right 3: Free certified copy */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-[24px] p-5 soft-shadow flex flex-col justify-between">
            <div className="space-y-2">
              <span className="bg-[#fdf5ed] text-amber-900 px-2.5 py-1 rounded-full text-[10px] font-bold block w-fit">CONSTITUTION LAW</span>
              <h4 className="font-title-md text-sm font-bold text-gray-900 dark:text-gray-100">{rightHeaders.freeCopy}</h4>
              <p className="text-gray-650 dark:text-zinc-300 text-xs leading-relaxed antialiased">{rightHeaders.freeCopyDesc}</p>
            </div>
          </div>

          {/* Right 4: Medical treatment first */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-[24px] p-5 soft-shadow flex flex-col justify-between">
            <div className="space-y-2">
              <span className="bg-[#f5fbf7] text-green-800 px-2.5 py-1 rounded-full text-[10px] font-bold block w-fit">MEDICAL ACT</span>
              <h4 className="font-title-md text-sm font-bold text-gray-900 dark:text-gray-100">{rightHeaders.medicalRight}</h4>
              <p className="text-gray-650 dark:text-zinc-300 text-xs leading-relaxed antialiased">{rightHeaders.medicalRightDesc}</p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
