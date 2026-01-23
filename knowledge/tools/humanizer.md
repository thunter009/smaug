---
title: Humanizer - Remove AI Writing Patterns
slug: humanizer
repo: blader/humanizer
url: https://github.com/blader/humanizer
language: Markdown (Claude Code skill)
stars: 2523
type: skill
tags: [claude-code, writing, ai-detection, nlp, humanization]
---

# Humanizer

Claude Code skill that removes signs of AI-generated writing, making text sound more natural and human.

## 24 Patterns Detected

### Content Patterns
- Significance inflation
- Notability name-dropping
- Superficial -ing analyses (symbolizing, reflecting, showcasing)
- Promotional language
- Vague attributions
- Formulaic challenges

### Language Patterns
- AI vocabulary (Additionally, testament, landscape, showcasing)
- Copula avoidance (serves as, features, boasts)
- Negative parallelisms (It's not just X, it's Y)
- Rule of three lists
- Synonym cycling
- False ranges

### Style Patterns
- Em dash overuse
- Boldface overuse
- Inline-header lists
- Title Case Headings
- Emojis
- Curly quotes

### Communication Patterns
- Chatbot artifacts (I hope this helps!)
- Cutoff disclaimers
- Sycophantic tone

### Filler and Hedging
- Filler phrases (in order to, due to the fact that)
- Excessive hedging (could potentially possibly)
- Generic conclusions

## Installation

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/blader/humanizer.git ~/.claude/skills/humanizer
```

## Usage

In Claude Code:
```
/humanizer

[paste your text here]
```
