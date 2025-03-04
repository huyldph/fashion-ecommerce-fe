import { useQuery } from '@tanstack/react-query';
import { getProducts, getCategories } from '../services/api';

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        staleTime: 300000,
        cacheTime: 3600000,
    });
};

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        staleTime: 300000,
        cacheTime: 3600000,
    });
}; 