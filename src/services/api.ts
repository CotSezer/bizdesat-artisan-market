const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
const subscribeEndpoint = '/api/auth/subscribe';

/**
 * E-posta ile abone olma isteği gönderir.
 * @param {string} email - Abone olunacak e-posta adresi.
 * @returns {Promise<object>} - Sunucudan dönen yanıt.
 */
export async function subscribeWithEmail(email) {
  try {
    const response = await fetch(`${apiUrl}${subscribeEndpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*' // Swagger'da belirtildiği gibi
      },
      body: JSON.stringify({ email })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Hata: ${response.status} - ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Abonelik hatası:', error);
    throw error;
  }
}
