import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, FileText, Clock, CheckCircle } from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "$125,430",
    change: "+12% from last month",
    icon: DollarSign,
  },
  {
    title: "Pending Invoices",
    value: "23",
    change: "5 overdue",
    icon: Clock,
  },
  {
    title: "Paid Invoices",
    value: "187",
    change: "+15 this week",
    icon: CheckCircle,
  },
  {
    title: "Total Invoices",
    value: "210",
    change: "+8% from last month",
    icon: FileText,
  },
]

export function BillingStats() {
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
