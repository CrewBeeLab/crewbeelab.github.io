import {spawn} from 'node:child_process';

const args = ['vite', '--host', 'localhost', '--port', '3000', '--open'];

const child = spawn('npx', args, {
  stdio: 'inherit',
  shell: true,
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
