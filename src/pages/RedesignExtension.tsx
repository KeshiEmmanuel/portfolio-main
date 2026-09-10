import React, { useState } from "react";
import { LayoutGroup, motion } from "motion/react";

import { TbBoltFilled } from "react-icons/tb";
import { IoRocket } from "react-icons/io5";
import { GrDocument } from "react-icons/gr";
import { TiEye } from "react-icons/ti";

type MenuItemProps = {
  label: string;
  shortcut?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  id: string;
  activeItem: string | null;
  setActiveItem: React.Dispatch<React.SetStateAction<string | null>>;
};

const MenuItem = ({
  label,
  shortcut,
  icon,
  onClick,
  id,
  activeItem,
  setActiveItem,
}: MenuItemProps) => {
  const isActive = activeItem === id;

  return (
    <motion.button
      type="button"
      className="inline-flex w-full items-center text-xs justify-between p-2 h-8 menu-btn cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setActiveItem(id)}
      onMouseLeave={() =>
        // Guard against a race with the next item's onMouseEnter:
        // only clear if *this* item is still the active one.
        setActiveItem((current) => (current === id ? null : current))
      }
      style={{
        position: "relative",
      }}
    >
      {/* Shared animated hover background — the PRIMARY motion.
          Slow and critically damped (bounce: 0) so it glides rather
          than bounces. This is the motion that should read as "slick". */}
      {isActive && (
        <motion.span
          layoutId="menu-hover"
          transition={{
            type: "spring",
            duration: 0.15,
            bounce: 0,
          }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "4px",
            background: "#f3f3f3",
            zIndex: 0,
            // Critical: without this, the sliding highlight intercepts
            // mouse events from the buttons it's passing over/under,
            // which breaks the hover chain mid-animation.
            pointerEvents: "none",
          }}
        />
      )}

      {/* Button content — SECONDARY motion.
          Quick and slightly snappier than the pill, so the two motions
          are legibly different speeds instead of moving in lockstep. */}
      <motion.div
        className="inline-flex gap-2 items-center relative z-10"
        // animate={{ x: isActive ? 2 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      >
        <span style={{ display: "inline-flex" }}>{icon}</span>

        <span className="inline-block">{label}</span>
      </motion.div>

      {shortcut && (
        <motion.span
          className="inline-block tooltip-cmd px-1 py-0.5 rounded-[4px] text-[#494B4C] relative z-10"
          animate={{ opacity: isActive ? 1 : 0.55 }}
          transition={{ duration: 0.2 }}
        >
          {shortcut}
        </motion.span>
      )}
    </motion.button>
  );
};

const Divider = () => <hr />;

const CaptureMenu = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div
      className="flex items-center justify-center w-screen h-screen"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <LayoutGroup>
        <div
          className="w-[352px] rounded-[6px] bg-white p-1 font-secondary flex flex-col gap-1 capture-shadow"
          onMouseLeave={() => setActiveItem(null)}
        >
          {/* Capture actions */}

          <MenuItem
            id="full-page-bolt"
            label="Capture the entire page"
            shortcut="Ctrl + Shift + S"
            icon={<TbBoltFilled />}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />

          <MenuItem
            id="full-page-document"
            label="Capture the entire page"
            shortcut="Ctrl + Shift + S"
            icon={<GrDocument />}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />

          <MenuItem
            id="visible-part"
            label="Capture the visible part"
            shortcut="Alt + Shift + 3"
            icon={<TiEye />}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />

          <MenuItem
            id="selected-part"
            label="Capture the selected part"
            shortcut="Alt + Shift + 4"
            icon="⌗"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />

          <MenuItem
            id="all-tabs"
            label="Capture all tabs"
            icon="▣"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />

          <MenuItem
            id="url-list"
            label="Capture list of URLs..."
            icon="⚙"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />

          <Divider />

          {/* Secondary actions */}

          <MenuItem
            id="history"
            label="History ..."
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />

          <MenuItem
            id="options"
            label="Options ..."
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />

          <Divider />

          {/* Advanced features */}

          <MenuItem
            id="advanced"
            label="Try advanced features ..."
            icon={<IoRocket />}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
      </LayoutGroup>
    </div>
  );
};

export default CaptureMenu;
