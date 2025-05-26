#!/usr/bin/env node
import {audit} from './core.js';

function printHelp() {
  console.log('Usage: psa <url> [--json]');
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
    printHelp();
    process.exit(0);
  }
  const url = args[0];
  const asJson = args.includes('--json');
  try {
    const result = await audit(url);
    if (asJson) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      console.log(`URL: ${result.url}`);
      console.log(`Status: ${result.status}`);
      console.log(`Time: ${result.timing.total.toFixed(1)} ms`);
      console.log(`Bytes: ${result.bytes}`);
      console.log(`Requests: ${result.requests}`);
      console.log(`Fetched: ${result.fetchedAt}`);
      if (result.suggestions.length) {
        console.log('Suggestions:');
        for (const s of result.suggestions) console.log(`- ${s}`);
      }
    }
  } catch (e) {
    console.error('Audit failed:', e.message);
    process.exit(1);
  }
}

main();
