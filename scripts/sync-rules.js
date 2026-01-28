const fs = require('fs-extra');
const path = require('path');

const AGENT_DIR = path.join(__dirname, '../.agent');
const DOCS_DIR = path.join(__dirname, '../docs');

const SOURCES = {
    RULES: path.join(AGENT_DIR, 'rules'),
    WORKFLOWS: path.join(AGENT_DIR, 'workflows'),
    SKILLS: path.join(AGENT_DIR, 'skills')
};

const DESTINATIONS = {
    RULES: path.join(DOCS_DIR, 'rules'),
    WORKFLOWS: path.join(DOCS_DIR, 'workflows'),
    SKILLS: path.join(DOCS_DIR, 'skills')
};

async function sync() {
    try {
        // 1. Sync Rules
        await fs.ensureDir(DESTINATIONS.RULES);
        await fs.copy(SOURCES.RULES, DESTINATIONS.RULES, { overwrite: true });
        console.log('✅ Synchronized rules');

        // 2. Sync Workflows
        await fs.ensureDir(DESTINATIONS.WORKFLOWS);
        await fs.copy(SOURCES.WORKFLOWS, DESTINATIONS.WORKFLOWS, { overwrite: true });
        console.log('✅ Synchronized workflows');

        // 3. Sync Skills (Flatten structure: skill/SKILL.md -> skills/skill.md)
        await fs.ensureDir(DESTINATIONS.SKILLS);
        const skills = await fs.readdir(SOURCES.SKILLS);
        
        for (const skillName of skills) {
            const skillDir = path.join(SOURCES.SKILLS, skillName);
            const stats = await fs.stat(skillDir);
            
            if (stats.isDirectory()) {
                const skillFile = path.join(skillDir, 'SKILL.md');
                if (await fs.pathExists(skillFile)) {
                    await fs.copy(
                        skillFile, 
                        path.join(DESTINATIONS.SKILLS, `${skillName}.md`),
                        { overwrite: true }
                    );
                }
            }
        }
        console.log('✅ Synchronized skills');

    } catch (err) {
        console.error('❌ Error syncing docs:', err);
        process.exit(1);
    }
}

sync();
