// ==============================================================================
// LearnProof AI - Firebase Client (Sanitized Submission Template)
// All sensitive production API keys and project IDs have been replaced.
// ==============================================================================

export const firebaseConfig = {
  apiKey: "AIzaSyDummyKeyForCompetitionSubmissionOnly",
  authDomain: "localhost",
  projectId: "learnproof-localhost-submission",
  storageBucket: "localhost.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:dummyappid00000"
};

export const auth = {
  currentUser: null,
  onAuthStateChanged: (cb) => { cb(null); return () => {}; },
  signOut: async () => {}
};

export default { firebaseConfig, auth };

