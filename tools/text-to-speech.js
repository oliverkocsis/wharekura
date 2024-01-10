const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

const data = {
  filename: "040890b5-d93f-4dcf-945b-b678e1ba06c9",
  nl: "de appel",
};

const openai = new OpenAI();

const speechFile = path.resolve(`./public/audio/${data.filename}.aac`);

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