const fs = require("fs");

const input = JSON.parse(fs.readFileSync("private-data.json", "utf8"));

const goal = input.goal ?? 4500;
const contributors = input.contributors ?? [];

const total = contributors.reduce(
  (sum, c) => sum + (Number(c.contribution) || 0),
  0
);

const percent = Math.min(100, Math.round((total / goal) * 100));

const names = contributors
  .slice()
  .sort((a, b) => (Number(b.contribution) || 0) - (Number(a.contribution) || 0))
  .map(c => c.name)
  .filter(Boolean);

const out = {
  percent,
  names,
  updatedAt: new Date().toISOString()
};

fs.writeFileSync("docs/data.json", JSON.stringify(out, null, 2));
console.log("✔ Generated docs/data.json");
