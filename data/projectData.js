export const webProjects = [
  {
    title: "mooSpots",
    image:
      "https://res.cloudinary.com/de3cxnkuw/image/upload/v1751776801/Screenshot_2025-07-05_at_9.36.29_PM_u2gfdn.jpg",
    description:
      "A location-based web app that helps UC Davis students find the closest available bike parking spots using real-time geolocation and navigation integration.",
    technologies: {
      frontend: ["HTML/CSS/JS", "React.js"],
      stateManagement: ["Context API"],
      algorithms: ["Haversine Formula"],
      integration: ["Google Maps API", "Geolocation API"],
      implementation: [
        "Built with React.js for component-based architecture, Context API manages global state for bike rack data, Haversine Formula calculates distances between user location and parking spots, Google Maps integration provides turn-by-turn navigation from current location to selected parking spot."
      ]
    },
    projectDetails: {
      backstory:
        "Created to solve the daily frustration UC Davis students face when trying to find available bike parking spots across campus.",
      howItWorks: [
        "Users can view their current location and see the 6 closest bike racks sorted by distance.",
        "The app uses the Haversine Formula to calculate precise distances from a database of all UC Davis bike racks",
        "Custom-designed logos and components provide clear visual indicators for different parking spot types and availability."
      ],
      keyFeatures: [
        "Real-time geolocation tracking",
        "Distance-based sorting of parking spots",
        "One-click navigation to Google Maps",
        "Custom UI components with intuitive iconography"
      ]
    },
    links: {
      live: "https://github.com",
      github: "https://github.com",
      demo: "https://youtube.com"
    }
  },
  {
    title: "FullStackFactory",
    image:
      "https://res.cloudinary.com/de3cxnkuw/image/upload/v1751777335/IMG_3920_zhoxul.jpg",
    description:
      "An educational platform designed for early tech learners to reinforce their knowledge by writing and sharing technical articles with real-world code implementations.",
    technologies: {
      frontend: ["HTML/CSS/JS", "React.js"],
      routing: ["React Router"],
      stateManagement: ["Context API"],
      architecture: ["Single Page Application (SPA)"],
      implementation: [
        "Built with React.js using reusable components including a navbar that doubles as a sidebar. Implements SPA architecture for seamless navigation. Dynamic React forms handle article creation and rendering, replicating Khan Academy's workflow for content organization and display."
      ]
    },
    projectDetails: {
      backstory:
        "Inspired by React’s modular, Lego-like approach, I created a platform where early learners can assemble and understand key building blocks of web development. While self-learning React, I realized most web apps share common patterns like dynamic rendering, forms, and mapping data. FullStackFactory serves as a place where learners build small, tangible features that reveal how modern web apps work, while writing articles that teach others these core concepts.",
      howItWorks: [
        "The platform mirrors Khan Academy’s structure with categories, units, lessons, and articles.",
        "Users choose or create a category for their article.",
        "Dynamic React forms enable writing and publishing articles with real code examples.",
        "Content is organized into clear sections to aid understanding.",
        "Each unit page is a component rendering categories in interactive cards.",
        "The UnitsPage component dynamically loads data using URL parameters to display the right unit content.",
        "The Article component uses a form to save new articles to the database.",
        "All features are built as isolated React components, demonstrating the modular, assembly-line style of modern web development."
      ],
      keyFeatures: [
        "Dynamic article creation forms",
        "Organized content sections",
        "Real-world code implementation examples",
        "Uniform component architecture",
        "Educational content sharing"
      ]
    },
    links: {
      live: "https://github.com",
      github: "https://github.com",
      demo: "https://youtube.com"
    }
  },
  {
    title: "Photographer Portfolio",
    image:
      "https://res.cloudinary.com/de3cxnkuw/image/upload/v1751776801/Screenshot_2025-07-05_at_9.37.11_PM_uohgd2.jpg",
    description:
      "A dynamic photography portfolio featuring Pinterest-style masonry layouts, intelligent image orientation detection, and CDN optimization for fast loading.",
    technologies: {
      frontend: ["React.js"],
      routing: ["React Router"],
      dataFlow: ["Props passing"],
      cdn: ["Cloudinary CDN"],
      implementation: [
        "Built with React Router for dynamic navigation, props-based data flow for component communication. Cloudinary CDN integration reduces loading times and optimizes image delivery. Custom algorithms analyze image dimensions to determine optimal masonry grid placement."
      ]
    },
    projectDetails: {
      backstory:
        "Developed as a portfolio showcase for a photographer friend who needed a professional platform to display their work with optimal image presentation.",
      howItWorks: [
        "Features a Pinterest-style masonry grid that automatically analyzes each photo's dimensions and orientation to prevent incorrect cropping. The gallery slideshow component dynamically creates presentations based on image composition. Dynamic gallery pages use useParams to filter and load genre-specific images from local data storage."
      ],
      keyFeatures: [
        "Pinterest-style masonry grid layout",
        "Automatic image dimension analysis",
        "Dynamic slideshow generation",
        "Genre-based image filtering",
        "CDN-optimized image delivery",
        "Responsive design for all devices"
      ]
    },
    links: {
      live: "http://khy.vercel.app",
      github: "https://github.com",
      demo: "https://youtube.com"
    }
  }
];

