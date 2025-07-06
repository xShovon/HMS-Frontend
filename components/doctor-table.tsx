import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const doctors = [
  {
    id: "D001",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    phone: "(555) 111-2222",
    email: "s.johnson@hospital.com",
    status: "Available",
  },
  {
    id: "D002",
    name: "Dr. Michael Brown",
    specialty: "Neurology",
    phone: "(555) 222-3333",
    email: "m.brown@hospital.com",
    status: "Busy",
  },
  {
    id: "D003",
    name: "Dr. Emily Lee",
    specialty: "Pediatrics",
    phone: "(555) 333-4444",
    email: "e.lee@hospital.com",
    status: "Available",
  },
  {
    id: "D004",
    name: "Dr. David Smith",
    specialty: "Orthopedics",
    phone: "(555) 444-5555",
    email: "d.smith@hospital.com",
    status: "On Leave",
  },
]

export function DoctorTable() {
  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Doctor ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Specialty</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[70px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {doctors.map((doctor) => (
            <TableRow key={doctor.id}>
              <TableCell className="font-medium">{doctor.id}</TableCell>
              <TableCell>{doctor.name}</TableCell>
              <TableCell>{doctor.specialty}</TableCell>
              <TableCell>{doctor.phone}</TableCell>
              <TableCell>{doctor.email}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    doctor.status === "Available" ? "default" : doctor.status === "Busy" ? "destructive" : "secondary"
                  }
                >
                  {doctor.status}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit Doctor</DropdownMenuItem>
                    <DropdownMenuItem>View Schedule</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Remove Doctor</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
