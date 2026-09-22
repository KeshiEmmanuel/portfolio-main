import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { CreatingSVG } from "../components/svg/CreatingSVG";

// `thumbnails: n` on any ai turn spawns a staggered thumbnail row under it.
type Turn = { role: "user" | "ai"; text: string; thumbnails?: number };

const SCRIPT: Turn[] = [
  {
    role: "user",
    text: "Create videos for Gymnt on insta for a pre launch tmr",
  },
  {
    role: "ai",
    text: "3 Videos created",
    thumbnails: 3,
  },
  { role: "user", text: "Schedule them for tomorrow morning in new york time" },

  { role: "ai", text: "Scheduled for 8am EDT" },
];

type Message = Turn & { id: number };

function ChatUIPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState(0);
  const [waiting, setWaiting] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const done = step >= SCRIPT.length;
  const nextIsUser = !done && SCRIPT[step].role === "user";

  const handleSend = () => {
    if (waiting || done || !nextIsUser) return;

    const userTurn = SCRIPT[step];
    const aiIndex = step + 1;

    setMessages((prev) => [...prev, { ...userTurn, id: step }]);
    setStep(aiIndex);

    if (aiIndex < SCRIPT.length && SCRIPT[aiIndex].role === "ai") {
      setWaiting(true);
      window.setTimeout(() => {
        setMessages((prev) => [...prev, { ...SCRIPT[aiIndex], id: aiIndex }]);
        setStep(aiIndex + 1);
        setWaiting(false);
      }, 1500);
    }
  };

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, waiting]);

  return (
    <section className="bg-[#F0F0F0]  h-screen flex items-center justify-center font-primary">
      <div
        ref={containerRef}
        className=" max-w-[500px] h-[500px] bg-white/20 border border-gray-400/30 rounded-xl w-full flex flex-col p-2"
      >
        <div
          ref={listRef}
          className="w-full h-[90%] overflow-y-auto flex flex-col gap-2 px-1 py-2"
        >
          <AnimatePresence initial={false}>
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col gap-1.5 ${
                  m.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <MessageBubble role={m.role} text={m.text} />
                {m.thumbnails ? (
                  <ThumbnailRow
                    groupId={m.id}
                    count={m.thumbnails}
                    containerRef={containerRef}
                  />
                ) : null}
              </div>
            ))}

            {waiting && (
              <motion.div
                key="waiting"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="self-start"
              >
                <Waiting label="Creating..." icon={<CreatingSVG />} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="w-full flex-1 flex items-end gap-2">
          <InputBar
            value={nextIsUser ? SCRIPT[step].text : ""}
            onSend={handleSend}
            disabled={waiting || done || !nextIsUser}
          />
        </div>
      </div>
    </section>
  );
}

function MessageBubble({ role, text }: Turn) {
  const isUser = role === "user";
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      style={{
        lineHeight: "28px",
        borderRadius: "12px",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 40 }}
      className={` px-3 h-[28px] text-center  text-[14px] text-pretty flex items-center ${
        isUser
          ? "self-end bg-white  text-gray-900"
          : "self-start bg-blue-primary text-white ai-chat-stroke"
      }`}
    >
      {text}
    </motion.div>
  );
}

// 3 (or n) thumbnail placeholders that stagger in, then morph into a
// full-size preview on click via a shared layoutId (Motion's FLIP transition).
// The overlay is portaled into `containerRef` (the outer card) so it isn't
// clipped by the message list's `overflow-y-auto`.
function ThumbnailRow({
  groupId,
  count,
  containerRef,
}: {
  groupId: number;
  count: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [selected, setSelected] = useState<number | null>(null);

  const overlay = containerRef.current
    ? createPortal(
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute font-primary top-10 left-[20%] gap-4  z-20 flex p-3  rounded-[24px] bg-gray-100/95 backdrop-blur  shadow-sm  w-[780px] h-[600px]"
            >
              <motion.div
                layoutId={`thumb-${groupId}-${selected}`}
                transition={{ type: "spring", stiffness: 400, damping: 36 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full h-full  bg-gray-400/15 rounded-xl"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-[24px] tracking-tight leading-7 font-medium text-balance">
                    Do the right exercises for your body type
                  </h2>
                  <p className="text-sm text-pretty pt-2 text-gray-700">
                    This video was created using your UGC-style context, made to
                    stand out from competitor instagram gym pages
                  </p>
                </div>
                <div className="flex justify-end gap-2.5">
                  <button className="bg-blue-primary rounded-xl h-7 px-3.5 ai-chat-stroke text-white">
                    Schedule
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        containerRef.current,
      )
    : null;

  return (
    <>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="flex gap-2"
      >
        {Array.from({ length: count }).map((_, i) =>
          selected === i ? (
            // Reserve the slot's space while its clone is expanded, so the
            // row doesn't reflow underneath the overlay animation.
            <div key={i} className="w-12 aspect-[9/16]" />
          ) : (
            <motion.div
              key={i}
              layoutId={`thumb-${groupId}-${i}`}
              onClick={() => setSelected(i)}
              variants={{
                hidden: { opacity: 0, y: 10, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 500, damping: 32 }}
              className="w-12 aspect-[9/16] rounded-lg bg-gray-400/15 cursor-pointer"
            />
          ),
        )}
      </motion.div>

      {overlay}
    </>
  );
}

// Deliberately unstyled internals — pass in whatever label + icon you want.
function Waiting({ label, icon }: { label: string; icon: ReactNode }) {
  return (
    <div className="flex items-center gap-0.5">
      <div>{icon}</div>
      <span className="text-xs tracking-wide">{label}</span>
    </div>
  );
}

const InputBar = ({
  value,
  onSend,
  disabled,
}: {
  value: string;
  onSend: () => void;
  disabled: boolean;
}) => {
  return (
    <>
      <input
        className="w-full bg-gray-400/15 h-8 px-3 rounded-full text-sm outline-none"
        placeholder="Create 3 videos for me"
        value={value}
      />
      <button
        onClick={onSend}
        disabled={disabled}
        className="bg-blue-primary h-8.5 rounded-full flex items-center justify-center px-1.5 disabled:opacity-40"
      >
        <ArrowUp color="white" />
      </button>
    </>
  );
};

export default ChatUIPage;
