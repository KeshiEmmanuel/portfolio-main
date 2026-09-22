import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { FaFolder } from "react-icons/fa";
import { PiCurrencyDollarSimple } from "react-icons/pi";

type ProjectItem = {
  id: string;
  name: string;
  type: "project" | "folder";
  color?: string;
  workspace?: string;
};

type TimerStatus = "idle" | "running" | "paused";

const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: "quamn",
    name: "quamn",
    type: "project",
    color: "#3B82F6",
    workspace: "wayhouse",
  },
  {
    id: "zenith",
    name: "zenith",
    type: "folder",
  },
];

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const WIDTH_EASE = [0.16, 1, 0.3, 1] as const;

const TimeTrackerUI: React.FC = () => {
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState<TimerStatus>("idle");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [mounted, setMounted] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Project picker
  const [projectMenuOpen, setProjectMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  const projectMenuRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const isActive = status !== "idle";

  /*
   * ---------------------------------------------------------
   * Mount entrance
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  /*
   * ---------------------------------------------------------
   * Timer
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (status === "running") {
      intervalRef.current = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [status]);

  /*
   * ---------------------------------------------------------
   * Close project picker on outside click
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        projectMenuRef.current &&
        !projectMenuRef.current.contains(e.target as Node)
      ) {
        setProjectMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * Escape closes project picker
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setProjectMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * Start / Pause / Continue
   * ---------------------------------------------------------
   */

  const handlePrimaryAction = () => {
    if (status === "idle") {
      setStatus("running");
      return;
    }

    if (status === "running") {
      setStatus("paused");
      return;
    }

    setStatus("running");
  };

  /*
   * ---------------------------------------------------------
   * Stop
   * ---------------------------------------------------------
   *
   * This is the ONLY action that returns to idle.
   */

  const handleStop = () => {
    setStatus("idle");
    setElapsedSeconds(0);
  };

  /*
   * ---------------------------------------------------------
   * Project selection
   * ---------------------------------------------------------
   */

  const handleSelectProject = (item: ProjectItem) => {
    setSelectedProject(item);
    setProjectMenuOpen(false);
  };

  /*
   * ---------------------------------------------------------
   * Time formatting
   * ---------------------------------------------------------
   */

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n: number) => n.toString().padStart(2, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <div className="bg-[#F0F0F0] w-full h-screen flex items-center justify-center font-primary">
      <style>{`
        .tt-card {
          transition:
            opacity 400ms cubic-bezier(0.23,1,0.32,1),
            transform 400ms cubic-bezier(0.23,1,0.32,1);
        }

        .tt-card[data-mounted="false"] {
          opacity: 0;
          transform: scale(0.97);
        }

        .tt-pressable {
          transition:
            transform 160ms cubic-bezier(0.23,1,0.32,1),
            background-color 150ms ease,
            filter 150ms ease;
        }

        .tt-pressable:active {
          transform: scale(0.97);
        }

        @media (hover: hover) and (pointer: fine) {
          .tt-chip:hover {
            background-color: #DEE0E1;
          }

          .tt-start:hover {
            filter: brightness(1.06);
          }

          .tt-row:hover {
            background-color: #F3F4F6;
          }
        }

        .tt-row {
          transition:
            background-color 150ms ease,
            transform 160ms cubic-bezier(0.23,1,0.32,1);
        }

        .tt-row:active {
          transform: scale(0.98);
        }

        .tt-input {
          transition:
            border-color 150ms ease,
            box-shadow 150ms ease;
        }

        .tt-input:focus {
          border-color: #1E82EC;
          box-shadow: 0 0 0 3px rgba(30,130,236,0.15);
          outline: none;
        }

        /*
         * Play -> Pause
         *
         * Shape morph only.
         */
        .tt-morph-icon {
          width: 14px;
          height: 14px;
          background-color: currentColor;
          flex-shrink: 0;

          clip-path: polygon(
            16.7% 16.7%,
            50% 33.3%,
            83.3% 50%,
            83.3% 50%,
            50% 66.7%,
            16.7% 83.3%,
            16.7% 83.3%,
            16.7% 16.7%
          );

          transition:
            clip-path 220ms cubic-bezier(0.23,1,0.32,1);
        }

        .tt-active .tt-morph-icon {
          clip-path: polygon(
            16.7% 16.7%,
            41.7% 16.7%,
            41.7% 83.3%,
            58.3% 83.3%,
            58.3% 16.7%,
            83.3% 16.7%,
            83.3% 83.3%,
            16.7% 83.3%
          );
        }

        /*
         * Active control group.
         *
         * One stable layout for running + paused.
         */
        .tt-active-group {
          display: flex;
          align-items: center;
          gap: 4px;
          width: 100%;
          height: 32px;
        }

        .tt-pause-button {
          flex: 1;
          min-width: 0;
          height: 32px;
        }

        .tt-stop-button {
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
        }

        /*
         * Pause / Continue label.
         *
         * Fixed space means the button itself does not
         * resize when the label changes.
         */
        .tt-action-label {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 66px;
          height: 20px;
        }

        .tt-action-label > span {
          position: absolute;
          white-space: nowrap;
        }

        /*
         * Running glow.
         */
        .tt-glow {
          animation:
            tt-pulse 2s cubic-bezier(0.77,0,0.175,1)
            infinite alternate;
        }

        @keyframes tt-pulse {
          from {
            opacity: 0.25;
          }

          to {
            opacity: 0.55;
          }
        }

        /*
         * Reduced motion.
         */
        @media (prefers-reduced-motion: reduce) {
          .tt-card,
          .tt-pressable {
            transition: opacity 200ms ease !important;
            transform: none !important;
          }

          .tt-glow {
            animation: none !important;
            opacity: 0.4;
          }
        }
      `}</style>

      <div
        data-mounted={mounted}
        className="tt-card px-4 py-3 w-[428px] h-[224px] rounded-2xl card-bg flex flex-col gap-4 border-white border"
      >
        <div className="flex flex-col gap-4 h-full">
          {/* =====================================================
              TASK INPUT
          ===================================================== */}

          <input
            type="text"
            placeholder="What are you working on?"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="tt-input bg-[#E8EAEB] h-9 px-2 border-[#D7D8D9] border rounded-[8px] tracking-tight text-sm placeholder:text-[#656666] w-full"
          />

          {/* =====================================================
              BOTTOM CONTROLS
          ===================================================== */}

          <div className="flex items-center justify-between gap-3">
            {/* ===================================================
                LEFT CONTROLS
            =================================================== */}

            <div className="flex items-center gap-2">
              {/* PROJECT PICKER */}

              <div ref={projectMenuRef} className="relative">
                <motion.button
                  layout
                  transition={{
                    layout: {
                      duration: reduceMotion ? 0 : 0.38,
                      ease: WIDTH_EASE,
                    },
                  }}
                  type="button"
                  onClick={() => setProjectMenuOpen((open) => !open)}
                  aria-haspopup="listbox"
                  aria-expanded={projectMenuOpen}
                  className="tt-pressable tt-chip flex px-[8px] py-[4px] text-sm bg-[#E8EAEB] tracking-tight text-[#656666] items-center gap-2 h-8 rounded-[8px] border-[#D7D8D9] border whitespace-nowrap"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {selectedProject ? (
                      <motion.span
                        key={`selected-${selectedProject.id}`}
                        className="flex items-center gap-2 whitespace-nowrap"
                        initial={{
                          opacity: 0,
                          x: reduceMotion ? 0 : -4,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: reduceMotion ? 0 : 4,
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.16,
                          ease: EASE_OUT,
                        }}
                      >
                        {selectedProject.type === "project" ? (
                          <span
                            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                            style={{
                              backgroundColor:
                                selectedProject.color ?? "#3B82F6",
                            }}
                          />
                        ) : (
                          <FaFolder size={14} color="#656666" />
                        )}

                        {selectedProject.name}
                      </motion.span>
                    ) : (
                      <motion.span
                        key="placeholder"
                        className="flex items-center gap-2 whitespace-nowrap"
                        initial={{
                          opacity: 0,
                          x: reduceMotion ? 0 : -4,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: reduceMotion ? 0 : 4,
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.16,
                          ease: EASE_OUT,
                        }}
                      >
                        <FaFolder size={14} color="#656666" />
                        Select Project
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* PROJECT MENU */}

                <AnimatePresence>
                  {projectMenuOpen && (
                    <motion.div
                      role="listbox"
                      initial={{
                        opacity: 0,
                        scale: reduceMotion ? 1 : 0.96,
                        y: reduceMotion ? 0 : -4,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: reduceMotion ? 1 : 0.96,
                        y: reduceMotion ? 0 : -4,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.18,
                        ease: EASE_OUT,
                      }}
                      style={{
                        transformOrigin: "top left",
                      }}
                      className="absolute left-0 top-[calc(100%+8px)] w-64 rounded-[10px] border border-[#D7D8D9] bg-white shadow-sm overflow-hidden z-10"
                    >
                      {PROJECT_ITEMS.map((item, i) => (
                        <motion.button
                          key={item.id}
                          type="button"
                          role="option"
                          aria-selected={selectedProject?.id === item.id}
                          onClick={() => handleSelectProject(item)}
                          initial={{
                            opacity: 0,
                            y: reduceMotion ? 0 : -4,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.15,
                            delay: reduceMotion ? 0 : i * 0.03,
                            ease: EASE_OUT,
                          }}
                          className="tt-row w-full flex items-center justify-between gap-3 px-3 py-2.5 text-left text-sm text-[#656666]"
                        >
                          <span className="flex items-center gap-2">
                            {item.type === "project" ? (
                              <span
                                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                style={{
                                  backgroundColor: item.color ?? "#3B82F6",
                                }}
                              />
                            ) : (
                              <FaFolder size={14} color="#656666" />
                            )}

                            <span>{item.name}</span>
                          </span>

                          {item.workspace && (
                            <span className="text-xs text-gray-400">
                              {item.workspace}
                            </span>
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CURRENCY */}

              <button
                type="button"
                className="tt-pressable tt-chip bg-[#E8EAEB] h-[32px] w-[36px] rounded-[8px] flex items-center justify-center border-[#D7D8D9] border"
              >
                <PiCurrencyDollarSimple stroke="1" size={14} color="#656666" />
              </button>
            </div>

            {/* ===================================================
                RIGHT CONTROL

                IDLE:
                Start

                ACTIVE:
                Pause + Stop

                The transition between these two states is
                vertical: Y-axis only.
            =================================================== */}

            <div className="relative flex-1 min-w-0 h-[32px] overflow-hidden">
              <AnimatePresence initial={false} mode="sync">
                {/* =================================================
                    START
                    ================================================= */}

                {!isActive && (
                  <motion.button
                    key="start"
                    type="button"
                    onClick={handlePrimaryAction}
                    /*
                     * IMPORTANT:
                     *
                     * No initial X movement.
                     * The button starts from below.
                     */
                    initial={{
                      y: reduceMotion ? 0 : 38,
                      opacity: reduceMotion ? 1 : 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      y: reduceMotion ? 0 : 38,
                      opacity: reduceMotion ? 0 : 0,
                    }}
                    transition={{
                      y: {
                        duration: reduceMotion ? 0 : 0.34,
                        ease: WIDTH_EASE,
                      },
                      opacity: {
                        duration: reduceMotion ? 0 : 0.2,
                        ease: EASE_OUT,
                      },
                    }}
                    className="tt-pressable tt-start absolute inset-0 w-full h-[32px] border-[#1E82EC] border timetracker_button text-white rounded-[8px] font-medium flex items-center justify-center gap-3"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <span className="tt-morph-icon" />

                      <span>Start</span>
                    </span>
                  </motion.button>
                )}

                {/* =================================================
                    ACTIVE GROUP
                    ================================================= */}

                {isActive && (
                  <motion.div
                    key="active-group"
                    /*
                     * IMPORTANT:
                     *
                     * No X-axis movement.
                     * It comes UP from underneath.
                     */
                    initial={{
                      y: reduceMotion ? 0 : 38,
                      opacity: reduceMotion ? 1 : 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      y: reduceMotion ? 0 : 38,
                      opacity: reduceMotion ? 0 : 0,
                    }}
                    transition={{
                      y: {
                        duration: reduceMotion ? 0 : 0.34,
                        ease: WIDTH_EASE,
                      },
                      opacity: {
                        duration: reduceMotion ? 0 : 0.2,
                        ease: EASE_OUT,
                      },
                    }}
                    className="tt-active-group"
                  >
                    {/* =========================================
                        PAUSE / CONTINUE
                    ========================================= */}

                    <button
                      type="button"
                      onClick={handlePrimaryAction}
                      data-active="true"
                      className="tt-pressable tt-pause-button tt-active relative border-[#656666] border bg-[#191919] text-white rounded-[8px] font-medium flex items-center justify-center gap-3"
                    >
                      <span className="relative flex items-center justify-center gap-3">
                        <span className="tt-morph-icon" />

                        <span className="tt-action-label">
                          <AnimatePresence mode="sync" initial={false}>
                            {status === "running" ? (
                              <motion.span
                                key="pause"
                                initial={{
                                  opacity: 0,
                                  y: reduceMotion ? 0 : 4,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                exit={{
                                  opacity: 0,
                                  y: reduceMotion ? 0 : -4,
                                }}
                                transition={{
                                  duration: reduceMotion ? 0 : 0.14,
                                  ease: EASE_OUT,
                                }}
                              >
                                Pause
                              </motion.span>
                            ) : (
                              <motion.span
                                key="continue"
                                initial={{
                                  opacity: 0,
                                  y: reduceMotion ? 0 : 4,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                exit={{
                                  opacity: 0,
                                  y: reduceMotion ? 0 : -4,
                                }}
                                transition={{
                                  duration: reduceMotion ? 0 : 0.14,
                                  ease: EASE_OUT,
                                }}
                              >
                                Continue
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </span>
                      </span>
                    </button>

                    {/* =========================================
                        STOP
                    ========================================= */}

                    <button
                      type="button"
                      onClick={handleStop}
                      aria-label="Stop"
                      className="tt-pressable tt-stop-button rounded-[8px] bg-red-500 flex items-center justify-center"
                    >
                      <span className="w-3 h-3 rounded-[3px] bg-white" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =====================================================
            TIMER
        ===================================================== */}

        <div className="text-[84px] font-semibold flex items-center justify-center h-[70px] tabular-nums">
          {formatTime(elapsedSeconds)}
        </div>
      </div>
    </div>
  );
};

export default TimeTrackerUI;
