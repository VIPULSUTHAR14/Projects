const Footer = () => {
  return (
    <section className="c-space my-20 border-t border-black-300 pt-7 pb-3 flex items-start justify-center flex-col md:flex-row  gap-5 ">
      <div className="flex items-start flex-col gap-5">
        <p className="head-text">Vipul Suthar</p>
        <p className="text-red-400 font-bold text-lg" >Frontend Developer</p>
        <p className="text-cyan-300 w-fit  md:max-w-xs" >
          Thank you for visiting DevFolio. You can connect with me over socials.
          Have any Suggestions. Type it above
        </p>
        
      </div>
      <div className="flex items-start flex-col gap-5">
        <p className="head-text" >Contact info</p>
        <div className=" space-y-4 ">
          <div className="flex gap-2 ">
            <img src="/assets/gmail.png" alt="gmail"className="w-6 h-6" />
        <p className="text-purple-500">vipulsutharwork@gmail.com</p>
          </div>
          <div className="flex gap-2">
            <img src="/assets/location.png" alt="location" className="w-6 h-6" />
        <p className="text-purple-500 ">Udaipur,Rajasthan,India</p>
          </div>
          <div className="flex gap-2 flex-row items-center justify-start">
            {/* <a href={console.log("gmail")} className="">
              <img src="/assets/gmail.png" alt="gmail" className="w-6 h-6 scale-animation hover:bg-black-500" />
            </a> */}
            <a href="https://github.com/VIPULSUTHAR14" target="_blank" >
            <img src="/assets/github.png" alt="github" className="w-12 h-12 scale-animation" />
            </a>
            <a href="https://www.linkedin.com/in/vipul-suthar-172028333/" target="_blank">
              <img src="/assets/Linked-in.png" alt="Linked-in" className="w-10 h-10 scale-animation" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
