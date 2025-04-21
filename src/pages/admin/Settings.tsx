
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon } from 'lucide-react';

const AdminSettings = () => {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>System Settings</CardTitle>
            <CardDescription>Configure system preferences</CardDescription>
          </div>
          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
            <SettingsIcon size={20} />
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-1">
            <h3 className="text-lg font-medium">General Settings</h3>
            <p className="text-sm text-muted-foreground">
              Basic configuration for the hotel management system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Booking Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Configure booking rules and policies</p>
                <Button className="w-full" variant="outline">Configure</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Notification Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Set up email and SMS notifications</p>
                <Button className="w-full" variant="outline">Configure</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Payment Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Manage payment methods and policies</p>
                <Button className="w-full" variant="outline">Configure</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Staff Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Manage staff access and permissions</p>
                <Button className="w-full" variant="outline">Configure</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-end">
            <Button className="bg-hotel-brown hover:bg-hotel-dark-brown text-white">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;
