import React from "react";

import style from './style.module.css'
const { biography, linkType, ...bios } = style;

const LinkForType = ({ type, url, name }) => {
  let fullurl = url;
  let text = `@${name}`;
  switch(type) {
    case 'vimeo':
      fullurl = `https://vimeo.com/${name}`;
      break;

    case 'twitter':
      fullurl = `https://twitter.com/${name}`;
      break;

    case 'instagram':
      fullurl = `https://instagram.com/${name}`;
      break;

    default:
      text = url;
      break;
  }

  return <a href={fullurl} rel="noopener noreferrer" target="_blank">{text}</a>
}

const Bio = ({name, bio, links, type}) => (
  <div className={`${biography} ${bios[`${type}Bio`]}`}>
    <h2>ABOUT THE {type}</h2>
    <h3>{name}</h3>
    <p dangerouslySetInnerHTML={{ __html: bio }} />
    {
      links &&
      <ul>
        {
          links.map(({type, url, name}) => (
            <li key={type}>
              <span className={linkType}>{type}</span>: <LinkForType type={type} url={url} name={name} />
            </li>
          ))
        }
      </ul>
    }
  </div>
);

export default Bio;
