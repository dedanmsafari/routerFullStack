import { OpenAI } from "openai";

const API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: API_KEY,
});

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const image = await openai.images.generate({
    prompt,
    n: 1,
    model: "dall-e-2",
    size: "512x512",
  });

  return Response.json(image.data[0].url);
}
