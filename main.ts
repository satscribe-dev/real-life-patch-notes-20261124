// Real-Life Patch Notes: The Comedy Changelog
// Entry: a one-line patch note for a bug in real life / human biology.
// The line below won a 10-candidate pairwise judged in-session against
// the judge brief (on-subject, funny, release-note register, specific
// bug, no padding). See outbox.md for the candidates and the pairwise.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "v4.0.0: fixed a bug where walking into a room instantly deleted the reason you went in there.";

// Gate guard: the sealed scorer only accepts 1-160 UTF-8 chars, not
// whitespace-only. Fail loudly here instead of shipping a bad entry.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line length ${LINE.length} is outside 1-160 chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
