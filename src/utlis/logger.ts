import * as chalk from 'chalk';
export function logRequestInfo(url: string): void {
  process.stdout.write(chalk.bgBlue(`Request URL: ${url} \n`));
}
