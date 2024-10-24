"use client";

import UnityWebGLComponent from "./UnityWebGLComponent"; // Unity WebGL 컴포넌트 불러오기

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Unity WebGL Demo</h1>
      <UnityWebGLComponent /> {/* Unity WebGL 컴포넌트 렌더링 */}
    </div>
  );
}
