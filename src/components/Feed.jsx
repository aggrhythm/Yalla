import Masonry from 'react-masonry-css';

const memes = [
  {
    id: 1,
    imageUrl: "/src/assets/Meme1.jpeg",
    alt: "Game of Thrones meme",
  },
  {
    id: 2,
    imageUrl: "/src/assets/Meme2.jpeg",
    alt: "Emotional damage",
  },
  {
    id: 3,
    imageUrl: "/src/assets/Meme3.jpeg",
    alt: "No stress cat",
  },
  {
    id: 4,
    imageUrl: "/src/assets/Meme4.jpeg",
    alt: "Marketing agency",
  },
  {
    id: 5,
    imageUrl: "/src/assets/Meme5.jpeg",
    alt: "Distracted boyfriend meme",
  },
  {
    id: 6,
    imageUrl: "/src/assets/Meme6.jpeg",
    alt: "Pepe crying",
  },
];

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

export default function MemeFeed() {
  return (
    <div className="p-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="masonry-column"
      >
        {memes.map((meme) => (
          <div
            key={meme.id}
            className="bg-white rounded-xl overflow-hidden shadow border"
          >
            <img
              src={meme.imageUrl}
              alt={meme.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
