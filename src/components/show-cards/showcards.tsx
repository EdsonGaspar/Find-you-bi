import { data } from "../../../data/data";
import CardBanner from "../card-banner/card";

export function ShowCards() {
  return (
    <section className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3  gap-3 md:my-20">
      {data.map((item) => {
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
