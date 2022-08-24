import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useInfinityHook(query, pageNumber) {
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    let cancel;
    setLoading(true);
    axios({
      method: "Get",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((response) => {
        setLoading(false);

        setBooks((prev) => {
          return [
            ...new Set([...prev, ...response.data.docs.map((b) => b.title)]),
          ];
        });
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { books, hasMore, loading, error };
}
