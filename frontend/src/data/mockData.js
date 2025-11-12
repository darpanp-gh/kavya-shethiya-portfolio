export const projectsData = [
  {
    id: 'tandem-wing-uav',
    title: 'Tandem-Wing UAV Configuration',
    shortDescription:
      'Compact tandem-wing fixed-wing UAV under 1 kg with NACA 4412 airfoils, designed for efficient stable flight with balanced lift distribution and excellent control flexibility.',
    image: 'https://customer-assets.emergentagent.com/job_ecf6f676-0158-4799-b857-6c13e6bfed78/artifacts/ml3u0bga_Tandem%20wing.png',
    fullDescription:
      'A sophisticated tandem-wing UAV configuration featuring two main wings (600 mm front span, 800 mm rear span) positioned 600 mm apart with optimized NACA 4412 airfoil profiles. The design achieves total weight under 1 kg with integrated battery (4S 3000 mAh LiPo) and dual Emax 1300 KV motors. The configuration features a 38% center of gravity placement for superior stability, utilizing carbon-fiber spars with 3D-printed PLA ribs and foam skin construction. Equipped with 4 servos operating flaperons for pitch and roll control, with yaw achieved through differential thrust. The system achieves 15–20 m/s cruise velocity with 30–50 minute endurance.',
    technologies: ['Fusion 360', 'NACA 4412 Airfoils', 'CFD Analysis', 'SpeedyBee F405 Flight Controller', 'ELRS Nano Receiver', 'Mission Planner'],
    specifications: {
      weight: '< 1 kg',
      wingArea: '0.156 m²',
      cruiseVelocity: '15–20 m/s',
      endurance: '30–50 minutes',
      liftToDragRatio: '≈6:1',
      reynoldsNumber: '≈1.2 × 10⁵',
    },
    challenges:
      'Balancing aerodynamic efficiency with structural weight, optimizing lift distribution between front (55–60%) and rear wings, and managing complex wing interference effects. Achieving proper center of gravity placement while maintaining structural integrity.',
    outcomes:
      'Successfully designed and validated a compact tandem-wing configuration with stable flight at 15 m/s and moderate glide ratio (6:1). Demonstrated excellent potential for surveillance and mapping applications with superior endurance compared to conventional designs.',
    duration: '6 months',
    role: 'Lead Designer',
  },
  {
    id: 'hybrid-vtol-uav',
    title: 'Hybrid UAV (VTOL Fixed-Wing)',
    shortDescription:
      'Advanced hybrid UAV combining vertical take-off capabilities with efficient fixed-wing flight using tilt-rotor V-tail configuration.',
    image: 'https://customer-assets.emergentagent.com/job_ecf6f676-0158-4799-b857-6c13e6bfed78/artifacts/h1sf5c46_Hybrid%20Uav.png',
    fullDescription:
      'A cutting-edge hybrid UAV design that seamlessly transitions between VTOL (Vertical Take-Off and Landing) and fixed-wing flight modes. The system employs an innovative tilt-rotor V-tail mechanism controlled via INAV flight controller, enabling vertical lift-off followed by efficient horizontal cruise. This design eliminates the need for runways while maintaining the range and endurance benefits of fixed-wing aircraft.',
    technologies: ['INAV', 'Tilt-Rotor Mechanism', 'Flight Control Systems', 'Aerodynamics', 'Mission Planner'],
    challenges:
      'Developing smooth transition algorithms between flight modes, managing power distribution for different flight phases, and ensuring stability during the critical transition period.',
    outcomes:
      'Created a fully functional hybrid UAV capable of 45-minute flight endurance with successful autonomous transitions. The system demonstrated reliable VTOL operations in confined spaces followed by efficient cruise flight.',
    duration: '8 months',
    role: 'System Designer & Flight Controller Programmer',
  },
  {
    id: 'nautix',
    title: 'Nautix',
    shortDescription:
      'Marine robotic platform designed for underwater and surface exploration with advanced sensor integration.',
    image: 'https://customer-assets.emergentagent.com/job_ecf6f676-0158-4799-b857-6c13e6bfed78/artifacts/1lf2exnd_Nautix.png',
    fullDescription:
      'Nautix is a versatile marine robotic platform capable of both underwater and surface operations. The system integrates waterproof sensors, cameras, and navigation equipment to perform exploration and data collection missions. Designed with modularity in mind, Nautix can be configured for various marine applications including environmental monitoring, underwater mapping, and research operations.',
    technologies: ['Embedded Systems', 'Waterproof Electronics', 'Marine Navigation', 'Arduino', 'Sensor Fusion'],
    challenges:
      'Ensuring complete waterproofing of electronic systems, managing buoyancy control, and developing reliable underwater communication protocols.',
    outcomes:
      'Built a functional marine robot capable of diving to 10 meters depth with 2-hour operational endurance. Successfully deployed for coastal water quality monitoring and underwater photography.',
    duration: '5 months',
    role: 'Lead Engineer',
  },
  {
    id: 'shadownet',
    title: 'ShadowNet',
    shortDescription:
      'Advanced defense concept featuring a mothership deploying tethered underwater drones for surveillance and security operations.',
    image: 'https://customer-assets.emergentagent.com/job_ecf6f676-0158-4799-b857-6c13e6bfed78/artifacts/ke8g14g2_shadownet%20%282%29.png',
    fullDescription:
      'ShadowNet represents an innovative defense and surveillance concept where a surface mothership deploys and coordinates multiple tethered underwater drones. The tethered connection provides continuous power and high-bandwidth data transfer, enabling extended surveillance missions without battery limitations. The system is designed for harbor security, underwater infrastructure monitoring, and coastal defense applications.',
    technologies: ['System Architecture', 'Surveillance Systems', 'Drone Coordination', 'Communication Protocols'],
    challenges:
      'Designing efficient tether management systems, coordinating multiple drones simultaneously, and ensuring reliable communication in challenging underwater environments.',
    outcomes:
      'Developed comprehensive system architecture and proof-of-concept prototype demonstrating coordinated operation of three tethered drones with real-time video streaming and control.',
    duration: '4 months',
    role: 'Concept Designer & System Architect',
  },
  {
    id: '3d-printing-business',
    title: '3D Printing Business',
    shortDescription:
      'Custom 3D printing service creating innovative decor, functional organizers, and unique products using Bambu Lab technology.',
    image: 'https://customer-assets.emergentagent.com/job_ecf6f676-0158-4799-b857-6c13e6bfed78/artifacts/rg7p9k2m_home_decor.jpg',
    fullDescription:
      'A thriving 3D printing business specializing in custom-designed decor items, functional organizers, and innovative products. Utilizing state-of-the-art Bambu Lab printers, the business combines design creativity with precision manufacturing to deliver high-quality products. From conceptual design to final production, each piece is crafted with attention to detail and customer requirements.',
    technologies: ['Bambu Lab Studio', 'Fusion 360', 'Product Design', 'Additive Manufacturing'],
    challenges:
      'Optimizing print settings for different materials, managing production timelines, and creating designs that balance aesthetics with manufacturability.',
    outcomes:
      'Successfully launched business with 50+ satisfied customers, created a product line of 20+ original designs, and achieved 95% first-time-right print success rate.',
    duration: 'Ongoing',
    role: 'Designer & Manufacturer',
  },
  {
    id: 'fidget-toys',
    title: 'Fidget Toys Product Line',
    shortDescription:
      'Innovative collection of 3D-printed fidget toys including geometric gears, planetary spinners, and tactile fidget rings with multiple color variations.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F3c0e1f503fc24708b890343eacd90cdb%2F7c230dfdb4084943a458f8ddae654683?format=webp&width=800',
    fullDescription:
      'A diverse product line of custom-designed fidget toys created using advanced 3D printing technology. The collection features multiple innovative designs: Planetary Gear Fidget Spinners with complex interlocking components demonstrating intricate CAD modeling; Geometric Planetary Gears Fidget Spinners in monocolor, multicolor #1, and multicolor #2 variants; and Tactical Fidget Rings in vibrant colors (green, white, red). Each design combines satisfying tactile feedback with eye-catching aesthetics. The Planetary Gear Fidget Spinner (RAZOR) showcases six different color combinations with precision ball bearings for smooth operation. All pieces are manufactured using high-precision 3D printing to ensure smooth surfaces and perfect tolerances for an optimal fidgeting experience.',
    technologies: ['Fusion 360', 'CAD Design', '3D Printing (FDM)', 'Bambu Lab', 'Product Rendering', 'Design for Manufacturing'],
    productCategories: [
      'Planetary Gear Fidget Spinners (multiple color variants)',
      'Geometric Planetary Gears Fidget Spinners',
      'Core Geometric Planetary Gears Spinners (color variations)',
      'Tactical Fidget Rings (red, green, white)',
    ],
    challenges:
      'Designing complex interlocking components that spin smoothly, optimizing geometry to minimize friction and ensure durability, maintaining precise tolerances during 3D printing, and creating visually appealing color combinations.',
    outcomes:
      'Created 12+ unique fidget toy designs with consistent positive customer feedback. Achieved print success rates exceeding 98% with customers praising the smooth spinning action and quality construction. Products have become popular items in the 3D printing business portfolio.',
    duration: 'Ongoing Collection',
    role: 'Product Designer & Manufacturer',
  },
  {
    id: 'home-decor-products',
    title: 'Home Decor Products Collection',
    shortDescription:
      'Premium 3D-printed home decor and organizational items including decorative lighting, elegant vases, stylish plant holders, and modern desk organizers.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F3c0e1f503fc24708b890343eacd90cdb%2Fb91ab7297c324e17bfc82073fca850ea?format=webp&width=800',
    fullDescription:
      'An elegant collection of 3D-printed home decor and organizational products designed to enhance interior spaces. The product line includes: Night Lamp Shades featuring textured designs that create beautiful light diffusion patterns, available in neutral and warm tones; Blooming Lotus Lamp Shades with sculptural petal designs that cast intricate shadows; Vases and Flower Pots in various wavy, geometric, and organic forms suitable for modern and contemporary interiors; Small Stylish Planters in multiple colors with textured surfaces; Desk Organizers with multiple compartments for office supplies, featuring ergonomic designs; and Jewelry Holders in elegant forms designed to display and store jewelry. Each piece is meticulously crafted to combine functionality with aesthetic appeal, featuring smooth finishes and precise details that showcase the capabilities of advanced 3D printing technology.',
    technologies: ['Fusion 360', 'Product Design', '3D Printing (FDM)', 'Bambu Lab Studio', 'Surface Finishing', 'Design for Function'],
    productCategories: [
      'Night Lamp Shades (multiple designs and colors)',
      'Blooming Lotus Lamp Shade (sculptural design)',
      'Vases and Flower Pots (various styles)',
      'Small Stylish Planters (multiple colors)',
      'Desk Organizers (compartmented designs)',
      'Jewelry Holders (elegant forms)',
      'Decorative Candle Holders (textured designs)',
      'Wall Organizers (multi-function designs)',
    ],
    challenges:
      'Creating functional home decor that balances aesthetic appeal with structural integrity, optimizing designs for 3D printing while maintaining fine details, ensuring watertight seals for items containing liquids, and designing for smooth post-processing.',
    outcomes:
      'Successfully created 25+ home decor designs with strong customer demand. Products have achieved recognition for combining modern aesthetics with functionality. Sales indicate particular success with lamp shades and desk organizers. Customers consistently praise the quality, attention to detail, and unique designs.',
    duration: 'Ongoing Collection',
    role: 'Product Designer & Manufacturer',
  },
];

