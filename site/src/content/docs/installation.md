---
title: Installation
description: How to install and set up Ag-Cel
---

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installing the CLI

To install the Ag-Cel CLI globally, run:

```bash
npm install -g ag-cel
```

This will make the `agc` command available in your terminal.

## Initialization

To start using Ag-Cel in a project, initialize it by running:

```bash
agc init
```

This command acts as a setup wizard:
1.  Creates a `.ag-cel` directory in your project root or home directory.
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
