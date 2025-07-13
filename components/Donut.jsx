// @ts-nocheck
import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { FileText } from "lucide-react";
import styles from "./Donut.module.css";

const Donut = ({
  title = "Skills",
  skills = [],
  centerIcon: CenterIcon = FileText,
  colors = [
    "#6366f1",
    "#8b5cf6",
    "#06b6d4",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#ec4899",
    "#84cc16"
  ]
}) => {
  // Generate unique ID for this chart instance
  const chartId = React.useMemo(
    () => `chart-${Math.random().toString(36).substr(2, 9)}`,
    []
  );
  const [activeIndex, setActiveIndex] = useState(null);

  // Create data with equal values for even distribution
  const data = skills.map((skill, index) => ({
    name: skill.name,
    value: 100,
    icon: skill.icon,
    image: skill.image,
    color: colors[index % colors.length]
  }));

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    name,
    index
  }) => {
    const RADIAN = Math.PI / 180;
    // Adjust radius based on number of skills for better text positioning
    const radiusMultiplier = skills.length <= 3 ? 0.6 : 0.7;
    const radius = innerRadius + (outerRadius - innerRadius) * radiusMultiplier;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const skill = data[index];
    const clipId = `clip-${chartId}-${index}`;

    return (
      <g key={`label-${index}`} style={{ pointerEvents: "none" }}>
        {/* Define clipPath in defs */}
        <defs>
          <clipPath id={clipId}>
            <circle cx={x} cy={y - 8} r="58" />
          </clipPath>
        </defs>

        {/* Skill image/icon background */}
        <circle
          cx={x}
          cy={y - 17}
          r="32"
          fill="rgba(255, 255, 255, 0)"
          className={styles.iconBg}
          style={{ pointerEvents: "none" }}
        />

        {/* Render image or fallback to text */}
        {skill.image &&
        skill.image !== "html-placeholder" &&
        skill.image !== "react-placeholder" &&
        skill.image !== "nextjs-placeholder" &&
        skill.image !== "redux-placeholder" &&
        skill.image !== "rn-placeholder" &&
        skill.image !== "mongo-placeholder" &&
        skill.image !== "express-placeholder" &&
        skill.image !== "node-placeholder" &&
        skill.image !== "python-placeholder" &&
        skill.image !== "firebase-placeholder" &&
        skill.image !== "cpp-placeholder" &&
        skill.image !== "aws-placeholder" ? (
          <image
            x={x - 30}
            y={y - 44}
            width="56"
            height="56"
            href={skill.image}
            clipPath={`url(#${clipId})`}
            className={styles.skillImage}
            style={{ pointerEvents: "none" }}
          />
        ) : (
          <text
            x={x}
            y={y - 6}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="10"
            fill="#374151"
            fontWeight="600"
            style={{ pointerEvents: "none" }}
          >
            {typeof skill.icon === "string" ? skill.icon : "IMG"}
          </text>
        )}

        {/* Skill name - adjust font size for longer names */}
        <text
          x={x}
          y={y + 25}
          fill="white"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={name.length > 8 ? "9" : "11"}
          fontWeight="500"
          className={styles.labelText}
          style={{ pointerEvents: "none" }}
        >
          {name}
        </text>
      </g>
    );
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={165}
              innerRadius={105}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={activeIndex === index ? "#ffffff" : "transparent"}
                  strokeWidth={activeIndex === index ? 3 : 0}
                  style={{
                    filter:
                      activeIndex === index
                        ? "brightness(1.15) drop-shadow(0 0 8px rgba(255,255,255,0.3))"
                        : "brightness(1)",
                    opacity:
                      activeIndex !== null && activeIndex !== index ? 0.8 : 1,
                    pointerEvents: "auto",
                    cursor: "default"
                  }}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className={styles.centerIcon}>
          <CenterIcon size={205} color={"#d83b3b"}/>
        </div>
      </div>

      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`${styles.skillItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div
              className={styles.skillIndicator}
              style={{ backgroundColor: colors[index % colors.length] }}
            />
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donut;
