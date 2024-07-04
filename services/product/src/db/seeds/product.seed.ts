import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Product } from 'src/product/product.entity';

export default class ProductSeeder implements Seeder {
  private products: Partial<Product>[] = [
    {
      name: 'Notebook Acer Nitro V RTX 3050 i5 8GB',
      description:
        'Placa de video RTX 3050 com 6GB, Tela 15.6” Full HD - 144 Hertz, Capacidade 512GB SSD, Processador Intel Core i5 13ª geração, Memória RAM 8GB ANV15-51-57WS',
      price: 2508,
      thumbnail:
        'https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2BThumb.png',
      images: [
        'https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2BThumb.png',
        'https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2B2.jpeg',
        'https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2B3.jpeg',
        'https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2B4.jpeg',
        'https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2B5.jpeg',
        'https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2B6.jpeg',
      ],
    },
    {
      name: 'Desktop Gamer Predator Orion RTX 3070',
      description:
        'NVIDIA® GeForce® RTX 3070 8 GB GDDR6 - 1TB SSD - 16 GB DDR4 3200mhz - Intel® Core™ i7-11700 11ª geração - PO5-620-BR13',
      price: 2998.8,
      thumbnail:
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%201.png',
      images: [
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%201.png',
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%202.webp',
      ],
    },
    {
      name: 'Desktop Acer Orion I5 RTX 3060 16GB',
      description:
        'NVIDIA® GeForce® RTX 3060 12 GB GDDR6 - 512 GB SSD - 16 GB DDR4 3200mhz - Intel® Core™ i5-11400 11ª geração - PO5-620-BR12',
      price: 3418.8,
      thumbnail:
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%202.png',
      images: [
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%202.png',
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%202.webp',
        'https://v2-allugator-images.s3.amazonaws.com/products/allu.nv_specs-acer_orion%20i5%203060%2016GB_PO5-620-BR12_900x900px.png',
      ],
    },
    {
      name: 'Desktop Acer Orion I7 RTX 3060 16GB',
      description:
        'NVIDIA® GeForce® RTX 3070 8 GB GDDR6 - 1TB SSD - 16 GB DDR4 3200mhz - Intel® Core™ i7-11700 11ª geração - PO5-620-BR13',
      price: 2638.8,
      thumbnail:
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%203.png',
      images: [
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%203.png',
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%202.webp',
        'https://v2-allugator-images.s3.amazonaws.com/products/allu.nv_specs-acer_orion%20i7%203060%2016GB_PO5-620-BR15_900x900px.png',
      ],
    },
    {
      name: 'Desktop Acer Orion I7 RTX 3080 32GB Linux',
      description:
        'NVIDIA® GeForce® RTX 3080 10 GB GDDR6 - 1 TB SSD - 32 GB RAM - Intel® Core™ i7-11700 11ª geração - PO5-620-BR14',
      price: 3058.8,
      thumbnail:
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%201.webp',
      images: [
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%201.webp',
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%202.webp',
      ],
    },
    {
      name: 'Notebook Acer Vero i5 16GB 512GB',
      description:
        'Processador Intel Core i5 11a gen, 16GB Memória RAM 512GB SSD',
      price: 1678.8,
      thumbnail:
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%201.webp',
      images: [
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%201.webp',
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%202.webp',
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%203.webp',
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%204.webp',
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%205.webp',
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%206.webp',
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%207.webp',
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%208.webp',
      ],
    },
    {
      name: 'Notebook Acer Predator Helios Neo RTX 4060 i7 16GB',
      description:
        'Placa de video RTX 4060, Tela: 16” - 165 Hertz, Capacidade 1TB SSD, Memória RAM 16GB, Processador Intel Core i7 13ª geração',
      price: 3828.01,
      thumbnail:
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20helios%20neo%20phn16-71-74ue.png',
      images: [
        'https://v2-allugator-images.s3.amazonaws.com/products/acer%20helios%20neo%20phn16-71-74ue.png',
      ],
    },
    {
      name: 'Notebook Acer Predator Triton RTX 3060 i7 16GB',
      description:
        'Placa de video RTX 3060, Tela 16”, Capacidade 512GB SSD, Memória RAM 16GB, Processador Intel Core i7 12º geração',
      price: 3948.01,
      thumbnail:
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/ACER+PREDATOR+300+SE/Acer+Predator+300+SE+Thumb.png',
      images: [
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/ACER+PREDATOR+300+SE/Acer+Predator+300+SE+Thumb.png',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/ACER+PREDATOR+300+SE/Acer+Predator+300+SE+2.jpg',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/ACER+PREDATOR+300+SE/Acer+Predator+300+SE+3.jpg',
        'https://v2-allugator-images.s3.amazonaws.com/products/allu.nv_specs-acer_triton_PT316-51s-72XA_900x900px.png',
      ],
    },
    {
      name: 'POLAR Pacer Pro + Assessoria',
      description: 'Relógio Esportivo com GPS avançado',
      price: 2868,
      thumbnail:
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+Thumb+2.png',
      images: [
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+Thumb+2.png',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+2.jpg',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+3.jpg',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+4.jpg',
      ],
    },
    {
      name: 'POLAR Pacer + Assessoria',
      description: 'Relógio Esportivo com GPS avançado',
      price: 2868,
      thumbnail:
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+Thumb+2.png',
      images: [
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+Thumb+2.png',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+2.jpg',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+3.jpg',
      ],
    },
    {
      name: 'POLAR Pacer Pro',
      description: 'Relógio Esportivo com GPS avançado',
      price: 1608,
      thumbnail:
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+Thumb+2.png',
      images: [
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+Thumb+2.png',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+2.jpg',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+3.jpg',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+4.jpg',
      ],
    },
    {
      name: 'POLAR Pacer',
      description: 'Relógio Esportivo com GPS',
      price: 4558.87,
      thumbnail:
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+Thumb+2.png',
      images: [
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+Thumb+2.png',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+2.jpg',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+3.jpg',
      ],
    },
    {
      name: 'iPhone 15 Pro Max 256GB',
      description: 'Chip A17 Pro com GPU de 6 núcleos',
      price: 4558.87,
      thumbnail:
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15+PRO+MAX/iPhone+15+Pro+Max+Thumb.png',
      images: [
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15+PRO+MAX/iPhone+15+Pro+Max+Thumb.png',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15+PRO+MAX/iPhone+15+Pro+Max+-+2.jpg',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15+PRO+MAX/iPhone+15+Pro+Max+-+3.jpg',
      ],
    },
    {
      name: 'iPhone 15 Pro 128GB',
      description: 'Chip A17 Pro com GPU de 6 núcleos',
      price: 3958.86,
      thumbnail:
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15+PRO/iPhone+15+Pro+Thumb.png',
      images: [
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15+PRO/iPhone+15+Pro+Thumb.png',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15+PRO/iPhone+15+Pro+-+2.jpg',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15+PRO/iPhone+15+Pro+-+3.jpg',
      ],
    },
    {
      name: 'iPhone 15 128GB',
      description:
        'Chip A16 Bionic com GPU de 5 núcleos -  - Sistema avançado de câmera dupla',
      price: 3118.8,
      thumbnail:
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15/iPhone+15+Thumb.png',
      images: [
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15/iPhone+15+Thumb.png',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15/iPhone+15++-+2.jpg',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15/iPhone+15++-+3.jpg',
      ],
    },
    {
      name: 'iPhone 14 Pro 128GB',
      description:
        '6.1 polegadas, A15 Bionic, Super Retina XDR OLED, Ceramic Glass, Câmera tripla, grande angular, ultra grande angular, telefoto + sensor LiDAR, 5G',
      price: 3238.8,
      thumbnail:
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14+PRO/iPhone+14+Pro+Thumb.png',
      images: [
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14+PRO/iPhone+14+Pro+Thumb.png',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14+PRO/iPhone+14+Pro+-+2.jpg',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14+PRO/iPhone+14+Pro+-+3.jpg',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14+PRO/iPhone+14+Pro+-+4.jpg',
      ],
    },
    {
      name: 'iPhone 14 Pro Max 128GB',
      description:
        'Tela - LTPO Super Retina XDR OLED, Tamanho 6.7, Resolução 2796 x 1290, Densidade 460 ppi, Proteção Scratch-resistant ceramic glass, oleophobic coating, Extras Always-on display, Dolby Vision, 120Hz e HDR 10 Plus, CPU Hexa-core (2x3.46 GHz Avalanche e 4x Blizzard)',
      price: 3718.87,
      thumbnail:
        'https://v2-allugator-images.s3.amazonaws.com/products/iPhone%2B14%2BPro%2BMax.png',
      images: [
        'https://v2-allugator-images.s3.amazonaws.com/products/iPhone%2B14%2BPro%2BMax.png',
      ],
    },
    {
      name: 'iPhone 14 128GB',
      description:
        '6.1 polegadas, A15, Super Retina XDR OLED, Ceramic Shield, Câmera dupla, grande angular, ultra grande angular, telefoto + sensor proximidade, 5G',
      price: 2362.8,
      thumbnail:
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14/iPhone+14+Thumb.png',
      images: [
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14/iPhone+14+Thumb.png',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14/iPhone+14++-+2.jpg',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14/iPhone+14++-+3.jpg',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14/iPhone+14++-+4.jpg',
      ],
    },
    {
      name: 'iPhone 13 128GB',
      description:
        '6.1 polegadas, A15 Bionic, Super Retina XDR OLED, Ceramic Glass, Câmera dupla, grande angular, ultra grande angular, 5G',
      price: 2218.8,
      thumbnail:
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+13/iPhone+13+Thumb.png',
      images: [
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+13/iPhone+13+Thumb.png',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+13/iPhone+13+-+2.jpg',
        'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+13/iPhone+13+-+3.jpg',
      ],
    },
    {
      name: 'Playstation 5',
      description:
        '4K, SSD, 825 Gb de armazenamento livre e PSN Essential inclusa',
      price: 2099,
      thumbnail:
        'https://v2-allugator-images.s3.amazonaws.com/products/PS5%2BThumb%20%281%29.png',
      images: [
        'https://v2-allugator-images.s3.amazonaws.com/products/PS5%2BThumb%20%281%29.png',
        'https://v2-allugator-images.s3.amazonaws.com/products/2.jpeg',
        'https://v2-allugator-images.s3.amazonaws.com/products/3.jpeg',
        'https://v2-allugator-images.s3.amazonaws.com/products/4.jpeg',
        'https://v2-allugator-images.s3.amazonaws.com/products/5.jpeg',
      ],
    },
  ];

  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const repository = dataSource.getRepository(Product);
    await repository.insert(this.products);
  }
}
