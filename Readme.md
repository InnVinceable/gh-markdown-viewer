# github-markdown-viewer
A react component built for the very specific use case of viewing markdown files in a github respository. Just provide a url prop and it will query Github's API and find all .md files in the repo.

## Why?
If you store system documentation in a github repo, this viewer comes in handy.

I built this for a project I'm working on (at the time of writing this), where system documentation is kept in a github repo.

## Installation
`npm i gh-markdown-viewer`

## Usage
```
import TreeViewer from '../src/Components/TreeViewer';

<TreeViewer url={'https://api.github.com/repos/<GITHUB_USERNAME>/<REPO_NAME>/contents'}></TreeViewer>

```

Feel free to fork and reuse.
