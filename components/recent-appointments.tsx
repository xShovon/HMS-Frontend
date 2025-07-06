import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const appointments = [
  {
    patient: "John Smith",
    doctor: "Dr. Johnson",
    time: "9:00 AM",
    type: "Checkup",
    avatar: "JS",
  },
  {
    patient: "Sarah Wilson",
    doctor: "Dr. Brown",
    time: "10:30 AM",
    type: "Surgery",
    avatar: "SW",
  },
  {
    patient: "Mike Davis",
    doctor: "Dr. Lee",
    time: "2:00 PM",
    type: "Consultation",
    avatar: "MD",
  },
  {
    patient: "Emma Johnson",
    doctor: "Dr. Smith",
    time: "3:30 PM",
    type: "Follow-up",
    avatar: "EJ",
  },
]

export function RecentAppointments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                <AvatarFallback>{appointment.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{appointment.patient}</p>
                <p className="text-sm text-muted-foreground">
                  {appointment.doctor} • {appointment.type}
                </p>
              </div>
              <div className="text-sm text-muted-foreground">{appointment.time}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
