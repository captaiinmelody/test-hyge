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
    <div className="card w-full p-2 bg-gradient-to-br from-blue-500/10 via-blue-600/10 to-sky-500/10 rounded-2xl border border-white border-opacity-20 flex-col">
        <Image src={thumbnail} alt="Portfolio Thumbnail" width={0} height={0} sizes="100vw" className="rounded-xl w-full h-auto mb-4" />
      <div className="p-4 bg-gradient-to-t from-black/5 to-white/5 rounded-lg border border-white border-opacity-20">
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
