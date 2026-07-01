import Logo from "./Logo";

export default function TechStack() {
  return (
    <section className="px-4 lg:px-0">
      <small className="text-zinc-400 text-sm uppercase">Work Stack</small>
      <div className="flex items-center flex-wrap py-5 gap-5">
        <img src="/claude-color.svg" className="w-10 h-10" alt="claude-icon" />
        <img src="/codex-color.svg" className="w-10 h-10" alt="codex-icon" />
        <img
          src="/langgraph-color.svg"
          className="w-10 h-10"
          alt="langgraph-icon"
        />
        <img
          src="/llamaindex-color.svg"
          className="w-10 h-10"
          alt="llamaindex-icon"
        />
        <img
          src="/tanstack-color.png"
          className="w-10 h-10"
          alt="llamaindex-icon"
        />
        <img
          src="/typescript.svg"
          className="w-10 h-10"
          alt="typescript-icon"
        />
        <img
          src="/postgresql.svg"
          className="w-10 h-10"
          alt="PostgresSQL-icon"
        />
        <img src="/redis.svg" className="w-10 h-10" alt="redis-icon" />
        <img src="/mongodb.svg" className="w-10 h-10" alt="MongoDB-icon" />
        <img src="/supabase.svg" className="w-10 h-10" alt="Supabase-icon" />
        <img src="/nextdotjs.svg" className="w-10 h-10" alt="Nextjs-icon" />
        <img src="/astro.svg" className="w-10 h-10" alt="Astro-icon" />
        <img
          src="/react-query.svg"
          className="w-10 h-10"
          alt="reactQuery-icon"
        />
        <img src="/wordpress.svg" className="w-10 h-10" alt="Wordpress-icon" />
        <img src="/webflow.svg" className="w-10 h-10" alt="Webflow-icon" />
        <img src="/notion.svg" className="w-10 h-10" alt="Notion-icon" />
        <img src="/figma.svg" className="w-10 h-10" alt="Figma-icon" />
        <img src="/linear.svg" className="w-10 h-10" alt="LinearApp-icon" />
        <Logo />
      </div>
    </section>
  );
}
