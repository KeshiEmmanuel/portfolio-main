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
        setActiveItem((current) => (current === id ? null : current))
      }
      style={{
        position: "relative",
      }}
    >
      {/* Only the background moves */}
      {isActive && (
        <motion.span
          layoutId="menu-hover"
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 45,
            mass: 0.45,
          }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "4px",
            background: "#f3f3f3",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Content stays completely fixed */}
      <div className="inline-flex gap-2 items-center relative z-10">
        <span style={{ display: "inline-flex" }}>{icon}</span>

        <span className="inline-block">{label}</span>
      </div>

      {shortcut && (
        <motion.span
          className="inline-block tooltip-cmd px-1 py-0.5 rounded-[4px] text-[#494B4C] relative z-10"
          animate={{
            color: isActive ? "#000000" : "#494B4C",
          }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
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
