
import {ref} from 'vue';
import {useRouter} from 'vue-router';

import type { Product } from '@/interfaces/Product';

const products = ref<Product[]>([
    {
      id: 1,
      name: "Fabuloso",
      price: 25.5,
      isAvailable: true
    },
    {
      id: 2,
      name: "Coca",
      price: 30.5,
      isAvailable: false
    },
    {
      id: 3,
      name: "Pepsi",
      price: 18.5,
      isAvailable: true
    }
  ]);

const useProduct = () => {
    const router = useRouter();
    
    const name = ref<string>("");
    const price = ref<number>(0);
    const isAvailable = ref<boolean>(true);

    const submit = () => {
        const p = {
            id: products.value.length + 1,
            name: name.value,
            price: price.value,
            isAvailable: isAvailable.value,
        };
        console.log(p);
        products.value.push(p);
        router.push('/');
    }

    return {
        products,
        name,
        price,
        isAvailable,
        submit
    }
}

export default useProduct;