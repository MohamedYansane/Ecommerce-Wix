"use client";

import { useEffect, useState } from "react";
import DOMPurify from "isomorphic-dompurify";

interface InfoDescriptionProps {
  baliseType: "div" | "p" | "span";
  description: string;
  className?: string;
}

const InfoDescription = ({
  baliseType,
  description,
  className,
}: InfoDescriptionProps) => {
  const [sanitizedDescription, setSanitizedDescription] = useState("");

  useEffect(() => {
    // Sanitize only on the client
    setSanitizedDescription(DOMPurify.sanitize(description));
  }, [description]);

  // Render sanitized content with dangerouslySetInnerHTML
  return (
    <>
      {baliseType === "div" && (
        <div
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />
      )}
      {baliseType === "p" && (
        <p
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />
      )}
      {baliseType === "span" && (
        <span
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />
      )}
    </>
  );
};

export default InfoDescription;
