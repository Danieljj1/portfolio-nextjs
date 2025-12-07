import dynamic from "next/dynamic";

// Load react-lottie ONLY on the client (SSR disabled)
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const Animation = ({
  animationData,
  loop = true,
  autoplay = true,
  ...rest
}) => {
  if (!animationData) return null;

  const defaultOptions = {
    loop,
    autoplay,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} {...rest} />;
};

export default Animation;
