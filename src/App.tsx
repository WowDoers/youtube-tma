import './App.css'
import YouTubePlayer from './pages/vedio/YoutubePlayer'

function App() {
  // async function shareVedio() {
  //   // 获取分享 url
  //   const currVedioId = localStorage.getItem('currVedio')
  //   const url = "https://youtu.be/" + currVedioId;
  //   try {
  //     WebApp.shareToStory(
  //       url, 
  //       {
  //         text: '分享给别人'
  //       }
  //     );
  //     console.log(`分享给别人 URL: ${url}`);
  //   } catch (error) {
  //     console.error('Error sharing URL:', error);
  //   }
  // }

  return (
    <>
        <div className="bot-mini-app" style={{
          display: 'flex', // 启用 Flexbox
          justifyContent: 'center', // 水平居中
          alignItems: 'center', // 垂直居中
          position: 'absolute', 
          top: '30%',
          bottom: '30%', 
          left: 0, 
          right: 0,
          }} 
        >
          <YouTubePlayer videoId='qbpJpO-xjsc'/>
          {/* <div>
            <button onClick={shareVedio}>分享视频</button>
          </div> */}
        </div>
    </>
  )
}

export default App