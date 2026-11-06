// ==============================================================================
// LearnProof AI - Protected Server Entry Point (Competition Archival)
// Designed with zero-dependency fallback so it runs even before 'npm install'
// ==============================================================================
const http = require('http');

const ANSI_RED = '\x1b[31;1m';
const ANSI_YELLOW = '\x1b[33;1m';
const ANSI_CYAN = '\x1b[36;1m';
const ANSI_RESET = '\x1b[0m';
const ANSI_BOLD = '\x1b[1m';

console.log(`
${ANSI_RED}================================================================================${ANSI_RESET}
${ANSI_YELLOW}               ⚠️   PROPRIETARY & CONFIDENTIAL SOURCE CODE   ⚠️${ANSI_RESET}
${ANSI_RED}================================================================================${ANSI_RESET}

  ${ANSI_BOLD}[ACCESS DENIED]${ANSI_RESET}
  ${ANSI_RED}You cannot modify or view code without permission from repo owner.${ANSI_RESET}

  ${ANSI_CYAN}Platform:${ANSI_RESET}        LearnProof AI (Competition Submission Archival)
  ${ANSI_CYAN}Copyright:${ANSI_RESET}       (c) 2026 Kakade Avishkar. All Rights Reserved.
  ${ANSI_CYAN}Notice:${ANSI_RESET}          Core algorithms, AI pipelines, and database models are locked.
  ${ANSI_CYAN}Owner Contact:${ANSI_RESET}   kakadeavishkar84@gmail.com

${ANSI_RED}================================================================================${ANSI_RESET}
`);

const PORT = process.env.PORT || 8000;

// Universal zero-dependency HTTP server
const server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.url === '/health') {
        res.writeHead(200);
        res.end(JSON.stringify({
            status: "locked",
            message: "You cannot modify or view code without permission from repo owner."
        }));
        return;
    }

    res.writeHead(403);
    res.end(JSON.stringify({
        status: 403,
        error: "Forbidden",
        code: "ACCESS_DENIED",
        message: "You cannot modify or view code without permission from repo owner.",
        platform: "LearnProof AI",
        ownerNotice: "All proprietary business logic, prompt pipelines, and verification engines are restricted."
    }, null, 2));
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`[LearnProof Guard] Protection Server active on port ${PORT}.`);
    console.log(`[LearnProof Guard] All endpoints enforce: "You cannot modify or view code without permission from repo owner."\n`);
});
