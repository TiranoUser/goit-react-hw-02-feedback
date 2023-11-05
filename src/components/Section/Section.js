import { FeedBackSection } from './Section.styled.jsx';

export const Section = ({ title, children }) => (
  <FeedBackSection>
    <h1>{title}</h1>
    {children}
  </FeedBackSection>
);
