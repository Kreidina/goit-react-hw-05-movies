import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import HashLoader from 'react-spinners/HashLoader';

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Suspense
        // fallback={
        //   <HashLoader
        //     color="#ff4800"
        //     size={70}
        //     cssOverride={{ margin: '80px auto' }}
        //   />
        // }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
