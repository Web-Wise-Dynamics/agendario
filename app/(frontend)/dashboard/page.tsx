import { requireUser } from "@/app/lib/hooks"

export default async function Dashboard() {
  const session = await requireUser();
  
  return (
    <div>page</div>
  )
} 