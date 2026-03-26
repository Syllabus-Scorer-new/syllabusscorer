import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./supabaseConfig.js";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function requireSessionOrRedirect(redirectTo = "login.html") {
  const { data, error } = await supabase.auth.getSession();
  if (error || !data?.session) {
    window.location.href = redirectTo;
    return null;
  }
  return data.session;
}

export async function signOutAndGoHome() {
  await supabase.auth.signOut();
  window.location.href = "index.html";
}

