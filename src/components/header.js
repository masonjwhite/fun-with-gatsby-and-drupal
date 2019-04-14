import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"

const HeaderWrapper = styled.header`
  background: #be2326;
  margin-bottom: 1.45rem;
`

const LogoWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const LinkWrapper = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  color: #f4f2ec;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <LogoWrapper>
      <LinkWrapper>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </LinkWrapper>
    </LogoWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
