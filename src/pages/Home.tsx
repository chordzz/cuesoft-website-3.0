import NavigationBar from '../components/navigation-bar/NavigationBar'

import HeroImg from '../assets/imgs/hero-img.svg'
import Unilever from '../assets/logos/unilever.svg'
import Clarks from '../assets/logos/clarks.svg'
import Ferrari from '../assets/logos/ferrari.svg'

import Build from '../assets/imgs/build-img.svg'
import Plan from '../assets/imgs/plan-img.svg'
import Iterate from '../assets/imgs/iterate-img.svg'
import Launch from '../assets/imgs/launch-img.svg'

import ConnectVector from '../assets/icons/vectors/connect-vector.svg'

import ConnectionScreen from '../assets/icons/vectors/connection-screen-vector.svg'
import HexagonMod from '../assets/icons/vectors/hexagon-mod-vector.svg'
import ChartVector from '../assets/icons/vectors/chart-vector.svg'
import TeamsVector from '../assets/icons/vectors/teams-vector.svg'

import BorderStyle from '../assets/imgs/border-style-img.svg'

import ReactIcon from '../assets/icons/react-icon.svg'
import NodeIcon from '../assets/icons/node-icon.svg'
import PhpIcon from '../assets/icons/php-icon.svg'
import FlutterIcon from '../assets/icons/flutter-icon.svg'
import AngularIcon from '../assets/icons/angular-icon.svg'
import AndroidIcon from '../assets/icons/android-icon.svg'
import JavaIcon from '../assets/icons/java-icon.svg'
import VueIcon from '../assets/icons/vue-icon.svg'
import AppleIcon from '../assets/icons/apple-icon.svg'

import WebDevImg from '../assets/imgs/web-dev-img.svg'
import MobileAppDevImg from '../assets/imgs/mobile-app-dev-img.svg'
import EnterpriseDevImg from '../assets/imgs/enterprise-dev-img.svg'

import ChevronRight from '../assets/icons/chevron-right-icon.svg'

import QuotesIcon from '../assets/icons/quotes-icon.svg'

import Avatar from '../assets/imgs/avatar.svg'

import CustomerReviewHolderImage from '../assets/imgs/customer-review-holder-img.svg'
import { Footer } from '../components/footer/Footer'


