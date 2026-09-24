import React from 'react';

export function LeetCodeIcon({ className = "w-5 h-5" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.215 5.215 0 0 0-3.85-1.528 5.216 5.216 0 0 0-3.851 1.528l-4.32 4.38c-1.026 1.025-1.54 2.37-1.54 3.714 0 1.344.514 2.689 1.54 3.714l4.332 4.363c1.026 1.025 2.37 1.54 3.714 1.54s2.689-.515 3.714-1.54l2.697-2.607c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.553-1.9-.038z" />
      <path d="M10.802 12.001h7.896c.745 0 1.35-.605 1.35-1.35s-.605-1.35-1.35-1.35h-7.896c-.745 0-1.35.605-1.35 1.35s.605 1.35 1.35 1.35z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

export function JavaIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.85 16.84c0 .08.05.15.11.23 1.15.7 2.45.9 3.8.9 1.48 0 2.87-.24 3.93-.95.12-.08.06-.21-.07-.22-1.36-.08-2.68-.07-4.04.05-1.25.1-2.48.16-3.73-.01m-.15 2.29c1.23.63 2.62.8 4.07.8 1.47 0 2.97-.2 4.2-.82.13-.07.08-.2-.06-.21-1.35-.09-2.73-.07-4.1.06-1.35.13-2.71.18-4.06.01-.09-.01-.1-.01-.05.16M13.6 2.3c.09.28.02.6-.14.86-.4.65-1.07 1.14-1.38 1.83-.45.97-.33 1.94.3 2.84.14.21.32.41.48.61.27.35.48.75.52 1.2.06.74-.29 1.39-.77 1.93-.24.28-.53.53-.78.8-.2.22-.38.46-.5.73-.13.3-.15.62-.05.93.07.21.22.39.4.52.4.31.89.47 1.39.56.32.06.65.08.97.08 1.05 0 2.07-.23 3.01-.73.2-.11.3-.26.23-.46-.06-.18-.23-.21-.4-.14-.81.36-1.68.52-2.58.52-.78 0-1.55-.13-2.28-.43-.22-.09-.39-.23-.45-.48-.05-.23 0-.44.11-.64.12-.22.28-.41.46-.58.37-.36.78-.69 1.15-1.06.51-.52.92-1.12 1.06-1.84.14-.72-.03-1.4-.41-2.02-.27-.45-.61-.83-.98-1.2-.42-.43-.84-.87-1.16-1.39-.41-.65-.54-1.38-.36-2.13.06-.25.18-.48.33-.7.13-.19.06-.33-.16-.31m5.05 13.91c-.08-.05-.18-.08-.25-.03-.35.26-.75.48-1.16.67-1.32.6-2.75.83-4.22.84-1.32.01-2.61-.17-3.84-.66-.41-.16-.8-.35-1.17-.57-.08-.05-.16-.03-.22.04-.08.09-.05.18.04.25 1.05.78 2.25 1.17 3.55 1.31 1.48.16 2.92.05 4.33-.42.99-.33 1.88-.85 2.72-1.53.07-.06.12-.13.05-.22" />
    </svg>
  );
}

