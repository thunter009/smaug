---
title: "A Note About Git Commit Messages"
type: article
date_added: 2026-10-25
source: "https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html"
author: "@tpope"
tags: [git, commit-messages, conventions]
via: "Twitter bookmark from @zackkanter"
---

Tim Pope's 2008 post defining the canonical Git commit message format. Origin of the 50/72 convention.

## Key Takeaways
- Summary line: capitalized, 50 chars or less.
- Blank line between summary and body; tools like rebase get confused without it.
- Wrap body at about 72 columns because git log does not wrap; 80 columns minus 4-column indents leaves 72.
- Write in imperative mood ("Fix bug"), matching git merge and git revert output.
- Bullets are fine; use hanging indent.

## Links
- https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