export const mobileProjects = [
  {
    title: "FlowBook",
    image:
      "https://ih1.redbubble.net/image.2036961673.7005/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    description:
      "A React Native app for Brazilian Jiu Jitsu athletes to quickly log sparring performance through interactive questionnaires and track progress with comprehensive analytics.",
    technologies: {
      framework: ["React Native"],
      navigation: ["React Navigation"],
      backend: ["Firebase"],
      stateManagement: ["Redux"],
      storage: ["Cloud Storage"],
      implementation: [
        "Built with React Native for cross-platform compatibility, Firebase handles cloud data storage and user authentication, Redux manages local app state and data flow, React Navigation provides smooth screen transitions between Recent Spars, All Spars, and Dashboard views."
      ]
    },
    projectDetails: {
      backstory:
        "Created by a BJJ athlete who recognized the need for a quick, sweat-friendly way to log performance data immediately after intense sparring sessions when traditional note-taking isn't practical.",
      howItWorks: [
        "Athletes complete quick interactive questionnaires using simple sliders and selections to log wins, losses, draws, and performance details.",
        "The app generates comprehensive dashboards showing statistics, trends, and areas for improvement. All data is safely stored in the cloud via Firebase integration."
      ],
      keyFeatures: [
        "Quick performance logging with sliders",
        "Win/loss/draw statistics tracking",
        "Comprehensive performance dashboard",
        "Cloud data synchronization",
        "Multiple screen navigation",
        "Sweat-friendly interface design"
      ]
    },
    links: {
      live: "https://github.com",
      github: "https://github.com",
      demo: "https://youtube.com"
    }
  },
  {
    title: "PickZickle",
    image:
      "https://c8.alamy.com/comp/KE05D3/dog-taking-pictures-with-a-fancy-photo-camera-KE05D3.jpg",
    description:
      "A photography-centered mobile app that allows photographers to discover, document, and share prime photo locations with precise geolocation mapping.",
    technologies: {
      framework: ["React Native"],
      navigation: ["React Navigation"],
      apis: ["Google Maps Static API"],
      permissions: ["Camera", "Location", "Storage"],
      storage: ["Local Storage"],
      implementation: [
        "Built with React Native for native mobile features, Google Maps Static API for location mapping, integrated native permissions for camera, location, and storage access. Local storage maintains user data and photo location history."
      ]
    },
    projectDetails: {
      backstory:
        "Designed to help photographers build a personal database of prime shooting locations, addressing the common challenge of remembering and returning to great photo spots.",
      howItWorks: [
        "Users can capture or select photos, choose orientation (square, landscape, portrait), and mark exact locations either through current geolocation or manual map pin placement.",
        "The app creates a personalized feed showing all saved locations with associated photos and precise coordinates."
      ],
      keyFeatures: [
        "Camera integration with photo selection",
        "Multiple orientation support",
        "GPS location capture",
        "Manual map pin placement",
        "Personal location diary",
        "Photo-location association",
        "Future scalability for social features"
      ]
    },
    links: {
      live: "https://github.com",
      github: "https://github.com",
      demo: "https://youtube.com"
    }
  }
];

