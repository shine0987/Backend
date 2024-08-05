import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const apiKeySecret = process.env.OPENAI_API_KEY;

const openai = new OpenAI();
const content = "안녕? 너의 이름은 뭐야?";
async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", 
    content: "안녕? 너는 무슨 모델이야? 오늘 점심을 추천해줘" }], // 질문을 한다.
    model: "gpt-4o-mini",
  });

  // console.log(completion.choices[0]);
  console.log(completion.choices[0].message.content); // 답변을 출력한다.
}

main();
