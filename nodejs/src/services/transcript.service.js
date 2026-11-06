// ==============================================================================
// PROPRIETARY INTELLECTUAL PROPERTY - ACCESS RESTRICTED
// ==============================================================================
// You cannot modify or view code without permission from repo owner.
// Repository: LearnProof AI | Copyright (c) 2026 Kakade Avishkar
// Contact: kakadeavishkar84@gmail.com
// ==============================================================================

const lockResponse = (req, res) => {
    if (res && typeof res.status === 'function') {
        return res.status(403).json({
            success: false,
            code: "ACCESS_DENIED",
            message: "You cannot modify or view code without permission from repo owner."
        });
    }
    throw new Error("You cannot modify or view code without permission from repo owner.");
};

module.exports = new Proxy(lockResponse, {
    get: (target, prop) => {
        return (req, res, next) => {
            return lockResponse(req, res);
        };
    }
});
