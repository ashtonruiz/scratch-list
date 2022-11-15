const SUPABASE_URL = 'https://zgixhmlshitskkemwyaf.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnaXhobWxzaGl0c2trZW13eWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwODYsImV4cCI6MTk4MzY4NDA4Nn0.nMjJ-vp1PSZuD_oT9AQGKADmPu3OCZp9Uf4n2XbaBjQ';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getFilms() {
    // console.log(getFilms);
    const response = await client.from('Vincent').select();
    console.log(response);
    return response.data;
}

export async function getFilm(id) {
    const response = await client.from('Vincent').select().match({ id: id }).single();
    return response.data;
}
