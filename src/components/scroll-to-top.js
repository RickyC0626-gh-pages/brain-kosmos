import * as React from "react"
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 500);
  }

  const scrollToTop = () => window.scrollTo({ top: 0, scrolling: 'smooth' });

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  });

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      style={{
        transform: visible ? '' : 'translateY(5rem)',
        transition: 'transform 250ms ease-in-out'
      }}
    >
      <FiArrowUp size="2rem" />
    </button>
  )
}

export default ScrollToTop;