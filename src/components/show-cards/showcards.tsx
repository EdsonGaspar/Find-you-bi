import CardBanner from "../card-banner/card";

interface PersonData {
  name: string;
  currentLocal: string;
  bi: string;
}

export function ShowCards({ dataFilted = [] }: { dataFilted: PersonData[] }) {
  return (
    <section className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3  gap-5 md:my-20 px-5 md:gap-8">
      {dataFilted.map((item) => {
        return (
          <CardBanner
            key={item.bi}
            nome={item.name}
            currentLocal={item.currentLocal}
          />
        );
      })}
    </section>
  );
}
