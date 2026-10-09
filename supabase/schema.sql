-- DRAFT: apply only after reviewing RLS and admin policies.
create table categories (id text primary key, name_en text not null, name_ar text not null, sort_order int not null default 0, created_at timestamptz default now(), updated_at timestamptz default now());
create table menu_items (id text primary key, category_id text references categories(id), name_en text not null, name_ar text not null, description_en text, description_ar text, price int not null, is_available boolean default true, is_featured boolean default false, sort_order int default 0, tags text[] default '{}', image_path text, created_at timestamptz default now(), updated_at timestamptz default now());
create table gallery_images (id text primary key, src text not null, alt_en text, alt_ar text, sort_order int default 0, created_at timestamptz default now());
create table site_settings (id boolean primary key default true check (id), name text not null, handle text, tagline_en text, tagline_ar text, phone text, address_en text, address_ar text, created_at timestamptz default now(), updated_at timestamptz default now());
create table opening_hours (id bigint generated always as identity primary key, day_of_week int not null, opens_at time, closes_at time, is_closed boolean default false);
create table reviews (id bigint generated always as identity primary key, quote_en text, quote_ar text, author text, created_at timestamptz default now());
-- Enable RLS on all tables. Add public SELECT and authenticated admin INSERT/UPDATE/DELETE policies after defining your admin role.
-- create policy public_read on categories for select using (true);
-- create storage bucket menu-images;
