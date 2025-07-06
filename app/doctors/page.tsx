import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DoctorTable } from "@/components/doctor-table"
import { Plus, Search } from "lucide-react"
import Link from "next/link"

export default function DoctorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Doctors</h1>
          <p className="text-muted-foreground">Manage doctor profiles and schedules</p>
        </div>
        <Button asChild>
          <Link href="/doctors/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Doctor
          </Link>
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search doctors..." className="pl-8" />
        </div>
      </div>

      <DoctorTable />
    </div>
  )
}
