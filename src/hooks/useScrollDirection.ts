import { useState, useEffect } from 'react'

const SCROLL_DOWN = 'down'
const SCROLL_UP = 'up'

interface Props {
  initialDirection?: 'down' | 'up';
  thresholdPixels?: number;
  off?: boolean;
}
 export const useScrollDirection = ({ initialDirection, thresholdPixels, off }: Props = {}) => {
  const [scrollDir, setScrollDir] = useState<string | undefined>(initialDirection)

  useEffect(() => {
    const threshold = thresholdPixels || 0
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false
        return
      }

      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */
    if (!off) {
      window.addEventListener('scroll', onScroll)
    } else {
      setScrollDir(initialDirection)
    }

    return () => window.removeEventListener('scroll', onScroll)
  }, [initialDirection, thresholdPixels, off])

  return scrollDir
}

// export default useScrollDirection;
