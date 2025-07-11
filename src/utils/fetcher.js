// lib/fetcher.js

export async function fetcher(url, options = {}) {
    try {
      const res = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...(options.headers || {}),
        },
      });
  
      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        throw new Error(errorBody.message || `Error ${res.status}`);
      }
  
      return await res.json();
    } catch (err) {
      
      throw err;
    }
  }
  