import { useRouter } from 'next/router';

const SidebarLogo = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };
  
  return(
    <div className="ml-auto pr-2">
    <img className="flex justify-end h-10 ml-auto" src="/img/cinica-logo.png" alt="Cínica Logo" onClick={goHome} />
  </div>
  );
};

export default SidebarLogo