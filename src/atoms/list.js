import React from "react";

export default function List(props) {
  const { href, children } = props;
  return (
    <li>
      <a href={href}> {children} </a>
    </li>
  );
}
