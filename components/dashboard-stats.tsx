import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Calendar, DollarSign, Users } from "lucide-react"

const stats = [
  {
    title: "Total Patients",
    value: "2,847",
    change: "+12% from last month",
    icon: Users,
  },
  {
    title: "Today's Appointments",
    value: "47",
    change: "+3 from yesterday",
    icon: Calendar,
  },
  {
    title: "Revenue",
    value: "$45,231",
    change: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    title: "Active Staff",
    value: "156",
    change: "+2 new this week",
    icon: Activity,
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
