import React, { useState } from "react";
import { useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [dataSet, setDataSet] = useState([]);
  const [allData, setAllData] = useState([]);

  //Fetcing data from Giphy API using the useEffect hook
  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=tObGSkdBXrj7ECoVzM2UR67xlYbPszBx&rating=g"
    )
      .then((r) => r.json())
      .then((gifs) => {
        let sourcedGifs = gifs.data.slice(0, 3); //Using slice() to get only the first 3 fetched gifs
        setDataSet(sourcedGifs); //Storing the 3 gifs in state
        setAllData(gifs.data)
      });   
  }, []);   //Empty dependencies array to fetch the data only once

  //Function to handle search submits
  function handleSubmit(e){
    e.preventDefault();
       const form = e.target
        const search = form[0].value

        const filtered = allData.filter(gif => gif.title.toLowerCase().includes(search.toLowerCase()))

        setDataSet(filtered)
        form.reset()
  }
  return (
    <div>
     
      <GifList data={dataSet} />
      <GifSearch submitSearchHandler={handleSubmit} />
    </div>
  );
}

export default GifListContainer;
