'use client'
// Import necessary modules and types
import React, { useEffect, useState } from 'react';
import { OUR_PORTOFOLIO_CATEGORY, OUR_PORTOFOLIO } from '@/constants';
import CategoryButton from '@/components/portofolio/CategoryButton';
import PortofolioCard from '@/components/portofolio/PortofolioCard';
import Button from '@/components/Button';
import { useRouter, usePathname } from 'next/navigation';
import ButtonText from '@/components/ButtonText';
import TitleText from '@/components/TitleText';
import Link from 'next/link';

// Define the component
const Portofolio: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState('#all');
  const [portofolioData, setPortofolioData] = useState(OUR_PORTOFOLIO);
  const [displayData, setDisplayData] = useState(0);

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if(pathname === '/portofolio' && displayData === 0){
        setDisplayData(10)
    } else if(displayData === 0){
        setDisplayData(4)
    }
    fetchData(currentCategory);
  }, [currentCategory]);

  function handleClick(href: string) {
    setCurrentCategory(href);
  }

  // Example function to filter data based on category
  const fetchData = (category: string) => {
    if (category === '#all') {
      setPortofolioData(OUR_PORTOFOLIO);
    } else {
      const filteredData = OUR_PORTOFOLIO.filter((item) =>
        item.category.some((cat) => cat.href === category)
      );
      setPortofolioData(filteredData);
    }
  };

  return (
    <div>
        {pathname !== '/' && <ButtonText label='Go Back' icon='/ph_arrow-left.svg' onClick={router.back} />}
        <TitleText href='/portofolio' titleDefault='Our' titleColor='Clients' description='As your digital partner, we collaborate with you to drive innovation, stay ahead of the curve, and deliver real impact for your business.' />
      <div className='flexStart overflow-x-auto'>
        {OUR_PORTOFOLIO_CATEGORY.map((p) => (
          <button
            key={p.id}
            type='button'
            onClick={() => {
              handleClick(p.href);
            }}
          >
            <CategoryButton category={p.name} href={p.href} variant={p.href === currentCategory ? 'bg-blue-500' : 'bg-gray-700/50'} />
          </button>
        ))}
      </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16'>
            {portofolioData.slice(0, displayData).map((item) => (
              <Link href={`/portofolio/${encodeURIComponent(item.id)}`} key={item.id} >
                <PortofolioCard thumbnail={item.thumbnail} category={item.category} title={item.title} description={item.description} />
              </Link>
            ))}
        </div>
        
        {displayData < OUR_PORTOFOLIO.length && pathname !== '/portofolio'
        && <div className='flexStart mt-12'>
            <Button 
                type='button' 
                title='Load More' 
                onClick={() => {
                    if(displayData < 6){
                        setDisplayData(displayData + 2);
                    } else {
                        router.push('/portofolio')
                    }
                }} 
                variant='bg-gray-500/60  mr-4'/>
            <div className='w-full h-0.5 bg-gradient-to-r from-gray-500 to-gray-700/5'></div>
        </div> 
        }
    </div>
  );
};

export default Portofolio;