import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { getAgCelDir, AG_CEL_DIR } from '../utils/index.js';

export function initCommand() {
    const agCelDir = getAgCelDir();

    if (fs.existsSync(agCelDir)) {
        console.log(chalk.yellow('Ag-Cel is already initialized in this directory.'));
        return;
    }

    console.log(chalk.blue('Initializing Ag-Cel...'));

    try {
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

        // Copy skills if they exist in the root
        const sourceSkillsDir = path.resolve(process.cwd(), 'skills');
        if (fs.existsSync(sourceSkillsDir)) {
            console.log(chalk.blue('Found skills directory. Copying skills...'));
            const skillsDir = path.join(agCelDir, 'skills');
            fs.cpSync(sourceSkillsDir, skillsDir, { recursive: true });
            console.log(chalk.green('Copied skills from skills to .ag-cel/skills.'));
        }

        console.log(chalk.green(`Successfully initialized Ag-Cel in ${AG_CEL_DIR}`));
        console.log(chalk.cyan('You can now add skills, personas, and workflows to the .ag-cel directory.'));
    } catch (error) {
        console.error(chalk.red('Failed to initialize Ag-Cel:'), error);
    }
}
