import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, FileText, Plus, Users } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    title: "Add New Patient",
    description: "Register a new patient",
    icon: Plus,
    href: "/patients/new",
  },
  {
    title: "Schedule Appointment",
    description: "Book a new appointment",
    icon: Calendar,
    href: "/appointments/new",
  },
  {
    title: "View All Patients",
    description: "Browse patient records",
    icon: Users,
    href: "/patients",
  },
  {
    title: "Generate Report",
    description: "Create medical reports",
    icon: FileText,
    href: "/reports",
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {actions.map((action) => (
            <Button
              key={action.title}
              variant="outline"
              className="h-auto p-4 flex flex-col items-start space-y-2 bg-transparent"
              asChild
            >
              <Link href={action.href}>
                <action.icon className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-sm text-muted-foreground">{action.description}</div>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
