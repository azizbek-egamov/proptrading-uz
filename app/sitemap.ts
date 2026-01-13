import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://proptrading.uz',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        // Qo'shimcha sahifalar bo'lsa shu yerga qo'shiladi
    ]
}
