import React, { useEffect } from "react";
const Comments = ({ issueTerm }) => {
  const commentsUUID = `comments_${issueTerm}`;
  useEffect(() => {
    let anchor;
    const theme = "github-dark"; // you could choose other themes too
    const script = document.createElement("script");
    anchor = document.getElementById(commentsUUID);
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", true);
    script.setAttribute("repo", "Synonymous64/project-blog");
    script.setAttribute("issue-term", issueTerm);
    script.setAttribute("theme", theme);
    anchor.appendChild(script);
    return () => {
      anchor.innerHTML = "";
    };
  });
  return (
    <>
      <div id={commentsUUID} className="post-comments relative">
        <div className="utterances-frame"></div>
      </div>
    </>
  );
};

export default Comments;
