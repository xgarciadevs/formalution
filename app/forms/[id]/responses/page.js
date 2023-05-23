import Link from "next/link";

export default function FormsResponses({ params }) {
  return (
    <main>
      <h1>Forms Responses Page</h1>
      <p>Form ID: {params.id}</p>
      <Link href={'/'}>{'<- Go Back Home'}</Link>
    </main>
  )
}
