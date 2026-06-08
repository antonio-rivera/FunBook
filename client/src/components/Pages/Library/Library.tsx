import BookDisplay from "../../BookDisplay/BookDisplay";

export default function Library() {


  return (
    <section className="w-md mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 place-items-center gap-4 text-center">
      <BookDisplay />
      <BookDisplay />
      <BookDisplay />
      <BookDisplay />
      <BookDisplay />
      <BookDisplay />
    </section>
  );
}
