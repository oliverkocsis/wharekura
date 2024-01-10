const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

const openai = new OpenAI();

const file = fs.readFileSync("vince.m4a");

async function main() {
    const transcript = await openai.audio.transcriptions.create({
        model: "whisper-1",
        language: "nl",
        response_format: "text",
        file: file,
    });
    console.log(transcript);
}
main();