export function CppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.395 10.665h-1.472v-1.472a.552.552 0 0 0-.552-.552h-.736a.552.552 0 0 0-.552.552v1.472h-1.472a.552.552 0 0 0-.552.552v.736c0 .305.247.552.552.552h1.472v1.472c0 .305.247.552.552.552h.736a.552.552 0 0 0 .552-.552v-1.472h1.472a.552.552 0 0 0 .552-.552v-.736a.552.552 0 0 0-.552-.552zm-6.623 0H14.3v-1.472a.552.552 0 0 0-.552-.552h-.736a.552.552 0 0 0-.552.552v1.472h-1.472a.552.552 0 0 0-.552.552v.736c0 .305.247.552.552.552h1.472v1.472c0 .305.247.552.552.552h.736a.552.552 0 0 0 .552-.552v-1.472h1.472a.552.552 0 0 0 .552-.552v-.736a.552.552 0 0 0-.552-.552zM11.96 4.793a8.832 8.832 0 0 0-6.195 2.564 8.76 8.76 0 0 0-2.567 6.194c0 2.348.922 4.567 2.567 6.206a8.832 8.832 0 0 0 6.195 2.563c3.153 0 5.96-1.637 7.502-4.14a.552.552 0 0 0-.17-.768l-.66-.432a.552.552 0 0 0-.749.144 6.84 6.84 0 0 1-5.923 3.284 6.944 6.944 0 0 1-4.88-2.02A6.877 6.877 0 0 1 5.06 13.55c0-1.854.727-3.597 2.02-4.891a6.944 6.944 0 0 1 4.88-2.02 6.84 6.84 0 0 1 5.923 3.284.552.552 0 0 0 .749.144l.66-.432a.552.552 0 0 0 .17-.768 8.784 8.784 0 0 0-7.502-4.14z"/>
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm13.725 14.34c1.19 0 2.095-.535 2.535-1.5.085-.185.03-.39-.12-.495l-1.125-.795c-.15-.105-.36-.075-.48.075-.315.42-.72.675-1.2.675-.66 0-1.11-.42-1.11-1.2v-4.8c0-.18-.15-.33-.33-.33h-1.44c-.18 0-.33.15-.33.33v4.86c0 1.95 1.2 3.18 3.6 3.18zm-6.255-.03c1.035 0 1.77-.42 2.22-1.05.12-.165.105-.39-.045-.525l-1.02-.795c-.15-.12-.36-.09-.48.06-.27.345-.555.51-.975.51-.495 0-.825-.24-.825-.63 0-.465.375-.66 1.23-.99 1.485-.57 2.22-1.29 2.22-2.61 0-1.5-1.155-2.58-2.94-2.58-1.245 0-2.115.45-2.655 1.335-.09.15-.045.345.09.45l1.05.795c.135.105.33.09.45-.045.3-.345.645-.51 1.05-.51.45 0 .75.225.75.57 0 .42-.3.585-1.08.885-1.575.6-2.37 1.32-2.37 2.73 0 1.62 1.155 2.7 3.36 2.7z"/>
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm8.25 8.16H8.97V18H7.32v-6.84H5.04v-1.35h6.21v1.35zm6.54 3.78c0 1.77-1.32 2.94-3.48 2.94-1.2 0-2.19-.36-2.88-1.05l.93-1.17c.54.51 1.26.84 2.01.84.99 0 1.62-.48 1.62-1.26 0-.81-.66-1.17-1.89-1.65-1.68-.66-2.49-1.32-2.49-2.73 0-1.62 1.26-2.76 3.18-2.76 1.08 0 1.95.3 2.58.78l-.87 1.2c-.48-.36-1.11-.6-1.77-.6-.87 0-1.41.48-1.41 1.17 0 .69.57 1.02 1.65 1.47 1.83.72 2.82 1.41 2.82 2.85z"/>
    </svg>
  );
}

export function NodeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L5 8.3v7.4l7 4.2 7-4.2V8.3l-7-4z"/>
    </svg>
  );
}

export function SpringBootIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.57 9.87c-.36-.88-1.12-2.02-2.56-2.88-2.03-1.2-4.22-.92-5.4-.53-.29.1-.48.36-.45.67.03.3.26.54.56.54.04 0 .09 0 .13-.02 1.15-.36 3.03-.6 4.7.39 1.17.69 1.77 1.6 2.02 2.24.12.3.4.49.72.49.07 0 .14-.01.21-.04.38-.15.56-.58.41-.96zM12 2C6.48 2 2 6.48 2 12c0 3.84 2.16 7.18 5.33 8.87-.24-.87-.33-1.7-.33-2.44 0-4.04 3.05-6.79 6.84-6.79 1.73 0 3.32.61 4.54 1.68-.42-1.92-1.46-3.7-3.13-4.9-1.54-1.1-3.41-1.57-5.25-1.3-.39.06-.72-.21-.78-.6-.06-.39.21-.72.6-.78 2.21-.32 4.47.24 6.32 1.57 2.11 1.51 3.36 3.81 3.73 6.27.57-.42 1.05-.96 1.41-1.6.43-.76.72-1.63.72-2.58 0-5.52-4.48-10-10-10zm-1.07 14.54c-.93 0-1.68-.75-1.68-1.68s.75-1.68 1.68-1.68 1.68.75 1.68 1.68-.75 1.68-1.68 1.68z"/>
    </svg>
  );
}

export function ReactIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="2.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(30 12 12)" fill="none" stroke="currentColor" strokeWidth="1.2"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(90 12 12)" fill="none" stroke="currentColor" strokeWidth="1.2"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(150 12 12)" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}

export function TailwindIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  );
}

