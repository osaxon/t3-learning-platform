import { cn } from "~/lib/utils";
import { Button } from "./ui/button";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button variant="outline" className="w-full justify-start">
              New Lessons
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Popular Lessons
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              All Lessons
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Library
          </h2>
        </div>
      </div>
    </div>
  );
}
