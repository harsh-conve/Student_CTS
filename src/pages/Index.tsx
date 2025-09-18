import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mx-auto mb-6 shadow-lg">
          <GraduationCap className="w-10 h-10 text-primary-foreground" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Learning Outcome Based
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Child Tracking System
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Comprehensive student portal for tracking academic progress, health metrics, 
          and achievements in an integrated educational environment.
        </p>
        
        <Button 
          size="lg" 
          onClick={() => navigate("/student-portal")}
          className="px-8 py-6 text-lg font-semibold"
        >
          Enter Student Portal
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="text-2xl font-bold text-primary mb-2">📊</div>
            <h3 className="font-semibold text-foreground mb-1">Progress Tracking</h3>
            <p className="text-sm text-muted-foreground">Monitor academic and personal development</p>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-secondary mb-2">🏆</div>
            <h3 className="font-semibold text-foreground mb-1">Achievements</h3>
            <p className="text-sm text-muted-foreground">Celebrate certificates and milestones</p>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-success mb-2">💰</div>
            <h3 className="font-semibold text-foreground mb-1">Benefits & Scholarships</h3>
            <p className="text-sm text-muted-foreground">Access eligible programs and support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
