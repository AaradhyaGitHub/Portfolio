// @ts-nocheck
import React, { useState } from "react";
import Image from "next/image";
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
  Image as ImageIcon,
  CheckCircle,
  Clock,
  Eye,
  FileDown,
  X,
  Sparkles,
  BookOpen,
  User
} from "lucide-react";
import styles from "./MyJourney.module.css";

export default function MyJourney() {
  const [activeView, setActiveView] = useState("highlights");
  const [coursesView, setCoursesView] = useState("completed");
  const [showResume, setShowResume] = useState(false);

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
      image: "/UC-Davis-Logo.png"
    },
    {
      year: "2020",
      title: "Google CSSI Scholar",
      description: "Selected for Google's Computer Science Summer Institute",
      category: "highlight",
      icon: Award,
      isHighlight: true,
      image: "/google.png"
    },
    {
      year: "2016",
      title: "🇳🇵 → 🇺🇸",
      description: "Started new life in the United States",
      category: "highlight",
      icon: Star,
      isHighlight: true,
      image: "/nepal.webp"
    },

    // Education Events - Latest first
    {
      year: "2026",
      title: "Expected Graduation",
      description:
        "Expecting graduation from UC Davis with BS in CS & Tech Management",
      category: "education",
      icon: GraduationCap,
      image: "/aggies.png"
    },
    {
      year: "2020",
      title: "Joined UC Davis [BS]",
      description: "Declared BS in Computer Science and Technology Management",
      category: "education",
      icon: Building,
      image: "/ucd-cs.jpg"
    },
    {
      year: "2020",
      title: "Associates of Science in Mathematics [AS]",
      description: "Declared BS in Computer Science and Technology Management",
      category: "education",
      icon: Building,
      image: "/bcc.png"
    },
    {
      year: "2020",
      title: "Finished High School",
      description: "El Cerrito High School - Completed in 2020",
      category: "education",
      icon: Calendar,
      image: "/echs.png"
    },

    // Relevant Experience Events - Latest first
    {
      year: "2024",
      title: "IT Intern",
      description: "City of West Sacramento - Advanced system administration",
      category: "experience",
      icon: Briefcase,
      image: "/westsac_logo.png"
    },
    {
      year: "2022",
      title: "IT & Finance Intern",
      description: "City of El Cerrito - Expanded into financial systems",
      category: "experience",
      icon: Building,
      image: "/ec-city.png"
    },
    {
      year: "2020",
      title: "Co-Founder & VP Marketing",
      description: "Upcycle Zeal - Sustainable business venture",
      category: "experience",
      icon: Target,
      image: "/zeal.jpg"
    },
    {
      year: "2020",
      title: "Google CSSI Scholar",
      description: "Google - Intensive computer science program",
      category: "experience",
      icon: Award,
      image: "/google.png"
    },
    {
      year: "2019",
      title: "IT Intern",
      description: "City of El Cerrito - First tech role, database management",
      category: "experience",
      icon: Code,
      image: "/ec-city.png"
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
      link: "#",
      image: "/rn-cert.png"
    },
    {
      title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
      provider: "Udemy",
      year: "2025",
      status: "completed",
      type: "certificate",
      link: "#",
      image: "/react-js-cert.png"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      provider: "freeCodeCamp",
      year: "2020",
      status: "completed",
      type: "certificate",
      link: "#",
      image: "/js-dsa.png"
    },
    {
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      year: "2019",
      status: "completed",
      type: "certificate",
      link: "#",
      image: "/web-design.png"
    },

    // Completed Courses
    {
      title: "Full HTTP Networking Course – Fetch and REST APIs in JavaScript",
      provider: "YouTube/freeCodeCamp",
      year: "2024",
      status: "completed",
      type: "course",
      link: "https://www.youtube.com/watch?v=2JYT5f2isg4&t=12993s",
      image: "/http.jpg"
    },

    // In Progress
    {
      title: "AWS Certified Cloud Practitioner Certification Course (CLF-C02)",
      provider: "YouTube/freeCodeCamp",
      year: "2025",
      status: "in-progress",
      type: "course",
      link: "https://www.youtube.com/watch?v=NhDYbskXRgc",
      image: "/aws.png"
    },
    {
      title: "Mastering Data Structures & Algorithms using C and C++",
      provider: "Udemy",
      year: "2025",
      status: "in-progress",
      type: "certificate",
      link: "#",
      image: "/c-cpp.png"
    },
    {
      title: "Master Python programming by solving scientific projects",
      provider: "Udemy",
      year: "2025",
      status: "in-progress",
      type: "certificate",
      link: "#",
      image: "/python.png"
    }
  ];

  // ===========================================
  // NAVIGATION CONFIGURATION
  // ===========================================
  const navigationItems = [
    {
      id: "highlights",
      label: "Recent Highlights",
      icon: Sparkles,
      color: "#3b82f6"
    },
    {
      id: "education",
      label: "Education",
      icon: GraduationCap,
      color: "#c83b3bb8"
    },
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
      color: "#45a0a3b8"
    },
    {
      id: "courses",
      label: "Courses & Certificates",
      icon: BookOpen,
      color: "#49ad40bf"
    }
  ];

  // ===========================================
  // FILTER EVENTS BASED ON ACTIVE VIEW
  // ===========================================
  const getFilteredEvents = () => {
    if (activeView === "highlights") {
      return allEvents.filter((event) => event.isHighlight);
    }
    if (activeView === "courses") {
      return coursesAndCerts.filter((item) => item.status === coursesView);
    }
    return allEvents.filter((event) => event.category === activeView);
  };

  const getCurrentColor = () => {
    return (
      navigationItems.find((item) => item.id === activeView)?.color || "#3b82f6"
    );
  };

  // ===========================================
  // RESUME HANDLERS
  // ===========================================
  const handleViewResume = () => {
    setShowResume(true);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/ap-resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCloseResume = () => {
    setShowResume(false);
  };

  // ===========================================
  // RENDER COURSE/CERTIFICATE GRID
  // ===========================================
  const renderCoursesGrid = () => {
    const filteredCourses = coursesAndCerts.filter(
      (item) => item.status === coursesView
    );
    const completedCount = coursesAndCerts.filter(
      (item) => item.status === "completed"
    ).length;
    const inProgressCount = coursesAndCerts.filter(
      (item) => item.status === "in-progress"
    ).length;

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
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className={styles.courseImage}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    style={{ display: "none" }}
                    className={styles.imageIconFallback}
                  >
                    <ImageIcon size={40} />
                  </div>
                </div>
                <div
                  className={`${styles.statusBadge} ${
                    styles[item.status.replace("-", "")]
                  }`}
                >
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
              {coursesView === "completed" ? (
                <CheckCircle size={48} />
              ) : (
                <Clock size={48} />
              )}
            </div>
            <h3>
              No {coursesView === "completed" ? "completed" : "in-progress"}{" "}
              courses yet
            </h3>
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
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={80}
                    height={80}
                    className={styles.eventImage}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    style={{ display: "none" }}
                    className={styles.imageIconFallback}
                  >
                    <ImageIcon size={40} />
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

  // ===========================================
  // RESUME VIEWER COMPONENT
  // ===========================================
  const renderResumeViewer = () => {
    return (
      <div className={styles.resumeViewer}>
        <div className={styles.resumeHeader}>
          <h2 className={styles.resumeTitle}>
            <User size={24} />
            Resume
          </h2>
          <button
            onClick={handleCloseResume}
            className={styles.closeResumeButton}
          >
            <X size={24} />
          </button>
        </div>
        <div className={styles.resumeContent}>
          <iframe
            src="/ap-resume.pdf#zoom=80"
            className={styles.resumeFrame}
            title="Resume"
          />
        </div>
      </div>
    );
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Professional Journey</h1>
        <p className={styles.subtitle}>
          Explore my experience, education, and achievements
        </p>
      </div>

      <div className={styles.mainLayout}>
        {/* Sidebar Navigation */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            {/* Main Navigation */}
            <nav className={styles.navigation}>
              <div className={styles.navTitle}>Portfolio</div>
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`${styles.navButton} ${
                      activeView === item.id ? styles.navButtonActive : ""
                    }`}
                    style={{
                      "--active-color": item.color
                    }}
                  >
                    <IconComponent size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Resume Actions */}
            <div className={styles.resumeActions}>
              <div className={styles.navTitle}>Resume</div>
              <button
                onClick={handleViewResume}
                className={styles.resumeActionButton}
              >
                <Eye size={20} />
                <span>View Resume</span>
              </button>
              <button
                onClick={handleDownloadResume}
                className={styles.resumeActionButton}
              >
                <FileDown size={20} />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {showResume ? (
            renderResumeViewer()
          ) : (
            <div className={styles.contentContainer}>
              {activeView === "courses" ? (
                renderCoursesGrid()
              ) : (
                <div className={styles.timelineContainer}>
                  <div className={styles.timeline}>{renderTimelineItems()}</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
