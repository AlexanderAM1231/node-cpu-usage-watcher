import os from 'node:os';

console.log("Terminal CPU stats monitor loaded. Real-time updates:");
setInterval(() => {
  const load = os.loadavg();
  const freeMem = os.freemem();
  console.log(`[CPU Load]: ${load[0].toFixed(2)} | [Free Memory]: ${(freeMem / 1024 / 1024).toFixed(2)} MB`);
}, 2000);
