export const cafe = {
  name: 'Space Art Cafe',
  handle: '@spaceartcafe',
  tagline: 'a place you belong to.',
  phone: '010 69613751',
  phoneHref: 'tel:+201069613751',
  whatsappHref: 'https://wa.me/201069613751',
  address: '4th floor, Wekalet Abu Raya St., above Mahmoud Specialized Hospital, Al Gamaa district, Awal Mansoura, Dakahlia.',
  addressAr: 'حي الجامعة، شارع وكالة أبو رية، أعلى مستشفى محمود التخصصي، الدور الرابع، أول المنصورة، الدقهلية',
  hours: 'Open daily, closes at 1 AM',
  price: '200–1,000 EGP per person',
  instagram: 'https://instagram.com/spaceartcafe',
  maps: 'https://www.google.com/maps/search/?api=1&query=29P5%2B84%20Awal%20Mansoura',
}

export const menu = [
  {
    name: 'Hot Chocolate Mocha',
    nameAr: 'هوت شوكليت موكا',
    category: 'Hot coffee',
    price: 120,
    featured: true,
    description: {
      en: 'Hot chocolate with a shot of espresso, finished with steamed milk foam.',
      ar: 'شوكولاتة سخنة مع شوت إسبريسو، وعلى الوش رغوة حليب ناعمة.',
    },
  },
  {
    name: 'Hot White Chocolate Mocha',
    nameAr: 'هوت وايت شوكليت موكا',
    category: 'Chocolate & mocha',
    price: 125,
    featured: true,
    description: {
      en: 'White chocolate melted into espresso, topped with silky milk foam.',
      ar: 'شوكولاتة بيضا مذابة في إسبريسو مظبوط، متغطية برغوة حليب حريرية.',
    },
  },
  {
    name: 'Cappuccino',
    nameAr: 'كابتشينو',
    category: 'Hot coffee',
    price: 105,
    featured: true,
    description: {
      en: 'A classic espresso with steamed milk and a thick, cloud-like foam.',
      ar: 'إسبريسو كلاسيكي مع حليب مبخّر ورغوة ناعمة كأنها سحابة.',
    },
  },
  // TODO: Placeholder items below — names, prices, and descriptions are not confirmed yet.
  // While they are placeholders, descriptions stay empty and are not rendered.
  { name: 'Iced Spanish Latte', nameAr: 'آيس لاتيه إسباني', category: 'Iced coffee', price: 135, placeholder: true, description: { en: '', ar: '' } },
  { name: 'Cloud Berry Fizz', nameAr: 'كلاود بيري فِز', category: 'Cold drinks', price: 115, placeholder: true, description: { en: '', ar: '' } },
  { name: 'Late Breakfast Plate', nameAr: 'طبق فطار متأخر', category: 'Breakfast', price: 190, placeholder: true, description: { en: '', ar: '' } },
  { name: 'Warm Cookie Skillet', nameAr: 'كوكيز دافي', category: 'Desserts', price: 145, placeholder: true, description: { en: '', ar: '' } },
]

export const photos = [
  { src: '/images/gallery-1.jpg', alt_en: 'Warm wooden tables and chairs inside Space Art Cafe', alt_ar: 'ترابيز خشب من جوه سبيس آرت كافيه، حديدة ومدافية', className: 'photo-tall' },
  { src: '/images/gallery-2.jpg', alt_en: 'Open books illuminated by small lamps', alt_ar: 'كتب مفتوحة بتتضوى بلمبات صغيرة', className: 'photo-wide' },
  { src: '/images/gallery-3.jpg', alt_en: 'The coffee corner and shelves inside Space Art Cafe', alt_ar: 'ركن القهوة والرفارف من جوه سبيس آرت كافيه', className: 'photo-tall' },
]

export const vibe = [
  ['Calm atmosphere', 'A soft place to slow down.'],
  ['Music', 'A soundtrack for long conversations.'],
  ['Art on the walls', 'Look up. There is always something new.'],
  ['Friendly team', 'Come as you are. Stay awhile.'],
  ['Late breakfast', 'Mornings do not have to start early.'],
]

export const reviews = [
  { en: '“A calm and comfortable atmosphere.”', ar: '“أجواء هادية ومريحة، دمها خفيف على القلب.”' },
  { en: '“Great music, friendly staff, fair prices.”', ar: '“مزيكا حلوة، وستاف لطيف، وأسعار مناسبه.”' },
  { en: '“A lovely place to spend a quiet evening.”', ar: '“مكان جميل نقضي فيه سهرة هادية.”' },
]

export const categories = ['All', 'Hot coffee', 'Iced coffee', 'Chocolate & mocha', 'Cold drinks', 'Breakfast', 'Desserts']
