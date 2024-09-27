import Link from "next/link";

const mockUrls = Array(40).fill("https://picsum.photos/200");

const mockImages = mockUrls.map((url, index) => ({
  id: (index + 1).toString(),
  url: url.replace("/200", `/id/${index + 1}/300/200`),
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => {
          return (
            <div key={image.id} className="w-48">
              <img src={image.url}></img>
            </div>
          );
        })}
      </div>
    </main>
  );
}
