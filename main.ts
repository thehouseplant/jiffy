import { Confirm, Input, Secret, Select } from "https://deno.land/x/cliffy@v1.0.0-rc.2/prompt/mod.ts";

let apikey: string, email: string, team: string;

await main();

async function main() {
  email = await Input.prompt({
    message: "Enter your Tyler email address",
  });

  team = await Select.prompt({
    message: "Select your team",
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
  });

  apikey = await Secret.prompt({
    message: "Enter your Atlassian API key",
  });

  console.log({ email, team, apikey });
  if (!await Confirm.prompt("Is everything correct?")) {
    await main();
  }
}
