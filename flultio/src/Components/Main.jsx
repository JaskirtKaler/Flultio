import React from 'react'
import './Styles/Main.css'
function Main() {
    const [activeTab, setActiveTab] = React.useState('tab1');
    const handleSignout = () =>{
        console.log('signout pressed')
    }

  return (
    <div className="main">
        <div className='chat-threads'>
            <div className='thread-tabs'>
                <button onClick={() => setActiveTab('tab1')}>Tab 1</button>
                <button onClick={() => setActiveTab('tab2')}>Tab 2</button>
            </div>
            <div className='chat-threads-end'>
                <button className='signout' onClick={handleSignout}>Sign out</button>
            </div>
        </div>
        <div className='chat'>
                {activeTab === 'tab1' && <div>Chat data for Tab 1</div>}
                {activeTab === 'tab2' && <div>Chat data for Tab 2</div>}
            
        </div>
    </div>
  )
}

export default Main