import { useEffect } from 'react'
import ReactPlayer from 'react-player'


const PlayerScreen = ({chapterDetail }) => {

  const audiLink = (number) =>
  'https://aatry1000.s3.amazonaws.com/00' + number + '.mp3'     

  useEffect(() => {}, [chapterDetail])

  return (
    <div className='h-100 shadow-lg p-3 bg-red'>
      <h1 className='fs-5 fw-bold text-center'>Player</h1> <hr />
      { chapterDetail !== null ? (
        <ul className='list-group text-end'>
          <div>
            <hr />
            <li
              className={`list-group-item bg-transparent border-0  py-0 d-flex justify-content-between fs-6`}
            >
              <span className='fw-bold'>Chapter In Arabic: </span>{' '}
              <span>{chapterDetail.name_arabic}</span>
            </li>
            <hr />
            <li
              className={`list-group-item bg-transparent border-0 py-0 d-flex justify-content-between fs-6`}
            >
              <span className='fw-bold'>Chapter In English: </span>{' '}
              <span>{chapterDetail.name_complex}</span>
            </li>
            <hr />
            <li
              className={`list-group-item bg-transparent border-0  py-0 d-flex justify-content-between fs-6`}
            >
              <span className='fw-bold'>Revelation Place: </span>{' '}
              <span>{chapterDetail.revelation_place}</span>
            </li>
            <hr />
            <li
              className={`list-group-item bg-transparent border-0  py-0 d-flex justify-content-between fs-6`}
            >
              <span className='fw-bold'>Translated Name: </span>{' '}
              <span>{chapterDetail.translated_name.name}</span>
            </li>
            <hr />

            <div className='div '>
              <ReactPlayer
                url={audiLink(chapterDetail.id)}
                controls={true}
                playing={true}
                width='100%'
                height='60px'
              />
            </div>
          </div>
        </ul>
      ) : (
        <div className='text-center'>
          <span className='spinner-border'></span>
        </div>
      )}
    </div>
  )
}

export default PlayerScreen