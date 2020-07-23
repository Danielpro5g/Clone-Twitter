import React from 'react';

import { Container, 
  Header, 
  BackIcon, 
  ProfileInfo, 
  BottomMenu, 
  HomeIcon , 
  SearchIcon, 
  BellIcon, 
  EmailIcon  
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon>

          </BackIcon>
        </button>

        <ProfileInfo>
          <strong>Daniel Oliveira</strong>
          <span>612 tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage/> */}

      <BottomMenu>
        <HomeIcon className="active"/>  
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>
      </BottomMenu>
  
    </Container>
  );
}

export default Main;