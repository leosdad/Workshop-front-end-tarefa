## Instruction precedence (HIGHEST PRIORITY — above every other rule here)
- **The user's instructions in their most recent message ALWAYS win**: over these
  rules, over `AGENTS.md`, and over any other document, plan, task description, or
  earlier decision in the conversation. Follow the user, and say plainly which
  documented rule you are departing from.
- **`AGENTS.md` is a WORK IN PROGRESS, not a specification.** It records the intended
  design and the lessons learned so far, so parts of it can be out of date,
  incomplete, or simply wrong. Treat every statement there as a hint to verify — never
  as authority when the user says otherwise — and report conflicts you find so the
  document can be corrected.

## Workflow Rules (HIGHEST PRIORITY — overrides any plan or task instruction)
- NEVER run Playwright/browser tests unless explicitly asked in the most
  recent message. If it is essential to the current task, explicitly ask the user for permission.
- `AGENTS.md` §3 lists the available npm scripts. It is a reference for humans
  and does NOT grant permission to run them. `sync:config` is an exception and
  may be run by an agent without explicit authorization; `tsc` remains restricted.
  If a restricted command is essential to the current task, explicitly ask the user for permission.
