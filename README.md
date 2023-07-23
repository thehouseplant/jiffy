# Jiffy

An opinionated CLI tool for interacting with the Jira API

## Requirements

- [Deno](https://deno.com/)

## Getting Started

```zsh
# Run the program
deno run main.ts

# Run the program and watch for file changes
deno task dev

# Run the tests
deno test

# Run the benchmarks
deno bench
```

## Cross Compiling

Deno supports cross-compilation via the `deno compile` command. Bellow is how it is used within this project:

```zsh
# Compile for Linux
deno compile --target x86_64-unknown-linux-gnu main.ts

# Compile for macOS
deno compile --target x86_64-apple-darwin & aarch64-apple-darwin

# Compile for Windows
deno compile --target x86_64-pc-windows-msvc
```
