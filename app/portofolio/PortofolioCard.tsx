import Image from 'next/image';
import React from 'react';
import CategoryButton from './CategoryButton';
import styles from '../../app/portofolio/portofolioPage.module.css'

interface Category {
    id: number;
    name: string;
    href: string;
  }

type PortfolioCardProps = {
  thumbnail: string;
  category: Category[];
  title: string;
  description: string;
};

// Define the PortofolioCard component
const PortofolioCard: React.FC<PortfolioCardProps> = ({ thumbnail, category, title, description }) => {
  return (
    <div className="card w-full bg-gradient-to-br from-blue-950/10 to-blue-500/20 shadow-xl">
      <figure className="p-4">
        <Image src={thumbnail} alt="Portfolio Thumbnail" width={0} height={0} sizes="100vw" className="rounded-xl w-full h-auto" />
      </figure>
      

      <div className="m-4 p-4 border border-gray-500 rounded-xl">
        <div className='flex flex-wrap justify-start '>
            {category.map((cat) => (
                <CategoryButton category={cat.name} href={cat.href} variant={styles.btn_category_inside_card} />
            ))}  
        </div>
        <h2 className="card-title my-4">{title}</h2>
        <p className='text-gray-400'>{description}</p>
      </div>
    </div>
  );
};

export default PortofolioCard;
