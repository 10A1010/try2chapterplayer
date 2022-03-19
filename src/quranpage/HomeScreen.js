import { useEffect, useState } from "react";
import axios from "axios";
import PlayerScreen from "./PlayerScreen";
import ChaptersScreen from "./ChaptersScreen";
import './ii.css';

const HomeScreen = () => {
  const [chapters, setChapters] = useState([]);
  const [audio, setAudio] = useState([]);

  const [chapterDetail, setChapterDetail] = useState(null);


  // Get All Chapters
  useEffect(() => {
    async function fetchData() {
      const {
        data: { chapters },
      } = await axios.get(`https://api.quran.com/api/v4/chapters`);

      setChapters(chapters);
    }
    fetchData();
  });

  const chapterHandler = (chapter) => {
    setChapterDetail(chapter);
  };

  return (
    <div className='row p-5 home-body '>
      <div className='col-lg-4 col-md-4 col-sm-12 col-12 scroll '>
        <ChaptersScreen chapters={chapters} chapterHandler={chapterHandler} />
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 col-12 '>
        <PlayerScreen
          chapterDetail={chapterDetail}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
