import React from 'react';

interface PanelProps {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  panelClassName?: string;
}

function Panel({
  header,
  body,
  footer,
  headerClassName = '',
  bodyClassName = '',
  footerClassName = '',
  panelClassName = 'w-[30vw]',
}: PanelProps) {
  return (
    <section
      className={`py-16 bg-[#69C0C9] h-full flex flex-col items-center justify-between gap-y-5 ${panelClassName}`}
    >
      <div className={`${headerClassName}`}>{header}</div>
      <div
        className={`flex flex-col justify-around h-full items-center ${bodyClassName}`}
      >
        {body}
      </div>
      <div className={`${footerClassName}`}>{footer}</div>
    </section>
  );
}

export default Panel;
