
-- Leads / Consultation Requests
CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  programme text NOT NULL,
  message text,
  source text DEFAULT 'website',
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'lost'))
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_leads" ON leads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "select_leads" ON leads FOR SELECT TO authenticated USING (true);
CREATE POLICY "update_leads" ON leads FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_leads" ON leads FOR DELETE TO authenticated USING (true);

-- Applications
CREATE TABLE applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  ic_number text,
  programme text NOT NULL,
  highest_qualification text,
  institution text,
  graduation_year text,
  working_experience text,
  employer text,
  position text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'under_review', 'accepted', 'rejected'))
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_applications" ON applications FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "select_applications" ON applications FOR SELECT TO authenticated USING (true);
CREATE POLICY "update_applications" ON applications FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_applications" ON applications FOR DELETE TO authenticated USING (true);

-- Brochure Downloads
CREATE TABLE brochure_downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  programme text NOT NULL
);

ALTER TABLE brochure_downloads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_brochure_downloads" ON brochure_downloads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "select_brochure_downloads" ON brochure_downloads FOR SELECT TO authenticated USING (true);
CREATE POLICY "update_brochure_downloads" ON brochure_downloads FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_brochure_downloads" ON brochure_downloads FOR DELETE TO authenticated USING (true);

-- Testimonials
CREATE TABLE testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  position text NOT NULL,
  programme text NOT NULL,
  testimonial text NOT NULL,
  avatar_url text,
  featured boolean DEFAULT false,
  sort_order int DEFAULT 0
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_testimonials" ON testimonials FOR SELECT TO anon USING (true);
CREATE POLICY "insert_testimonials" ON testimonials FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "update_testimonials" ON testimonials FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_testimonials" ON testimonials FOR DELETE TO authenticated USING (true);

-- Announcements
CREATE TABLE announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
  content text NOT NULL,
  is_active boolean DEFAULT true,
  sort_order int DEFAULT 0
);

ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_announcements" ON announcements FOR SELECT TO anon USING (is_active = true);
CREATE POLICY "insert_announcements" ON announcements FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "update_announcements" ON announcements FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_announcements" ON announcements FOR DELETE TO authenticated USING (true);

-- Seed testimonials
INSERT INTO testimonials (name, position, programme, testimonial, featured, sort_order) VALUES
  ('Dr. Amirul Hakim', 'Senior Manager, Petronas', 'PhD', 'The PhD programme at IPGS gave me the flexibility to balance my demanding career while pursuing cutting-edge research. My supervisor was incredibly supportive throughout my journey.', true, 1),
  ('Nor Fadhilah binti Ramli', 'Principal, SMK Alam Damai', 'MBA', 'As a government officer, I needed a programme that fit my schedule. The MBA weekend classes and online components were perfect. I graduated in 18 months while managing a full-time role.', true, 2),
  ('Khairul Anwar bin Yusof', 'CEO, Synergy Ventures', 'MBM', 'The MBM programme transformed how I think about business strategy. The industry-academic mix of lecturers brought real-world relevance to every module.', true, 3),
  ('Siti Norzahra binti Mohd Ali', 'Lecturer, UITM Shah Alam', 'YLP', 'The Young Lecturer Program prepared me comprehensively for my academic career. The AI in higher education module was especially relevant and forward-thinking.', true, 4),
  ('Encik Fadzillah bin Ibrahim', 'Operations Director, Maybank', 'MBA', 'Enrolling in the MBA at IPGS was the best career decision I made. The programme structure, networking opportunities and supportive faculty exceeded my expectations completely.', true, 5),
  ('Dr. Rosnani binti Che Hassan', 'Head of Department, Ministry of Education', 'PhD', 'IPGS provided an exceptional research environment. The AI-enhanced learning tools and research support helped me complete my PhD ahead of schedule.', true, 6);
