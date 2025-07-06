import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PatientTable } from "@/components/patient-table"
import { Plus, Search } from "lucide-react"
import Link from "next/link"

export default function PatientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
          <p className="text-muted-foreground">Manage patient records and information</p>
        </div>
        <Button asChild>
          <Link href="/patients/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Patient
          </Link>
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search patients..." className="pl-8" />
        </div>
      </div>

      <PatientTable />
    </div>
  )
}
