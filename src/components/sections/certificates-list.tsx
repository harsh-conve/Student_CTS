import { Download, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certificate {
  id: string;
  title: string;
  date: string;
  type: string;
}

const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Academic Excellence Award',
    date: '2024-03-15',
    type: 'Academic'
  },
  {
    id: '2',
    title: 'Mathematics Olympiad Certificate',
    date: '2024-02-20',
    type: 'Competition'
  },
  {
    id: '3',
    title: 'Science Fair Participation',
    date: '2024-01-10',
    type: 'Extracurricular'
  },
  {
    id: '4',
    title: 'Perfect Attendance Award',
    date: '2023-12-15',
    type: 'Attendance'
  }
];

export const CertificatesList = () => {
  const handleDownload = (certificateId: string, title: string) => {
    // TODO: Implement actual download functionality
    console.log(`Downloading certificate: ${title} (ID: ${certificateId})`);
  };

  return (
    <div className="space-y-3">
      {certificates.map((certificate) => (
        <div
          key={certificate.id}
          className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-warning/20 rounded-lg">
              <Award className="w-4 h-4 text-warning" />
            </div>
            <div>
              <p className="font-medium text-sm text-foreground">{certificate.title}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>{new Date(certificate.date).toLocaleDateString()}</span>
                <span className="mx-1">•</span>
                <span>{certificate.type}</span>
              </div>
            </div>
          </div>
          
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleDownload(certificate.id, certificate.title)}
            className="h-8 px-3"
          >
            <Download className="w-3 h-3 mr-1" />
            Download
          </Button>
        </div>
      ))}
    </div>
  );
};