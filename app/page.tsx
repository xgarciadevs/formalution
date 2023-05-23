import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={'/developer'}>Developer</Link><br />
      <Link href={'/forms/create'}>Forms Create</Link><br />
      <Link href={'/forms/abc123/delete'}>Forms Delete</Link><br />
      <Link href={'/forms/abc123/edit'}>Forms Edit</Link><br />
      <Link href={'/forms/abc123/responses'}>Forms Responses</Link><br />
    </main>
  )
}
