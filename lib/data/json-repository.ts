import { categories, reviews, cafe } from '@/lib/cafe-data'
import menu from '@/lib/menu.json'
import photos from '@/lib/gallery.json'
import settingsJson from '@/lib/settings.json'
import type { Category, GalleryImage, MenuItem, MenuRepository, Review, SiteSettings } from './types'

const categoryRows: Category[] = categories.slice(1).map((name, index) => ({ slug: name.toLowerCase().replace(/[^a-z]+/g, '-'), name_en: name, name_ar: ['قهوة سخنة', 'قهوة ساقعة', 'شوكولاتة وموكا', 'مشروبات ساقعة', 'فطار', 'حلويات'][index], sort_order: index }))
const categorySlug = new Map(categoryRows.map((category) => [category.name_en, category.slug]))
const menuRows: MenuItem[] = menu.map((item, index) => ({ slug: item.name.toLowerCase().replace(/[^a-z]+/g, '-'), category_slug: categorySlug.get(item.category) ?? item.category.toLowerCase().replace(/[^a-z]+/g, '-'), name_en: item.name, name_ar: item.nameAr, description_en: item.description?.en ?? '', description_ar: item.description?.ar ?? '', price: item.price, is_available: true, is_featured: item.featured ?? false, placeholder: item.placeholder ?? false, sort_order: index, tags: [], image_path: item.image_path ?? null }))
const settings: SiteSettings = { name: cafe.name, handle: cafe.handle, tagline_en: cafe.tagline, tagline_ar: 'مكان تحس إنك واحد من أهله', phone: cafe.phone, phone_href: cafe.phoneHref, whatsapp_href: cafe.whatsappHref, address_en: cafe.address, address_ar: cafe.addressAr, hours_en: cafe.hours, hours_ar: 'كل يوم، لحد الساعة 1 بليل', price_en: cafe.price, price_ar: '200–1,000 ج.م للفرد', instagram: cafe.instagram, facebook: settingsJson.facebook_url, maps: cafe.maps }
const gallery: GalleryImage[] = photos.map((photo) => ({ src: photo.src, alt_en: photo.alt_en, alt_ar: photo.alt_ar, className: photo.className }))
const reviewRows: Review[] = reviews.map((review) => ({ quote_en: review.en, quote_ar: review.ar, author: 'Google review' }))
export class JsonRepository implements MenuRepository { async getCategories() { return categoryRows } async getMenuItems() { return menuRows } async getFeaturedItems() { return menuRows.filter((item) => item.is_featured) } async getSiteSettings() { return settings } async getGalleryImages() { return gallery } async getReviews() { return reviewRows } }
