import Link from "next/link";

export default function FormsDelete({ params }) {
  return (
    <main>
      <h1>Forms Delete Page</h1>
      <p>Form ID: {params.id}</p>
      <Link href={'/'}>{'<- Go Back Home'}</Link>
    </main>
  )
}
