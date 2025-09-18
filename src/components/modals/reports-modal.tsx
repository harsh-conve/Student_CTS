import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, FileText } from "lucide-react";

interface Report {
  id: string;
  title: string;
  type: "summative" | "holistic";
  standard: number;
  testNumber?: number;
  year?: string;
}

interface ReportsModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportType: "academic" | "holistic";
  currentClass: number;
}

// Generate mock reports based on current class
const generateReports = (currentClass: number, type: "academic" | "holistic"): Report[] => {
  const reports: Report[] = [];
  
  if (type === "academic") {
    // Generate summative test reports for each standard up to current class
    for (let std = 3; std <= currentClass; std++) {
      reports.push({
        id: `std-${std}-test-1`,
        title: `Std ${std} Summative Test 1`,
        type: "summative",
        standard: std,
        testNumber: 1,
      });
      reports.push({
        id: `std-${std}-test-2`,
        title: `Std ${std} Summative Test 2`,
        type: "summative",
        standard: std,
        testNumber: 2,
      });
    }
  } else {
    // Generate holistic reports for each academic year
    const currentYear = new Date().getFullYear();
    for (let std = 1; std <= currentClass; std++) {
      const academicYear = `${currentYear - (currentClass - std)}-${currentYear - (currentClass - std) + 1}`;
      reports.push({
        id: `holistic-${std}`,
        title: `Std ${std} Holistic Report (${academicYear})`,
        type: "holistic",
        standard: std,
        year: academicYear,
      });
    }
  }
  
  return reports.reverse(); // Show latest first
};

const downloadReport = (report: Report) => {
  // Mock PDF download - in real implementation, this would fetch the actual PDF
  const fileName = `${report.title.replace(/\s+/g, '_')}.pdf`;
  
  // Create a mock PDF blob (in real app, this would be fetched from server)
  const mockPdfContent = `Mock PDF content for ${report.title}`;
  const blob = new Blob([mockPdfContent], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  
  // Create download link and trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  console.log(`Downloaded: ${fileName}`);
};

export const ReportsModal = ({ isOpen, onClose, reportType, currentClass }: ReportsModalProps) => {
  const reports = generateReports(currentClass, reportType);
  const title = reportType === "academic" ? "Academic Report Cards" : "Holistic Reports";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="max-h-80 pr-4">
          <div className="space-y-2">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{report.title}</h4>
                  {report.year && (
                    <p className="text-xs text-muted-foreground">Academic Year: {report.year}</p>
                  )}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => downloadReport(report)}
                  className="ml-2"
                >
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            ))}
            
            {reports.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>No reports available yet</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};