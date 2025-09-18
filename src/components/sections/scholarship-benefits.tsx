import { ExternalLink, Gift, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScholarshipItem {
  id: string;
  title: string;
  description: string;
  type: 'scholarship' | 'benefit' | 'scheme';
  eligibility: string;
  amount?: string;
  link: string;
}

const scholarshipsAndBenefits: ScholarshipItem[] = [
  {
    id: '1',
    title: 'Merit Scholarship Program',
    description: 'For students with academic excellence',
    type: 'scholarship',
    eligibility: 'Minimum 85% marks',
    amount: '₹5,000/year',
    link: '#'
  },
  {
    id: '2',
    title: 'Mid-Day Meal Scheme',
    description: 'Nutritious meals for all students',
    type: 'benefit',
    eligibility: 'All students',
    link: '#'
  },
  {
    id: '3',
    title: 'Free Textbook Program',
    description: 'Free textbooks for all subjects',
    type: 'scheme',
    eligibility: 'Family income < ₹2 lakh',
    link: '#'
  },
  {
    id: '4',
    title: 'Sports Excellence Award',
    description: 'For outstanding sports achievements',
    type: 'scholarship',
    eligibility: 'State-level participation',
    amount: '₹3,000/year',
    link: '#'
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'scholarship':
      return <GraduationCap className="w-4 h-4 text-info" />;
    case 'benefit':
      return <Heart className="w-4 h-4 text-success" />;
    case 'scheme':
      return <Gift className="w-4 h-4 text-warning" />;
    default:
      return <Gift className="w-4 h-4 text-muted-foreground" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'scholarship':
      return 'bg-info/20 text-info';
    case 'benefit':
      return 'bg-success/20 text-success';
    case 'scheme':
      return 'bg-warning/20 text-warning';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export const ScholarshipBenefits = () => {
  const handleViewDetails = (item: ScholarshipItem) => {
    // TODO: Implement navigation to detailed view
    console.log(`Viewing details for: ${item.title}`);
  };

  return (
    <div className="space-y-4">
      {scholarshipsAndBenefits.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-card border rounded-lg hover:shadow-md transition-all"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-muted rounded-lg mt-1">
                {getIcon(item.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-foreground">{item.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                  <span><strong>Eligibility:</strong> {item.eligibility}</span>
                  {item.amount && (
                    <span><strong>Amount:</strong> {item.amount}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleViewDetails(item)}
              className="h-8"
            >
              View Details
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};