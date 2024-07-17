import { useEffect, useState } from "react";

const Verses = () => {
  const baseUrl = `https://api.quran.com/api/v4`;
  const [data, setData] = useState("");
  // const url = `https://api.quran.com/api/v4/verses/by_chapter/:chapter_number`;
  const url = `${baseUrl}/quran/verses/uthmani_tajweed?chapter_number=1`;

  useEffect(() => {
    const getVerse = async () => {
      const res = await fetch(url);
      const resData = await res.json();
      setData(resData);
    };
    getVerse();
  }, [url]);

  console.log("data: ", data);

  const verses = data.verses;
  return (
    <div className="verses">
      {verses &&
        verses.map((verse, inx) => {
          // console.log(verse); {text_uthmani_tajweed: "text"}
          return (
            <div
              className="verse"
              key={inx}
              dangerouslySetInnerHTML={{
                __html: verse.text_uthmani_tajweed,
              }}
            ></div>
          );
        })}
    </div>
  );
};

export default Verses;
