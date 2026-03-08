import{G as c}from"./genai-PqHrDvs-.js";import"./vendor-CjYNEJ_u.js";var p;typeof window<"u"&&((p=window.__APP_CONFIG__)!=null&&p.VITE_GEMINI_API_KEY||window.localStorage.getItem("wanderlust_gemini_key"));const s="AIzaSyCrNaO0isoNR9mHAra1Wz4rIbb8iCOWH6A",u=!!s.toString().trim(),h=e=>{if(!(typeof window>"u"))try{window.localStorage.setItem("wanderlust_gemini_key",e),console.info("Gemini key persisted to localStorage for runtime use.")}catch(t){console.warn("Unable to persist Gemini key to localStorage",t)}},d=e=>{const t=Math.max(1,e.days||3),n=Array.from({length:t},(a,r)=>`Day ${r+1}: Morning walking tour, afternoon headline attraction, evening street-food crawl.`).join(`
`);return["Trip Overview",`Destination: ${e.destination||"Your chosen city"}`,`Style: ${e.travelType||"Flexible"} � Budget: ${e.budget||"Comfort"} � Travelers: ${e.travelers||2}`,"","Outline",n,"","Must-try: local market lunch plus a signature dessert.","Getting around: metro/bus day-pass; ride-hailing after 10pm.","Tip: pre-book one anchor activity per day; carry a refillable bottle."].join(`
`)},l="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=80",f=async e=>{var a,r,o;if(!u)return{text:d(e),sources:[]};const t=new c({apiKey:s}),n=`
    You are an expert AI Travel Planner. Generate a complete, well-structured, and realistic travel plan.
    Use real-time information to provide current events, weather trends, and up-to-date prices.
    
    USER DETAILS:
    - Destination: ${e.destination}
    - Number of days: ${e.days}
    - Budget: ${e.budget}
    - Number of travelers: ${e.travelers}
    - Travel type: ${e.travelType}
    - Interests: ${e.interests.join(", ")}
    - Starting city: ${e.startingCity}

    INSTRUCTIONS:
    1. Create a day-wise itinerary (Day 1, Day 2, etc.).
    2. For each day, include Morning, Afternoon, and Evening activities.
    3. Suggest popular tourist attractions with brief descriptions.
    4. Recommend local food and famous dishes.
    5. Suggest transportation options (local transport).
    6. Provide estimated daily expenses.
    7. Include hotel recommendations (budget, mid-range, luxury).
    8. Mention best travel tips and safety tips.
    9. Provide the best time to visit the destination.
    10. Format with headings and bullet points.
  `;try{const i=await t.models.generateContent({model:"gemini-3-flash-preview",contents:n,config:{tools:[{googleSearch:{}}],temperature:.7}}),g=((o=(r=(a=i.candidates)==null?void 0:a[0])==null?void 0:r.groundingMetadata)==null?void 0:o.groundingChunks)||[];return{text:i.text||"Sorry, I couldn't generate a travel plan.",sources:g}}catch(i){return console.error("Gemini API Error:",i),{text:d(e),sources:[]}}},v=async e=>{var n,a,r;if(!u)return l;const t=new c({apiKey:s});try{const o=await t.models.generateContent({model:"gemini-2.5-flash-image",contents:{parts:[{text:`A high-quality travel photograph of ${e} with iconic landmarks, vibrant culture, and scenic views. 16:9 aspect ratio, cinematic lighting.`}]}});for(const i of((r=(a=(n=o.candidates)==null?void 0:n[0])==null?void 0:a.content)==null?void 0:r.parts)||[])if(i.inlineData)return`data:image/png;base64,${i.inlineData.data}`;return l}catch(o){return console.error("Image Generation Error:",o),l}},w=async e=>{if(!u)return"Quick tip: group nearby sights into one walking loop and book one timed ticket per day to avoid lines.";const t=new c({apiKey:s});try{return(await t.models.generateContent({model:"gemini-3-flash-preview",contents:e,config:{systemInstruction:"You are a concise travel assistant bot. Give helpful, short travel tips."}})).text||"I'm not sure about that tip."}catch{return"Error getting tip."}};export{v as generateDestinationImage,f as generateTravelPlan,w as getQuickTravelTip,h as persistGeminiKey};
