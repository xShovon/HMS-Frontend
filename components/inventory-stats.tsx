import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, AlertTriangle, TrendingUp, Boxes } from "lucide-react"

const stats = [
  {
    title: "Total Items",
    value: "1,247",
    change: "+23 new items",
    icon: Package,
  },
  {
    title: "Low Stock",
    value: "12",
    change: "Needs attention",
    icon: AlertTriangle,
  },
  {
    title: "Total Value",
    value: "$89,430",
    change: "+5% from last month",
    icon: TrendingUp,
  },
  {
    title: "Categories",
    value: "15",
    change: "Medical supplies",
    icon: Boxes,
  },
]

export function InventoryStats() {
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
