const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

const data = {
  en: "the girl eats",
  nl: "Het meisje eet.",
};

const openai = new OpenAI();

const speechFile = path.resolve(`./public/audio/${data.en}.aac`);

async function main() {
  const audio = await openai.audio.speech.create({
    model: "tts-1-hd",
    voice: "shimmer",
    language: "nl",
    response_format: "aac",
    speed: 1,
    input: data.nl,

  });
  console.log(speechFile);
  const buffer = Buffer.from(await audio.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
main();