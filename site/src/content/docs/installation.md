---
title: Installation
description: How to install and set up AgCel
---

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installing the CLI

To install the AgCel CLI globally, run:

To install the AgCel CLI globally, run:

```bash
npm install -g agcel
```

This will make the `agc` command available in your terminal.

## Initialization

To start using AgCel in a project, initialize it by running:

```bash
agc init
```

This command acts as a setup wizard:
1.  Creates a `.agc` directory in your project root or home directory.
2.  Sets up default configuration files.
3.  Prepares the local environment for the MCP server.

## Next Steps

Once installed, you can start the server:

```bash
agc start
```

Check the status:

```bash
agc status
```
