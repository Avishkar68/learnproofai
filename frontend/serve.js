// ==============================================================================
// LearnProof AI - Zero-Dependency Frontend Server (Competition Archival)
// ==============================================================================
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ANSI_RED = '\x1b[31;1m';
const ANSI_YELLOW = '\x1b[33;1m';
const ANSI_RESET = '\x1b[0m';
const ANSI_BOLD = '\x1b[1m';

console.log(`
${ANSI_RED}================================================================================${ANSI_RESET}
${ANSI_YELLOW}               ⚠️   PROPRIETARY & CONFIDENTIAL SOURCE CODE   ⚠️${ANSI_RESET}
${ANSI_RED}================================================================================${ANSI_RESET}

  ${ANSI_BOLD}[ACCESS DENIED]${ANSI_RESET}
  ${ANSI_RED}You cannot modify or view code without permission from repo owner.${ANSI_RESET}

  Platform:        LearnProof AI Web Client
  Copyright:       (c) 2026 Kakade Avishkar. All Rights Reserved.
  Owner Contact:   kakadeavishkar84@gmail.com

================================================================================
`);

const PORT = process.env.PORT || 5173;
const indexPath = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
    fs.readFile(indexPath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Access Restricted');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`[Frontend Guard] Serving Lock Screen at http://localhost:${PORT}`);
    console.log(`[Frontend Guard] Notice active: "You cannot modify or view code without permission from repo owner."\n`);
});
