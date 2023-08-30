'use client'

import { useParams } from "next/navigation";

export default function Features() {
  const params = useParams();

  return (
    <h1>features {params.id}</h1>
  )
}
