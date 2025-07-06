import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const appointments = [
  { time: "09:00", patient: "John Smith", doctor: "Dr. Johnson", type: "Checkup" },
  { time: "09:30", patient: "Sarah Wilson", doctor: "Dr. Brown", type: "Surgery" },
  { time: "10:00", patient: "Mike Davis", doctor: "Dr. Lee", type: "Consultation" },
  { time: "10:30", patient: "Emma Johnson", doctor: "Dr. Smith", type: "Follow-up" },
  { time: "11:00", patient: "Tom Wilson", doctor: "Dr. Johnson", type: "Checkup" },
  { time: "11:30", patient: "Lisa Brown", doctor: "Dr. Lee", type: "Surgery" },
]

export function AppointmentCalendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="text-sm font-medium text-blue-600">{appointment.time}</div>
                <div>
                  <div className="font-medium">{appointment.patient}</div>
                  <div className="text-sm text-muted-foreground">{appointment.doctor}</div>
                </div>
              </div>
              <Badge variant="outline">{appointment.type}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
