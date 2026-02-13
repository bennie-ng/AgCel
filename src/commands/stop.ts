import chalk from 'chalk';
import { getPid, removePid, isRunning } from '../utils/index.js';

export function stopCommand() {
    const pid = getPid();

    if (!pid) {
        console.log(chalk.yellow('AgCel MCP server is not running (no PID file found).'));
        return;
    }

    if (!isRunning(pid)) {
        console.log(chalk.yellow(`AgCel MCP server is not running (PID ${pid} not found). Cleaning up PID file.`));
        removePid();
        return;
    }

    console.log(chalk.blue(`Stopping AgCel MCP server (PID: ${pid})...`));

    try {
        process.kill(pid);
        removePid();
        console.log(chalk.green('AgCel MCP server stopped successfully.'));
    } catch (error) {
        console.error(chalk.red('Failed to stop AgCel MCP server:'), error);
    }
}
