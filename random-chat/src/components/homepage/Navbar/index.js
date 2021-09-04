import React from 'react';
import {FaBars} from 'react-icons/fa'
import {BsLightning} from 'react-icons/bs'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {RiSettings3Line} from 'react-icons/ri'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKiss } from '@fortawesome/free-solid-svg-icons'
import {VscGlobe} from 'react-icons/vsc'
import {
    Nav,
    NavbarContainer, 
    NavbarContainer_1,
    NavbarContainer_2,
    NavLogo,
    MobileIcon, 
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    Text,
    NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavbarContainer_1>
                        <NavLogo to='/'>
                            <FontAwesomeIcon icon={faKiss} />
                            <Text>randor</Text>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='tracuu'><BsLightning className="nav-icon"/><Text>Lượt chơi</Text></NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='services'><BiMessageRoundedDetail className="nav-icon"/><Text>Bạn bè</Text></NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='contact'><RiSettings3Line className="nav-icon"/><Text>Cài đặt</Text></NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer_1>
                    
                    <NavbarContainer_2>
                        <NavLinks><VscGlobe /><Text>Ngôn ngữ</Text></NavLinks>
                        <NavBtnLink to='signin'>Đăng nhập</NavBtnLink>
                    </NavbarContainer_2>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar