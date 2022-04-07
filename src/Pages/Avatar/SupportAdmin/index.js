import React from 'react';
import './index.css'
import '../SupportEngine/styles'
import { ChatEngine } from 'react-chat-engine'

const SupportAdmin = () => {
  return (
    <ChatEngine 
      projectID={process.env.REACT_APP_CE_PROJECT_ID}
      userName='Eddie Eti'
      userSecret='12345abc'
      height='calc(100vh - 12px)'
    />
  );
}

export default SupportAdmin;