import { Img } from "@react-email/components";

interface EmailTrackingPixelProps {
  src: string;
}

export default function EmailTrackingPixel({ src }: EmailTrackingPixelProps) {
  return (
    <>
      {/* 邮件跟踪像素 */}
      <Img
        src={src}
        width="1"
        height="1"
        alt=""
        style={{
          border: 0,
          display: "block",
        }}
        aria-hidden="true"
      />
    </>
  );
}
