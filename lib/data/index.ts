import { JsonRepository } from './json-repository'
import type { MenuRepository } from './types'
import { SupabaseRepository } from './supabase-repository'
export type * from './types'
export const getRepository = (): MenuRepository => process.env.DATA_SOURCE === 'supabase' ? new SupabaseRepository() : new JsonRepository()
export const repository = getRepository()
