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
      thumbnail: '',
    },
    {
      name: 'Desktop Gamer Predator Orion RTX 3070',
      description:
        'NVIDIA® GeForce® RTX 3070 8 GB GDDR6 - 1TB SSD - 16 GB DDR4 3200mhz - Intel® Core™ i7-11700 11ª geração - PO5-620-BR13',
      price: 2998.8,
      thumbnail: '',
    },
    {
      name: 'Desktop Acer Orion I5 RTX 3060 16GB',
      description:
        'NVIDIA® GeForce® RTX 3060 12 GB GDDR6 - 512 GB SSD - 16 GB DDR4 3200mhz - Intel® Core™ i5-11400 11ª geração - PO5-620-BR12',
      price: 3418.8,
      thumbnail: '',
    },
    {
      name: 'Desktop Acer Orion I7 RTX 3060 16GB',
      description:
        'NVIDIA® GeForce® RTX 3070 8 GB GDDR6 - 1TB SSD - 16 GB DDR4 3200mhz - Intel® Core™ i7-11700 11ª geração - PO5-620-BR13',
      price: 2638.8,
      thumbnail: '',
    },
    {
      name: 'Desktop Acer Orion I7 RTX 3080 32GB Linux',
      description:
        'NVIDIA® GeForce® RTX 3080 10 GB GDDR6 - 1 TB SSD - 32 GB RAM - Intel® Core™ i7-11700 11ª geração - PO5-620-BR14',
      price: 3058.8,
      thumbnail: '',
    },
    {
      name: 'Notebook Acer Vero i5 16GB 512GB',
      description:
        'Processador Intel Core i5 11a gen, 16GB Memória RAM 512GB SSD',
      price: 1678.8,
      thumbnail: '',
    },
    {
      name: 'Notebook Acer Predator Helios Neo RTX 4060 i7 16GB',
      description:
        'Placa de video RTX 4060, Tela: 16” - 165 Hertz, Capacidade 1TB SSD, Memória RAM 16GB, Processador Intel Core i7 13ª geração',
      price: 3828.01,
      thumbnail: '',
    },
    {
      name: 'Notebook Acer Predator Triton RTX 3060 i7 16GB',
      description:
        'Placa de video RTX 3060, Tela 16”, Capacidade 512GB SSD, Memória RAM 16GB, Processador Intel Core i7 12º geração',
      price: 3948.01,
      thumbnail: '',
    },
    {
      name: 'POLAR Pacer Pro + Assessoria',
      description: 'Relógio Esportivo com GPS avançado',
      price: 2868,
      thumbnail: '',
    },
    {
      name: 'POLAR Pacer Pro',
      description: 'Relógio Esportivo com GPS avançado',
      price: 1608,
      thumbnail: '',
    },
    {
      name: 'POLAR Pacer',
      description: 'Relógio Esportivo com GPS',
      price: 4558.87,
      thumbnail: '',
    },
    {
      name: 'iPhone 15 Pro 128GB',
      description: 'Chip A17 Pro com GPU de 6 núcleos',
      price: 3958.86,
      thumbnail: '',
    },
    {
      name: 'iPhone 15 128GB',
      description:
        'Chip A16 Bionic com GPU de 5 núcleos -  - Sistema avançado de câmera dupla',
      price: 3118.8,
      thumbnail: '',
    },
    {
      name: 'iPhone 14 Pro 128GB',
      description:
        '6.1 polegadas, A15 Bionic, Super Retina XDR OLED, Ceramic Glass, Câmera tripla, grande angular, ultra grande angular, telefoto + sensor LiDAR, 5G',
      price: 3238.8,
      thumbnail: '',
    },
    {
      name: 'iPhone 14 Pro Max 128GB',
      description:
        'Tela - LTPO Super Retina XDR OLED, Tamanho 6.7, Resolução 2796 x 1290, Densidade 460 ppi, Proteção Scratch-resistant ceramic glass, oleophobic coating, Extras Always-on display, Dolby Vision, 120Hz e HDR 10 Plus, CPU Hexa-core (2x3.46 GHz Avalanche e 4x Blizzard)',
      price: 3718.87,
      thumbnail: '',
    },
    {
      name: 'iPhone 14 128GB',
      description:
        '6.1 polegadas, A15, Super Retina XDR OLED, Ceramic Shield, Câmera dupla, grande angular, ultra grande angular, telefoto + sensor proximidade, 5G',
      price: 2362.8,
      thumbnail: '',
    },
    {
      name: 'iPhone 13 128GB',
      description:
        '6.1 polegadas, A15 Bionic, Super Retina XDR OLED, Ceramic Glass, Câmera dupla, grande angular, ultra grande angular, 5G',
      price: 2218.8,
      thumbnail: '',
    },
    {
      name: 'Playstation 5',
      description:
        '4K, SSD, 825 Gb de armazenamento livre e PSN Essential inclusa',
      price: 2099,
      thumbnail: '',
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
