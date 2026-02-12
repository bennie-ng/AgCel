import { stopCommand } from './stop.js';
import { startCommand } from './start.js';
import chalk from 'chalk';

export function restartCommand() {
    console.log(chalk.blue('Restarting Ag-Cel MCP server...'));
    stopCommand();
    // Add a small delay to ensure the port is released
    setTimeout(() => {
        startCommand();
    }, 1000);
}
