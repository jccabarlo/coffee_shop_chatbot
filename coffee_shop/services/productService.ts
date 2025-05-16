import supabaseClient from "@/config/supabase";

export async function getProducts() {
  const { data, error } = await supabaseClient
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return data;
}

export async function getProduct(id: number) {
  const { data, error } = await supabaseClient
    .from("products")
    .select("*")
    .eq("id", id);

  if (!data) {
    throw new Error("Product not found");
  }

  return data.at(0);
}
