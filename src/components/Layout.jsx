import IndexSectionCustomComponents1 from './custom-components/IndexSectionCustomComponents1';
import IndexSectionCustomComponents3 from './custom-components/IndexSectionCustomComponents3';

const Layout = ({ children }) => {
  return (
    <>
      <IndexSectionCustomComponents1 />
      <main>
        {children}
      </main>
      <IndexSectionCustomComponents3 />
    </>
  );
};

export default Layout;