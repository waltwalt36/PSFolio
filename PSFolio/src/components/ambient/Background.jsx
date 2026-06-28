function Background() {
  return (
    <video autoPlay loop muted src="/PS4_Background.mp4" style={{ position:"fixed", zIndex: "0", padding: "0", width: "100vw", height: "100vh", objectFit: "cover" }}></video>
  )
}

export default Background