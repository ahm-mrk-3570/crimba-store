import { supabase } from "../lib/supabase";

// GET Product specially
export const getProduct = async (id) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  return { data, error };
};

export const getProducts = async (filters) => {
  let query = supabase
    .from("products")
    .select("*", { count: "exact" })
    .order("id", { ascending: true });

  const { category, size, color, minPrice, maxPrice, page = 1 } = filters;

  if (category) {
    query = query.eq("category", category);
  }

  if (size) {
    query = query.contains("size", [size]);
  }

  if (color) {
    query = query.contains("colors", [color]);
  }

  if (minPrice) {
    query = query.gte("price", Number(minPrice));
  }

  if (maxPrice) {
    query = query.lte("price", Number(maxPrice));
  }

  const limit = 10;
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  query = query.range(from, to);

  const { data, error, count } = await query;

  return { data, error, count, totalPages: Math.ceil((count || 0) / limit) };
};

export const getProductsBestSeller = async () => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("total_sold", { ascending: false })
    .limit(8);

  if (error) return;

  return { data, error };
};

export const searchProducts = async (search) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("name", `%${search}%`)
    .limit(10);

  if (error) return;

  return { data, error };
};

export const getRelatedProducts = async (product) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", product.category);

  if (error) throw error;

  return {
    data,
    error,
  };
};
