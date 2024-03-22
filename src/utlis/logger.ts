import * as chalk from 'chalk';
export function logRequestInfo(url: string): void {
  const line = '-'.repeat(url.length);

  process.stdout.write(chalk.bgBlue(`Request URL: ${url}`));
}
