import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [activeApp, setActiveApp] = useState<number | null>(null)
  
  const [layoutMode, setLayoutMode] = useState<'split' | 'in-frame' | 'full-screen'>('split')
  const phoneRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  const handleResize = () => {
    const windowWidth = window.innerWidth

    // Check the raw window width directly. 
    // If the window is less than 1000px wide, force full-screen/single-frame layout.
    // If it's wider than 1000px, allow the split-screen panel view.
    if (windowWidth < 1000) { 
      setLayoutMode('full-screen')
    } else {
      setLayoutMode('split')
    }
  }

  // Listen to the window resizing directly
  window.addEventListener('resize', handleResize)
  
  // Run it immediately on mount to set the initial layout
  handleResize()
  
  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, []) // Clean and simple: no dependencies needed anymore!

  const apps = [
    { id: 1, src: "./images/baseballicon.jpg", title: "App 1" },
    { id: 2, src: "./images/blairicon.jpg", title: "App 2" },
    { id: 3, src: "./images/bsaicon.jpg", title: "App 3" },
    { id: 4, src: "./images/contactsicon.jpg", title: "App 4" },
    { id: 5, src: "./images/eaglesicon.jpg", title: "App 5" },
    { id: 6, src: "./images/golficon.jpg", title: "App 6" },
    { id: 7, src: "./images/iosicon.jpg", title: "App 7" },
    { id: 8, src: "./images/macosicon.jpg", title: "App 8" },
    { id: 9, src: "./images/ndicon.jpg", title: "App 9" },
    { id: 10, src: "./images/scoicon.jpg", title: "App 10" },
    { id: 11, src: "./images/tutoringicon.jpg", title: "App 11" },
    { id: 12, src: "./images/volexityicon.jpg", title: "App 12" },
  ]

  const isAppOpen = activeApp !== null

  const BaseballAppContent = () => (
    <div> 
      <h3>Baseball</h3>
      <p>Since elementary school, baseball has been one of the most important parts of my life. While I have played other sports like basketball and football, baseball has always been my favorite and is the only sport that I currently play at a competitive level. Many of my closest friends are people that I have met through baseball. Today, I play high school baseball for Montgomery Blair High School, where I play middle infield and pitch.</p>
      
      <div className="images-container">
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/baseball-1.jpg" alt="Description" />
        </div>
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/baseball-2.jpg" alt="Description" />
        </div>
        <div className="image-wrapper">
        <img className="galleryImage" src="./images/baseball-3.jpg" alt="Description" />
        </div>
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/baseball-4.jpg" alt="Description" />
        </div>
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/baseball-5.jpg" alt="Description" />
        </div>
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/baseball-6.jpg" alt="Description" />
        </div>
      </div>
    
    </div>
  );

  const BlairAppContent = () => (
    <div> 
      <h3>Education</h3>
      <p>I currently attend Montgomery Blair HS in Silver Spring, MD, where I will be a junior next year.</p>
      
    
      <div className="bigimage-wrapper">
        <img className="galleryImage" src="./images/blair-1.webp" alt="Description" />
      </div>

      <p>I am a student in the STEM magnet program at Blair, where I take accelerated courses in science, math, and computer science.</p>
    
    
    </div>
  );
  

  const BSAAppContent = () => (
    <div> 
      <h3>Boy Scouts</h3>
      <p>I have been a Boy Scout for 10 years. I enjoy scouting because it allows me to give back to my community and serve others while having fun.</p>
      
    
      <div className="images-container">
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/scouts-1.jpg" alt="Description" />
        </div>
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/scouts-2.jpg" alt="Description" />
        </div>
      </div>
    
      <p>I began scouting in Elementary School, where I did it with my brother and my Dad.</p>
    
      <div className="images-container">
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/scouts-3.jpg" alt="Description" />
        </div>
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/scouts-4.jpg" alt="Description" />
        </div>
      </div>

      <p>I recently earned the rank of Eagle, which is the highest honor in Boy Scouts and took over 4 years to achieve.</p>

      <div className="images-container">
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/scouts-5.jpg" alt="Description" />
        </div>
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/scouts-6.jpg" alt="Description" />
        </div>
      </div>

      <p>To earn the rank of Eagle, you need to complete a project. For mine, I led 20+ other scouts in the creation of a shed for the preschool that I went to.</p>
    
    </div>
  );


  const ContactsAppContent = () => (
    <div> 
      <h3>Contact Info</h3>
      <p>For any personal inquiries, please reach out to me!</p>
      <div className = "contact-container">
        <p className = "contact-info">(240) 354 - 2310</p>
        <p className = "contact-info">lpetroni31@gmail.com</p>
      </div>
    
    
    </div>
  );

  const GolfAppContent = () => (
    <div> 
      <h3>Golf</h3>
      <p>In my free time, I enjoy going golfing. My handicap is ~18, and I plan on trying out for the school golf team this fall.</p>
      <div className="images-container">
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/golf-1.jpg" alt="Description" />
        </div>
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/golf-2.jpg" alt="Description" />
        </div>
      </div>
    
    
    </div>
  );

  const EaglesAppContent = () => (
    <div> 
      <h3>Philadelphia Sports</h3>
      <p>I am a huge Philadelphia sports fan, and go to several Eagles and Phillies games each year.</p>

      <div className="images-container">
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/eagles-1.jpg" alt="Description" />
        </div>
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/eagles-2.jpg" alt="Description" />
        </div>
      </div>
    
    
    </div>
  );

  const MacOSAppContent = () => (
    <div> 
      <h3>MacOS Development</h3>
      <p>In addition to iOS development, I have also built and released two MacOS apps.</p>

        <div className="bigimage-wrapper">
          <img className="galleryImage" src="./images/mac-1.jpeg" alt="Description" />
        </div>
        <p>Grim Reaper is the first Mac app I created. It is accessed via the menu bar and helps you close your other apps very quickly.</p>
       <div className="bigimage-wrapper">
          <img className="galleryImage" src="./images/mac-2.png" alt="Description" />
        </div>
        <p>Vinyl is the second mac App I created. It allows you to set the album art of your Now Playing music as wallpaper for your mac.</p>
    
    </div>
  );


   const NotreDameAppContent = () => (
    <div> 
      <h3>Notre Dame Football</h3>
      <p>I am also a huge Notre Dame football fan. </p>

      <div className="images-container">
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/nd-1.jpg" alt="Description" />
        </div>
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/nd-2.jpg" alt="Description" />
        </div>
      </div>
    
    
    </div>
  );

  const SCOAppContent = () => (
    <div> 
      <h3>Silver Chips Online</h3>
      <p>I am also the head sports editor my school's newspaper, Silver Chips Online. I oversee a staff of 10 other writers, designating assignments for game coverage and editing individual stories.</p>
       <div className="images-container">
        <div className="image-wrapper">
          <img className="galleryImage" src="./images/sco-1.jpg" alt="Description" />
        </div>
         <div className="image-wrapper">
          <img className="galleryImage" src="./images/sco-2.jpg" alt="Description" />
        </div>
       
      </div>
    
    
    </div>
  );

  const VolexityAppContent = () => (
    <div> 
      <h3>Volexity</h3>
      <p>Now, I am interning at Volexity! This PWA is a practice project to get familiar with React and TypeScript.</p>
    
    </div>
  );

   const TutoringAppContent = () => (
    <div> 
      <h3>Tutoring</h3>
      <p>In addition to interning at Volexity, I am also employed as a peer-to-peer tutor with a local organization. While I do not currently have any clients, I have tutored younger students for over 30 hours in high school math, english, and history.</p>
        <div className="bigimage-wrapper">
          <img className="galleryImage" src="./images/tutoring-1.png" alt="Description" />
        </div>
    
    </div>
  );

  const IOSAppContent = () => (
    <div> 
      <h3>iOS Development</h3>
      <p>For the past 5 years, I have been developing iOS apps in my free time, including releasing 3 onto the iOS app store.</p>
      <div className="appicon-container">
        <img className="appImage" src="./images/ios-1.jpeg" alt="Description" />
      </div>
      <h4>Fluent</h4>
      <p>Fluent is an iOS app I built for my little brother when I was 12. It helps young learners memorize their basic operation tables and math facts.</p>

      <div className="appicon-container">
        <img className="appImage" src="./images/ios-2.jpg" alt="Description" />
      </div>
      <h4>Speed Trigonometry</h4>
      <p>Speed Trigonometry is an app I built in one class period to help myself study for a specific series of math tests in my STEM program. I released it so that other students could also practice using it.</p>

      <div className="appicon-container">
        <img className="appImage" src="./images/ios-3.jpg" alt="Description" />
      </div>
      <h4>Impostor</h4>
      <p>Impostor is a word game that my friends and I used to play a lot. It requires a companion app which will generate a random word in a category, which I built and released so we could play it together.</p>


      <p>I have also built dozens of other passion project apps that I haven't released!</p>
    
    </div>
  );



  const RenderInnerAppContent = () => {
    switch(activeApp) {
      case 1:
        return <BaseballAppContent />
      
      case 2:
        return <BlairAppContent />

      case 3:
        return <BSAAppContent />

      case 4:
        return <ContactsAppContent />
      case 5:
        return <EaglesAppContent />
      case 6:
        return <GolfAppContent />
      case 7:
        return <IOSAppContent />
      case 8:
        return <MacOSAppContent />
      case 9:
        return <NotreDameAppContent/>
      case 10:
        return <SCOAppContent/>
      case 11:
        return <TutoringAppContent/>
      case 12:
        return <VolexityAppContent/>
      default:
        return (
          <>
            <h2>Details for App {activeApp}</h2>
            <p>This is where your dynamically rendered content or custom component for sub-page {activeApp} will go.</p>
          </>
        )
    }
  }
  // Reusable component for sub-pages
  const AppDetailsContent = () => (
    <div className="panel-content">
    
     <RenderInnerAppContent />
     <div className = "image-wrapper">
        <button className="close-btn" onClick={() => setActiveApp(null)}>
        ← Back to Home
      </button>
     </div>
     
    </div>
  )

  return (
  <div className={`mobile-container mode-${layoutMode} ${isAppOpen ? 'app-is-open' : ''}`}>
    
    <div className="workspace-bounds">
      
      <main className="app-content">
        <div ref={phoneRef} className="mock-iphone">
          <div className="mock-dynamic-island"></div>
          <div className="mock-screen">
            {isAppOpen && (layoutMode === 'in-frame' || layoutMode === 'full-screen') ? (
              <AppDetailsContent />
            ) : (
              <>
                <div className="status-widget">
                  <p>Welcome to my PWA! To learn more about an aspect of my life, click on an app on my phone.</p>
                </div>
                <div className="image-grid">
                  {apps.map((app) => (
                    <img 
                      key={app.id}
                      src={app.src} 
                      alt={app.title} 
                      className={`appImage ${activeApp === app.id ? 'active-icon' : ''}`} 
                      onClick={() => setActiveApp(app.id)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      {layoutMode === 'split' && (
        <section className={`details-panel ${isAppOpen ? 'show' : ''}`}>
          {isAppOpen && <AppDetailsContent />}
        </section>
      )}

    </div>
  </div>
)
}

export default App