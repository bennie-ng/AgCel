import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { getAgCelDir, AG_CEL_DIR, getPackageRoot } from '../utils/index.js';

export function initCommand() {
    const agCelDir = getAgCelDir();
    const packageRoot = getPackageRoot();

    console.log(chalk.blue('Initializing Ag-Cel...'));

    try {
        if (!fs.existsSync(agCelDir)) {
            fs.mkdirSync(agCelDir);
            // Create subdirectories
            fs.mkdirSync(path.join(agCelDir, 'skills'));
            fs.mkdirSync(path.join(agCelDir, 'personas'));
            fs.mkdirSync(path.join(agCelDir, 'workflows'));

            // Create default config
            const config = {
                port: 3000,
                skillsDir: './skills',
                personasDir: './personas',
                workflowsDir: './workflows'
            };
            fs.writeFileSync(path.join(agCelDir, 'config.json'), JSON.stringify(config, null, 2));
        } else {
            console.log(chalk.yellow('Ag-Cel directory already exists. Updating resources...'));
        }

        // Copy skills from package to local .ag-cel/skills
        const sourceSkillsDir = path.join(packageRoot, 'skills');
        if (fs.existsSync(sourceSkillsDir)) {
            console.log(chalk.blue('Copying skills...'));
            const targetSkillsDir = path.join(agCelDir, 'skills');
            // Ensure target exists
            if (!fs.existsSync(targetSkillsDir)) fs.mkdirSync(targetSkillsDir, { recursive: true });

            fs.cpSync(sourceSkillsDir, targetSkillsDir, { recursive: true });
            console.log(chalk.green('Copied skills to .ag-cel/skills.'));
        } else {
            console.warn(chalk.yellow(`Warning: Skills directory not found in package at ${sourceSkillsDir}`));
        }

        // Copy workflows to .agent/workflows (Antigravity standard)
        const sourceAgentDir = path.join(packageRoot, '.agent');
        if (fs.existsSync(sourceAgentDir)) {
            console.log(chalk.blue('Copying IDE workflows...'));
            const targetAgentDir = path.join(process.cwd(), '.agent');
            // Ensure target exists
            if (!fs.existsSync(targetAgentDir)) fs.mkdirSync(targetAgentDir, { recursive: true });

            fs.cpSync(sourceAgentDir, targetAgentDir, { recursive: true });
            console.log(chalk.green('Copied workflows to .agent directory.'));
        } else {
            console.warn(chalk.yellow(`Warning: .agent directory not found in package at ${sourceAgentDir}`));
        }

        console.log(chalk.green(`Successfully initialized Ag-Cel in ${AG_CEL_DIR}`));
        console.log(chalk.cyan('You can now add skills, personas, and workflows to the .ag-cel directory.'));
        console.log(chalk.white('Run "agc start" to start the local MCP server.'));
    } catch (error) {
        console.error(chalk.red('Failed to initialize Ag-Cel:'), error);
    }
}
