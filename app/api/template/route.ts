import { NextResponse } from "next/server";
import { OpenAIApi, Configuration } from "openai";
import { TemplateRequest } from "./types";
import { getPromt } from "./utils";

// Create an OpenAI API client (that's edge friendly!)
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const body: TemplateRequest = await req.json();

    const prompt = getPromt(body);
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: prompt }],
    });

    const { choices } = response.data;
    const [choice] = choices;
    const { message } = choice;

    const { content } = message ?? {};

    return NextResponse.json(content ?? "");
  } catch (error) {
    return NextResponse.json(error);
  }
}
