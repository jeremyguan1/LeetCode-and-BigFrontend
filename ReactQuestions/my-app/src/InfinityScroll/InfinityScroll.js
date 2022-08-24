import React, { useState, useRef, useCallback } from "react";
import useInfinityHook from "./useInfinityHook";

export default function InfinityScroll() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(pageNumber + 1);
  }
  const { books, hasMore, loading, error } = useInfinityHook(query, pageNumber);
  const observer = useRef();
  const lastBook = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        console.log(entries);
        if (entries[0].isIntersecting) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div>
      <input type="text" onChange={handleSearch} />
      <div>
        {books.map((book, idx) => {
          if (books.length === idx + 1) {
            return (
              <div ref={lastBook} key={book}>
                {book}
              </div>
            );
          } else {
            return <div key={book}>{book} </div>;
          }
        })}
      </div>
      {loading && <div>loading...</div>}
    </div>
  );
}

// http://openlibrary.org/search.json
