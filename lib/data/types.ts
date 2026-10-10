import { z } from 'zod'

export const CategorySchema = z.object({ slug: z.string(), name_en: z.string(), name_ar: z.string(), sort_order: z.number().int() })
export const MenuItemSchema = z.object({ slug: z.string(), category_slug: z.string(), name_en: z.string(), name_ar: z.string(), description_en: z.string(), description_ar: z.string(), price: z.number().int(), is_available: z.boolean(), is_featured: z.boolean(), placeholder: z.boolean().optional(), sort_order: z.number().int(), tags: z.array(z.string()), image_path: z.string().nullable() })
export const SiteSettingsSchema = z.object({ name: z.string(), handle: z.string(), tagline_en: z.string(), tagline_ar: z.string(), phone: z.string(), phone_href: z.string(), whatsapp_href: z.string(), address_en: z.string(), address_ar: z.string(), hours_en: z.string(), hours_ar: z.string(), price_en: z.string(), price_ar: z.string(), instagram: z.string(), facebook: z.string(), maps: z.string() })
export const GalleryImageSchema = z.object({ src: z.string(), alt_en: z.string(), alt_ar: z.string(), className: z.string() })
export const ReviewSchema = z.object({ quote_en: z.string(), quote_ar: z.string(), author: z.string() })
export type Category = z.infer<typeof CategorySchema>
export type MenuItem = z.infer<typeof MenuItemSchema>
export type SiteSettings = z.infer<typeof SiteSettingsSchema>
export type GalleryImage = z.infer<typeof GalleryImageSchema>
export type Review = z.infer<typeof ReviewSchema>
export type Locale = 'en' | 'ar'
export const imageUrl = (path: string | null) => path ? `/images/${path.replace(/^\//, '')}` : null
export const localized = (value: { name_en?: string; name_ar?: string; description_en?: string; description_ar?: string; alt_en?: string; alt_ar?: string; quote_en?: string; quote_ar?: string }, locale: Locale, field: 'name' | 'description' | 'alt' | 'quote') => value[`${field}_${locale}`] ?? ''
export interface MenuRepository { getCategories(): Promise<Category[]>; getMenuItems(): Promise<MenuItem[]>; getFeaturedItems(): Promise<MenuItem[]>; getSiteSettings(): Promise<SiteSettings>; getGalleryImages(): Promise<GalleryImage[]>; getReviews(): Promise<Review[]> }

export type { MenuRepository as Repository }
