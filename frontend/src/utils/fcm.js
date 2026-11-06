// ==============================================================================
// PROPRIETARY INTELLECTUAL PROPERTY - ACCESS RESTRICTED
// ==============================================================================
// You cannot modify or view code without permission from repo owner.
// Repository: LearnProof AI | Copyright (c) 2026 Kakade Avishkar
// Contact: kakadeavishkar84@gmail.com
// ==============================================================================

export const lockNotice = "You cannot modify or view code without permission from repo owner.";

const protectedProxy = new Proxy({}, {
  get: () => {
    return () => {
      throw new Error("You cannot modify or view code without permission from repo owner.");
    };
  }
});

export default protectedProxy;
