import OpenAI from "openai";
import Configuration from "openai";
import dotenv from "dotenv";
dotenv.config();

const apiKeySecret = process.env.OPENAI_API_KEY;

/*
role(역할): system, user, assistant
*/

const configuration = new Configuration({
  apiKey: apiKeySecret
})
const openai = new OpenAI(configuration);
const content = "안녕? 너의 이름은 뭐야?";
async function main() {

  // chat Completions (채팅 완료)
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "안녕? 너는 무슨 모델이야? 오늘 점심을 추천해줘" }], 
    model: "gpt-4o-mini",
  });
  console.log(completion.choices[0].message.content); // 답변 출력

  // images generate (이미지 생성)
  const image = await openai.images.generate({ prompt: "a bread-baking cat" });
  console.log(image.data); // 이미지 출력
  
}

main();
