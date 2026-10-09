# Supabase migration

1. Apply `supabase/schema.sql` after reviewing the draft policies.
2. Add the Supabase variables from `.env.example` to the deployment.
3. Set `DATA_SOURCE=supabase`.
4. Replace the methods in `lib/data/supabase-repository.ts` with typed queries and keep public reads scoped to published menu content.
5. Move menu images into the public `menu-images` bucket and preserve stable slugs.

The current default remains `DATA_SOURCE=json` and requires no backend.
