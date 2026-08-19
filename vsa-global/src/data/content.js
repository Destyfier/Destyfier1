export const brand = {
  name: 'Visa & Study Alliance Global',
  short: 'VSA Global',
  phone: '+977 1 5901234',
  tagline: 'Study abroad, filed correctly the first time.',
}

export const stats = [
  { value: 42000, suffix: '+', label: 'Students Placed', code: 'PAX' },
  { value: 950, suffix: '+', label: 'Partner Institutions', code: 'INST' },
  { value: 12, suffix: '', label: 'Destinations', code: 'DEST' },
  { value: 96, suffix: '%', label: 'Visa Success Rate', code: 'RATE' },
]

export const destinations = [
  { code: 'AU', name: 'Australia', note: 'Post-study work up to 4 yrs' },
  { code: 'UK', name: 'United Kingdom', note: 'Graduate route, 2 yrs' },
  { code: 'CA', name: 'Canada', note: 'PGWP-eligible programmes' },
  { code: 'US', name: 'United States', note: 'STEM OPT extensions' },
  { code: 'IE', name: 'Ireland', note: 'Tech & pharma hub' },
  { code: 'NZ', name: 'New Zealand', note: 'Work-while-study friendly' },
  { code: 'DE', name: 'Germany', note: 'Low / no tuition public unis' },
  { code: 'AE', name: 'Dubai, UAE', note: 'Fast-growing satellite campuses' },
]

export const services = [
  {
    title: 'Education Counselling',
    body: 'One-to-one sessions matching your grades, budget and goals to real programmes — not just popular ones.',
  },
  {
    title: 'University Admissions',
    body: 'We prepare, check and submit your applications, and track every offer in one place.',
  },
  {
    title: 'Scholarship Guidance',
    body: 'We shortlist scholarships you actually qualify for and help you build a competitive case.',
  },
  {
    title: 'Visa Documentation',
    body: 'File checklists, mock interviews and document review from consultants who track policy changes weekly.',
  },
  {
    title: 'Test Preparation',
    body: 'Structured IELTS, PTE and TOEFL coaching with practice tests scored against real cut-offs.',
  },
  {
    title: 'Accommodation & Arrival',
    body: 'Housing shortlists, airport pickup coordination, and a pre-departure briefing before you fly.',
  },
]

export const journey = [
  {
    gate: '01',
    title: 'Discover',
    body: 'A free counselling session to map your options against your budget, grades and timeline.',
  },
  {
    gate: '02',
    title: 'Shortlist',
    body: 'We narrow 950+ partner institutions down to a shortlist you can actually compare.',
  },
  {
    gate: '03',
    title: 'Apply',
    body: 'Applications, SOPs and scholarship forms prepared and checked before submission.',
  },
  {
    gate: '04',
    title: 'Visa File',
    body: 'Document checklist, financial proof review and a mock interview before your appointment.',
  },
  {
    gate: '05',
    title: 'Depart',
    body: 'Pre-departure briefing, accommodation confirmed, and a check-in once you land.',
  },
]

export const testimonials = [
  {
    quote:
      'My counsellor found a scholarship I would never have found myself, and walked me through every visa document line by line.',
    name: 'Aayusha R.',
    dest: 'Studying in Canada',
  },
  {
    quote:
      'I had a rejection on my first visa attempt elsewhere. The team rebuilt my file, prepped me for the interview, and it was approved.',
    name: 'Bikash T.',
    dest: 'Studying in the UK',
  },
  {
    quote:
      'Straightforward answers, no false promises. They told me when a course was not worth the money — and I trusted that.',
    name: 'Sneha K.',
    dest: 'Studying in Australia',
  },
  {
    quote:
      'From the first call to landing in Dublin, someone was reachable at every step. That mattered more than I expected.',
    name: 'Prashant M.',
    dest: 'Studying in Ireland',
  },
]

export const partners = [
  'Global Admissions Council',
  'Intl. English Testing Alliance',
  'Overseas Student Cover Network',
  'World Education Registry',
  'Study Visa Practitioners Assoc.',
  'Commonwealth Universities Forum',
]

export const branches = [
  { city: 'Kathmandu', addr: 'Baneshwor' },
  { city: 'Pokhara', addr: 'Lakeside' },
  { city: 'Chitwan', addr: 'Bharatpur' },
  { city: 'Biratnagar', addr: 'Main Road' },
]

export const footerLinks = {
  'Study Destinations': destinations.slice(0, 6).map((d) => d.name),
  'Our Services': services.map((s) => s.title),
  'Test Preparation': ['IELTS', 'PTE', 'TOEFL', 'GRE', 'GMAT', 'SAT'],
  Company: ['Who We Are', 'Our Counsellors', 'Careers', 'Partner With Us'],
}
