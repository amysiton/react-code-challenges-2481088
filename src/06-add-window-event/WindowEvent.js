import { useEffect } from 'react'

export default function WindowEvent () {

  useEffect(() => {
    const handleDblClick = () => {
      alert("Double clicked");
    }

    window.addEventListener("dblclick", handleDblClick)
    return () => window.removeEventListener("dblclick", handleDblClick);

  }, []);

  return (
    <h2>Window event active</h2>
  )
}
