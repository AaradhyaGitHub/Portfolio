import React, { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Award,
  Star,
  Calendar,
  Building,
  Code,
  Target,
  ExternalLink,
  Image,
  CheckCircle,
  Clock
} from "lucide-react";
import styles from "./MyJourney.module.css";

export default function MyJourney() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [coursesView, setCoursesView] = useState("completed");

  // ===========================================
  // ALL EVENTS WITH CATEGORIES (REVERSED ORDER - LATEST FIRST)
  // ===========================================
  const allEvents = [
    // Major Highlights (for "All" view) - Latest first
    {
      year: "2024",
      title: "UC Davis Graduate",
      description: "Bachelor's in Computer Science & Technology Management",
      category: "highlight",
      icon: GraduationCap,
      isHighlight: true,
      image: "placeholder-graduation.jpg"
    },
    {
      year: "2020",
      title: "Google CSSI Scholar",
      description: "Selected for Google's Computer Science Summer Institute",
      category: "highlight",
      icon: Award,
      isHighlight: true,
      image: "placeholder-google.jpg"
    },
    {
      year: "2016",
      title: "🇳🇵 → 🇺🇸",
      description: "Started new life in the United States",
      category: "highlight",
      icon: Star,
      isHighlight: true,
      image: "placeholder-immigration.jpg"
    },

    // Education Events - Latest first
    {
      year: "2026",
      title: "Expected Graduation",
      description:
        "Expecting graduation from UC Davis with BS in CS & Tech Management",
      category: "education",
      icon: GraduationCap,
      image: "placeholder-future-grad.jpg"
    },
    {
      year: "2020",
      title: "Joined UC Davis",
      description: "Declared BS in Computer Science and Technology Management",
      category: "education",
      icon: Building,
      image: "placeholder-ucdavis.jpg"
    },
    {
      year: "2020",
      title: "Finished High School",
      description: "El Cerrito High School - Completed in 2020",
      category: "education",
      icon: Calendar,
      image: "placeholder-highschool.jpg"
    },

    // Relevant Experience Events - Latest first
    {
      year: "2024",
      title: "IT Intern",
      description: "City of West Sacramento - Advanced system administration",
      category: "experience",
      icon: Briefcase,
      image: "placeholder-west-sac.jpg"
    },
    {
      year: "2022",
      title: "IT & Finance Intern",
      description: "City of El Cerrito - Expanded into financial systems",
      category: "experience",
      icon: Building,
      image: "placeholder-el-cerrito-2.jpg"
    },
    {
      year: "2020",
      title: "Co-Founder & VP Marketing",
      description: "Upcycle Zeal - Sustainable business venture",
      category: "experience",
      icon: Target,
      image: "placeholder-upcycle.jpg"
    },
    {
      year: "2020",
      title: "Google CSSI Scholar",
      description: "Google - Intensive computer science program",
      category: "experience",
      icon: Award,
      image: "placeholder-google-exp.jpg"
    },
    {
      year: "2019",
      title: "IT Intern",
      description: "City of El Cerrito - First tech role, database management",
      category: "experience",
      icon: Code,
      image: "placeholder-el-cerrito.jpg"
    }
  ];

  // ===========================================
  // COURSES & CERTIFICATES DATA
  // ===========================================
  const coursesAndCerts = [
    // Completed Certificates
    {
      title: "React Native - The Practical Guide [2025]",
      provider: "Udemy",
      year: "2025",
      status: "completed",
      type: "certificate",
      link: "#", // Will be updated with actual certificate link
      image: "placeholder-react-native-cert.jpg"
    },
    {
      title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
      provider: "Udemy",
      year: "2025",
      status: "completed",
      type: "certificate",
      link: "#", // Will be updated with actual certificate link
      image: "placeholder-react-cert.jpg"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      provider: "freeCodeCamp",
      year: "2020",
      status: "completed",
      type: "certificate",
      link: "#", // Will be updated with actual certificate link
      image: "placeholder-js-cert.jpg"
    },
    {
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      year: "2019",
      status: "completed",
      type: "certificate",
      link: "#", // Will be updated with actual certificate link
      image: "placeholder-web-design-cert.jpg"
    },

    // Completed Courses
    {
      title: "Full HTTP Networking Course – Fetch and REST APIs in JavaScript",
      provider: "YouTube/freeCodeCamp",
      year: "2024",
      status: "completed",
      type: "course",
      link: "https://www.youtube.com/watch?v=2JYT5f2isg4&t=12993s",
      image: "placeholder-http-course.jpg"
    },

    // In Progress
    {
      title: "AWS Certified Cloud Practitioner Certification Course (CLF-C02)",
      provider: "YouTube/freeCodeCamp",
      year: "2025",
      status: "in-progress",
      type: "course",
      link: "https://www.youtube.com/watch?v=NhDYbskXRgc",
      image: "placeholder-aws-course.jpg"
    },
    {
      title: "Mastering Data Structures & Algorithms using C and C++",
      provider: "Udemy",
      year: "2025",
      status: "in-progress",
      type: "certificate",
      link: "#", // Will be updated when completed
      image: "placeholder-dsa-course.jpg"
    },
    {
      title: "Master Python programming by solving scientific projects",
      provider: "Udemy",
      year: "2025",
      status: "in-progress",
      type: "certificate",
      link: "#", // Will be updated when completed
      image: "placeholder-python-course.jpg"
    }
  ];

  // ===========================================
  // FILTER EVENTS BASED ON ACTIVE CATEGORY
  // ===========================================
  const getFilteredEvents = () => {
    if (activeCategory === "all") {
      return allEvents.filter((event) => event.isHighlight);
    }
    if (activeCategory === "courses") {
      return coursesAndCerts.filter((item) => item.status === coursesView);
    }
    return allEvents.filter((event) => event.category === activeCategory);
  };

  // ===========================================
  // CATEGORY CONFIGURATION
  // ===========================================
  const categories = [
    { id: "all", label: "Highlights", color: "#3b82f6" },
    { id: "education", label: "Education", color: "#c83b3bb8" },
    { id: "experience", label: "Relevant Experience", color: "#9ba345b9" },
    { id: "courses", label: "Courses & Certificates", color: "#49ad40bf" }
  ];

  const getCurrentColor = () => {
    return (
      categories.find((cat) => cat.id === activeCategory)?.color || "#3b82f6"
    );
  };

  // ===========================================
  // RENDER COURSE/CERTIFICATE GRID
  // ===========================================
  const renderCoursesGrid = () => {
    const filteredCourses = coursesAndCerts.filter((item) => item.status === coursesView);
    const completedCount = coursesAndCerts.filter(item => item.status === "completed").length;
    const inProgressCount = coursesAndCerts.filter(item => item.status === "in-progress").length;

    return (
      <div className={styles.coursesContainer}>
        {/* Sub-navigation for courses */}
        <div className={styles.coursesSubNav}>
          <button
            onClick={() => setCoursesView("completed")}
            className={`${styles.subNavButton} ${
              coursesView === "completed" ? styles.subNavButtonActive : ""
            }`}
          >
            <CheckCircle size={18} />
            Completed ({completedCount})
          </button>
          <button
            onClick={() => setCoursesView("in-progress")}
            className={`${styles.subNavButton} ${
              coursesView === "in-progress" ? styles.subNavButtonActive : ""
            }`}
          >
            <Clock size={18} />
            In Progress ({inProgressCount})
          </button>
        </div>

        {/* Courses Grid */}
        <div className={styles.coursesGrid}>
          {filteredCourses.map((item, index) => (
            <div 
              key={index} 
              className={styles.courseCard}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className={styles.courseImageContainer}>
                <div className={styles.courseImagePlaceholder}>
                  <Image size={40} />
                </div>
                <div className={`${styles.statusBadge} ${styles[item.status.replace('-', '')]}`}>
                  {item.status === "completed" ? (
                    <CheckCircle size={14} />
                  ) : (
                    <Clock size={14} />
                  )}
                  {item.status === "completed" ? "Completed" : "In Progress"}
                </div>
              </div>
              
              <div className={styles.courseContent}>
                <h4 className={styles.courseTitle}>{item.title}</h4>
                
                <div className={styles.courseMetadata}>
                  <div className={styles.courseProvider}>
                    <Building size={14} />
                    {item.provider}
                  </div>
                  <div className={styles.courseYear}>
                    <Calendar size={14} />
                    {item.year}
                  </div>
                </div>
                
                <div className={styles.courseType}>
                  {item.type === "certificate" ? "Certificate" : "Course"}
                </div>
              </div>
              
              <a
                href={item.link}
                className={styles.courseButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                View {item.type === "certificate" ? "Certificate" : "Course"}
              </a>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyStateIcon}>
              {coursesView === "completed" ? <CheckCircle size={48} /> : <Clock size={48} />}
            </div>
            <h3>No {coursesView === "completed" ? "completed" : "in-progress"} courses yet</h3>
            <p>
              {coursesView === "completed" 
                ? "Completed courses and certificates will appear here." 
                : "Courses currently in progress will appear here."}
            </p>
          </div>
        )}
      </div>
    );
  };

  // ===========================================
  // RENDER TIMELINE ITEMS
  // ===========================================
  const renderTimelineItems = () => {
    return getFilteredEvents().map((event, index) => {
      const IconComponent = event.icon;
      return (
        <div
          key={`${event.year}-${event.title}`}
          className={styles.timelineItem}
          style={{
            animationDelay: `${index * 0.1}s`
          }}
        >
          <div className={styles.timelineContent}>
            <div
              className={styles.iconContainer}
              style={{ backgroundColor: getCurrentColor() }}
            >
              <IconComponent size={20} className={styles.icon} />
            </div>

            <div className={styles.eventCard}>
              <div className={styles.cardContent}>
                <div className={styles.imageContainer}>
                  <div className={styles.imagePlaceholder}>
                    <Image size={40} />
                  </div>
                </div>
                <div className={styles.eventDetails}>
                  <div className={styles.eventHeader}>
                    <span
                      className={styles.eventYear}
                      style={{ color: getCurrentColor() }}
                    >
                      {event.year}
                    </span>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                  </div>
                  <p className={styles.eventDescription}>{event.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Journey</h1>
        <p className={styles.subtitle}>From Nepal to Silicon Valley</p>
      </div>

      {/* Category Navigation */}
      <div className={styles.navigation}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`${styles.navButton} ${
              activeCategory === category.id ? styles.navButtonActive : ""
            }`}
            style={{
              "--active-color": category.color
            }}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Content Container */}
      <div className={styles.contentContainer}>
        {activeCategory === "courses" ? (
          renderCoursesGrid()
        ) : (
          <div className={styles.timelineContainer}>
            <div className={styles.timeline}>{renderTimelineItems()}</div>
          </div>
        )}
      </div>
    </main>
  );
}