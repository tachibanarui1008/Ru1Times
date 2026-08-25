# Ru1Commentary

Its fixed founding statement is `记录橘瑠衣的所思所想，在个人经验与公共议题之间保留真实判断。` The channel identity and this statement appear before the current issue headline.

## Editorial source and permission

An issue starts from the author's recent thoughts, viewing notes, reading notes, or observation. Do not invent an author position when none is supplied. Editing may reorder, compress, clarify, fact-check, and strengthen logic, but must preserve the core judgment and must not invent experiences, emotions, quotations, or political positions.

## Voice and argument

Write the main article in Chinese only, normally five to eight sections. Begin from a concrete feeling, contradiction, scene, or question supplied by the author. Develop one central concept through mechanism, consequences, limits, present relevance, and an earned open ending. Use medium-long sentences for analysis and short sentences for conclusions. The voice is rational but not cold, literary but not archaic, sharp but not cruel, personal but not self-absorbed.

Avoid encyclopedia openings, cheap aphorisms, internet memes, slogan piles, and historical analogies that never explain mechanism or boundary.

## Knowledge appendix

After the Chinese body, add two to four bilingual `backgrounds` and three to six bilingual `glossary` items. Chinese and English should each read naturally; do not duplicate the same explanation between the two sections. Sources may be older than 72 hours, but every verifiable claim about a work, original text, history, institution, date, or number must be traceable. Mark analogy and disputed interpretation as such.

## File workflow

Create `app/commentary-reports/YYYY-MM-DD[-slug].ts`, fill the current `CommentaryReport`, including author-provided `ai_credit`, and keep `draft: true` until approval. Set it to `false` for authorized publication; the build-time index discovers and sorts it automatically, so do not edit `app/commentary-data.ts`. Reuse the existing component and styles. Run `pnpm test` and `pnpm run export:static`; verify `/commentary`, Archive, and the matching `commentary-...` detail output. Report material editorial changes and factual corrections to the author before publication.
