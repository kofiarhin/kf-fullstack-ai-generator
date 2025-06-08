const { Groq } = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API,
});
// const samplePrompt = `You are a short-form content expert. Write a TikTok script (max 150 words) that grabs attention in the first 2 seconds, uses casual Gen Z tone, includes a hook, a value-packed explanation, and a clear CTA. Topic: “How to make AI work for you in your sleep.”

// Format:
// - Hook (1 sentence)
// - Body (2–3 sentences)
// - CTA (1 line)
// `;

const movieAi = async ({ character }) => {
  const prompt = `Write a character bio for ${character}. Include their profession, when they started, their breakout role, major achievements, recent work, and any awards. Keep it under 200 words and structured like a professional actor biography.`;

  try {
    const response = await groq.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
    });

    return response.choices[0]?.message?.content || "";
  } catch (err) {
    throw new Error(`callGroqAPI failed: ${err.message}`);
  }
};

module.exports = movieAi;