export function PostgresIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5a8.7 8.7 0 0 0-8.7 8.7c0 2.8 1.3 5.3 3.4 6.9.3.2.7.3 1 .1.3-.2.4-.6.3-1-.2-.8-.3-1.6-.3-2.5 0-3.3 2-6.1 4.9-7.2.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5-3.5 1.3-5.9 4.7-5.9 8.6 0 1 .2 2 .5 2.9-2-1.6-3.3-4-3.3-6.8 0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7c0 4.1-2.9 7.6-6.9 8.5-.4.1-.6.5-.5.9.1.4.5.6.9.5 4.6-1.1 7.9-5.1 7.9-9.9 0-5.5-4.5-9.9-10.2-9.9z"/>
      <circle cx="15.5" cy="11.5" r="1.5" />
    </svg>
  );
}

export function MysqlIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3C6.48 3 2 6.48 2 10.77c0 3.29 2.68 6.09 6.47 7.15L7.5 21l3.75-2.05c.25.02.49.05.75.05 5.52 0 10-3.48 10-7.77C22 6.48 17.52 3 12 3zm0 12.5c-4.41 0-8-2.69-8-6s3.59-6 8-6 8 2.69 8 6-3.59 6-8 6z"/>
    </svg>
  );
}

export function MongoIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C11.5 3 7 8 7 13.5c0 3.2 2 5.5 5 6.5 3-1 5-3.3 5-6.5C17 8 12.5 3 12 2zm0 17c-2.3-.8-3.8-2.6-3.8-5.5 0-3.6 2.8-7.7 3.8-9 1 1.3 3.8 5.4 3.8 9 0 2.9-1.5 4.7-3.8 5.5z"/>
    </svg>
  );
}

export function RedisIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.5 8.5L12 3.5 2.5 8.5v7l9.5 5 9.5-5v-7zM12 5.6l6.8 3.6-6.8 3.6-6.8-3.6L12 5.6zm-7.5 4.8l6.5 3.4v6.1l-6.5-3.4v-6.1zm8.5 9.5v-6.1l6.5-3.4v6.1l-6.5 3.4z"/>
    </svg>
  );
}

export function DockerIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.5 11.5c-.3-.2-1.5-.3-2.3.2-.3.2-.6.5-.8.8-.9-.5-2.2-.6-3.4-.2-1.2.4-2 1.4-2.2 2.7H2.5c-.3 0-.5.2-.5.5 0 2.8 1.6 5.3 4.2 6.5 1.8.8 3.8 1 5.8.5 3.8-1 6.5-4.2 7-8.1.8-.4 1.7-.8 2.5-.7.5 0 1-.2 1.2-.5.3-.4.2-.8-.2-.9zM6 10h2v2H6zm3 0h2v2H9zm3 0h2v2h-2zm-6-3h2v2H6zm3 0h2v2H9zm3 0h2v2h-2zm3 3h2v2h-2z"/>
    </svg>
  );
}

export function AwsIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.28 17.06c-1.39-.77-2.31-2.08-2.31-3.6 0-2.33 2.07-4.2 4.62-4.2 1.15 0 2.2.38 3.01 1.02V8.47c0-2.32-2.14-4.21-4.78-4.21-1.78 0-3.33.86-4.14 2.15-.22.35-.69.45-1.04.23l-1.07-.68c-.35-.22-.45-.69-.23-1.04C1.58 2.91 3.84 1.76 6.39 1.76c4.01 0 7.28 2.94 7.28 6.71v6.86c0 .41.34.75.75.75h.5c.41 0 .75.34.75.75v1.25c0 .41-.34.75-.75.75H13.5c-.41 0-.75-.34-.75-.75v-.86c-.95.89-2.3 1.45-3.8 1.45-1.05 0-2.02-.27-2.67-.86zm3.32-.4c1.8 0 3.26-1.34 3.26-3s-1.46-3-3.26-3-3.26 1.34-3.26 3 1.46 3 3.26 3z"/>
      <path d="M2.5 19.5c5.5 3.5 13.5 3.5 19 0-.4-.5-1.2-.6-1.8-.2-4.5 2.8-10.9 2.8-15.4 0-.6-.4-1.4-.3-1.8.2z"/>
    </svg>
  );
}

export function GitIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.62 10.93L13.07 2.38a2.4 2.4 0 0 0-3.4 0L7.6 4.46l3.07 3.07a2.23 2.23 0 0 1 2.83 2.84l2.96 2.96a2.24 2.24 0 1 1-1.42 1.42l-2.78-2.78v4.1a2.24 2.24 0 1 1-2 0v-4.3L6.87 8.38l-4.5 4.5a2.4 2.4 0 0 0 0 3.4l8.55 8.55a2.4 2.4 0 0 0 3.4 0l7.3-7.3a2.4 2.4 0 0 0 0-3.6z"/>
    </svg>
  );
}

