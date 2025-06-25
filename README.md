# June HACK-A-THON - LABYRINTH!

Welcome to our group project repository! This is our collaborative space to build something awesome together while learning GitHub and version control. None of us are experts—yet! This guide will help us stay organized and on the same page.

---

## Project Overview

**Project Goal:**  
We are going to create a virtual labyrinth full of puzzles and other misc. obstacles for the user to experience a fun escape room challenge. Each room will give the user an item to use to open the next door in the labyrinth.

---

### 👥 Team Members & Roles

| Name    | Role       | GitHub Username    |
| ------- | ---------- | ------------------ |
| Ernie   | Git Admin  | `@ernestcortazar3` |
| Yale    | html, css  | `@ymwilliams8`     |
| Leandro | JavaScript | `@lheredia8606`    |

### 📖 Helpful Git/GitHub Resources

**GitHub Glossary**
https://docs.github.com/en/get-started/learning-about-github/github-glossary#commit

**Git Branching Basics**
https://www.atlassian.com/git/tutorials/using-branches

**Markdown Cheatsheet**
https://www.markdownguide.org/cheat-sheet/

**VS Code Git Guide**
https://code.visualstudio.com/docs/sourcecontrol/overview

---

## GitHub WORKFLOW

GitHub pull, start of workflow:

> git checkout main

- moves HEAD (working branch) to LOCAL main

> git pull origin main

- Pulls most up-to-date changes from Remote to Local

> git checkout -b <unique-branch-name>

- Creates a new branch, names the branch, and moves HEAD to the new creation.

> edits and stuffs

- When finished working:

> git add .

- ques up the changes made.

> git commit -m "Unique message here"

- Creates a snap shot of your code in that moment as it is.

> git pull origin main

- makes sure that you are pushing up the most recent version.
- If there are any merge conflicts, resolve, then "git add ." and "git commit" again the FIX: Merge conflicts.

> git push origin <unique-branch-name>

- Sends the last commit to the Remote Branch

- Create PR (GitHub.com)

  - Merges <unique-branch-name> into the main branch.

- Branch then can be deleted.
