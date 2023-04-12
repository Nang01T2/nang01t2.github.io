/* 
This component is used in the layout to contain everything including header, main and footer
*/

export default function AppContainer({ children }) {
  return <div>{children}</div>;

  // return (
  //   <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
  //     {children}
  //   </div>
  // );
}
