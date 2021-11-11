import { useRouter } from 'next/router';

const SidebarLogo = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };
  
  return(
    <div className="px-4">
      <img className="m-auto" src="/img/cinica-logo.png" alt="Cínica Logo" onClick={goHome} />
    </div>
  );
};

export default SidebarLogo