import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Topic() {
  let { topicId } = useParams();
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  return (
    <div className="App">
      <header className="App-header">
        <ScrollToTopOnMount />
        Topik yang dipilih adalah {topicId}
      </header>
    </div>
  );
}
