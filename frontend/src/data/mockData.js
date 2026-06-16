import vtolRender1 from '../assets/images/WhatsApp_Image_2026-06-13_at_15.57.45.jpeg';
import vtolRender2 from '../assets/images/WhatsApp_Image_2026-06-13_at_15.58.21.jpeg';

export const projectsData = [
  {
    id: 'tandem-wing-uav',
    title: 'Tandem-Wing UAV Configuration',
    shortDescription:
      'Aerodynamic and structural design of a tandem-wing UAV using NACA airfoil profiles for enhanced lift and stability.',
    image: 'https://customer-assets.emergentagent.com/job_3bfe5c56-256c-479b-a15b-fa7b058672b9/artifacts/q7po4v0m_Tandem%20wing%20%282%29.png',
    images: [],
    fullDescription:
      'This project focuses on the innovative design of a tandem-wing UAV configuration, featuring two main wings positioned one behind the other. The design utilizes NACA airfoil profiles optimized for efficient lift distribution and aerodynamic stability. Through extensive CFD analysis and structural simulations, the configuration achieves superior lift-to-drag ratios while maintaining structural integrity during flight operations.',
    technologies: ['Fusion 360', 'CFD Analysis', 'NACA Airfoils', 'Structural Design'],
    challenges:
      'Balancing aerodynamic efficiency with structural weight, ensuring proper center of gravity placement, and managing complex wing interference effects.',
    outcomes:
      'Successfully designed and validated a tandem-wing configuration with 15% improved lift efficiency compared to conventional designs. The project demonstrated strong potential for long-endurance surveillance applications.',
    applications: ['Long-Endurance Surveillance', 'Aerial Mapping', 'Agricultural Monitoring'],
    duration: '6 months',
    role: 'Lead Designer',
  },
  {
    id: 'hybrid-vtol-uav',
    title: 'Hybrid UAV (VTOL Fixed-Wing)',
    shortDescription:
      'Advanced hybrid UAV combining vertical take-off capabilities with efficient fixed-wing flight using tilt-rotor V-tail configuration.',
    image: 'https://customer-assets.emergentagent.com/job_ecf6f676-0158-4799-b857-6c13e6bfed78/artifacts/h1sf5c46_Hybrid%20Uav.png',
    images: [
      { src: vtolRender1, caption: 'CAD Render — Wireframe Configuration View' },
      { src: vtolRender2, caption: 'CAD Render — Detailed Design with Tilt-Rotor System' },
    ],
    fullDescription:
      'A cutting-edge hybrid UAV design that seamlessly transitions between VTOL (Vertical Take-Off and Landing) and fixed-wing flight modes. The system employs an innovative tilt-rotor V-tail mechanism controlled via INAV flight controller, enabling vertical lift-off followed by efficient horizontal cruise. This design eliminates the need for runways while maintaining the range and endurance benefits of fixed-wing aircraft.',
    technologies: ['INAV', 'Tilt-Rotor Mechanism', 'Fusion 360', 'Flight Control Systems', 'Aerodynamics', 'Mission Planner'],
    challenges:
      'Developing smooth transition algorithms between flight modes, managing power distribution for different flight phases, and ensuring stability during the critical transition period.',
    outcomes:
      'Created a fully functional hybrid UAV capable of 45-minute flight endurance with successful autonomous transitions. The system demonstrated reliable VTOL operations in confined spaces followed by efficient cruise flight.',
    applications: ['Surveillance & Reconnaissance', 'Search & Rescue', 'Cargo Delivery', 'Border Patrol'],
    duration: '8 months',
    role: 'System Designer & Flight Controller Programmer',
  },
  {
    id: 'nautix',
    title: 'NAUTIX — Autonomous Surface Robot',
    shortDescription:
      'Autonomous surface vehicle (ASV) designed for water-based surveillance, monitoring, and inspection with a stable catamaran hull.',
    image: 'https://customer-assets.emergentagent.com/job_ecf6f676-0158-4799-b857-6c13e6bfed78/artifacts/1lf2exnd_Nautix.png',
    images: [],
    videos: [],
    fullDescription:
      'Designed and developed NAUTIX, an autonomous surface vehicle (ASV) for water-based surveillance, monitoring, and inspection applications. The system features a stable catamaran hull for improved stability on water, autonomous navigation capabilities powered by embedded control systems, and a modular architecture that enables reliable real-world deployment. The design prioritizes structural rigidity, waterproofing, and ease of maintenance while keeping the system lightweight for extended operational endurance.',
    technologies: ['Autonomous Systems', 'Robotics', 'System Integration', 'CAD Design', 'Rapid Prototyping', 'Embedded Systems', 'Sensor Fusion'],
    challenges:
      'Achieving structural stability on water with a lightweight catamaran hull, integrating autonomous navigation with real-time sensor data, and ensuring full waterproofing of all electronics across varying water conditions.',
    outcomes:
      'Built a functional autonomous surface vehicle with a stable catamaran configuration, capable of operating autonomously on open water for surveillance and inspection missions. The modular design allows for quick sensor swaps and payload changes.',
    applications: ['Maritime Surveillance', 'Border Security', 'Environmental Monitoring', 'Water Inspection'],
    duration: '5 months',
    role: 'Lead Engineer',
  },
  {
    id: 'shadownet',
    title: 'ShadowNet',
    shortDescription:
      'Advanced defense concept featuring a mothership deploying tethered underwater drones for surveillance and security operations.',
    image: 'https://customer-assets.emergentagent.com/job_ecf6f676-0158-4799-b857-6c13e6bfed78/artifacts/ke8g14g2_shadownet%20%282%29.png',
    images: [],
    fullDescription:
      'ShadowNet represents an innovative defense and surveillance concept where a surface mothership deploys and coordinates multiple tethered underwater drones. The tethered connection provides continuous power and high-bandwidth data transfer, enabling extended surveillance missions without battery limitations. The system is designed for harbor security, underwater infrastructure monitoring, and coastal defense applications.',
    technologies: ['System Architecture', 'Surveillance Systems', 'Drone Coordination', 'Communication Protocols'],
    challenges:
      'Designing efficient tether management systems, coordinating multiple drones simultaneously, and ensuring reliable communication in challenging underwater environments.',
    outcomes:
      'Developed comprehensive system architecture and proof-of-concept prototype demonstrating coordinated operation of three tethered drones with real-time video streaming and control.',
    applications: ['Harbor Security', 'Underwater Infrastructure Monitoring', 'Coastal Defense'],
    duration: '4 months',
    role: 'Concept Designer & System Architect',
  },
  {
    id: '3d-printing-business',
    title: '3D Printing Business',
    shortDescription:
      'Custom 3D printing service creating innovative decor, functional organizers, and unique products using Bambu Lab technology.',
    image: 'https://images.unsplash.com/photo-1582879304171-8041c73bedbd?w=800&q=80',
    images: [],
    fullDescription:
      'A thriving 3D printing business specializing in custom-designed decor items, functional organizers, and innovative products. Utilizing state-of-the-art Bambu Lab printers, the business combines design creativity with precision manufacturing to deliver high-quality products. From conceptual design to final production, each piece is crafted with attention to detail and customer requirements.',
    technologies: ['Bambu Lab Studio', 'Fusion 360', 'Product Design', 'Additive Manufacturing'],
    challenges:
      'Optimizing print settings for different materials, managing production timelines, and creating designs that balance aesthetics with manufacturability.',
    outcomes:
      'Successfully launched business with 50+ satisfied customers, created a product line of 20+ original designs, and achieved 95% first-time-right print success rate.',
    applications: ['Custom Home Decor', 'Functional Organizers', 'Prototype Manufacturing'],
    duration: 'Ongoing',
    role: 'Designer & Manufacturer',
  },
];
