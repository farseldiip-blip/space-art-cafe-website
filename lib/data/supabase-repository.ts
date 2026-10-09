import type { MenuRepository } from './types'

/** TODO: Replace these methods with Supabase queries after the draft schema is applied. */
export class SupabaseRepository implements MenuRepository {
  async getCategories() { throw new Error('SupabaseRepository is not configured yet') }
  async getMenuItems() { throw new Error('SupabaseRepository is not configured yet') }
  async getFeaturedItems() { throw new Error('SupabaseRepository is not configured yet') }
  async getSiteSettings() { throw new Error('SupabaseRepository is not configured yet') }
  async getGalleryImages() { throw new Error('SupabaseRepository is not configured yet') }
  async getReviews() { throw new Error('SupabaseRepository is not configured yet') }
}
