import CatCard from "@/components/CatCard";

export default function Cat({ params }: { params: { cat: string } }) {
  const slug = params.cat;
  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-8 p-4">
      <CatCard id={slug} />
    </main>
  );
}
