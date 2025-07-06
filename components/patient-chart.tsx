"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", patients: 186 },
  { name: "Feb", patients: 205 },
  { name: "Mar", patients: 237 },
  { name: "Apr", patients: 273 },
  { name: "May", patients: 209 },
  { name: "Jun", patients: 214 },
]

export function PatientChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Admissions</CardTitle>
        <CardDescription>Monthly patient admission trends</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Bar dataKey="patients" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
