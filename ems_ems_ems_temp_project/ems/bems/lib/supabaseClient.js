import { createClient } from "@supabase/supabase-js";

// Read keys from environment. In dev the project should provide these via .env.local
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// If env is missing, avoid calling createClient() in a module that may be imported into
// client-side bundles (which causes Node-only modules like `fs` to be required by some
// supabase internals). Instead export a safe stub that throws when used.
let supabase;
if (SUPABASE_URL && SUPABASE_ANON_KEY) {
	supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
	// Minimal stub to prevent runtime crashes during client-side bundling.
	const makeErr = (name) => () => {
		throw new Error(
			`Supabase client not initialized. Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Attempted to call: ${name}`
		);
	};

	supabase = {
		from: makeErr('from'),
		auth: {
			signIn: makeErr('auth.signIn'),
			signOut: makeErr('auth.signOut'),
			getUser: makeErr('auth.getUser'),
		},
		// allow other code to import supabase and fail with clear message when called
	};
}

export { supabase };
