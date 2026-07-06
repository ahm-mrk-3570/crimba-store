import './InstagramStories.css';

export default function InstagramStories() {
  return (
    <div className='stories-container container-custom'>
      <h1 className="stories-header">
        Our Instagram Stories
      </h1>
      <div className="stories-main">
        <div className='stories-content'>
          <img src="main-images/stories/pic-1.jpg" alt="stories" />
        </div>
        <div className='stories-content'>
          <img src="main-images/stories/pic-2.jpg" alt="stories" />
        </div>
        <div className='stories-content third-story'>
          <img src="main-images/stories/pic-3.jpg" alt="stories" />
        </div>
        <div className='stories-content forth-story'>
          <img src="main-images/stories/pic-4.jpg" alt="stories" />
        </div>
      </div>
    </div>
  )
}
