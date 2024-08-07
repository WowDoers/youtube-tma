import './App.css'
import ShareSVG from './components/share'
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -72%)', // 水平和垂直方向上居中
          width: '100%', // 或者设置为具体的宽度
          height: '70%', // 或者设置为具体的宽度
          }} 
        >
          <YouTubePlayer videoId='qbpJpO-xjsc'/>
      </div>
      <div  className="bot-mini-app-share" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -12%)', // 水平和垂直方向上居中
          width: '100%', // 或者设置为具体的宽度
          height: '70%', // 或者设置为具体的宽度
          }}>
        <button style={{marginTop: '20px',}}>
          分享得积分 <ShareSVG/>
        </button>
      </div>
    </>
  )
}

export default App