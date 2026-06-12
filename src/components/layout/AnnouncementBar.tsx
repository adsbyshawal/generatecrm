import { announcement } from "@/lib/content";

// Purple top bar. Hidden on mobile (< 768px) per spec.
export default function AnnouncementBar() {
  return (
    <div className="hidden h-9 items-center justify-center bg-purple px-4 md:flex">
      <p className="text-xs font-medium text-white">{announcement}</p>
    </div>
  );
}
