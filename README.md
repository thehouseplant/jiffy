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

## Commands

Coming soon...

## Cross Compiling

Deno supports cross-compilation via the `deno compile` command. Bellow is how it
is used within this project:

```zsh
# Compile for local development
deno task compile

# Compile for all platforms
deno task compile:all

# Compile for Linux
deno task compile:linux

# Compile for macOS (x86_64 and ARM)
deno task compile:macos

# Compile for Windows
deno task compile:windows
```
