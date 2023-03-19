export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2e018039e3mshe20c9aef5e58224p19c95fjsn8f8fb804c8af",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeoptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2e018039e3mshe20c9aef5e58224p19c95fjsn8f8fb804c8af",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};



export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
