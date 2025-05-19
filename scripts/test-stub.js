#!/usr/bin/env node
import { audit } from '../src/core.js';

async function run() {
  // Do not actually hit network in CI here; just check function shape
  if (typeof audit !== 'function') throw new Error('audit not exported');
  console.log('tests ok (stub)');
}

run();

