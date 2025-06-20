# June HACK-A-THON - LABYRINTH!

Welcome to our group project repository! This is our collaborative space to build something awesome together while learning GitHub and version control. None of us are experts—yet! This guide will help us stay organized and on the same page.

---

## Project Overview

**Project Goal:**  
We are going to create a virtual labyrinth full of puzzles and other misc. obstacles for the user to experience a fun escape room challenge. Each room will give the user an item to use to open the next door in the labyrinth.

---

## Sample Workflow // BASIC GIT COMMANDS

### SAMPLE WORKFLOW

Thanks to ChatGPT for helping make this process visual and a bit easier to digest. The commands are all listed below.

```bash
       ┌────────────┐
       │ GitHub Repo│  ← (Main project lives here)
       └────┬───────┘
            │
            ▼
    ┌────────────────┐
    │ git clone ...  │ ← Everyone clones from GitHub
    └────────────────┘
            │
            ▼
 ┌────────────────────────────┐
 │ Create a new branch        │
 │ git checkout -b your-branch│
 └────────────────────────────┘
            │
            ▼
 ┌────────────────────────────┐
 │ Work on code locally       │
 │ Edit files, add features   │
 └────────────────────────────┘
            │
            ▼
 ┌────────────────────────────┐
 │ Stage and commit changes   │
 │ git add .                  │
 │ git commit -m "Message"    │
 └────────────────────────────┘
            │
            ▼
 ┌────────────────────────────┐
 │ Push your branch to GitHub │
 │ git push origin your-branch│
 └────────────────────────────┘
            │
            ▼
 ┌──────────────────────────────┐
 │ Open a Pull Request (PR)     │
 │ on GitHub, request review    │
 └──────────────────────────────┘
            │
            ▼
 ┌──────────────────────────────┐
 │ Team reviews and merges PR   │
 │ into the `main` branch       │
 └──────────────────────────────┘
            │
            ▼
 ┌──────────────────────────────┐
 │ Everyone pulls latest changes│
 │ git pull origin main         │
 └──────────────────────────────┘
```

### BASIC GIT COMMANDS

> git clone *https://github.com/your-username/project-name.git*

Purpose:
Downloads the entire repository (project folder) from GitHub to your local computer.
Think of it as making your own working copy of the project.

> git checkout -b your-name-feature-name

Purpose:
Creates a new branch and switches to it.

**Make sure to edit the 'your-name-feature-name' line.**

_Why branches?_

**So you can safely work on your own feature without affecting the main project until your work is ready to be merged.**

**_cmd line should look like this:_**

➜ hackathon-june git:(test-branch) >`insert command here

> git add .

Purpose:
Stages all changes (like edits or new files) for the next commit.

> git commit -m "Your descriptive commit message"

Purpose:
Saves your changes to the local project history, with a message describing what you did.
!!! Add a descriptive, simple message between the "s.

> git push origin your-name-feature-name

Purpose:
Uploads your local branch (with your changes) to GitHub so your team can see it.

_Any changes not pushed will be lost when you close VS Code, I found that out the hard way!!_

As the GitAdmin I will merge the branches daily or as needed, but here's the process for your reference.

> git checkout branch-name

Switches working location. Used to switch to main branch to merge with your-name-feature-name-branch.

> git merge branch-name

Merges current selected branch with referenced branch.

---

## GETTING STARTED and WORKING THROUGH THE PROJECT

### 1. Clone the Repository

> git clone https://github.com/your-username/project-name.git

### 2. Create a New Branch

Each person should work on their own branch:

> git checkout -b your-name-feature-name

Example:

> git checkout -b ernie-login-page

!!! This only needs to be done once. Every time working on the file refer to 'your-name-feature-name'

### 3. Make Your Changes

Edit code, add files, and test locally.

### 4. Add and Commit Your Changes

> git add .

> git commit -m "Your descriptive commit message"

!!! Each commit creates a new sequence in your branch!

### 5. Push Your Branch to GitHub

> git push origin your-name-feature-name

!!! Make sure to push your changes to your-name branch!

### 6. Open a Pull Request (PR)

Go to the repository on GitHub.
Click "Compare & Pull Request".

Tag teammates for review.
Once approved, merge into the main branch [*See Merging Branches below*]

### 7. Resuming work

After your commits have been merged to the main branch, pull from the main branch before resuming work to make sure everything is up to date.

> git pull

### Repeat steps 3 - 7!

---

---

### 👥 Team Members & Roles

| Name    | Role       | GitHub Username    |
| ------- | ---------- | ------------------ |
| Ernie   | Git Admin  | `@ernestcortazar3` |
| Yale    | html, css  | `@`                |
| Leandro | JavaScript | `@lheredia8606`    |

## 📖 Helpful Git/GitHub Resources

**GitHub Glossary**
https://docs.github.com/en/get-started/learning-about-github/github-glossary#commit

**Git Branching Basics**
https://www.atlassian.com/git/tutorials/using-branches

**Markdown Cheatsheet**
https://www.markdownguide.org/cheat-sheet/

**VS Code Git Guide**
https://code.visualstudio.com/docs/sourcecontrol/overview

---

## 📌 Rules & Conventions

Use descriptive commit messages.

**Don't push directly to main** — always use branches and Pull Requests.

Pull from main regularly to avoid conflicts.

Be kind, ask questions, and help each other!

✅ Checklist Before PR

- [ ] My code runs without errors

- [ ] I wrote comments or documentation where needed

- [ ] I merged main into my branch before creating PR

- [ ] I assigned at least one reviewer

Let’s build something great and have fun doing it! 💪

---
