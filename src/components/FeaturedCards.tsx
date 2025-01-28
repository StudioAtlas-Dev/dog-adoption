import FeaturedCard from "@/components/ui/FeaturedCard";
import SectionTitle from "@/components/ui/SectionTitle";

const cards = [
  {
    "title": "Barnaby",
    "description": "A goofy, gentle giant with a heart of gold, Barnaby is looking for a family to match his playful energy.",
    "imageUrl": "/images/stock/featured1.jpg"
  },
  {
    "title": "Pepper",
    "description": "A spirited little terrier mix, Pepper is full of sass and snuggles, and would thrive in an active home.",
    "imageUrl": "/images/stock/featured2.jpg"
  },
  {
    "title": "Willow",
    "description": "A shy but sweet shepherd mix, Willow is hoping to find a patient and loving family to help her blossom.",
    "imageUrl": "/images/stock/featured3.jpg"
  },
  {
    "title": "Gus",
    "description": "A charming, laid-back senior, Gus is ready to spend his golden years relaxing and cuddling on the couch with his new best friend.",
    "imageUrl": "/images/stock/featured4.jpg"
  }
];

export default function FeaturedCards() {
  return (
    <section className="w-full py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Featured Dogs"
          description="Meet some of our amazing dogs who are looking for their forever homes."
          descriptionClassName="mb-8"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {cards.map((card, index) => (
            <FeaturedCard
              key={index}
              title={`Meet ${card.title}`}
              description={card.description}
              imageUrl={card.imageUrl}
              href={`/adopt/${card.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 