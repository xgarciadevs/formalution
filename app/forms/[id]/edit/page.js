import Link from "next/link";

export default function FormsEdit({ params }) {
  return (
    <main>
      <h1>Forms Edit Page</h1>
      <p>Form ID: {params.id}</p>
      <Link href={'/'}>{'<- Go Back Home'}</Link>
    </main>
  )
}
