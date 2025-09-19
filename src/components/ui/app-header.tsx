import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, LogOut } from "lucide-react";
import ctsLogo from "@/assets/cts_logo.png";

interface AppHeaderProps {
  studentName: string;
  studentAvatar?: string;
}

export const AppHeader = ({ studentName, studentAvatar }: AppHeaderProps) => {
  return (
    <header className="bg-card border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and App Name */}
          <div className="flex items-center gap-3">
            <img 
              src={ctsLogo} 
              alt="CTS Logo" 
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-lg font-semibold text-foreground leading-tight">
                Learning Outcome Based
              </h1>
              <p className="text-sm text-muted-foreground leading-tight">
                Child Tracking System
              </p>
            </div>
          </div>

          {/* User Profile Section */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-foreground">{studentName}</p>
              <p className="text-xs text-muted-foreground">Student</p>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={studentAvatar} alt={studentName} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {studentName.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{studentName}</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      Student Portal
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};