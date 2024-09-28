import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls: string[] = Array(40).fill(
  "https://picsum.photos/200",
) as string[];

const mockImages = mockUrls.map((url, index) => ({
  id: (index + 1).toString(),
  url: url.replace("/200", `/id/${index + 1}/300/200`),
}));

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => {
          return (
            <div key={image.id} className="w-48">
              <div>{image.name}</div>
              <img src={image.url}></img>
            </div>
          );
        })}
      </div>
    </main>
  );
}
