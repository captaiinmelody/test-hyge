'use client'

import Link from 'next/link';
import styles from '../../app/portofolio/portofolioPage.module.css'

type CategoryButtonProps = {
  category: string;
  href: string,
  variant: string,
}

const CategoryButton = ({category, href, variant}: CategoryButtonProps) => {
  return (
    <Link
      href={href}
      passHref
      className="flexCenter rounded-full mr-4 mb-4"
    >
      <label 
      className={`regular-14 py-2 px-4 rounded-full ${styles.btn_category_default} hover:bg-blue-500 ${variant}`}
      >
        {category}
      </label>
    </Link>
  )
}

export default CategoryButton