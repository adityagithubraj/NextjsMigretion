/**
 * Utility functions for sitemap generation
 */

/**
 * Trigger sitemap regeneration by calling the Edge Function
 * This should be called after creating/updating blog posts, news, classifieds, or companies
 */
export async function triggerSitemapRegeneration() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const functionUrl = `${supabaseUrl}/functions/v1/generate-sitemap`;
    
    // Call the Edge Function to regenerate sitemap
    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ action: 'regenerate' }),
    });

    if (!response.ok) {
      console.warn('Failed to trigger sitemap regeneration:', await response.text());
      // Don't throw error - sitemap regeneration is not critical
      return false;
    }

    console.log('Sitemap regeneration triggered successfully');
    return true;
  } catch (error) {
    console.warn('Error triggering sitemap regeneration:', error);
    // Don't throw error - sitemap regeneration is not critical
    return false;
  }
}