export const certificatesData = [
  {
    id: 'industrial-training-iace',
    title: 'Industrial Training Programme',
    subtitle: 'Industrial Robotics',
    issuer: 'International Automobile Centre of Excellence (iACE)',
    issueDate: 'September 18-19, 2025',
    description: 'Participated in intensive industrial robotics training program covering industrial automation, robotic systems, and real-world manufacturing applications.',
    certificateNumber: '25260340827',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F3c0e1f503fc24708b890343eacd90cdb%2F6a893ad62d3b4917b44c386f70cfabef?format=webp&width=800',
    category: 'Training & Professional Development',
  },
  {
    id: 'robocon-achievement-2024',
    title: 'RoboCon Team Achievement',
    subtitle: 'Mechatronics Engineering',
    issuer: 'GCET Vallabhnagar & CVM University',
    issueDate: 'April 4, 2025',
    description: 'Recognition for being part of the GCET RoboCon Team 2024 during academic year 2024-25. Demonstrated excellence in robotics design, engineering, and competitive excellence.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F3c0e1f503fc24708b890343eacd90cdb%2F255c1ae6891944bebc5442d90a4d72f1?format=webp&width=800',
    category: 'Competition & Awards',
  },
  {
    id: 'robofest-participation-2024',
    title: 'RoboFest-Gujarat 4.0',
    subtitle: 'Application Based Robots',
    issuer: 'Gujarat Council on Science & Technology (GUJCOST)',
    issueDate: 'October 25-27, 2024',
    description: 'Participated in Level II - Proof of Concept category at RoboFest-Gujarat 4.0 competition. Showcase of innovative robotics solutions with team including Shethiya Kavya Sanjaykumr, Dhruv Jitendrabhai Vachhani, and Harshil Vijay Joshi.',
    location: 'Gujarat Science City, Ahmedabad',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F3c0e1f503fc24708b890343eacd90cdb%2Fd56eb7131086483785f9a2931b656f4b?format=webp&width=800',
    category: 'Competition & Awards',
  },
  {
    id: 'automation-robotics-workshop',
    title: 'Automation and Robotics Workshop',
    subtitle: 'One Day Specialized Training',
    issuer: 'MSME Tool Room, Indo German Tool Room, Ahmedabad',
    issueDate: 'August 13, 2024',
    description: 'Successfully completed concentrated course in Automation and Robotics. Hands-on training on industrial automation systems, robotics integration, and advanced manufacturing technologies.',
    institution: 'ISO 9001:2015 Certified Institute',
    location: 'Ahmedabad, India',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F3c0e1f503fc24708b890343eacd90cdb%2F304987dbed774fccb7060e71cd34078e?format=webp&width=800',
    category: 'Training & Professional Development',
  },
];
