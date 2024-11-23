import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <>
    <div className='grid md:grid-cols-2 h-[800px]'>
        <div className=' p-4  '>
            <p className='flex flex-wrap md:text-[56px] text-[40px] md:mx-20  md:mt-40 mt-10 font-bold'>Learn new skills online with ease</p>
            <p className='md:mx-20 md:mt-8 '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        <div className='flex flex-wrap md:ml-[80px] mt-10 gap-4'>
            <Link className='p-2 px-4 bg-black text-white rounded-[5px]' href={"/"}>Start learning now</Link>
            <Link className='p-2 px-4 bg-white border-2 border-black rounded-[5px]' href={"/"}>Explore courses</Link>
        </div>
        </div>
        <div className=''>
            <Image src={"/Image.png"} className='md:ml-[80px]' alt='Profile Images' width={590} height={600}/>
        </div>
    </div>
    <div className='md:h-[228px] bg-[#F7F7F7] grid md:grid-cols-3'>
        <div className='md:col-span-1 md:my-20 my-5 m-4'>
                <p className='md:text-2xl text-xl  ml-2 font-bold'>Trusted by 2000+ companies worldwide.</p>
        </div>
        <div className='col-span-2 md:my-16 '>
            <Image src={"/Logos.png"} alt='Logos' width={880} height={56}/>
        </div>
    </div>
    <div className='text-center md:m-20 m-10'>
        <p className='md:text-5xl text-3xl font-bold'>Explore Courses By Category</p>
        <br/>
        <p>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
    </div>
    <div className='flex flex-wrap md:gap-10 md:gap-y-14 gap-y-3 md:ml-5 mt-8'>
        <div className='w-[410px] h-[132px] rounded-md bg-[#F7F7F7]'>
        <div className='flex m-4'>
            <Image src={"/Frame 292.svg"} alt='Team' height={100} width={100}/>
            <div>
            <p className='text-[20px] font-semibold ml-3 mt-5'>Design & Development</p>
            <p className=' ml-3'>50+ Courses Available</p>
            </div>
        </div>
        </div>
        <div className='w-[410px] h-[132px] rounded-md bg-[#F7F7F7]'>
        <div className='flex m-4'>
            <Image src={"/Frame 292.png"} alt='Team' height={100} width={100}/>
            <div>
            <p className='text-[20px] font-semibold ml-3 mt-5'>Marketing</p>
            <p className=' ml-3'>50+ Courses Available</p>
            </div>
        </div>
        </div>
        <div className='w-[410px] h-[132px] rounded-md bg-[#F7F7F7]'>
        <div className='flex m-4'>
            <Image src={"/D.png"} alt='Team' height={100} width={100}/>
            <div>
            <p className='text-[20px] font-semibold ml-3 mt-5'>Development</p>
            <p className=' ml-3'>50+ Courses Available</p>
            </div>
        </div>
        </div>
        <div className='w-[410px] h-[132px] rounded-md bg-[#F7F7F7]'>
        <div className='flex m-4'>
            <Image src={"/Comm.png"} alt='Team' height={100} width={100}/>
            <div>
            <p className='text-[20px] font-semibold ml-3 mt-5'>Communication</p>
            <p className=' ml-3'>50+ Courses Available</p>
            </div>
        </div>
        </div>
        <div className='w-[410px] h-[132px] rounded-md bg-[#F7F7F7]'>
        <div className='flex m-4'>
            <Image src={"/DM.png"} alt='Team' height={100} width={100}/>
            <div>
            <p className='text-[20px] font-semibold ml-3 mt-5'>Digital Marketing</p>
            <p className=' ml-3'>50+ Courses Available</p>
            </div>
        </div>
        </div>
        <div className='w-[410px] h-[132px] rounded-md bg-[#F7F7F7]'>
        <div className='flex m-4'>
            <Image src={"/SD.png"} alt='Team' height={100} width={100}/>
            <div>
            <p className='text-[20px] font-semibold ml-3 mt-5'>Self Development</p>
            <p className=' ml-3'>50+ Courses Available</p>
            </div>
        </div>
        </div>
        <div className='w-[410px] h-[132px] rounded-md bg-[#F7F7F7]'>
        <div className='flex m-4'>
            <Image src={"/B.png"} alt='Team' height={100} width={100}/>
            <div>
            <p className='text-[20px] font-semibold ml-3 mt-5'>Business</p>
            <p className=' ml-3'>50+ Courses Available</p>
            </div>
        </div>
        </div>
        <div className='w-[410px] h-[132px] rounded-md bg-[#F7F7F7]'>
        <div className='flex m-4'>
            <Image src={"/F.png"} alt='Team' height={100} width={100}/>
            <div>
            <p className='text-[20px] font-semibold ml-3 mt-5'>Finance</p>
            <p className=' ml-3'>50+ Courses Available</p>
            </div>
        </div>
        </div>
        <div className='w-[410px] h-[132px] rounded-md bg-[#F7F7F7]'>
        <div className='flex m-4'>
            <Image src={"/C.png"} alt='Team' height={100} width={100}/>
            <div>
            <p className='text-[20px] font-semibold ml-3 mt-5'>Consulting</p>
            <p className=' ml-3'>50+ Courses Available</p>
            </div>
        </div>
        </div>
    </div>
    <div className='m-20'>
    <Link className='p-2 md:ml-[500px] ml-[35px] px-4 bg-white border-2 border-black rounded-[5px]' href={"/"}>View All Courses</Link>
    </div>
    <div className='md:h-[388px] '>
        <div className='md:m-20 m-10 text-center'>
            <p className='md:text-5xl text-3xl font-bold'>Our Achivements</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <div className='grid md:grid-cols-2 mt-10'>
                <div className='flex flex-wrap md:gap-[250px] gap-[155px]'>
                    <div>
                        <p className='font-bold md:text-[40px] text-[20px]'>+200</p>
                        <p>Courses</p>
                    </div>
                    <div>
                    <p className='font-bold md:text-[40px] text-[20px]'>50K</p>
                    <p>Mentors</p>
                    </div>
                </div>
                <div className='flex flex-wrap md:gap-[250px] md:ml-28 mt-4 md:mt-0 gap-[140px]'>
                    <div >
                        <p className='font-bold md:text-[40px] text-[20px]'>370K</p>
                        <p>Students</p>
                    </div>
                    <div>
                    <p className='font-bold md:text-[40px] text-[20px]'>100+</p>
                    <p>Recognition</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='text-center'>
        <p className='md:text-[56px] text-[32px] font-bold'>Courses</p>
        <p>Your Ultimate Guide to learning</p>
        <div className='text-center mt-11'>
            <Link className='font-medium m-5' href={"/"}>Popular</Link>
            <Link className='font-medium m-5' href={"/"}>Recommended</Link>
            <Link className='font-medium m-5' href={"/"}>Best Price</Link>
        </div>
    </div>
    <div className='flex flex-wrap md:ml-8 m-5 gap-5'>
        <div className='h-[570px] bg-[#F7F7F7] w-[416px]'>
            <Image src={"/1.png"} alt='Image' width={416} className='rounded-[5px]' height={300}/>
            <br/>
            <div className='flex justify-between mx-5'>
                <p>Design</p>
                <p className='flex'><Image src={"/Star 1.png"} alt='Star' height={24} width={24}/>5.0</p>
            </div>
            <div className='mx-5'>
                <p className='font-bold text-2xl mt-4'>UI/UX Design 201</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            <div className='flex flex=wrap mx-5'>
            <Link className='p-2 px-4 mt-10 border-2 border-black rounded-[5px]'  href={"/"}>Enroll Now</Link>
            <p className='font-medium text-2xl mt-10 ml-10'>$400</p>
            </div>
        </div>
         <div className='h-[570px] bg-[#F7F7F7] w-[416px] '>
            <Image src={"/2.png"} alt='Image' className='rounded-[5px]' width={416} height={300}/>
            <br/>
            <div className='flex justify-between mx-5'>
                <p>Programmimg</p>
                <p className='flex'><Image src={"/Star 1.png"} alt='Star' height={24} width={24}/>5.0</p>
            </div>
            <div className='mx-5'>
                <p className='font-bold text-2xl mt-4'>Introduction to Python</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            <div className='flex flex=wrap mx-5'>
            <Link className='p-2 px-4 mt-10 border-2 border-black rounded-[5px]' href={"/"}>Enroll Now</Link>
            <p className='font-medium text-2xl mt-10 ml-10'>$400</p>
            </div>
        </div>
        <div className='h-[570px] bg-[#F7F7F7] w-[416px] '>
            <Image src={"/3.png"} alt='Image' className='rounded-[5px]' width={416} height={300}/>
            <br/>
            <div className='flex justify-between mx-5'>
                <p>Business</p>
                <p className='flex'><Image src={"/Star 1.png"} alt='Star' height={24} width={24}/>5.0</p>
            </div>
            <div className='mx-5'>
                <p className='font-bold text-2xl mt-4'>Data Analysis for Beginners</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            <div className='flex flex=wrap mx-5'>
            <Link className='p-2 px-4 mt-10 border-2 border-black rounded-[5px]' href={"/"}>Enroll Now</Link>
            <p className='font-medium text-2xl mt-10 ml-10'>$400</p>
            </div>
        </div>
        <div className='h-[570px] bg-[#F7F7F7] w-[416px] '>
            <Image src={"/4.png"} alt='Image' className='rounded-[5px]' width={416} height={300}/>
            <br/>
            <div className='flex justify-between mx-5'>
                <p>Art</p>
                <p className='flex'><Image src={"/Star 1.png"} alt='Star' height={24} width={24}/>5.0</p>
            </div>
            <div className='mx-5'>
                <p className='font-bold text-2xl mt-4'>Art Specialization</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            <div className='flex flex=wrap mx-5'>
            <Link className='p-2 px-4 mt-10 border-2 border-black rounded-[5px]' href={"/"}>Enroll Now</Link>
            <p className='font-medium text-2xl mt-10 ml-10'>$400</p>
            </div>
        </div>
         <div className='h-[570px] bg-[#F7F7F7] w-[416px] '>
            <Image src={"/5.png"} alt='Image' className='rounded-[5px]' width={416} height={300}/>
            <br/>
            <div className='flex justify-between mx-5'>
                <p>Law</p>
                <p className='flex'><Image src={"/Star 1.png"} alt='Star' height={24} width={24}/>5.0</p>
            </div>
            <div className='mx-5'>
                <p className='font-bold text-2xl mt-4'>Rule Of Law</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            <div className='flex flex=wrap mx-5'>
            <Link className='p-2 px-4 mt-10 border-2 border-black rounded-[5px]' href={"/"}>Enroll Now</Link>
            <p className='font-medium text-2xl mt-10 ml-10'>$400</p>
            </div>
        </div>
        <div className='h-[570px] bg-[#F7F7F7] w-[416px] '>
            <Image src={"/6.png"} alt='Image' className='rounded-[5px]' width={416} height={300}/>
            <br/>
            <div className='flex justify-between mx-5'>
                <p>Tech</p>
                <p className='flex'><Image src={"/Star 1.png"} alt='Star' height={24} width={24}/>5.0</p>
            </div>
            <div className='mx-5'>
                <p className='font-bold text-2xl mt-4'>Introduction To Webflow</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            <div className='flex flex=wrap mx-5'>
            <Link className='p-2 px-4 mt-10 border-2 border-black rounded-[5px]' href={"/"}>Enroll Now</Link>
            <p className='font-medium text-2xl mt-10 ml-10'>$400</p>
            </div>
        </div>
    </div>
    <div className='m-20'>
    <Link className='p-2 md:ml-[500px] ml-[30px] px-4 bg-white border-2 border-black rounded-[5px]' href={"/"}>View All Courses</Link>
    </div>
    <div className='text-center md:m-20 m-10'>
        <p className='md:text-5xl text-3xl font-bold'>Our team</p>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    <div className='flex flex-wrap md:h-[482px] m-16 '>
        <div className='h-[273px] w-[394px] text-center'>
            <Image src={"/11.png"} alt='Pic' className='md:ml-40 ml-20' height={80} width={80}/>
            <p className='font-semibold'>James Nduku</p>
            <p>Marketing Coordinator</p>
            <div className='flex flex-wrap justify-center mt-10'>
                <Image src={"/LinkedIn.png"} alt='LinkedIn' height={24} width={24}/>
                <Image src={"/Twitter.png"} alt='Twitter' height={24} width={24}/>
                <Image src={"/Dribble.png"} alt='Dribble' height={24} width={24}/>
            </div>
        </div>
        <div className='h-[273px] w-[394px] text-center'>
            <Image src={"/111.png"} alt='Pic' className='md:ml-40 ml-20' height={80} width={80}/>
            <p className='font-semibold'>Joseph Munyambu</p>
            <p>Nursing Assistant</p>
            <div className='flex flex-wrap justify-center mt-10'>
                <Image src={"/LinkedIn.png"} alt='LinkedIn' height={24} width={24}/>
                <Image src={"/Twitter.png"} alt='Twitter' height={24} width={24}/>
                <Image src={"/Dribble.png"} alt='Dribble' height={24} width={24}/>
            </div>
        </div>
        <div className='h-[273px] w-[394px] text-center'>
            <Image src={"/222.png"} alt='Pic' className='md:ml-40 ml-20' height={80} width={80}/>
            <p className='font-semibold'>Joseph Ngumbau</p>
            <p>Medical Assistant</p>
            <div className='flex flex-wrap justify-center mt-10'>
                <Image src={"/LinkedIn.png"} alt='LinkedIn' height={24} width={24}/>
                <Image src={"/Twitter.png"} alt='Twitter' height={24} width={24}/>
                <Image src={"/Dribble.png"} alt='Dribble' height={24} width={24}/>
            </div>
        </div>
        <div className='h-[273px] w-[394px] text-center'>
            <Image src={"/333.png"} alt='Pic' className='md:ml-40 ml-20' height={80} width={80}/>
            <p className='font-semibold'>Erick Kipkemboi</p>
            <p>Web Designer</p>
            <div className='flex flex-wrap justify-center mt-10'>
                <Image src={"/LinkedIn.png"} alt='LinkedIn' height={24} width={24}/>
                <Image src={"/Twitter.png"} alt='Twitter' height={24} width={24}/>
                <Image src={"/Dribble.png"} alt='Dribble' height={24} width={24}/>
            </div>
        </div>
        <div className='h-[273px] w-[394px] text-center'>
            <Image src={"/444.png"} alt='Pic' className='md:ml-40 ml-20' height={80} width={80}/>
            <p className='font-semibold'>Stephen Kerubo</p>
            <p>President of Sales</p>
            <div className='flex flex-wrap justify-center mt-10'>
                <Image src={"/LinkedIn.png"} alt='LinkedIn' height={24} width={24}/>
                <Image src={"/Twitter.png"} alt='Twitter' height={24} width={24}/>
                <Image src={"/Dribble.png"} alt='Dribble' height={24} width={24}/>
            </div>
        </div>
        <div className='h-[273px] w-[394px] text-center'>
            <Image src={"/555.png"} alt='Pic' className='md:ml-40 ml-20' height={80} width={80}/>
            <p className='font-semibold'>John Leboo</p>
            <p>Dog Trainer</p>
            <div className='flex flex-wrap justify-center mt-10'>
                <Image src={"/LinkedIn.png"} alt='LinkedIn' height={24} width={24}/>
                <Image src={"/Twitter.png"} alt='Twitter' height={24} width={24}/>
                <Image src={"/Dribble.png"} alt='Dribble' height={24} width={24}/>
            </div>
        </div>
    </div>
    <div className=' md:m-20 m-10 text-center md:text-left'>
        <p className='md:text-5xl text-3xl font-bold'>Customer testimonials</p>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    <div className='flex flex-wrap m-10 md:gap-20 gap-10'>
        <div className='w-[362px] md:h-[320px] border-2 border-black'>
            <div className='m-10'>
            <Image src={"/Stars.png"} alt='Stars' height={18} width={116}/>
            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
            </div>
            <div className='flex m-10'>
            <Image src={"/222.png"} alt='Team' height={56} width={56} className='rounded-full'/>
            <div>
            <p className='font-semibold ml-3'>James Nduku</p>
            <p className=' ml-3'>Software Developer</p>
            </div>
        </div>
        </div>
        <div className='w-[362px] md:h-[320px] border-2 border-black'>
            <div className='m-10'>
            <Image src={"/Stars.png"} alt='Stars' height={18} width={116}/>
            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
            </div>
            <div className='flex m-10'>
            <Image src={"/11.png"} alt='Team' height={56} width={56} className='rounded-full'/>
            <div>
            <p className='font-semibold ml-3'>Erick Kipkemboi</p>
            <p className=' ml-3'>Scrum Master</p>
            </div>
        </div>
        </div>
        <div className='w-[362px] md:h-[320px] border-2 border-black'>
            <div className='m-10'>
            <Image src={"/Stars.png"} alt='Stars' height={18} width={116}/>
            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
            </div>
            <div className='flex m-10'>
            <Image src={"/555.png"} alt='Team' height={56} width={56} className='rounded-full'/>
            <div>
            <p className='font-semibold ml-3'>Stephen Kerubo</p>
            <p className=' ml-3'>UI/UX Designer</p>
            </div>
        </div>
        </div>
    </div>
    <div className='m-10 grid grid-cols-2'>
        <Image src={"/Slider Dots.png"} alt='Dots' height={8} width={72}/>
        <Image src={"/Slider Buttons.png"} className='md:ml-[500px] ml-[50px]' alt='Buttons' height={48} width={111}/>
    </div>
    <div className='md:h-[684px]'>
        <div className='md:m-20'>
            <div className='grid md:grid-cols-2'>
                    <div className='flex flex-wrap'>
                        <p className='text-[18px] ml-[40px] md:ml-0 mb-5 md:mb-0 font-semibold'>Subscribe to our newsletter</p>
                        <p className='mb-5 md:mb-0 ml-[40px] md:ml-0 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='flex flex-wrap md:ml-10'>
                        <input type='email' className='md:w-[265px] w-[350px] mb-5 md:mb-0 ml-[10px] md:ml-0  h-[48px] border-2 rounded-[5px] border-black' placeholder=' Enter Your Email.'/>
                        <button className='h-[48px] md:w-[119px] w-[350px] mb-5 md:mb-0 ml-[10px] md:ml-5 border-2 rounded-[5px] border-black'>Subscribe</button>
                        <p className='text-xs ml-[30px] md:ml-0  md:text-base'>By subscribing you agree to with our Privacy Policy</p>
                    </div>
            </div>
            <div className='grid md:grid-cols-4 text-center mt-20'>
                <div className='flex justify-center h-[40px]'>
                <Image src={"/Frame 1.png"} alt='Logo' width={32} height={30}/>
                <p className='font-bold text-2xl ml-2'>Ddsgnr</p>
                </div>
                <div className='md:h-[225px] w-[250px] ml-[80px] md:ml-0 mt-4 md:mt-0'>
                    <ul className=''>
                        <li className='font-semibold text-base'>Courses</li>
                        <li className='mt-7'>Business</li>
                        <li className='mt-7'>Development</li>
                        <li className='mt-7'>Technology</li>
                        <li className='mt-7'>Design</li>
                        <li className='mt-7'>Programming</li>
                    </ul>
                </div>
                <div className='md:h-[225px] w-[250px] ml-[80px] md:ml-0 mt-4 md:mt-0'>
                    <ul className=''>
                        <li className='font-semibold text-base'>Resources</li>
                        <li className='mt-7'>Career</li>
                        <li className='mt-7'>Resume</li>
                        <li className='mt-7'>Learning</li>
                        <li className='mt-7'>Interview Preparation</li>
                        <li className='mt-7'>Jobs</li>
                    </ul>
                </div>
                <div className='h-[225px] w-[250px] ml-[80px] md:ml-0 mt-4 md:mt-0'>
                    <ul className=''>
                        <li className='font-semibold text-base'>About Us</li>
                        <li className='mt-7'>Contact</li>
                        <li className='mt-7'>Help/Support</li>
                        <li className='mt-7'>FAQ</li>
                        <li className='mt-7'>Terms and Conditions</li>
                        <li className='mt-7'>Partners</li>
                    </ul>
                </div>
            </div>
            <div className='mt-[100px] text-center'>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <div className='md:flex md:flex-wrap md:justify-between mt-10'>
                    <div className='md:flex md:flex-wrap gap-5 '>
                        <p>2025 Ddsgnr. All right reserved.</p>
                        <p className='underline'>Privicy Policy</p>
                        <p className='underline'>Terms of Service</p>
                        <p className='underline'>Cookies Setting</p>
                    </div>
                    <div className='flex justify-center  mt-5 md:mt-0'>
                        <Image src={"/Social Links.png"} alt='Social' height={24} width={132}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero