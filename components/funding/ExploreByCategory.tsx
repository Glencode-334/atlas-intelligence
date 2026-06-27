import {
  Bot,
  Code2,
  Server,
  Search as SearchIcon,
  Video,
  Mic,
  Heart,
  Scale,
  GraduationCap,
  Shield,
  Sparkles,
  BarChart3,
} from "lucide-react";

export function ExploreByCategory() {
  const cats = [
    { icon: <Bot size={15} />, name: "AI Agents", color: "#FF5A4E", bg: "#FFE9E6" },
    { icon: <Code2 size={15} />, name: "AI Coding", color: "#1E8A4B", bg: "#E6F4EC" },
    { icon: <Server size={15} />, name: "AI Infrastructure", color: "#2F6FD6", bg: "#E6F0FB" },
    { icon: <SearchIcon size={15} />, name: "AI Search", color: "#6E4FE3", bg: "#EFEAFB" },
    { icon: <Video size={15} />, name: "AI Video", color: "#FF5A4E", bg: "#FFE9E6" },
    { icon: <Mic size={15} />, name: "AI Voice", color: "#2F6FD6", bg: "#E6F0FB" },
    { icon: <Heart size={15} />, name: "AI Healthcare", color: "#FF5A4E", bg: "#FFE9E6" },
    { icon: <Scale size={15} />, name: "AI Legal", color: "#0B0B0F", bg: "#F2F2F2" },
    { icon: <Shield size={15} />, name: "AI Security", color: "#FF5A4E", bg: "#FFE9E6" },
    { icon: <Sparkles size={15} />, name: "AI Robotics", color: "#2F6FD6", bg: "#E6F0FB" },
    { icon: <GraduationCap size={15} />, name: "AI Education", color: "#1E8A4B", bg: "#E6F4EC" },
    { icon: <BarChart3 size={15} />, name: "AI Sales", color: "#FF5A4E", bg: "#FFE9E6" },
  ];

  return (
    <section className="mt-6">
      <h3 className="mb-3 text-[13px] font-semibold">
        Explore funding by category
      </h3>

      <div className="grid grid-cols-4 gap-3 md:grid-cols-6 lg:grid-cols-12">
        {cats.map((c) => (
          <div
            key={c.name}
            className="flex flex-col items-center gap-1.5 text-center"
          >
            <div
              className="flex h-7.5 w-7.5 items-center justify-center rounded-full"
              style={{
                background: c.bg,
                color: c.color,
              }}
            >
              {c.icon}
            </div>

            <div className="text-[9.5px] font-medium leading-tight">
              {c.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}