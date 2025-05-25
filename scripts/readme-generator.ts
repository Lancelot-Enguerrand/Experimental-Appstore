import { exec } from "node:child_process";
import fs from "node:fs";

type App = {
  id: string;
  name: string;
  description: string;
  source: string;
  port: number;
  working: string;
};

const appsDir = `${__dirname}/../apps`;
const baseReadmePath = `${__dirname}/../templates/README.md`;
const finalReadmePath = `${__dirname}/../README.md`;

const getAppsList = async () => {
  const apps: Record<string, App> = {};

  const appNames = fs.readdirSync(appsDir);

  for (const app of appNames) {
    try {
      const appConfig = fs.readFileSync(`${__dirname}/../apps/${app}/config.json`, "utf8");
      const appConfigJson = JSON.parse(appConfig);

      var appWorking = "❌"
      if (!appConfigJson.deprecated) {
          appWorking = "✅";
      }
      apps[app] = {
        id: appConfigJson.id,
        name: appConfigJson.name,
        description: appConfigJson.short_desc,
        source: appConfigJson.source,
        port: appConfigJson.port,
        working: appWorking
      };
    } catch (e) {
      console.error(`Error parsing config for ${app}`);
    }
  }

  return { apps };
};

const appToReadme = async (app: App) => {
  return `| <img src="apps/${app.id}/metadata/logo.jpg" width="64"> | [${app.name}](${app.source}) | ${app.description} | ${app.working} |`;
};

const writeToReadme = (appsList: string, count: number) => {
  const baseReadme = fs.readFileSync(baseReadmePath, "utf8");
  let finalReadme = baseReadme.replace("<!appsList>", appsList);
  finalReadme = finalReadme.replace("<!appsCount>", count.toString());
  fs.writeFileSync(finalReadmePath, finalReadme);
};

const main = async () => {
  const { apps } = await getAppsList();
  const appKeys = Object.keys(apps).sort();
  let appsList = "";

  for (let i = 0; i < appKeys.length; i++) {
    const appFinal = await appToReadme(apps[appKeys[i]]);
    appsList = `${appsList}${appFinal}\n`;
  }

  const count = appKeys.length;

  writeToReadme(appsList, count);

  exec(`npx prettier ${finalReadmePath} --write`, (stdout, stderr) => {
    if (stderr) {
      console.error(stderr);
    } else if (stdout) {
      console.log(stdout);
    }
  });
};

main();
