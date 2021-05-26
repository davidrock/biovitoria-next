import React, { useRef } from "react";

export default function Banner() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="h-96 w-full bg-gray-50">
      <div className="flex justify-center">
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://assets9.lottiefiles.com/packages/lf20_qsgaud1w.json"
          style={{ width: "300px", height: "300px" }}
        ></lottie-player>
      </div>
    </div>
  );
}
