/*
  # Create translations system

  1. New Tables
    - `translations`
      - `id` (uuid, primary key)
      - `key` (text, unique) - translation key like 'hero.title'
      - `language` (text) - language code (he, en, fr, es, ru)
      - `value` (text) - translated text
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `admin_users`
      - `id` (uuid, primary key)
      - `code` (text, unique) - admin access code
      - `created_at` (timestamp)
      - `last_login` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Admin users can read/write translations
    - Public users can read translations
*/

-- Create translations table
CREATE TABLE IF NOT EXISTS translations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL,
  language text NOT NULL,
  value text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(key, language)
);

-- Create admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Translations policies
CREATE POLICY "Anyone can read translations"
  ON translations
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can update translations"
  ON translations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can insert translations"
  ON translations
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Admin users policies
CREATE POLICY "Anyone can read admin users for verification"
  ON admin_users
  FOR SELECT
  TO public
  USING (true);

-- Insert the admin code
INSERT INTO admin_users (code) VALUES ('jordan')
ON CONFLICT (code) DO NOTHING;

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_translations_key_language ON translations(key, language);
CREATE INDEX IF NOT EXISTS idx_admin_users_code ON admin_users(code);
