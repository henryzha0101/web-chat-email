import React from "react";
import { Text } from "@react-email/components";

interface EmailReminderProps {
  style?: React.CSSProperties;
  strongStyle?: React.CSSProperties;
}

const defaultReminderStyle = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 18,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "28px",
  margin: "32px 0 0",
};

const defaultStrongStyle = {
  position: "relative" as const,
  top: "3px",
  color: "#9333EA",
  fontWeight: 600,
  textDecoration: "underline",
};

export const EmailReminder = ({ style, strongStyle }: EmailReminderProps) => {
  const mergedReminderStyle = { ...defaultReminderStyle, ...style };
  const mergedStrongStyle = { ...defaultStrongStyle, ...strongStyle };

  return (
    <Text style={mergedReminderStyle}>
      It&apos;s a friendly reminder you have{" "}
      <strong style={mergedStrongStyle}>up to 70% off</strong> your first-time
      Premium subscription.
    </Text>
  );
};

export default EmailReminder;
