import * as React from "react"
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 500);
  }

  const scrollToTop = () => window.scrollTo({ top: 0, scrolling: 'smooth' });

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      style={{
        transform: visible ? '' : 'translateY(5rem)',
        transition: 'transform 250ms ease-in-out'
      }}
    >
      <FiArrowUp className="icon" size="2rem" />
    </button>
  )
}

export default ScrollToTop;