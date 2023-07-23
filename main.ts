import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.2/command/mod.ts";
import { Input, Secret, Select, prompt } from "https://deno.land/x/cliffy@v1.0.0-rc.2/prompt/mod.ts";

await new Command()
  .name("jiffy")
  .version("0.1.0")
  .description("An opinionated CLI tool for interacting with the Jira API")
  .parse(Deno.args);

// Initialization prompt
const result = await prompt([
  {
    name: "email",
    message: "Enter your Tyler email address",
    type: Input,
  },
  {
    name: "team",
    message: "Select your team",
    type: Select,
    options: [
      "Access Control",
      "Eagle",
      "Elumitas",
      "Ingress & Queries",
      "Interactive Reporting",
      "Release",
      "Security",
      "TIRE",
    ],
  },
  {
    name: "apikey",
    message: "Enter your Atlassian API key",
    type: Secret,
  }
]);

console.log(result);
