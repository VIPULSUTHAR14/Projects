import {clientReviews} from '../constants/index.js'

const Clients = () => {
  return (
    <section className='c-space my-20'>
      <p className="head-text">Here from my clients</p>
      <div className='client-container border-2 border-white-500 h-[20vh]' >
        <p className="text-violet-300 text-lg md:text-2xl font-semibold"></p>
      </div>
      {/* <div className="client-container">
        {clientReviews.map(({id , name , position , img , review})=>(
            <div key={id} className='client-review' >
                <div>
                    <p className="text-white font-light">{review}</p>
                    <div className="client-content">
                        <div className="flex gap-3">
                            <img src={img} alt="client" className="w-12 h-12 rounded-full" />
                            <div className='flex flex-col'>
                                <p className="text-white font-semibold">{name}</p>
                                <p className="text-white-500 md:text-base text-sm">{position}</p>
                            </div>
                        </div>
                        <div className='flex self-end items-center gap-3' >
                            {
                                Array.from({ length: 5 }).map((_, index) => (
                                    <img key={index} src="/assets/star.png" alt="star" className="w-6 h-6" />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div> */}
        {/* ))}
      </div> */}
    </section>
  )
}

export default Clients
