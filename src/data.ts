import { Product, Artisan } from './types';

export const ARTISANS: Artisan[] = [
  {
    id: 'aanya',
    name: 'Aanya Sharma',
    role: 'Master Weaver',
    location: 'Varanasi, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
    bio: 'Preserving the ancient techniques of hand-spun indigo dyeing and double-beam shuttle weaving.',
    storyDetails: 'Aanya Sharma has been sitting at her family’s handloom since she was seven. Born into a long lineage of master weavers in Varanasi, she represents the fifth generation carrying on the traditional double-beam indigo shuttle weaving. Every throw she creates is an exercise in pure patience-taking over three weeks of spinning, natural vat indigo-dyeing, and synchronized foot pedal work. Aanya is committed to training the next generation of women in her community to keep this slow-craft heritage alive.',
    techniques: [
      'Double-beam Loom Weaving',
      'Resist Hand-Block Printing',
      'Organic Fermented Indigo Dyeing'
    ],
    processSteps: [
      {
        title: '01. Vat Fermentation',
        desc: 'Our organic indigo vat has been active for over three years, fed daily with lime, jaggery, and water to keep the living cultures alive.'
      },
      {
        title: '02. Hand-Spun Yarn',
        desc: 'Raw organic cotton and wild tussar silk fibers are spun by hand on a traditional charkha wheel to produce a textured, uneven grain.'
      },
      {
        title: '03. Synced Handloom Weaving',
        desc: 'Using a vintage wooden shuttle loom, where foot pedals lift alternating warp threads while hands glide the shuttle across.'
      }
    ],
    materials: ['Organic Desi Cotton', 'Wild Tussar Silk', 'Natural Living Indigo Dye'],
    bannerColor: 'bg-indigo/5 border-indigo/30'
  },
  {
    id: 'anjali',
    name: 'Anjali Sharma',
    role: 'Studio Ceramicist',
    location: 'Bhuj, Gujarat',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    bio: 'Shaping rustic river clays into high-fired stoneware depicting ancestral sea waves and desert skies.',
    storyDetails: 'Working out of her small mud-walled studio in Kutch, Anjali blends traditional white clay pottery painting with modern organic silhouettes. She sources her terracotta clay directly from local dry riverbeds, cleansing and aging it using techniques passed down from her grandmother. Each stroke of cobalt oxide glaze on her vases is hand-painted freehand, requiring perfect breath control and deep concentration. Her mission is to elevate Kutch clay crafts to global gallery spaces.',
    techniques: [
      'Kickwheel Throwing',
      'Freehand Cobalt Underglaze Painting',
      'High-Temperature Wood Firing'
    ],
    processSteps: [
      {
        title: '01. Riverbed Sifting',
        desc: 'Raw clay is harvested from dry monsoon riverbeds, sifted three times, and aged in damp burlap sacks for two weeks.'
      },
      {
        title: '02. Kickwheel Centering',
        desc: 'Thrown on a heavy, foot-powered kickwheel. The lack of an electric motor keeps the hands in intimate contact with the pottery.'
      },
      {
        title: '03. Oxides Detailing',
        desc: 'Using ultra-fine squirrel-hair brushes to apply rich blue mineral pigments onto raw, unfired glaze with absolute freehand precision.'
      }
    ],
    materials: ['Kutch Terracotta Clay', 'Cobalt Mineral Oxides', 'High-fired Feldspathic Glaze'],
    bannerColor: 'bg-clay/5 border-clay/30'
  },
  {
    id: 'basheer',
    name: 'Basheer Ahmad',
    role: 'Master Carver',
    location: 'Srinagar, Kashmir',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    bio: 'Sculpting wild walnut wood into elegant, detailed functional art and heirloom containers.',
    storyDetails: 'In the quiet, snow-capped valley of Srinagar, Basheer has been carving wild walnut wood for over 40 years. He uses iron chisels made by local village blacksmiths. His work is heavily inspired by Kashmir’s flora, translating lotus blossoms and chinar leaves into smooth, tactile wooden forms. He believes wood is a living element that continues to breathe and mature long after it has left the forest.',
    techniques: [
      'Deep Relievo Chiseling',
      'Lathe Spinning & Hollowing',
      'Organic Walnut Oil Rubbing'
    ],
    processSteps: [
      {
        title: '01. Seasoning',
        desc: 'Wild walnut wood blocks are seasoned naturally for 3 to 5 years under snow and sun to prevent warping and cracking.'
      },
      {
        title: '02. Chisel Shaping',
        desc: 'Rough silhouettes are chopped using a heavy adze, followed by fine chisels to detail floral relievo relief structures.'
      },
      {
        title: '03. Walnut Oil Polish',
        desc: 'Instead of synthetic varnishes, the wood is repeatedly rubbed with raw walnut oil and beeswax, bringing out a deep inner glow.'
      }
    ],
    materials: ['Seasoned Wild Walnut Wood', 'Raw Linseed Oil', 'Natural Forest Beeswax'],
    bannerColor: 'bg-turmeric/5 border-turmeric/30'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'midnight-lotus',
    name: 'Midnight Lotus Throw',
    price: 145.00,
    currency: '$',
    category: 'Textiles',
    region: 'Varanasi',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600',
    hoverImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    reviewCount: 34,
    description: 'A rich, heavy indigo-dyed handloom throw featuring the traditional lotus motif. Meticulously hand-woven on a double-beam shuttle loom over 18 days, blending textured raw tussar silk with organic cotton. Features custom hand-twisted tassels.',
    artistId: 'aanya',
    artistName: 'Aanya Sharma',
    status: 'Sold out',
    materials: ['Natural Indigo Dye', 'Wild Tussar Silk', 'Indian Cotton'],
    careInstructions: [
      'Hand wash in cold water with mild detergent',
      'Dry in shade to preserve color vibrancy',
      'Warm iron if needed'
    ],
    shippingReturns: 'Ships in sustainable paper rolls. Since this item is sold out, you can join the waitlist for the next batch (expected in 6 weeks).',
    thumbnails: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'rajasthan-sky',
    name: 'Rajasthan Sky Scarf',
    price: 68.00,
    currency: '$',
    category: 'Textiles',
    region: 'Jodhpur',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=600',
    hoverImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    reviewCount: 56,
    description: 'An ethereal scarf made from fine mulmul cotton. Hand-block printed using local clay resists and fermented natural indigo. The patterns evoke a starlit desert sky over Jodhpur. Incredibly soft, breathable, and versatile.',
    artistId: 'aanya',
    artistName: 'Aanya Sharma',
    status: 'Bestseller',
    materials: ['Superfine Mulmul Cotton', 'Living Fermented Indigo Dye', 'Dabu Mud Resist'],
    careInstructions: [
      'Hand wash separately in cold water',
      'Air dry flat in shade',
      'Iron on low-medium setting'
    ],
    shippingReturns: 'Ships worldwide in 3-5 business days. Free domestic returns within 14 days.',
    thumbnails: [
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'ancestral-echo',
    name: 'Ancestral Echo Tapestry',
    price: 210.00,
    currency: '$',
    category: 'Textiles',
    region: 'Varanasi',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=600',
    rating: 4.7,
    reviewCount: 18,
    description: 'A complex heirloom wall hanging depicting abstract river waves. Features a dense, rustic weave of hand-combed local wool and sisal fibers. Dyed using pomegranate skin, madder root, and organic iron earth pigments.',
    artistId: 'aanya',
    artistName: 'Aanya Sharma',
    status: 'Limited Edition',
    materials: ['Indian Bikaneri Wool', 'Natural Madder Root Dye', 'Sisal Coir Fibers'],
    careInstructions: [
      'Gentle shaking or dry vacuuming only',
      'Spot clean stains immediately with damp cloth',
      'Do not wash'
    ],
    shippingReturns: 'Includes hand-carved teak hanging rod. Ships insured via special art courier.',
    thumbnails: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'indigo-crest',
    name: 'Indigo Crest Tall Vase',
    price: 4850,
    currency: '₹',
    category: 'Ceramics',
    region: 'Bhuj',
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&q=80&w=600',
    hoverImage: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=600',
    rating: 4.5,
    reviewCount: 12,
    description: 'A signature stoneware vase thrown from local gangetic clay, double-fired at high temperatures for ultimate durability. Decorated with hand-painted cobalt waves that wrap seamlessly around its fluted, sculptural neck.',
    artistId: 'anjali',
    artistName: 'Anjali Sharma',
    status: 'Bestseller',
    materials: ['Riverbed Terracotta', 'Cobalt Oxide Mineral Glaze'],
    careInstructions: [
      'Hand wash with a soft sponge and mild soap',
      'Avoid sudden thermal changes',
      'Recommended for indoor dry or fresh flowers only'
    ],
    shippingReturns: 'Double-boxed in customized recycled honeycomb paper. 100% arrival guarantee (broken items are immediately replaced).',
    thumbnails: [
      'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=600'
    ],
    hasVideo: true
  },
  {
    id: 'floral-bloom',
    name: 'Floral Bloom Bowl',
    price: 1200,
    currency: '₹',
    category: 'Ceramics',
    region: 'Bhuj',
    image: 'https://images.unsplash.com/photo-1576016770956-debb63d900bb?auto=format&fit=crop&q=80&w=600',
    rating: 4.6,
    reviewCount: 22,
    description: 'A deep, vibrant hand-thrown serving bowl featuring intricate hand-painted floral elements inspired by Gujarati folklore. Features a rich, food-safe high-gloss interior glazing.',
    artistId: 'anjali',
    artistName: 'Anjali Sharma',
    status: 'New',
    materials: ['Kutch White Clay', 'Food-safe Gloss Glaze', 'Earth Pigments'],
    careInstructions: [
      'Dishwasher safe on gentle cycle',
      'Do not use in microwave or oven',
      'Avoid metallic scrubbers'
    ],
    shippingReturns: 'Securely packed in biodegradable starch pellets. Ships in 1-2 days.',
    thumbnails: [
      'https://images.unsplash.com/photo-1576016770956-debb63d900bb?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'sea-wave-coasters',
    name: 'Sea Wave Coasters (Set of 4)',
    price: 850,
    currency: '₹',
    category: 'Ceramics',
    region: 'Bhuj',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    reviewCount: 40,
    description: 'A set of four circular coasters hand-sculpted from red earthenware clay. Embellished with alternating concentric wave motifs and sealed with a matte waterproof glazing to protect your tabletop.',
    artistId: 'anjali',
    artistName: 'Anjali Sharma',
    materials: ['Red Earthenware Clay', 'Matte Slip Glazing', 'Cork Backing Plugs'],
    careInstructions: [
      'Wipe clean with a damp cloth',
      'Do not submerge in standing water'
    ],
    shippingReturns: 'Wrapped in printed kraft paper. Fast standard shipping.',
    thumbnails: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'peacock-platter',
    name: 'Peacock Heritage Platter',
    price: 3400,
    currency: '₹',
    category: 'Ceramics',
    region: 'Bhuj',
    image: 'https://images.unsplash.com/photo-1535401991746-da3d9055713e?auto=format&fit=crop&q=80&w=600',
    rating: 4.4,
    reviewCount: 15,
    description: 'A magnificent low-rimmed serving platter featuring a stylized dancing peacock. Perfect as a striking centerpiece or an elegant serving plate for festive occasions.',
    artistId: 'anjali',
    artistName: 'Anjali Sharma',
    materials: ['High-fired Stoneware', 'Cobalt Oxide Wash', 'Semi-Matte Glaze'],
    careInstructions: [
      'Hand wash recommended',
      'Warm oven safe up to 120°C'
    ],
    shippingReturns: 'Ships in a gift-ready hard box with the artisan’s hand-signed care card.',
    thumbnails: [
      'https://images.unsplash.com/photo-1535401991746-da3d9055713e?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'earth-born-pitcher',
    name: 'Earth-Born Pitcher',
    price: 84.00,
    currency: '$',
    category: 'Ceramics',
    region: 'Bhuj',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    reviewCount: 29,
    description: 'A rustic pitcher celebrating raw, unrefined river clay. Hand-rubbed with organic mountain beeswax to create a non-porous seal while retaining a fully tactile, slip-resistant exterior finish.',
    artistId: 'anjali',
    artistName: 'Anjali Sharma',
    materials: ['Iron-Rich Riverbed Clay', 'Organic Raw Beeswax'],
    careInstructions: [
      'Hand wash in lukewarm water only',
      'Do not put in dishwasher or expose to hot boiling liquids'
    ],
    shippingReturns: 'Ships in heavy protective cardboard tubes.',
    thumbnails: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'old-soul-bowl',
    name: 'Old Soul Carved Bowl',
    price: 110.00,
    currency: '$',
    category: 'Woodwork',
    region: 'Srinagar',
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    reviewCount: 31,
    description: 'Hand-chiseled from a single block of seasoned wild walnut wood. The dark, wild grain of the heartwood runs beautifully along the curved side walls, contrasted by fine chiseled grooves along the outer rim.',
    artistId: 'basheer',
    artistName: 'Basheer Ahmad',
    status: 'Bestseller',
    materials: ['Seasoned Wild Walnut Wood', 'Raw Linseed Finish'],
    careInstructions: [
      'Wipe with oil once a month to retain sheen',
      'Do not soak or put in dishwasher',
      'Keep away from direct heat registers'
    ],
    shippingReturns: 'Ships in individual muslin bags to allow the wood to breathe during transit.',
    thumbnails: [
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'sun-touched-ladle',
    name: 'Sun-Touched Ladle',
    price: 62.00,
    currency: '$',
    category: 'Metal Art',
    region: 'Pune',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=600',
    rating: 4.6,
    reviewCount: 14,
    description: 'A heavy brass serving ladle, hand-beaten with flat head and curved loop handle. The surface is textured with beautiful micro-indentations from the artisan’s rounded hammer.',
    artistId: 'basheer',
    artistName: 'Basheer Ahmad',
    materials: ['Pure Beaten Brass', 'Food-safe Tin Lining (Kalai)'],
    careInstructions: [
      'Wash with soft sponge and gentle soap',
      'Polish with lemon juice or tamarind paste to restore luster over time'
    ],
    shippingReturns: 'Packed in handloom cotton pouches.',
    thumbnails: [
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'scribe-bundle',
    name: "The Scribe's Bundle",
    price: 35.00,
    currency: '$',
    category: 'Stationery' as any,
    region: 'Ahmedabad',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    reviewCount: 42,
    description: 'A set of three soft pocket journals wrapped in hand-block printed cotton scraps. Inside features blank, thick cotton rag paper made from textile industrial waste. Absolutely no trees were harmed in making this notebook set.',
    artistId: 'aanya',
    artistName: 'Aanya Sharma',
    materials: ['100% Cotton Rag Recycled Paper', 'Upcycled Cotton Covers'],
    careInstructions: [
      'Keep away from high humidity areas',
      'Ideal for ink, charcoal, or water sketching'
    ],
    shippingReturns: 'Tied together with natural jute twine. Standard shipping.',
    thumbnails: [
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'midnight-loop',
    name: 'Midnight Loop Rug',
    price: 290.00,
    currency: '$',
    category: 'Textiles',
    region: 'Varanasi',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=600',
    rating: 4.7,
    reviewCount: 20,
    description: 'A plush, hand-tufted accent rug made of native sheep wool. Styled with elegant abstract line configurations block-printed onto the organic dye backing. Adds rich warmth and high-contrast styling to any bedroom.',
    artistId: 'basheer',
    artistName: 'Basheer Ahmad',
    materials: ['Native Indian Wool', 'Hemp Backing Matrix', 'Cotton Edge Overcasting'],
    careInstructions: [
      'Professional rug clean recommended',
      'Vacuum on low speed without brush bar',
      'Rotate twice a year for even wear'
    ],
    shippingReturns: 'Ships rolled in protective waterproof linen wraps. Delivery takes 7-10 business days.',
    thumbnails: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=600'
    ]
  }
];

export const CATEGORIES = ['All', 'Textiles', 'Ceramics', 'Woodwork', 'Metal Art'];
export const REGIONS = ['All', 'Varanasi', 'Bhuj', 'Srinagar', 'Jodhpur', 'Pune', 'Ahmedabad'];

export interface EditorialArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
}

export const ARTICLES: EditorialArticle[] = [
  {
    id: 'living-indigo',
    title: 'The Living Indigo Vat: A Breath of History',
    excerpt: 'Deep dive into the delicate biochemistry of fermented indigo dye, a liquid ecosystem that breathes, feeds, and matures over years.',
    content: `Organic Indigo dyeing is not simply a color process-it is a partnership with a living colony. Unlike synthetic dyes that rely on heavy metallic agents to bind to fabric, pure indigo is an anaerobic vat ferment. The vat is fed with natural minerals and sugar sources-specifically limestone and local palm sugar or jaggery.

Every morning, master dyers like Aanya Sharma inspect their indigo vats. They look at the color of the "indigo flower"-the iridescent purple froth that forms on the surface of the vat. A sweet, yeasty smell indicates a healthy environment. If the vat is too acidic, it is fed lime; if too sleepy, it receives jaggery.

When fabric is submerged into the vat, it actually emerges *bright yellow-green*. It is only when the wet fibers touch the oxygen in the air that a magical chemical reaction occurs, transforming the fiber into the deep, rich, soulful blue we call Indigo. This is why every dip is a direct record of the weather, humidity, and the spirit of the vat on that specific day.`,
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=600',
    date: 'June 14, 2026',
    readTime: '4 min read'
  },
  {
    id: 'kickwheel',
    title: 'Chasing Imperfection: The Soul of the Kickwheel',
    excerpt: 'Why master ceramicists resist electric motors and why the subtle hand variations in clay pottery represent the pinnacle of craft design.',
    content: `In an era of high-speed manufacturing, the heavy concrete kickwheel represents a stubborn commitment to the slow path. Ceramicist Anjali Sharma uses a heavy flywheel thrown into motion with the bare foot.

"When you use an electric wheel, the motor spins at a perfectly constant speed. This forces your clay to behave perfectly," Anjali explains. "But a kickwheel responds to the resistance of your own hands. As you pull the clay up, the wheel slows down slightly. There is a physical dialog occurring."

This subtle, organic speed variance produces micro-ripples along the inside of a clay vessel. These lines are virtually invisible to the eye but instantly tactile to the hands. They represent the exact weight, torque, and movement of the potter’s body at that specific minute-making each ceramic item a truly unrepeatable, unique archival capture.`,
    image: 'https://images.unsplash.com/photo-1576016770956-debb63d900bb?auto=format&fit=crop&q=80&w=600',
    date: 'May 28, 2026',
    readTime: '5 min read'
  }
];
