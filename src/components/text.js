import { Link } from "gatsby"
import styled, {css} from "styled-components"

const SectionTitle = styled.p`
  font-family: Corben, serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: #515151;
  margin: ${props => props.margin || "0 0 0 2rem"};
  text-align: ${props => props.textAlign || "left"};
}
`

const CustomLink = styled(Link)`
  font-family: Lato, sans-serif;
  color: ${props => props.textColor || "#515151"};
  margin: ${props => props.margin || "0"};

  box-shadow: none;
  
  ${props => props.hoverFactor && css`
    &:hover{
      font-size: ${props => props.hoverFactor}em;
    }
  `};
`

const Tagline = styled.p`
  color: #000000;
  font-weight: 500;
  font-size: 36px;
  font-family: Corben, serif;
  line-height: 153%;
`

const Email = styled.p`
  color: #000000;
  text-decoration: underline;
  font-size: .75rem;
`

const WritingTitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 400;
  color: #515151;
  margin: ${props => props.margin || "0"}
`

const WritingSubTitle = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: #515151;
  margin: ${props => props.margin || "0"}
`

const DetailText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: #515151;
`

const ClearFix = styled.div`
  width: 100%;
  overflow: auto;
  &::after {
  content: "";
  clear: both;
  display: table;
}
`

export {  
  Tagline,
  SectionTitle,
  Email,
  WritingTitle,
  WritingSubTitle,
  DetailText,
  CustomLink,
  ClearFix
}
