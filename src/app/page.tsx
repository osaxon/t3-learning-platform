import { CreatePost } from "~/app/_components/create-post";
import { DemoAccordian } from "~/components/DemoAccordian";
import { LessonContent } from "~/components/LessonContent";
import { LessonDetailsCard } from "~/components/LessonDetailsCard";
import { Sidebar } from "~/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { api } from "~/trpc/server";

export default async function Home() {
  return (
    <main className="mx-auto min-h-screen space-y-6 py-10">
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar />
            <div className="col-span-3 space-y-8 p-6 lg:col-span-4 lg:border-l">
              <LessonDetailsCard />
              <div className="relative flex justify-between gap-4">
                <LessonContent />
                <LessonSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}

function LessonSidebar() {
  return (
    <div className="sticky top-5 h-80 w-full space-y-10">
      <DemoAccordian />
      <Card className="bg-secondary/10 h-full border-none shadow-none">
        <CardHeader>
          <CardTitle>Contents</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-primary-foreground space-y-2">
            <li>Introduction</li>
            <li>Getting Started</li>
            <li>Advanced Topics</li>
            <li>Conclusion</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
