import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useRouter } from "next/navigation";

const UnityWebGLComponent = () => {
  const router = useRouter(); // 페이지 이동을 위한 라우터
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/Build/miniapp.loader.js", // Unity 빌드 파일 경로
    dataUrl: "/Build/miniapp.data",
    frameworkUrl: "/Build/miniapp.framework.js",
    codeUrl: "/Build/miniapp.wasm",
  });

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // 콘솔에서 나온 메시지 확인
      if (typeof event.data === "string" && event.data.includes("Hit : GAME")) {
        console.log("Unity로부터 메시지를 받음:", event.data);
        router.push("/game"); // '/game' 페이지로 이동
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [router]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {!isLoaded && <p>Loading... {Math.round(loadingProgression * 100)}%</p>}
      <Unity
        unityProvider={unityProvider}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default UnityWebGLComponent;
