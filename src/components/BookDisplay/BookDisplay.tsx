
export default function BookDisplay() {

  const bookTitle = "Empire of Silence";
  const bookAuthor = "Christopher Ruocchio"


  return (
    <>
      <div className="flex text-white border-2 mt-4 p-1 shadow-lg rounded-lg w-30 h-40 bg-brown flex-col justify-between items-center">
        <h2 className="text-lg">{bookTitle}</h2>
        <h3 className="text-sm">{bookAuthor}</h3>
      </div>
    </>
  );
}
