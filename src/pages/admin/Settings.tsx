
// Admin Settings Page (basic stub UI)
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AdminSettings = () => {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the settings page. Here, you can configure system options in the future.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;
