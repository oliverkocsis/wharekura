const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

const openai = new OpenAI();

const speechFile = path.resolve("./audio/speech.mp3");

async function main() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1-hd",
    voice: "shimmer",
    language: "nl",
    input: "Joris is een jongen en Emma is een meisje. Ze wonen in een kleine, gezellige stad in Nederland. Joris houdt van voetballen en Emma houdt van tekenen.",
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
main();