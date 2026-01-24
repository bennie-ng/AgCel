const fs = require('fs-extra');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../.agent/rules');
const DEST_DIR = path.join(__dirname, '../docs/rules');

async function sync() {
    try {
        // Ensure destination exists
        await fs.ensureDir(DEST_DIR);

        // Copy all files
        await fs.copy(SOURCE_DIR, DEST_DIR, { overwrite: true });

        console.log('✅ Synchronized .agent/rules to docs/rules');
    } catch (err) {
        console.error('❌ Error syncing rules:', err);
        process.exit(1);
    }
}

sync();
