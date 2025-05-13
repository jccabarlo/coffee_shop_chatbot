import supabaseClient from "@/config/supabase";

export async function getProducts() {
  const { data, error } = await supabaseClient
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return data;
}
