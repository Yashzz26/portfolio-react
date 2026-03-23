import React, { useState, useEffect, useContext, useRef, useCallback } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "./GitHubStats.css";

const GITHUB_USERNAME = "Yashzz26";
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
  console.warn(
    "REACT_APP_GITHUB_TOKEN missing. GitHub contribution data skipped.",
  );
}

const GitHubStats = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { isDarkMode } = useContext(ThemeContext);
  const [userData, setUserData] = useState(null);
  const [contributions, setContributions] = useState({});
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [tooltipData, setTooltipData] = useState(null);
  const [activeCell, setActiveCell] = useState(null);
  const containerRef = useRef(null);

  // Generate all dates for the current calendar year (Jan 1 - Dec 31)
  const generateYearDates = () => {
    const dates = [];
    const currentYear = new Date().getFullYear();
    const yearStart = new Date(currentYear, 0, 1); // Jan 1
    const yearEnd = new Date(currentYear, 11, 31); // Dec 31

    // Start from the nearest Sunday before Jan 1
    const start = new Date(yearStart);
    start.setDate(start.getDate() - start.getDay());

    // End at the nearest Saturday after Dec 31
    const end = new Date(yearEnd);
    if (end.getDay() !== 6) {
      end.setDate(end.getDate() + (6 - end.getDay()));
    }

    const current = new Date(start);
    while (current <= end) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  // Get month labels with positions (only for the current year)
  const getMonthLabels = (dates) => {
    const labels = [];
    const currentYear = new Date().getFullYear();
    let lastMonth = -1;
    dates.forEach((date, index) => {
      if (date.getDay() === 0 && date.getFullYear() === currentYear) {
        const month = date.getMonth();
        if (month !== lastMonth) {
          labels.push({
            label: date.toLocaleString("default", { month: "short" }),
            weekIndex: Math.floor(index / 7),
          });
          lastMonth = month;
        }
      }
    });
    return labels;
  };

  // Get contribution level (0-4)
  const getLevel = (count) => {
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 5) return 2;
    if (count <= 8) return 3;
    return 4;
  };

  // Format date as YYYY-MM-DD
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  // Format date for display
  const formatDisplayDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Click outside handler to dismiss active cell
  const handleClickOutside = useCallback((e) => {
    if (containerRef.current && !e.target.classList.contains('gh-cell')) {
      setActiveCell(null);
      setTooltipData(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user profile
        const userRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
        );
        if (userRes.ok) {
          const user = await userRes.json();
          setUserData(user);
        }

        // Use GraphQL API for accurate contribution data
        const currentYear = new Date().getFullYear();
        const from = `${currentYear}-01-01T00:00:00Z`;
        const to = `${currentYear}-12-31T23:59:59Z`;

        const query = `
          query {
            user(login: "${GITHUB_USERNAME}") {
              contributionsCollection(from: "${from}", to: "${to}") {
                totalCommitContributions
                totalIssueContributions
                totalPullRequestContributions
                totalPullRequestReviewContributions
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                      contributionLevel
                    }
                  }
                }
              }
            }
          }
        `;

        if (GITHUB_TOKEN) {
          const graphqlRes = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
              Authorization: `bearer ${GITHUB_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
          });

          if (graphqlRes.ok) {
            const data = await graphqlRes.json();
            const calendar =
              data.data.user.contributionsCollection.contributionCalendar;

            // Build contribution map from GraphQL data
            const contribMap = {};
            calendar.weeks.forEach((week) => {
              week.contributionDays.forEach((day) => {
                if (day.contributionCount > 0) {
                  contribMap[day.date] = day.contributionCount;
                }
              });
            });

            setContributions(contribMap);
            setTotalContributions(calendar.totalContributions);
          }
        } else {
          console.log("Skipping GraphQL: no token");
          setTotalContributions(0);
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const dates = generateYearDates();
  const monthLabels = getMonthLabels(dates);

  // Group dates into weeks (columns)
  const weeks = [];
  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7));
  }

  const currentYear = new Date().getFullYear();

  return (
    <section
      id="github-stats"
      ref={ref}
      className={`scroll-hidden from-bottom ${isVisible ? "scroll-visible" : ""}`}>
      <h2>GitHub Activity</h2>

      {loading ? (
        <div className="gh-loading">
          <div className="gh-loading-spinner"></div>
          <p>Loading GitHub data...</p>
        </div>
      ) : (
        <div className="gh-container">
          {/* Contribution Graph */}
          <div className="gh-graph-wrapper">
            <p className="gh-contrib-count">
              <strong>{totalContributions}</strong> contributions in{" "}
              {currentYear}
            </p>

            <div className="gh-graph-scroll">
              <div className="gh-graph">
                {/* Day labels */}
                <div className="gh-day-labels">
                  <span></span>
                  <span>Mon</span>
                  <span></span>
                  <span>Wed</span>
                  <span></span>
                  <span>Fri</span>
                  <span></span>
                </div>

                <div className="gh-grid-container">
                  {/* Month labels */}
                  <div className="gh-month-labels">
                    {monthLabels.map((m, i) => (
                      <span
                        key={i}
                        style={{
                          gridColumnStart: m.weekIndex + 1,
                        }}>
                        {m.label}
                      </span>
                    ))}
                  </div>

                  {/* Grid */}
                  <div className="gh-grid">
                    {weeks.map((week, wi) => (
                      <div key={wi} className="gh-week">
                        {week.map((date, di) => {
                          const dateStr = formatDate(date);
                          const count = contributions[dateStr] || 0;
                          const level = getLevel(count);
                          const today = new Date();
                          const thisYear = today.getFullYear();
                          const isFuture = date > today;
                          const isOutsideYear = date.getFullYear() !== thisYear;

                          const cellKey = `w${wi}d${di}`;
                          const isActive = activeCell === cellKey;

                          return (
                            <div
                              key={cellKey}
                              className={`gh-cell ${isDarkMode ? "dark" : "light"} level-${isOutsideYear || isFuture ? "empty" : level}${isActive ? " active" : ""}`}
                              aria-label={
                                isFuture || isOutsideYear
                                  ? undefined
                                  : `${count === 0 ? "No" : count} activit${
                                      count !== 1 ? "ies" : "y"
                                    } on ${formatDisplayDate(date)}`
                              }
                              onClick={(e) => {
                                e.stopPropagation();
                                if (!isFuture && !isOutsideYear) {
                                  if (isActive) {
                                    setActiveCell(null);
                                    setTooltipData(null);
                                  } else {
                                    const container =
                                      e.currentTarget.closest(".gh-container");
                                    const containerRect =
                                      container.getBoundingClientRect();
                                    const cellRect =
                                      e.currentTarget.getBoundingClientRect();
                                    setActiveCell(cellKey);
                                    setTooltipData({
                                      count,
                                      date: formatDisplayDate(date),
                                      x:
                                        cellRect.left -
                                        containerRect.left +
                                        cellRect.width / 2,
                                      y: cellRect.top - containerRect.top,
                                    });
                                  }
                                }
                              }}
                              onMouseEnter={(e) => {
                                if (!isFuture && !isOutsideYear && !activeCell) {
                                  const container =
                                    e.currentTarget.closest(".gh-container");
                                  const containerRect =
                                    container.getBoundingClientRect();
                                  const cellRect =
                                    e.currentTarget.getBoundingClientRect();
                                  setTooltipData({
                                    count,
                                    date: formatDisplayDate(date),
                                    x:
                                      cellRect.left -
                                      containerRect.left +
                                      cellRect.width / 2,
                                    y: cellRect.top - containerRect.top,
                                  });
                                }
                              }}
                              onMouseLeave={() => {
                                if (!activeCell) setTooltipData(null);
                              }}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="gh-legend">
              <span className="gh-legend-label">Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`gh-cell ${isDarkMode ? "dark" : "light"} level-${level} legend-cell`}
                />
              ))}
              <span className="gh-legend-label">More</span>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="gh-stat-cards">
            <div className="gh-stat-card">
              <span className="gh-stat-icon">📁</span>
              <div className="gh-stat-info">
                <span className="gh-stat-value">
                  {userData?.public_repos || 0}
                </span>
                <span className="gh-stat-label">Public Repos</span>
              </div>
            </div>
            <div className="gh-stat-card">
              <span className="gh-stat-icon">👥</span>
              <div className="gh-stat-info">
                <span className="gh-stat-value">
                  {userData?.followers || 0}
                </span>
                <span className="gh-stat-label">Followers</span>
              </div>
            </div>
            <div className="gh-stat-card">
              <span className="gh-stat-icon">🔗</span>
              <div className="gh-stat-info">
                <span className="gh-stat-value">
                  {userData?.following || 0}
                </span>
                <span className="gh-stat-label">Following</span>
              </div>
            </div>
            <div className="gh-stat-card">
              <span className="gh-stat-icon">🔥</span>
              <div className="gh-stat-info">
                <span className="gh-stat-value">{totalContributions}</span>
                <span className="gh-stat-label">Contributions</span>
              </div>
            </div>
          </div>

          {/* GitHub Profile Link */}
          <div className="gh-profile-link">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-btn">
              <svg
                height="20"
                width="20"
                viewBox="0 0 16 16"
                fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              View GitHub Profile
            </a>
          </div>

          {/* Tooltip */}
          {tooltipData && (
            <div
              className="gh-tooltip"
              style={{
                left: tooltipData.x,
                top: tooltipData.y,
              }}>
              <span className="gh-tooltip-count">
                {tooltipData.count === 0
                  ? "No activities"
                  : `${tooltipData.count} activit${tooltipData.count !== 1 ? "ies" : "y"}`}
              </span>
              <span className="gh-tooltip-date">{tooltipData.date}</span>
            </div>
          )}
        </div>
      )}

    </section>
  );
};

export default GitHubStats;
