import * as React from "react"
import { Link } from "gatsby";
// markup
const HeadPage = () => {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <Link to="/">홈</Link>
      <Link to="/about">어바웃</Link>
      <Link to="/test">테스트</Link>
      <Link to="/test-space">테스트-스페이스!!</Link>
    </div>
  )
}

export default HeadPage
