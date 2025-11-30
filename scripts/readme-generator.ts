import { exec } from "node:child_process";
import fs from "node:fs";

type App = {
  id: string;
  name: string;
  categories: string;
  description: string;
  source: string;
};

const appsDir = `${__dirname}/../apps`;
const baseReadmePath = `${__dirname}/../templates/README.md`;
const finalReadmePath = `${__dirname}/../README.md`;

const getAppsList = async () => {
  const apps: Record<string, App> = {};
  const appsDeprecated: Record<string, App> = {};

  const appNames = fs.readdirSync(appsDir);

  for (const app of appNames) {
    try {
      const appConfig = fs.readFileSync(`${__dirname}/../apps/${app}/config.json`, "utf8");
      const appConfigJson = JSON.parse(appConfig);

      if (!appConfigJson.deprecated) {
        apps[app] = {
          id: appConfigJson.id,
          name: appConfigJson.name,
          categories: appConfigJson.categories,
          description: appConfigJson.short_desc,
          source: appConfigJson.source,
        };
      } else if (appConfigJson.deprecated) {
        appsDeprecated[app] = {
          id: appConfigJson.id,
          name: appConfigJson.name,
          categories: appConfigJson.categories,
          description: appConfigJson.description,
          source: appConfigJson.source,
        };
      }
    } catch (e) {
      console.error(`Error parsing config for ${app}`);
    }
  }

  return { apps, appsDeprecated };
};

const appToReadme = async (app: App) => {
  return `| <img src="apps/${app.id}/metadata/logo.jpg" width="56"> | *[${app.name}](${app.source})*<br/><sub>*${app.categories.replace(/,/g, " ")}*</sub>| ${app.description} |`;
};

const writeToReadme = (appsList: string, count: number, appsDeprecatedList: string, countDeprecated: number) => {
  const baseReadme = fs.readFileSync(baseReadmePath, "utf8");
  let finalReadme = baseReadme.replace("<!appsList>", appsList);
  finalReadme = finalReadme.replace("<!appsCount>", count.toString());
  finalReadme = finalReadme.replace("<!appsDeprecatedList>", appsDeprecatedList);
  finalReadme = finalReadme.replace("<!appsDeprecatedCount>", countDeprecated.toString());
  fs.writeFileSync(finalReadmePath, finalReadme);
};

const main = async () => {
  const { apps, appsDeprecated } = await getAppsList();
  const appKeys = Object.keys(apps).sort();
  const appKeysDeprecated = Object.keys(appsDeprecated).sort();
  let appsList = "";
  let appsDeprecatedList = "";

  for (let i = 0; i < appKeys.length; i++) {
    const appFinal = await appToReadme(apps[appKeys[i]]);
    appsList = `${appsList}${appFinal}\n`;
  }

  for (let i = 0; i < appKeysDeprecated.length; i++) {
    const appDeprecatedFinal = await appToReadme(appsDeprecated[appKeysDeprecated[i]]);
    appsDeprecatedList = `${appsDeprecatedList}${appDeprecatedFinal}\n`;
  }

  const count = appKeys.length;
  const countDeprecated = appKeysDeprecated.length;

  writeToReadme(appsList, count, appsDeprecatedList, countDeprecated);

  exec(`npx prettier ${finalReadmePath} --write`, (stdout, stderr) => {
    if (stderr) {
      console.error(stderr);
    } else if (stdout) {
      console.log(stdout);
    }
  });
};

main();
