import {
  ChevronDownIcon,
  DownloadIcon,
  PlusIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";

export const LessonDetailsCard = () => {
  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0 ">
        <div className="space-y-1">
          <CardTitle className="text-muted-foreground font-headings text-5xl">
            Lesson Title: a bit more text description
          </CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ipsum provident tempora voluptates molestiae.
          </CardDescription>
        </div>
        <div className="bg-secondary text-secondary-foreground flex items-center space-x-1 rounded-md">
          <Button variant="secondary" className="px-3 shadow-none">
            <StarIcon className="mr-2 h-4 w-4" />
            Star
          </Button>
          <Separator orientation="vertical" className="h-[20px]" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="px-2 shadow-none">
                <ChevronDownIcon className="text-secondary-foreground h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              alignOffset={-5}
              className="w-[200px]"
              forceMount
            >
              <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Future Ideas
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusIcon className="mr-2 h-4 w-4" /> Create List
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2">
          <DownloadDropdown />
          <Button size="lg">Start Learning</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground flex space-x-4 text-sm">
          <Badge variant="secondary">Beginner</Badge>
          <Badge variant="outline">June 2024</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const DownloadDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="lg" variant="outline" className=" px-2 shadow-none">
          <DownloadIcon className="text-secondary-foreground h-4 w-4" />4
          Lessons
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        alignOffset={-5}
        className="w-[200px]"
        forceMount
      >
        <DropdownMenuLabel>Download Content</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem>Part 1</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PlusIcon className="mr-2 h-4 w-4" /> Create List
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
