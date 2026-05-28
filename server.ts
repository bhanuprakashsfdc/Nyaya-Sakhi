import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Initialize Google GenAI client lazily (so it won't crash on startup if key is missing)
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("WARNING: GEMINI_API_KEY is not defined. AI Chatbot responses will fallback to friendly local rules.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key || "MOCK_KEY",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Middleware
app.use(express.json());

// API route for Nyaya Sakhi AI Assistant
app.post("/api/chat", async (req, res) => {
  const { message, history = [], language = "en" } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  try {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      // Mock response if no API key is set, explaining beautifully in a friendly tone
      const fallbackMsgsByLang = {
        en: "Namaste! I am your Nyaya Sakhi. Since my AI connection is currently using offline mode, here is some quick guidance: If this is an emergency, please dial 112 (Police) or 181 (Women Helpline) immediately. To learn about laws, browse our 'Learning' section, which explains Section 74 (outraging modesty), Section 78 (stalking), and more!",
        hi: "नमस्ते! मैं आपकी न्याय सखी हूँ। चूंकि मेरा एआई कनेक्शन अभी ऑफलाइन मोड का उपयोग कर रहा है, इसलिए यहाँ त्वरित मार्गदर्शन है: यदि आपात स्थिति है, तो कृपया तुरंत 112 या 181 डायल करें। हमारे 'शिक्षा' अनुभाग में जाकर आप कानून सरल भाषा में पढ़ सकती हैं!",
        te: "నమస్తే! నేను మీ న్యాయ సఖిని. నా ఏఐ నెట్‌వర్క్ ప్రస్తుతం ఆఫ్‌లైన్ మోడ్‌లో ఉన్నందున చిన్న సలహా: ఇది అత్యవసరమైతే దయచేసి వెంటనే 112 లేదా 181 కి కాల్ చేయండి. ఇతర చట్టాలను మన 'నేర్చుకోండి' విభాగంలో సులభంగా చదవవచ్చు!"
      };
      const fallback = fallbackMsgsByLang[language as "en" | "hi" | "te"] || fallbackMsgsByLang.en;
      return res.json({ text: fallback });
    }

    const ai = getAiClient();
    
    // System Instruction setting the supportive, simple, 10th-grade level tone for BNS 2023 legal guidance.
    const systemInstruction = `
You are 'Nyaya Sakhi' (meaning Female Justice Friend), an empathetic, deeply supportive, and gentle legal education AI assistant designed for women in India. 
Your goal is to explain legal rights, crimes, punishments, and police procedures under the 'Bharatiya Nyaya Sanhita (BNS) 2023' in extremely simple terms that an 8th to 10th-grade student can understand.

Strict Rules of Communication:
1. Tone: Always be emotionally supportive, compassionate, calm, and empowering. Avoid cold or robotic language.
2. Language: Speak naturally in ${language === 'hi' ? 'Hindi (readable script)' : language === 'te' ? 'Telugu (readable script)' : 'English (simple English)'}. Match the user's focus.
3. Clarity: Never use complex legal jargon. If you must name a Section, explain its implication using simple, relatable daily examples from Indian life.
4. Emergency Check: If the user indicates they are in immediate danger or undergoing domestic violence, sexual assault, or cyber leakage, first provide emotional reassurance and urge them to stay safe. Suggest calling 112 or 181 (Women Helpline) or utilizing the red Emergency SOS button immediately.
5. Provide actionable checklists (e.g. what to gather, whom to speak to).
6. Keep answers concise, visual, and spaced out with bold headers or clean bullet points.
`;

    // Map history to contents payload
    const contents = history.map((msg: any) => ({
      role: msg.sender === "user" ? "user" : "model",
      parts: [{ text: msg.text }]
    }));
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text || "I'm sorry, I'm finding it hard to process that. Please ask again simply." });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Sorry, I had trouble connecting to the network. Please retry in a bit." });
  }
});

// Configure Vite middleware or static server
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Middlewares integrated in DEVELOPMENT mode.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving static files from dist/ in PRODUCTION mode.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server fully running on http://localhost:${PORT}`);
  });
}

setupServer().catch((err) => {
  console.error("Failed to start full-stack server:", err);
});
