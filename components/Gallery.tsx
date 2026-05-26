"use client";

import { CldImage } from "next-cloudinary";

const galleryItems = [
  {
    title: "Neural Networks 101",
    description: "A university classroom during a technical lecture on neural networks and logic gates. Students sit quietly while a professor explains concepts projected onto a large screen, creating a focused academic atmosphere. The dim lighting, clean architecture, and candid composition give the scene a calm documentary-style aesthetic centered around learning and innovation.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814780/midnight_workplace_vdmauv.jpg",
    alt: "Somewhere between equations and ambition.",
  },
  {
    title: "Midnight Workspace",
    description: "A dimly lit late-night workspace illuminated by warm desk lamps and glowing screens. The setup features a laptop, monitor, and tablet arranged in a calm minimalist environment, creating a focused atmosphere for coding, writing, or creative work. The dark tones and soft lighting give the scene a cinematic and introspective aesthetic, capturing the feeling of deep work after midnight.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814776/neon-drive_vft7jr.jpg",
    alt: "Built in silence, powered by midnight.",
  },
  {
    title: "Balcony Session",
    description: "A peaceful morning setup by the window featuring a laptop playing music, a cup of coffee, and glasses resting on the keyboard. Natural sunlight filters through the trees outside, creating a warm and relaxed atmosphere that blends productivity with quiet reflection. The scene captures the simplicity of slow mornings, music, and mindful work sessions.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814791/window-coffee-stop_tpdctf.jpg",
    alt: "Some mornings don’t need motivation. Just music and sunlight.",
  },
  {
    title: "Checkout & Chill",
    description: "A lively café interior with warm wooden architecture, glowing menu boards, shopping bags, and coffee cups resting on a table. The scene captures a modern urban atmosphere where shopping, casual conversations, and coffee culture blend together. The curved ceiling design and ambient lighting create a cozy yet energetic vibe perfect for documenting everyday city life.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814782/quiet-cafe-interior_epfmst.jpg",
    alt: "Coffee first. Everything else can wait.",
  },
  {
    title: "Coastal Silence",
    description: "A peaceful beachside moment during golden hour, with soft waves rolling onto the shore under a dramatic sky. The warm sunlight reflects across the water while a shaded seating area, scattered tables, and a lone green bottle create a relaxed coastal atmosphere. The image captures the calm rhythm of an unhurried evening by the sea.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814762/coastal-silence_lyd07h.jpg",
    alt: "Some sunsets don’t ask for attention. They just stay with you.",
  },
  {
    title: "Colors of the Coast",
    description: "A vibrant beachside café decorated with festive garlands, rustic wooden interiors, and a colorful tribal-style tiki sculpture near the entrance. The warm sunlight and handcrafted details create a relaxed tropical atmosphere that blends local culture with coastal charm. The scene feels lively yet peaceful, capturing the aesthetic of slow seaside afternoons.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814790/street-color-stories_yhktzy.jpg",
    alt: "Places like this don’t feel designed. They feel discovered.",
  },
  {
    title: "Mad Things & Coffee Rings",
    description: "A modern café interior featuring muted industrial walls, soft ambient lighting, and neon typography glowing against minimalist décor. The composition blends contemporary café culture with an artistic urban aesthetic, creating a calm yet creatively charged atmosphere. The warm tones and subtle details give the space a cinematic late-evening vibe.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814789/urban-corridor_d5e28v.jpg",
    alt: "Some places feel like unfinished thoughts in the best way possible",
  },
  {
    title: "Quiet Corners of the City",
    description: "A modern café storefront surrounded by lush potted plants and framed with sleek glass architecture under bright daylight. The clean industrial design blends naturally with the greenery, creating a calm urban atmosphere that feels both contemporary and refreshing. The scene captures the quiet charm of discovering a thoughtfully designed café tucked into the city.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814774/market-greens_ce0mru.jpg",
    alt: "Places with plants always feel a little softer.",
  },
  {
    title: "Sunlit Courtyard",
    description: "An open-air courtyard bathed in warm afternoon sunlight, featuring flowing fabric canopies stretched beneath a bright blue sky. The modern tropical setting blends greenery, glass architecture, and soft shadows to create a relaxed and inviting atmosphere. The layered textures and geometric shapes give the scene a clean travel-lifestyle aesthetic filled with warmth and openness.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814794/sunlit-courtyard_jyyila.jpg",
    alt: "Sunlight always changes the mood of a place.",
  },
  {
    title: "Ambient Silence",
    description: "A cozy minimalist interior featuring warm ambient lighting, hanging plants, and textured décor arranged in a calm modern corner space. The sculptural ceiling lamp casts a soft glow across neutral walls, while the greenery adds warmth and balance to the clean aesthetic. The overall atmosphere feels peaceful, intimate, and thoughtfully designed for slow evenings or quiet conversations.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814786/soft-ceiling-glow_vvp3dm.jpg",
    alt: "Soft light changes everything.",
  },
  {
    title: "Tracks Through the City",
    description: "A modern metro station captured in warm cinematic tones, featuring a sleek train resting beneath an industrial steel canopy. The repeating architectural patterns, soft daylight, and reflective platform surfaces create a calm yet dynamic urban atmosphere. The image captures the quiet rhythm of city movement and everyday transit life.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814788/station-rush_gwlta6.jpg",
    alt: "Every platform holds a thousand untold destinations.",
  },
  {
    title: "Taco Table Stories",
    description: "A lively fast-food restaurant scene filled with warm conversations, glowing neon lights, and shared meals among friends. The colorful menu boards and casual atmosphere create an energetic urban vibe, while the candid moments around the table capture the simplicity of late-night hangouts and comfort food culture.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814763/fast-food-conversations_piabqj.jpg",
    alt: "Some memories start with “let’s grab something to eat.”",
  },
  {
    title: "Timeless Corners",
    description: "A refined modern interior featuring warm wooden textures, floating staircases, soft lighting, and polished reflective floors. The vintage-style wall clock adds a timeless character to the minimalist architecture, creating a calm and sophisticated atmosphere. The composition balances contemporary design with quiet elegance, capturing the stillness of a thoughtfully designed space.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814765/classic-interior_omvjsn.jpg",
    alt: "Some spaces speak softly and still leave an impression.",
  },
  {
    title: "Ambient Elegance",
    description: "A sophisticated lounge interior featuring dark wood panels, ambient lighting, curated shelves, and plush seating arranged in a calm symmetrical composition. The soft glow from decorative lamps and illuminated display shelves creates a luxurious yet intimate atmosphere. The scene feels timeless and cinematic, blending modern elegance with quiet comfort.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814785/shadow-lounge_bk9bg0.jpg",
    alt: "Luxury is often just good lighting and silence.",
  },
  {
    title: "Sculpted Calm",
    description: "An elegant luxury interior centered around a classical marble sculpture surrounded by warm ambient lighting, curated bookshelves, and rich dark-toned décor. The soft illumination and balanced composition create a timeless atmosphere that feels both artistic and intimate. The space blends modern sophistication with old-world charm, evoking the quiet refinement of a private gallery or boutique lounge.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814774/marble-and-silence_nuw1eo.jpg",
    alt: "Some rooms feel less like places and more like moods.",
  },
  {
    title: "Shelves & Shadows",
    description: "A cinematic luxury interior aesthetic with illuminated shelves, dark modern décor, ambient lighting, and cozy lounge seating. Perfect inspiration for modern living spaces, boutique hotel interiors, moody room aesthetics, and elegant nighttime design.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814757/blue-reflection_j6ozqk.jpg",
    alt: "Good interiors don’t need noise to feel expensive.",
  },
  {
    title: "Morning Table",
    description: "A peaceful café table setup featuring iced coffee, layered dessert, and freshly baked pastries placed against a lush green outdoor backdrop. The warm wooden textures, soft daylight, and quiet garden atmosphere create a calm and refreshing mood perfect for slow mornings and thoughtful conversations. The composition captures the charm of unhurried café culture and simple comfort.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814806/morning-table_mvnyig.jpg",
    alt: "Mornings feel lighter when they begin slowly.",
  },
  {
    title: "Burrata & Conversations",
    description: "An overhead view of a beautifully plated café meal featuring artisan pizza topped with burrata, creamy pasta, iced drinks, and minimalist tableware arranged on a bright rustic table. The fresh ingredients, soft natural lighting, and casual composition create a relaxed dining atmosphere that feels warm, social, and inviting. The image captures the charm of modern café culture and shared comfort food moments.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814787/shared-plates_dppysp.jpg",
    alt: "Good food always slows time a little.",
  },
  {
    title: "After Hours Comfort",
    description: "A softly lit interior corner filled with tall indoor plants, textured walls, and a warm woven floor lamp casting a gentle golden glow across the room. The cozy lounge chair and layered greenery create a calm, intimate atmosphere that feels peaceful, grounded, and quietly luxurious. The image captures the essence of slow evenings, mindful interiors, and modern cozy living aesthetics.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814786/green-corners_gba6g9.jpg",
    alt: "Some spaces know how to lower the volume of the day.",
  },
  {
    title: "The Painted Room",
    description: "A moody restaurant interior featuring velvet seating, dim amber pendant lights, and a dramatic mural of a dancing figure surrounded by soft brushstroke textures. The partially finished table, muted daylight from the windows, and intimate shadows create a cinematic atmosphere that feels artistic, quiet, and deeply atmospheric. The image captures the charm of modern dining spaces designed for long conversations and slow evenings.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814757/after-dark-dining_hj9yah.jpg",
    alt: "Some places are designed for staying longer than planned.",
  },
  {
    title: "Corners That Breathe",
    description: "A softly illuminated indoor plant styled against a textured charcoal wall, featuring long striped green leaves rising from a sculptural white planter. The warm directional lighting creates dramatic shadows and highlights, while the nearby wooden tray and glassware add subtle lived-in detail. The image captures a calm modern interior aesthetic that feels grounded, minimal, and quietly restorative.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814760/desk-rituals_nbhfx6.jpg",
    alt: "A little more green makes every room feel softer.",
  },
  {
    title: "Woven Light Stories",
    description: "A warmly lit restaurant interior featuring woven rattan pendant lights, tropical-inspired seating, and soft botanical textures layered throughout the space. The natural materials, earthy tones, and gentle ambient glow create a relaxed atmosphere that feels intimate, elegant, and quietly inviting. The image captures the essence of modern tropical interiors designed for slow conversations and comfortable dining experiences.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814791/window-shadows_hjkgqb.jpg",
    alt: "Warm light changes the mood of a room instantly.",
  },
  {
    title: "Encave Afternoons",
    description: "An urban café tucked beneath tall city buildings, featuring clean modern architecture, deep black exterior tones, and bright red outdoor umbrellas catching the afternoon light. The contrast between the soft beige facades, clear blue sky, and contemporary café design creates a relaxed metropolitan atmosphere that feels casual, warm, and quietly stylish. The image captures the charm of modern city café culture and everyday coffee rituals.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814780/paper-lantern-evening_fnt420.jpg",
    alt: "Even busy cities leave room for slow coffee moments.",
  },
  {
    title: "Golden Hour Lounge",
    description: "A dramatic restaurant interior featuring sculptural architecture, flowing ceiling installations covered in handwritten textures, and towering glass shelves glowing with warm ambient light. The layered curves, artistic detailing, and lively social atmosphere create a cinematic dining experience that feels immersive, luxurious, and creatively alive. The image captures the essence of modern hospitality design where architecture, mood, and conversation blend into one unforgettable space.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814765/forest-drive_kailsx.jpg",
    alt: "Some interiors feel less like rooms and more like experiences.",
  },
  {
    title: "Table for Two, Maybe",
    description: "A cozy hotel room dining setup featuring warm natural light, neatly arranged comfort food, fresh flowers, and soft curtains framing a modern city view outside the window. The relaxed table styling, muted interiors, and casual details create an intimate atmosphere that feels restful, personal, and quietly luxurious. The image captures the charm of slow travel moments and peaceful indoor living.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814759/coffee-flight_l9yvnu.jpg",
    alt: "Some of the best travel memories happen quietly indoors.",
  },
  {
    title: "The Quiet Patio",
    description: "A peaceful indoor courtyard featuring textured white walls, lush green plants, and warm natural materials layered beneath a softly angled wooden ceiling. Small framed photographs and trailing vines add intimate detail to the minimalist architecture, creating a space that feels calm, airy, and thoughtfully curated. The image captures the beauty of modern tropical interiors shaped by simplicity, light, and quiet design.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814763/golden-lobby_szlb44.jpg",
    alt: "Some spaces feel peaceful before you even sit down.",
  },
  {
    title: "Where the Light Rests",
    description: "A dimly lit dining corner featuring rich wooden textures, woven pendant lighting, and rustic handcrafted décor layered throughout the intimate interior. The warm amber glow reflects softly across the table setting, creating a calm atmosphere that feels grounded, cozy, and deeply atmospheric. The image captures the charm of slow evening dining and thoughtfully designed spaces shaped by natural materials and quiet conversation.",
    src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814759/comfort-plates_bbyrua.jpg",
    alt: "Warm light makes every dinner feel more personal.",
  },
  
{
  title: "Blue Hour Café",
  description: "A moody late-night café aesthetic featuring cool ambient lighting, minimalist interiors, illuminated menu boards, and quiet coffee shop vibes. Perfect inspiration for urban night moods, coffee culture photography, cinematic interiors, slow evening aesthetics, and casual modern café spaces.",
  src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814757/blue-hour-cafe_zzqqog.jpg",
  alt: "Some cafés feel quieter after the world slows down.",
},
{
  title: "Morning Window Rituals",
  description: "A quiet morning setup featuring a French press coffee maker, patterned ceramic mug, and a small indoor plant resting beside a softly sunlit window. The natural backlight, dark countertops, and minimalist arrangement create a peaceful atmosphere that feels reflective, slow, and deeply comforting. The image captures the beauty of simple daily rituals shaped by soft light and unhurried moments.",
  src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814764/industrial-window-light_ze6yws.jpg",
  alt: "The best mornings usually begin quietly.",
},
{
  title: "2AM Coding Sessions",
  description: "A dark late-night workspace illuminated by the soft glow of a laptop screen and backlit keyboard, with code windows, muted shadows, and minimal desk details fading into the background. The cinematic contrast between darkness and screenlight creates a focused atmosphere that feels solitary, calm, and deeply immersive. The image captures the quiet intensity of creative work, coding sessions, and thoughtful nights spent building ideas in silence.",
  src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814765/late-night-screenlight_a3prmf.jpg",
  alt: "Some ideas only arrive after the world goes quiet.",
},
{
  title: "The Last Reservation",
  description: "A dimly lit restaurant scene featuring warm woven pendant lighting, polished wooden tables, and shared plates arranged across an intimate dinner setting. The deep shadows, soft reflections, and scattered conversations in the background create a cinematic atmosphere that feels relaxed, personal, and quietly alive. The image captures the charm of late-night dining where good food and long conversations stretch naturally into the evening.",
  src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814782/midnight-table_mxhysq.jpg",
  alt: "The best dinners usually end slower than they begin.",
},
{
  title: "Quiet Roads Ahead",
  description: "A peaceful car interior framed by dense green trees arching over the road ahead, with soft daylight filtering through the windshield and quiet reflections settling across the dashboard. The navigation screen, muted cabin lighting, and surrounding forest atmosphere create a calm cinematic mood that feels introspective, slow, and deeply grounding. The image captures the comfort of long drives, familiar playlists, and moments where the journey matters more than the destination.",
  src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814777/night-commute_a7rwzn.jpg",
  alt: "Some roads feel like a pause button for the mind.",
},
{
  title: "Garden Coffee Hours",
  description: "A bright café table featuring three beautifully layered iced coffee drinks surrounded by lush tropical greenery and soft afternoon sunlight filtering through the space. The natural textures, warm wooden seating, and relaxed garden atmosphere create a refreshing mood that feels calm, social, and effortlessly inviting. The image captures the charm of outdoor café culture and slow coffee moments shared in peaceful green spaces.",
  src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814778/outdoor-brew-session_vlk5x6.jpg",
  alt: "Coffee tastes better when the setting slows you down.",
},
{
  title: "Quiet Train Journeys and Books",
  description: "A peaceful train journey captured through a soft window view, green landscapes passing by, and a book resting in hand. This moment reflects slow travel, quiet reading, and finding calm in motion. Perfect inspiration for mindful travel, cozy train rides, and reflective moments.",
  src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814782/rain-window-notes_nostd9.jpg",
  alt: "Books & Blurred Landscapes",
},
{
  title: "Still Above the City",
  description: "A minimalist rooftop pool scene featuring clean architectural lines, soft blue water, and open skies stretching above the quiet urban space. The muted concrete textures, gentle reflections, and spacious composition create a calm atmosphere that feels airy, modern, and deeply relaxing. The image captures the simplicity of slow afternoons spent above the city with nothing rushing the moment forward.",
  src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814784/rooftop-pool-lines_nuhoov.jpg",
  alt: "Some peace looks exactly like open sky and still water.",
},
{
  title: "The Weekend Table",
  description: "An overhead café table scene featuring creamy pasta, tiramisu, sparkling drinks, and warm wooden textures arranged in a relaxed shared dining setup. The casual hand movements, minimalist plating, and natural café atmosphere create a social mood that feels intimate, comforting, and effortlessly modern. The image captures the charm of slow lunches, shared desserts, and everyday moments that quietly turn memorable.",
  src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814785/shared-dinner-moments_wb77hm.jpg",
  alt: "Good conversations usually happen around unfinished plates.",
},
{
  title: "The Cozy Frame",
  description: "A cozy modern interior aesthetic featuring paper lantern lighting, soft neutral décor, warm ambient tones, minimalist styling, and calm living room details. Perfect inspiration for apartment aesthetics, soft lighting interiors, cozy home décor, Japandi-inspired spaces, and quiet evening moods.",
  src: "https://res.cloudinary.com/dl2ps39y0/image/upload/v1779814792/warm-lantern-corner_xfvliv.jpg",
  alt: "Warm lighting changes a room before anything else does.",
}
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="mx-auto max-w-6xl px-6 pb-32"
    >
      <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Gallery
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {galleryItems.map((item) => (
          <div
            key={item.src}
            className="group relative overflow-hidden rounded-3xl"
          >
            <CldImage
              src={item.src}
              width="800"
              height="1000"
              alt={item.alt}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition duration-300 group-hover:opacity-100">
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
