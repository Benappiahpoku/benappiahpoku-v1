/**
 * Project Setup Utility
 *
 * This script updates the project name in package.json and src/config.ts.
 * It ensures the src directory exists before writing config.ts.
 */

import fs from 'fs'
import { createInterface } from 'readline'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

// ES Module equivalent for __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

async function updateProjectName() {
  try {
    const newName = await new Promise((resolve) => {
      rl.question("Enter new project name: ", (answer) => {
        resolve(answer.trim());
      });
    });

    if (!newName) {
      console.log("Project name cannot be empty");
      rl.close();
      return;
    }

    // Update package.json
    const packageJsonPath = join(__dirname, "package.json");
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    packageJson.name = newName;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    // Ensure src directory exists
    const srcDir = join(__dirname, "src");
    if (!fs.existsSync(srcDir)) {
      fs.mkdirSync(srcDir, { recursive: true });
    }

    // Update config.ts
    const configPath = join(srcDir, "config.ts");
    let configContent = "";
    if (fs.existsSync(configPath)) {
      configContent = fs.readFileSync(configPath, "utf8");
      configContent = configContent.replace(
        /projectName: '.*'/,
        `projectName: '${newName}'`
      );
    } else {
      configContent = `export const projectName = '${newName}'\n`;
    }
    fs.writeFileSync(configPath, configContent);

    console.log(`Project name updated to: ${newName}`);
  } catch (error) {
    console.error("Error updating project name:", error);
  } finally {
    rl.close();
  }
}

updateProjectName();