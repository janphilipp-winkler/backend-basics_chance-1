import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const myServer = createServer((request, response) => {
  let name, age, profession;

  if (request.url === "/man") {
    name = chance.name({ gender: "male" });
    age = chance.age();
    profession = chance.profession();
  } else if (request.url === "/woman") {
    name = chance.name({ gender: "female" });
    age = chance.age();
    profession = chance.profession();
  } else {
    name = chance.name();
    age = chance.age();
    profession = chance.profession();
  }

  response.statusCode = 200;
  const responseString = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;

  response.end(responseString);
});
