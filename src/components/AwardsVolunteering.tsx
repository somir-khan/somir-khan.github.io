
import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AwardsVolunteering = () => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2 flex items-center gap-2">
        <Award className="w-6 h-6 text-blue-400" />
        Awards & Volunteering
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card-hover">
          <CardHeader>
            <CardTitle>Awards & Leadership</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>7th Place – Intra KUET Programming Contest 2019</li>
              <li>2nd Place – Intra KUET Programming Contest 2017</li>
              <li>Vice President & General Secretary – Cyber Gaming Club (2016-2020)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-card-hover">
          <CardHeader>
            <CardTitle>Volunteering</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Bangladeshi Student Association, ULL – Organized community events & helped new students settle in.</li>
              <li>Dream Blood Donation Society – Managed blood donation camps & volunteered in event organization.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AwardsVolunteering;
