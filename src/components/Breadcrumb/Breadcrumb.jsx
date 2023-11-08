// eslint-disable-next-line react/prop-types
const Breadcrumb = ({ showDivider, separator, links, children }) => {
  const className = ["inline-flex items-center"];
  if (showDivider) {
    className.push("border-b border-gray-300 pb-5 ");
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-col flex-wrap sm:flex-row sm:justify-between sm:items-center"
    >
      <div
        className={`w-full flex justify-between px-6 py-4 ${className.join(
          " "
        )}`}
      >
        <ol className="flex items-center mt-4 md:mt-0">
          {links.map((link, index) => (
            <li key={index} className="group">
              <div className="flex items-center">
                <p
                  className={`${
                    link.current ? "text-blue-400" : "text-gray-500 last:hidden"
                  } whitespace-nowrap font-medium text-sm cursor-pointer`}
                >
                  <a
                    href={link.href}
                    aria-current={link.current ? "page" : undefined}
                  >
                    <span id={`${link.name}-${index}`}>
                      {link.name.length > 20 ? (
                        <>
                          {link.name.slice(0, 25)}
                          <span className="text-md text-blue-400 font-semibold text-[18px] pl-[2px] leading-none">
                            ...
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="capitalize">{link.name}</span>
                        </>
                      )}
                    </span>
                  </a>
                </p>
                <span className="group-last:hidden px-2">
                  {separator === "arrow" ? " > " : " / "}
                </span>
              </div>
            </li>
          ))}
        </ol>
        <div>{children}</div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