export const highlightedProjects = [
  {
    title: "FlowBook",
    logo: "fight",
    type: "mobile",
    image:
      "https://ih1.redbubble.net/image.2036961673.7005/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    description:
      "A React Native app for Brazilian Jiu Jitsu athletes to quickly log sparring performance through interactive questionnaires and track progress with comprehensive analytics.",
    technologies: {
      framework: ["React Native"],
      navigation: ["React Navigation"],
      backend: ["Firebase"],
      stateManagement: ["Redux"],
      storage: ["Cloud Storage"],
      implementation: [
        "Built with React Native for cross-platform compatibility, Firebase handles cloud data storage and user authentication, Redux manages local app state and data flow, React Navigation provides smooth screen transitions between Recent Spars, All Spars, and Dashboard views."
      ]
    },
    projectDetails: {
      backstory:
        "I built FlowBook to help BJJ athletes capture sparring data quickly after training. Traditional tracking methods aren’t practical post-spar. FlowBook simplifies input and surfaces meaningful insights, helping athletes recognize patterns, track growth, and make smarter decisions without disrupting the intensity of training sessions.",
      howItWorks: [
        "Athletes complete quick interactive questionnaires using simple sliders and selections to log wins, losses, draws, and performance details.",
        "The app generates comprehensive dashboards showing statistics, trends, and areas for improvement. All data is safely stored in the cloud via Firebase integration."
      ],
      keyFeatures: [
        "Quick performance logging with sliders",
        "Win/loss/draw statistics tracking",
        "Comprehensive performance dashboard",
        "Cloud data synchronization",
        "Multiple screen navigation",
        "Sweat-friendly interface design"
      ]
    },
    links: {
      live: "https://github.com",
      github: "https://github.com",
      demo: "https://youtube.com"
    }
  },
  {
    title: "FullStackFactory",
    logo: "factory",
    type: "web",
    image:
      "https://res.cloudinary.com/de3cxnkuw/image/upload/v1751777335/IMG_3920_zhoxul.jpg",
    description:
      "An educational platform designed for early tech learners to reinforce their knowledge by writing and sharing technical articles with real-world code implementations.",
    technologies: {
      frontend: ["HTML/CSS/JS", "React.js"],
      routing: ["React Router"],
      stateManagement: ["Context API"],
      architecture: ["Single Page Application (SPA)"],
      implementation: [
        "Built with React.js using reusable components including a navbar that doubles as a sidebar. Implements SPA architecture for seamless navigation. Dynamic React forms handle article creation and rendering, replicating Khan Academy's workflow for content organization and display."
      ]
    },
    projectDetails: {
      backstory:
        "Inspired by React’s modular design, I created a platform where beginners build and understand core frontend patterns. While self-learning, I noticed shared concepts like forms, maps, and dynamic rendering. This project simplifies those ideas into reusable pieces learners can combine to build real apps.",
      howItWorks: [
        "The platform mirrors Khan Academy’s structure with categories, units, lessons, and articles.",
        "Users choose or create a category for their article.",
        "Dynamic React forms enable writing and publishing articles with real code examples.",
        "Content is organized into clear sections to aid understanding.",
        "Each unit page is a component rendering categories in interactive cards.",
        "The UnitsPage component dynamically loads data using URL parameters to display the right unit content.",
        "The Article component uses a form to save new articles to the database.",
        "All features are built as isolated React components, demonstrating the modular, assembly-line style of modern web development."
      ],
      keyFeatures: [
        "Dynamic article creation forms",
        "Organized content sections",
        "Real-world code implementation examples",
        "Uniform component architecture",
        "Educational content sharing"
      ]
    },
    links: {
      live: "https://github.com",
      github: "https://github.com",
      demo: "https://youtube.com"
    }
  },
  {
    title: "mooSpots",
    logo: "cow",
    type: "web",
    image:
      "https://res.cloudinary.com/de3cxnkuw/image/upload/v1751776801/Screenshot_2025-07-05_at_9.36.29_PM_u2gfdn.jpg",
    description:
      "A location-based web app that helps UC Davis students find the closest available bike parking spots using real-time geolocation and navigation integration.",
    technologies: {
      frontend: ["HTML/CSS/JS", "React.js"],
      stateManagement: ["Context API"],
      algorithms: ["Haversine Formula"],
      integration: ["Google Maps API", "Geolocation API"],
      implementation: [
        "Built with React.js for component-based architecture, Context API manages global state for bike rack data, Haversine Formula calculates distances between user location and parking spots, Google Maps integration provides turn-by-turn navigation from current location to selected parking spot."
      ]
    },
    projectDetails: {
      backstory:
        "mooSpots helps UC Davis students find nearby bike parking using real-time rack data. With 20,000 bikes on campus daily, parking is a daily frustration. I built it after discovering a public dataset, aiming to save students time when every minute before class counts.",
      howItWorks: [
        "Users can view their current location and see the 6 closest bike racks sorted by distance.",
        "The app uses the Haversine Formula to calculate precise distances from a database of all UC Davis bike racks",
        "Custom-designed logos and components provide clear visual indicators for different parking spot types and availability."
      ],
      keyFeatures: [
        "Real-time geolocation tracking",
        "Distance-based sorting of parking spots",
        "One-click navigation to Google Maps",
        "Custom UI components with intuitive iconography"
      ]
    },
    links: {
      live: "https://github.com",
      github: "https://github.com",
      demo: "https://youtube.com"
    }
  }
];
