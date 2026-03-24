const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// --- Auth ---
export async function login(email: string, password: string) {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('Identifiants incorrects');
  return res.json();
}

function authHeaders(token: string) {
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
}

// --- Stats ---
export async function fetchStats(token: string) {
  const res = await fetch(`${API_URL}/api/stats`, { headers: authHeaders(token) });
  if (!res.ok) throw new Error('Erreur stats');
  return res.json();
}

export async function incrementReader() {
  await fetch(`${API_URL}/api/stats/reader`, { method: 'POST' });
}

// --- Publications ---
export async function fetchPublications(token: string) {
  const res = await fetch(`${API_URL}/api/publications/all`, { headers: authHeaders(token) });
  if (!res.ok) throw new Error('Erreur publications');
  return res.json();
}

export async function createPublication(token: string, data: Record<string, unknown>) {
  const res = await fetch(`${API_URL}/api/publications`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Erreur création');
  return res.json();
}

export async function updatePublication(token: string, id: string, data: Record<string, unknown>) {
  const res = await fetch(`${API_URL}/api/publications/${id}`, {
    method: 'PATCH',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Erreur mise à jour');
  return res.json();
}

export async function deletePublication(token: string, id: string) {
  const res = await fetch(`${API_URL}/api/publications/${id}`, {
    method: 'DELETE',
    headers: authHeaders(token),
  });
  if (!res.ok) throw new Error('Erreur suppression');
  return res.json();
}

// --- Testimonials ---
export async function fetchPendingTestimonials(token: string) {
  const res = await fetch(`${API_URL}/api/testimonials/pending`, { headers: authHeaders(token) });
  if (!res.ok) throw new Error('Erreur témoignages');
  return res.json();
}

export async function approveTestimonial(token: string, id: string) {
  const res = await fetch(`${API_URL}/api/testimonials/${id}/approve`, {
    method: 'PATCH',
    headers: authHeaders(token),
  });
  if (!res.ok) throw new Error('Erreur approbation');
  return res.json();
}

export async function rejectTestimonial(token: string, id: string) {
  const res = await fetch(`${API_URL}/api/testimonials/${id}/reject`, {
    method: 'PATCH',
    headers: authHeaders(token),
  });
  if (!res.ok) throw new Error('Erreur rejet');
  return res.json();
}

// --- Purchases ---
export async function fetchPurchases(token: string, page = 1) {
  const res = await fetch(`${API_URL}/api/purchases?page=${page}`, { headers: authHeaders(token) });
  if (!res.ok) throw new Error('Erreur achats');
  return res.json();
}

export async function registerPurchase(email: string) {
  const res = await fetch(`${API_URL}/api/purchases`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, amount: 20, currency: 'USD' }),
  });
  if (!res.ok) throw new Error('Erreur enregistrement achat');
  return res.json();
}
