'use client'

import { useParams } from "next/navigation";

export default function Features() {
  const params = useParams();

  console.log(params)

  return (
    <h1>features {params.id}</h1>
  )
}
