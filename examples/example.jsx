import React from "react"
import { useState, useEffect } from "react"

const Titan = () => {
  const [absolute, setAbsolute] = useState(true)

  useEffect(() => {
    // It's always true
    setAbsolute(true)
  }, [])
  return <div>Thanos is {absolute}</div>
}

export default Titan