export function OpenAiIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.28 9.37a5.98 5.98 0 0 0-.5-4.8 6.08 6.08 0 0 0-6.47-2.88A6.06 6.06 0 0 0 10.8 0a6.04 6.04 0 0 0-5.75 4.14 6.05 6.05 0 0 0-3.92 2.85 6.08 6.08 0 0 0 .75 7.03 5.98 5.98 0 0 0 .5 4.8 6.08 6.08 0 0 0 6.47 2.88A6.06 6.06 0 0 0 13.2 24a6.04 6.04 0 0 0 5.75-4.14 6.05 6.05 0 0 0 3.92-2.85 6.08 6.08 0 0 0-.75-7.03zM13.2 22.4a4.54 4.54 0 0 1-2.9-.84l.15-.09 4.8-2.77a.8.8 0 0 0 .4-.69v-6.77l2.03 1.17v6.43a4.57 4.57 0 0 1-4.48 3.56zm-8.8-4.12a4.53 4.53 0 0 1-.65-2.97l.15.09 4.8 2.77c.25.14.4.4.4.69v6.77L7.07 24.45a4.57 4.57 0 0 1-2.67-6.17zM3.48 8.7a4.53 4.53 0 0 1 2.25-2.13v.18l-.02 5.54a.8.8 0 0 0 .4.69l5.86 3.39-2.03 1.17-5.57-3.21a4.57 4.57 0 0 1-.89-5.63zm14.18 3.32l-5.86-3.39 2.03-1.17 5.57 3.21a4.57 4.57 0 0 1-.89 5.63 4.53 4.53 0 0 1-2.25 2.13v-.18l.02-5.54a.8.8 0 0 0-.4-.69zm2.46-4.04l-.15-.09-4.8-2.77a.8.8 0 0 0-.4-.69V-2.3L16.93-3.47a4.57 4.57 0 0 1 4.48 3.56 4.53 4.53 0 0 1 .65 2.97l-.15-.09-4.8-2.77c-.25-.14-.4-.4-.4-.69V-7.26l2.03-1.17a4.57 4.57 0 0 1 2.67 6.17l-.15-.09zm-8.04 3.2l2.67 1.54v3.08l-2.67 1.54-2.67-1.54V12.5l2.67-1.54z"/>
    </svg>
  );
}

export function ApiIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4z" />
      <polyline points="7 8 10 4 14 4 17 8" />
      <line x1="12" y1="4" x2="12" y2="12" />
    </svg>
  );
}

export function JwtIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="16" r="1" />
    </svg>
  );
}

export function ExpressIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export function CodeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function getTechIcon(name, className = "w-3.5 h-3.5") {
  switch (name) {
    case 'Java':
      return <JavaIcon className={className} />;
    case 'C++':
      return <CppIcon className={className} />;
    case 'JavaScript':
      return <JavaScriptIcon className={className} />;
    case 'TypeScript':
      return <TypeScriptIcon className={className} />;
    case 'Node.js':
      return <NodeIcon className={className} />;
    case 'Express.js':
      return <ExpressIcon className={className} />;
    case 'Spring Boot':
      return <SpringBootIcon className={className} />;
    case 'REST APIs':
    case 'REST API Design':
      return <ApiIcon className={className} />;
    case 'JWT':
    case 'JWT Auth':
      return <JwtIcon className={className} />;
    case 'OpenAI API':
      return <OpenAiIcon className={className} />;
    case 'React.js':
      return <ReactIcon className={className} />;
    case 'Tailwind CSS':
      return <TailwindIcon className={className} />;
    case 'PostgreSQL':
      return <PostgresIcon className={className} />;
    case 'MySQL':
      return <MysqlIcon className={className} />;
    case 'MongoDB':
      return <MongoIcon className={className} />;
    case 'Redis':
      return <RedisIcon className={className} />;
    case 'Docker':
      return <DockerIcon className={className} />;
    case 'AWS':
      return <AwsIcon className={className} />;
    case 'Git':
      return <GitIcon className={className} />;
    case 'CI/CD':
      return <CodeIcon className={className} />;
    default:
      return <CodeIcon className={className} />;
  }
}
