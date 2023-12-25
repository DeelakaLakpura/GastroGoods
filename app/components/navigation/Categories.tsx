'use client'

import { categories } from "@/utilities/Categories";
import Container from "../Container";
import Category from "./Category";
import { usePathname, useSearchParams } from "next/navigation";

const Categories = () => {
    const params = useSearchParams()
    const category = params?.get('category')
    const pathname = usePathname();
    const isMainPage = pathname === '/'

    if(!isMainPage) return null;

    return (<div className="bg-green-500">
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item) =>(
                    <Category
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                        selected= {category === item.label || (category === null && item.label === 'All')}
                    />
                ))}
            </div>
        </Container>
    </div> );
}
 
export default Categories;