import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  actionText: string;
  onClick?: () => void;
  children?: ReactNode;
  variant?: "default" | "chart";
}

export const DashboardCard = ({ 
  title, 
  description, 
  icon, 
  actionText, 
  onClick, 
  children,
  variant = "default" 
}: DashboardCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              {icon}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">{title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground mt-1">
                {description}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        {children && (
          <div className="mb-4">
            {children}
          </div>
        )}
        
        {variant === "default" && (
          <Button 
            onClick={onClick}
            variant="outline" 
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
          >
            {actionText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};