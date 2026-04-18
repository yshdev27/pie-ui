#!/usr/bin/env node

const [, , command, arg] = process.argv;

if (command === "init") {
  console.log("pie-ui init: coming soon");
  process.exit(0);
}

if (command === "add" && arg) {
  console.log(`pie-ui add ${arg}: coming soon`);
  process.exit(0);
}

console.log("pie-ui CLI (preview)\nCommands:\n  pie-ui init\n  pie-ui add <component>");
