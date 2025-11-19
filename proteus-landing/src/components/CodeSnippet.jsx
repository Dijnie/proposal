export default function CodeSnippet() {
  const code = `// Mint dynamic NFT collection
const collection = await proteus.collections.create({
  name: "Dragon Warriors",
  supply: 10000,
  metadata: {
    level: 1,
    power: 100
  }
});

// Batch mint
await collection.mint({
  count: 10000,
  wallets: ["addr1...", "addr2..."]
});

// Auto-update rule
await collection.addRule({
  trigger: "time",
  condition: "date > 2025-12-25",
  action: { level: 2, power: 150 }
});`;

  return (
    <div className="bg-black/60 rounded-lg p-4 font-mono text-xs text-slate-300 overflow-x-auto">
      <pre>{code}</pre>
    </div>
  );
}
