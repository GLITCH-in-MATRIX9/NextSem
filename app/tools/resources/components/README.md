# Resource Vault — NextSem IGDTUW

## File Structure

Drop these files into your project like so:

```
app/
└── tools/
    └── resources/
        ├── page.tsx                        ← Main page (replace existing)
        └── components/
            ├── resourceData.ts             ← Types + mock data
            ├── HeroSection.tsx             ← Animated hero with stats counter
            ├── SearchBar.tsx               ← Search with suggestions + quick chips
            ├── FilterBar.tsx               ← Branch / Semester / Type filters
            ├── ResourceCard.tsx            ← Individual resource card
            ├── ResourceGrid.tsx            ← Sortable grid/list with empty state
            ├── FeaturedSection.tsx         ← Horizontal scroll Featured + Trending
            └── UploadCTA.tsx               ← Contribute resources CTA section
```

## Features

| Feature | Description |
|---------|-------------|
| 🔍 Smart Search | Instant filter across subject, code, tags, branch, description |
| 🏷️ Quick Chips | One-click searches for popular topics |
| 💡 Suggestions | Dropdown with popular & matched search suggestions |
| 🗂️ Filters | Branch (CSE/IT/ECE/ICE/ENE/MAE), Semester (1–8), Type (Notes/PYQ/etc) |
| 🔖 Bookmarks | Persist saved resources via localStorage |
| 🔥 Trending | Horizontal-scroll trending section |
| ⭐ Featured | Staff picks carousel |
| 📊 Sort | Most Downloaded / Top Rated / Newest / A–Z |
| 🔲 View Modes | Grid and list layout toggle |
| 📈 Stats Counter | Animated count-up when scrolled into view |
| 📤 Upload CTA | Contribution portal section |
| 🔝 Scroll to Top | Appears after 400px scroll |
| 📱 Responsive | Mobile-first, collapsible filter sidebar |
| 🎨 Animations | CSS keyframe animations, staggered card entry, floating UI elements, marquee ticker |

## Integration Steps

1. Copy all files to the paths shown above
2. Replace `app/tools/resources/page.tsx` with the new `page.tsx`
3. Add the `scrollbar-hide` utility to your `globals.css`:
   ```css
   .scrollbar-hide::-webkit-scrollbar { display: none; }
   .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
   ```
4. Connect real data by replacing the mock `resources` array in `resourceData.ts` with your API/database calls

## Connecting Real Data

Replace the `resources` array in `resourceData.ts` with a fetch from your backend:

```typescript
// In page.tsx, use Server Component or SWR:
const resources = await fetch('/api/resources').then(r => r.json())
```

Or with Supabase:
```typescript
const { data: resources } = await supabase.from('resources').select('*')
```

## Design Tokens (matches NextSem)

- **Primary**: `#000000` (black)
- **Background**: `#f5f5f5`  
- **Cards**: white with 2px black border + offset shadow
- **Shadow style**: `shadow-[3px_3px_0px_#000]` → `shadow-[6px_6px_0px_#000]` on hover
- **Border radius**: `rounded-2xl` / `rounded-3xl`
- **Typography**: System font stack via Tailwind defaults
