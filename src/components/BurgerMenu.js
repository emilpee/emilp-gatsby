import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { black } from '../styles/colors'

const BurgerMenu = ({ items, showMenu, handleMenuClick }) => (
  <BurgerMenuContainer>
    <div>
      <Input
        onClick={handleMenuClick}
        true-value="yes"
        false-value="no"
        id="responsive-menu"
        type="checkbox"
      />
      <label style={{ cursor: 'pointer', padding: '1rem' }} htmlFor="responsive-menu">
        <BurgerIcon isShown={showMenu} id="menu-icon" />
      </label>
      <Overlay isShown={showMenu} />
      {showMenu &&
        items.allInternalLink.nodes.map(link => {
          return (
            <Nav key={link.id}>
              <Link style={{ color: '#fff' }} to={link.url}>
                {link.name}
              </Link>
            </Nav>
          )
        })}
    </div>
  </BurgerMenuContainer>
)

const BurgerMenuContainer = styled.nav`
  display: none;
  color: ${black};
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  min-height: 3.2rem;
  padding: 1rem;
  align-items: center;
  justify-content: flex-end;
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
            height: 100vh;
            left: 0;
            right: 0;
            position: fixed;
            top: 0;
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
  display: inline-block;
  max-width: 1.5rem;
  position: relative;
  background: #fff;
  height: 0.15em;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:before,
  &:after {
    content: '';
    right: 0;
    position: absolute;
    background: #fff;
    height: 0.15rem;
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
  font-size: 1.5em;
  color: #fff;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: -2rem !important;
  padding: 0;
`

export default BurgerMenu
