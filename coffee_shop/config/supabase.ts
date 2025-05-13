import { Database } from "@/database.types";
import { createClient } from "@supabase/supabase-js";

function createSupabaseClient() {
  const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_SERVICE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("supabaseUrl and supabaseKey must be set");
  }

  return createClient<Database>(supabaseUrl, supabaseKey);
}

const supabaseClient = createSupabaseClient();

export default supabaseClient;
