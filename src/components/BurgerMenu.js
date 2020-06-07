import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { black } from '../styles/colors'

const BurgerMenu = ({ items, showMenu, handleMenuClick }) => (
  <BurgerMenuContainer>
    <div style={{ width: '100vw', marginTop: '.5rem' }}>
      <Input
        onClick={handleMenuClick}
        true-value="yes"
        false-value="no"
        id="responsive-menu"
        type="checkbox"
      />
      <label style={{ cursor: 'pointer', padding: '.75rem' }} htmlFor="responsive-menu">
        <BurgerIcon isShown={showMenu} id="menu-icon" />
      </label>
      <Overlay isShown={showMenu}>
        <Nav>
          {showMenu &&
            items.allInternalLink.nodes.map(link => {
              return (
                <Link key={link.id} style={{ color: '#fff', fontSize: '1.5em' }} to={link.url}>
                  {link.name}
                </Link>
              )
            })}
        </Nav>
      </Overlay>
    </div>
  </BurgerMenuContainer>
)

const BurgerMenuContainer = styled.nav`
  color: ${black};
  display: none;
  right: 0;
  min-height: 3.3rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

const Overlay = styled.div`
  ${({ isShown }) =>
    isShown &&
    `       
      background: ${black};
      bottom: 0;
      left: 0;
      height: 100vh;
      position: fixed;
      right: 0;
      top: 0;
      width: 100vw;
      z-index: -1;
    `}
`

const Input = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;

  &[type='checkbox']:checked {
    background: transparent;
    &:before {
      top: 0;
      transform: rotate(-45deg);
    }
    &:after {
      bottom: 0;
      transform: rotate(45deg);
    }
  }
`

const BurgerIcon = styled.span`
  background: #fff;
  display: inline-block;
  height: 0.15em;
  max-width: 1.5rem;
  position: relative;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:before,
  &:after {
    background: #fff;
    content: '';
    height: 0.15em;
    position: absolute;
    right: 0;
    transition: all 0.2s ease-in-out;
    width: 100%;
  }

  ${({ isShown }) =>
    isShown
      ? `     
        background: transparent; 
        &:before {
            top: 0;
            transform: rotate(-45deg);   
        }
        &:after {
            bottom: 0;
            transform: rotate(45deg);
        }
         `
      : `
     &:before {
        top: -0.4em;
    }
    &:after {
        bottom: -0.4em;
    }
     `}
`

const Nav = styled.ul`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 1.5em;
  height: 100vh;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: -2rem !important;
  padding: 0;
`

export default BurgerMenu