export const Home = () => {

  return (
    <div>
      <NavigationBar />
      <section id='hero' className='flex items-center min-h-full'>
        <div className="flex my-container flex-col md:flex-row mb-12">
          <div className="md:w-3/4 md:pt-28">
            <h1 className='text-textNormalSupLight text-[28px] md:text-6xl text-left font-bold leading-10'>
              Re-Imagine 
              <span className='text-brightRedLight'> Software.</span>
            </h1> 
            <h1 className='md:mt-4 text-textNormalSupLight text-[28px] md:text-6xl text-left font-bold'>Modernizing <span className='text-brightRedLight'>Businesses</span></h1>

            <p className='text-textNormalSupLight text-left mt-6 md:mt-9 text-[12px] md:text-2xl md:max-w-2xl'>Through our competent process of creating intelligent, custom-built software, we help forward-thinking organizations transform, scale, and achieve a competitive edge</p>
          </div>
          <div className="right-item mt-4 md:mt-0">
            <img src={HeroImg} alt="Hero" className="w-[400px] h-[320px] md:w-[600px] md:h-[550px]" />
          </div>
        </div>

      </section>

      <section id="clients" className='flex items-center bg-bgLight h-20 md:h-36'>
        {/* <div className="my-container bg-red-600 mt-8 min-h-full"> */}
        <div className="my-container flex justify-around items-center min-h-full">
            <div>
              <img src={Unilever} alt="Unilever" className='w-[60px] h-[30px] md:w-[150px] md:h-[90px]' />
            </div>

            <div>
              <img src={Ferrari} alt="Ferrari" className='w-[60px] h-[30px] md:w-[150px] md:h-[90px]'/>
            </div>

            <div>
              <img src={Clarks} alt="Clarks" className='w-[60px] h-[30px] md:w-[150px] md:h-[90px]'/>
            </div>

            <div>
              <img src={Ferrari} alt="Ferrari" className='w-[60px] h-[30px] md:w-[150px] md:h-[90px]'/>
            </div>
        </div>
        {/* </div> */}
      </section>

      <section id="process" className='min-h-screen py-12 md:py-6 md:flex md:items-center'>
        <div className="my-container text-center">
          <h3 className='text-brightRed text-[20px] md:text-3xl font-bold md:mb-8'>How Cuesoft Does It</h3>
          <div className="flex text-center flex-col flex-wrap md:flex-row md:flex-nowrap md:gap-x-16 justify-between">
            <div className='relative md:w-1/4'>
              <img src={Plan} alt="Plan" />
              <h5 className='text-[15px] md:text-xl text-brightRed font-bold'>Plan</h5>
              <p className='max-w-sm md:max-w-xs text-sm text-textNormal'>Once you contact us and we have your idea tabled. We would identify your  problems alongside fitting solutions, afterwards creating a schedule while assigning duties to our team members.  </p>
              <div className='hidden md:block absolute text-xs -right-14 top-56'>
                <img  src={ConnectVector} alt='Connecting Vector'/>
              </div>
            </div>

            <div className=' relative md:w-1/4 mt-8 md:mt-0'>
              <img src={Build} alt="Build" />
              <h5 className='text-[15px] md:text-xl text-brightRed font-bold'>Build</h5>
              <p className='max-w-sm md:max-w-xs text-sm text-textNormal'>Consequently, our team of engineers begin writing code for the complete system utilizing the necessary technologies.</p>
              <div className='hidden md:block absolute text-xs -right-14 top-56'>
                <img  src={ConnectVector} alt='Connecting Vector'/>
              </div>
            </div>

            <div className='relative md:w-1/4 mt-8 md:mt-0'>
              <img src={Launch} alt="Launch" />
              <h5 className='text-[15px] md:text-xl text-brightRed font-bold'>Launch</h5>
              <p className='max-w-sm md:max-w-xs text-sm text-textNormal'>Soon the beta live project is launched, and eventually, the live project is launched.</p>
              <div className='hidden md:block absolute text-xs -right-14 top-56'>
                <img  src={ConnectVector} alt='Connecting Vector'/>
              </div>
            </div>

            <div className=' relative md:w-1/4 mt-8 md:mt-0'>
              <img src={Iterate} alt="Iterate" />
              <h5 className='text-[15px] md:text-xl text-brightRed font-bold'>Iterate</h5>
              <p className='max-w-sm md:max-w-xs text-sm text-textNormal'>This is the testing phase. The product is now monitored for bugs and defaults and checked to see for necessary upgrades. </p>
            </div>
            
          </div>
        </div>
      </section>

      <section id="why" className='flex items-center'>
        <div className="my-container text-center py-20">
          <h3 className='text-brightRed text-[20px] md:text-3xl font-bold mb-20'>Why Cuesoft</h3>
          <div className="flex flex-col md:flex-row justify-around flex-wrap gap-y-24">
            <div className="relative">
              <div className="border-brightBlue rounded-3xl max-w-lg border p-8 py-12 pr-20 text-left relative overflow-hidden">
                <h3 className='text-brightBlue text-[12px] md:text-xl mb-4 font-bold'>Go From An Idea To A Published Site</h3>

                <p className='text-[10px] md:text-lg text-textNormal'>With your creatively thought out idea and you sending us a message, you have our world-class team develop your idea after a detailed study of your brand while targeting your business objectives.</p>

                <div className='absolute right-0 bottom-0 '>
                  <img src={BorderStyle} alt="Border Style" className='rounded-r-2xl' />
                </div>
              </div>
              <div className=' absolute -top-6 md:-top-8 left-0'>
                <img  src={ConnectionScreen} alt='Connection Screen' className="h-[45px] w-[45px] md:h-[62px] md:w-[62px]"/>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl max-w-lg border border-brightPurple p-8 py-12 pr-20 text-left relative overflow-hidden">
                <h3 className='text-brightPurple text-[12px] md:text-xl mb-4 font-bold'>Increased business efficiency</h3>
                <p className='text-[10px] md:text-lg text-textNormal'>With your creatively thought out idea and you sending us a message, you have our world-class team develop your idea after a detailed study of your brand while targeting your business objectives.</p>

                <div className='absolute right-0 bottom-0 '>
                  <img src={BorderStyle} alt="Border Style" className='rounded-r-2xl' />
                </div>
              </div>
              <div className=' absolute -top-6 md:-top-8 left-0'>
                  <img  src={HexagonMod} alt='Hexagon Shape' className="h-[45px] w-[45px] md:h-[62px] md:w-[62px]"/>
                </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl max-w-lg border border-brightPurpleLight p-8 py-12 pr-20 text-left relative overflow-hidden">
                <h3 className='text-brightPurpleLight text-[12px] md:text-xl mb-4 font-bold'>We are an excellent team</h3>
                <p className='text-[10px] md:text-lg'>With your creatively thought out idea and you sending us a message, you have our world-class team develop your idea after a detailed study of your brand while targeting your business objectives.</p>
                <div className='absolute right-0 bottom-0 '>
                  <img src={BorderStyle} alt="Border Style" className='rounded-r-2xl' />
                </div>
              </div>
              <div className=' absolute -top-6 md:-top-8 left-0'>
                <img  src={TeamsVector} alt='Teams Vector' className="h-[45px] w-[45px] md:h-[62px] md:w-[62px]"/>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl max-w-lg border border-brightBrown p-8 py-12 pr-20 text-left relative overflow-hidden">
                <h3 className='text-brightBrown text-[12px] md:text-xl mb-4 font-bold'>Our Products speaks volume</h3>
                <p className='text-[10px] md:text-lg'>With your creatively thought out idea and you sending us a message, you have our world-class team develop your idea after a detailed study of your brand while targeting your business objectives.</p>
                <div className='absolute right-0 bottom-0 '>
                  <img src={BorderStyle} alt="Border Style" className='rounded-r-2xl' />
                </div>
              </div>
              <div className=' absolute -top-6 md:-top-8 left-0'>
                <img  src={ChartVector} alt='Chart Vector' className="h-[45px] w-[45px] md:h-[62px] md:w-[62px]"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className='flex items-center md:min-h-screen bg-bgLight2'>
        <div className="my-container text-center py-14">
          <h3 className='text-brightRed text-[20px] md:text-4xl font-bold mb-12'>Our Tools</h3>

          <div className="">
            <p className='text-[15px] md:text-xl text-textBold mb-16'>
              We make use of awesome technologies to build advanced enterprise systems,challenging and innovative products. We are proud of our technical skills
            </p>

            <div className="flex flex-col md:flex-row justify-around">

              <div>
                <h4 className='text-textNormal text-[15px] md:text-xl mb-8 '>Frontend Development</h4>
                <div className='flex flex-row md:flex-col md:gap-8 justify-between text-[15px]'>
                  <div className='flex items-center'>
                    <img src={ReactIcon} alt="React" className='h-[30px] w-[35px]'/>
                    <span className='text-textBold ml-2 md:ml-4'>React</span>
                  </div>
                  <div className='flex items-center'>
                    <img src={VueIcon} alt="Vue" className='h-[30px] w-[35px]'/>
                    <span className='text-textBold ml-2 md:ml-4'>Vue.js</span>
                  </div>
                  <div className='flex items-center'>
                    <img src={AngularIcon} alt="Angular" className='h-[30px] w-[35px]'/>
                    <span className='text-textBold ml-2 md:ml-4'>Angular</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className='text-textNormal text-[15px] md:text-xl mt-12 mb-8 md:mt-0'>Backend Development</h4>

                <div className='flex flex-row md:flex-col md:gap-8 justify-between text-[15px]'>
                  <div className='flex items-center'>
                    <img src={NodeIcon} alt="Node" className='h-[30px] w-[35px]'/>
                    <span className='text-textBold ml-4'>Node</span>
                  </div>
                  <div className='flex items-center'>
                    <img src={PhpIcon} alt="Php" className='h-[30px] w-[35px]'/>
                    <span className='text-textBold ml-4'>Php</span>
                  </div>
                  <div className='flex items-center'>
                    <img src={JavaIcon} alt="Java" className='h-[30px] w-[35px]'/>
                    <span className='text-textBold ml-4'>Java</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className='text-textNormal text-[15px] md:text-xl mt-12 mb-8 md:mt-0'>Mobile Development</h4>
                <div className='flex flex-row md:flex-col md:gap-8 justify-between text-[15px]'>
                  <div className='flex items-center'>
                    <img src={AndroidIcon} alt="Android" className='h-[30px] w-[35px]'/>
                    <span className='text-textBold ml-4'>Android</span>
                  </div>
                  <div className='flex items-center'>
                    <img src={AppleIcon} alt="Apple" className='h-[30px] w-[35px]'/>
                    <span className='text-textBold ml-4'>Apple</span>
                  </div>
                  <div className='flex items-center'>
                    <img src={FlutterIcon} alt="Flutter" className='h-[30px] w-[35px]'/>
                    <span className='text-textBold ml-4'>Flutter</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="" className='md:h-36'>
      </section>

      <section id="services" className='flex items-center md:min-h-screen bg-bgLight2'>
        <div className="my-container py-20">
          <h3 className='text-brightRed text-[20px] md:text-4xl font-bold mb-12 text-center md:text-left'>Our Services</h3>            

          <div className="flex flex-col md:flex-row justify-around gap-6">

            <div className='bg-white shadow-sm card relative'>
              <div className='flex pb-4 gap-2 md:gap-0'>
                <div className='w-1/3'>
                  <img src={MobileAppDevImg} alt="Web Dev"  />
                </div>
                <div className='w-2/3'>
                  <h4 className='text-[15px] md:text-xl text-brightRedLight mb-2 md:mb-6 '>Mobile App Development</h4>
                  <p className='text-[12px] md:text-sm md:leading-6 text-textNormal'>
                    Two factors converge in the creation of extraordinary digital solutions: User experience and powerful backend technology. We arm you with both
                  </p>
                </div>
              </div>
              <div className='absolute bottom-5 right-5'>
                <img src={ChevronRight} alt="Chevron Right" />
              </div>
            </div>

            <div className='bg-white shadow-sm card'>
              <div className='flex pb-4 gap-2 md:gap-0'>
                <div className='w-1/3'>
                  <img src={WebDevImg} alt="Web Dev" />
                </div>
                <div className='w-2/3'>
                  <h4 className='text-[15px] md:text-xl text-brightRedLight mb-2 md:mb-6 '>Web Development</h4>
                  <p className='text-[12px] md:text-sm md:leading-6 text-textNormal'>
                    Arm yourself with a cutting edge website built to fit your needs today and to grow along with your organization
                  </p>
                </div>
              </div>
              <div className='absolute bottom-5 right-5'>
                <img src={ChevronRight} alt="Chevron Right" />
              </div>
            </div>

            <div className='bg-white shadow-sm card'>
              <div className='flex pb-4 gap-2 md:gap-0'>
                <div className='w-1/3'>
                  <img src={EnterpriseDevImg} alt="Web Dev" />
                </div>
                <div className='w-2/3'>
                  <h4 className='text-[15px] md:text-xl text-brightRedLight mb-2 md:mb-6 '>Enterprise Development</h4>
                  <p className='text-[12px] md:text-sm md:leading-6 text-textNormal'>
                    Delight your end users with handcrafted easy to use  software
                  </p>
                </div>
              </div>
              <div className='absolute bottom-5 right-5'>
                <img src={ChevronRight} alt="Chevron Right" className='hover:fill-current hover:text-brightRed' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="flex items-center md:min-h-screen">
        <div className="my-container text-center">
          <div className="relative">
            <h3 className='text-brightRed text-[18px] md:text-4xl font-bold mt-16 mb-8'>What our customers are saying about us</h3>
            <p className="text-[15px] md:text-xl">Here are some of the words and comments from our clients</p>
            <div className='hidden md:block md:absolute right-32 -top-20'>
              <img src={CustomerReviewHolderImage} alt="Review" />
            </div>
            
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-12 justify-around">

            <div className='bg-bgLightCard shadow-sm justify-center relative p-8 rounded overflow-hidden md:w-1/2 text-textDarkBlue'>
              <div className="flex gap-2 items-start">
                <img src={QuotesIcon} className="-mt-2" alt="Quotes Icon" />
                <p className=' text-[13px] md:text-lg text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium.
                </p>
              </div>

              <div className="flex gap-4 items-center mt-4">
                <img src={Avatar} alt="Quotes Icon" />
                <div className="text-left">
                  <h4 className='font-bold  text-[13px] md:text-lg'>Ayodele Joseph</h4>
                  <p className='text-sm'>Product Designer</p>
                </div>
              </div> 
            </div>

            <div className='bg-bgLightCard shadow-sm justify-center relative p-8 rounded overflow-hidden md:w-1/2 text-textDarkBlue'>
              <div className="flex gap-2 items-start">
                <img src={QuotesIcon} className="-mt-2" alt="Quotes Icon" />
                <p className=' text-[13px] md:text-lg text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium.
                </p>
              </div>

              <div className="flex gap-4 items-center mt-4">
                <img src={Avatar} alt="Quotes Icon" />
                <div className="text-left">
                  <h4 className='font-bold  text-[13px] md:text-lg'>Ayodele Joseph</h4>
                  <p className='text-sm'>Product Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
