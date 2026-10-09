import { repository } from '@/lib/data'
export async function getMenuData() { return Promise.all([repository.getCategories(), repository.getMenuItems()]) }
