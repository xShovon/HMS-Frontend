import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const inventory = [
  {
    id: "MED-001",
    name: "Surgical Masks",
    category: "PPE",
    quantity: 500,
    unit: "pieces",
    price: "$0.50",
    status: "In Stock",
  },
  {
    id: "MED-002",
    name: "Stethoscope",
    category: "Equipment",
    quantity: 25,
    unit: "pieces",
    price: "$120.00",
    status: "In Stock",
  },
  {
    id: "MED-003",
    name: "Bandages",
    category: "Supplies",
    quantity: 8,
    unit: "boxes",
    price: "$15.00",
    status: "Low Stock",
  },
  {
    id: "MED-004",
    name: "Thermometer",
    category: "Equipment",
    quantity: 0,
    unit: "pieces",
    price: "$25.00",
    status: "Out of Stock",
  },
]

export function InventoryTable() {
  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Unit Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[70px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>
                {item.quantity} {item.unit}
              </TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    item.status === "In Stock" ? "default" : item.status === "Low Stock" ? "secondary" : "destructive"
                  }
                >
                  {item.status}
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
                    <DropdownMenuItem>Edit Item</DropdownMenuItem>
                    <DropdownMenuItem>Update Stock</DropdownMenuItem>
                    <DropdownMenuItem>View History</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Delete Item</DropdownMenuItem>
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
