import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => {
          return (
            <div key={image.id} className="flex w-48 flex-col">
              <div>{image.name}</div>
              <img src={image.url}></img>
            </div>
          );
        })}
      </div>
    </main>
  );
}
