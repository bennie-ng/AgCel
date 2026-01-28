---
description: Save and restore conversation context using git-based checkpoints.
---

# /checkpoint

## Purpose

Save and restore conversation context using git-based checkpoints. Enables session recovery and state preservation for complex, multi-session work.

---

Manage checkpoints for the current work session.
Note: Ensure you have initialized the checkpoint directory `.agent/checkpoints` if it does not exist.

## Checkpoint Operations

### Save Checkpoint

Create a checkpoint of current state:

```bash
/checkpoint save [name]
```

**Process:**
1. Create git stash with descriptive message
2. Record current context (files being worked on, task state)
3. Save checkpoint metadata to `.agent/checkpoints/[name].json`

**Metadata Format:**
```json
{
  "name": "feature-auth",
  "created": "2024-01-15T14:30:00Z",
  "git_stash": "stash@{0}",
  "files_in_context": ["src/auth/login.ts", "src/auth/token.ts"],
  "current_task": "Implementing JWT refresh",
  "notes": "User-provided notes"
}
```

### List Checkpoints

Show available checkpoints:

```bash
/checkpoint list
```

**Output:**
```markdown
## Available Checkpoints

| Name | Created | Task | Stash |
|------|---------|------|-------|
| feature-auth | 2h ago | JWT refresh | stash@{0} |
| bugfix-login | 1d ago | Login timeout | stash@{1} |
```

### Restore Checkpoint

Restore a previous checkpoint:

```bash
/checkpoint restore [name]
```

**Process:**
1. Apply git stash
2. Load checkpoint metadata
3. Summarize restored context
4. Ready to continue work

### Delete Checkpoint

Remove a checkpoint:

```bash
/checkpoint delete [name]
```

## Best Practices

1. **Name Descriptively**: Use task-related names
2. **Add Notes**: Future you will thank present you
3. **Checkpoint Often**: Before context switches
4. **Clean Up**: Delete obsolete checkpoints

## Recovery Workflow

When resuming work:
```
1. /checkpoint list              # See available states
2. /checkpoint restore [name]    # Restore context
3. Continue where you left off   # Context is loaded
```

## Limitations

- Checkpoints use git stash (requires git repo)
- Metadata stored in `.agent/checkpoints/`
