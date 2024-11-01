import { en } from './en'
import { fr } from './fr'

const dictionaries = {
  en,
  fr,
}

export const getDictionary = (locale: string) => {
  return dictionaries[locale as keyof typeof dictionaries]
} 