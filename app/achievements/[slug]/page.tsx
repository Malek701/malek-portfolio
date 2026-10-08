import Link from 'next/link'

const details: Record<string, { title: string; intro: string }> = {
  'ios-design-challenge': { title: 'iOS Design Challenge — Top 250', intro: 'Helping Hands / الأيادي المساعدة was created as a social-impact app concept connecting donors, charities, volunteers, and people in need.' },
  'swift-innovators': { title: 'Swift Innovators', intro: 'Selected as 1 of 20 applicants from around 60 for a long-term program exploring Swift, app development, business, marketing, and product thinking.' },
  'ios-design-club-leader': { title: 'iOS Design Club Leader', intro: 'A leadership experience focused on mentoring students in iOS development, app design, and creative technology.' },
  'swift-associate': { title: 'App Development with Swift Associate Certification', intro: 'A confirmed credential marking a foundation in Swift and app development.' },
  'swift-accelerator': { title: 'Swift Accelerator Program', intro: 'A program that supported hands-on learning in Swift and app development.' },
}

export default async function AchievementPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = details[slug] ?? { title: 'Achievement details', intro: 'Project details coming soon.' }
  return <main className="detailPage"><Link href="/" className="backLink">← Back to portfolio</Link><p className="eyebrow">ACHIEVEMENT / {slug.replaceAll('-', ' ').toUpperCase()}</p><h1>{item.title}</h1><p className="detailIntro">{item.intro}</p><div className="detailPlaceholder"><span>✦</span><h2>More details coming soon.</h2><p>Malek can replace this section with screenshots, certificates, links, timelines, and a fuller story whenever he is ready.</p></div></main>
}
