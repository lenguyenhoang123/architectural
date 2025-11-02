import { Blueprint, Category } from './types';

export const blueprints: Blueprint[] = [
  {
    id: '1',
    title: 'Bộ Hộp Số Công Nghiệp',
    description: 'Bản vẽ 3D đầy đủ bộ hộp số công nghiệp, tỷ số truyền 1:5, làm từ thép hợp kim 20CrMnTi, độ cứng 58-62 HRC.',
    category: 'Cơ khí',
    price: 29990000,
    dimensions: 'A1',
    sqft: 13.5,
    bedrooms: 0,
    bathrooms: 0,
    imageUrl: '/src/components/New folder/1.png'
  },
  {
    id: '2',
    title: 'Mạch Điều Khiển Động Cơ',
    description: 'Sơ đồ mạch điều khiển động cơ 3 pha, công suất 5.5kW, tích hợp bảo vệ quá tải, ngắn mạch và mất pha.',
    category: 'Điện',
    price: 11490000,
    dimensions: 'A3',
    sqft: 0,
    imageUrl: '/src/components/New folder/2.png'
  },
  {
    id: '3',
    title: 'Kết Cấu Khung Thép Nhà Xưởng',
    description: 'Bản vẽ kết cấu khung thép nhà công nghiệp 1 tầng, nhịp 30m, cao 8m, tải trọng mái 150kg/m².',
    category: 'Xây dựng',
    price: 52990000,
    dimensions: '50m × 30m',
    sqft: 1500,
    imageUrl: '/src/components/New folder/3.png'
  },
  {
    id: '4',
    title: 'Thiết Kế Hệ Thống Điều Hòa',
    description: 'Bản vẽ hệ thống điều hòa trung tâm VRV/VRF cho tòa nhà văn phòng 10 tầng, công suất lạnh 120kW.',
    category: 'Điều hòa',
    price: 21990000,
    dimensions: 'A2',
    sqft: 0,
    imageUrl: '/src/components/New folder/4.png'
  },
  {
    id: '5',
    title: 'Chi Tiết Hộp Số Cơ Khí',
    description: 'Bản vẽ chi tiết các thành phần hộp số: trục, bánh răng, vòng bi và phớt chặn với dung sai lắp ghép và vật liệu.',
    category: 'Cơ khí',
    price: 15990000,
    dimensions: 'A3',
    sqft: 0,
    imageUrl: '/src/components/New folder/5.png'
  },
  {
    id: '6',
    title: 'Sơ Đồ Mạch Điều Khiển PLC',
    description: 'Sơ đồ mạch điều khiển tự động sử dụng PLC Siemens S7-1200, kết nối cảm biến và cơ cấu chấp hành.',
    category: 'Điện',
    price: 19490000,
    dimensions: 'A2',
    sqft: 0,
    imageUrl: '/src/components/New folder/6.png'
  },
  {
    id: '7',
    title: 'Bản Vẽ Móng Băng Nhà Ở',
    description: 'Bản vẽ thi công móng băng nhà dân, kích thước 20m x 10m, 3 tầng, phù hợp điều kiện đất yếu.',
    category: 'Xây dựng',
    price: 31990000,
    dimensions: 'A0',
    sqft: 200,
    imageUrl: '/src/components/New folder/7.png'
  },
  {
    id: '8',
    title: 'Thiết Kế Hệ Thống Cấp Thoát Nước',
    description: 'Bản vẽ hệ thống cấp thoát nước tòa nhà cao tầng, bao gồm đường ống nước lạnh, nước nóng trung tâm và thoát nước thải.',
    category: 'Cấp thoát nước',
    price: 24990000,
    dimensions: 'A1',
    sqft: 0,
    imageUrl: '/src/components/New folder/8.png'
  },
  {
    id: '9',
    title: 'Hệ Thống Máy Ép Thủy Lực',
    description: 'Bản vẽ hệ thống thủy lực máy ép 100 tấn, bao gồm xi lanh, bơm, van điều khiển và đường ống dầu.',
    category: 'Cơ khí',
    price: 38990000,
    dimensions: 'A1',
    sqft: 0,
    imageUrl: '/src/components/New folder/9.png'
  },
  {
    id: '10',
    title: 'Sơ Đồ Tủ Điều Khiển',
    description: 'Sơ đồ nguyên lý tủ điện điều khiển công nghiệp, bao gồm biến tần, động cơ, cảm biến và kết nối PLC.',
    category: 'Điện',
    price: 16990000,
    dimensions: 'A2',
    sqft: 0,
    imageUrl: '/src/components/New folder/2.png'
  },
  {
    id: '11',
    title: 'Kết Cấu Mái Vòm Sân Vận Động',
    description: 'Bản vẽ kết cấu giàn không gian mái vòm đa năng, nhịp 80m, cao 25m, sử dụng thép và kính cường lực.',
    category: 'Xây dựng',
    price: 71990000,
    dimensions: 'A0',
    sqft: 5000,
    imageUrl: '/src/components/New folder/10.png'
  },
  {
    id: '12',
    title: 'Hệ Thống Thông Gió Tầng Hầm',
    description: 'Bản vẽ hệ thống thông gió tầng hầm để xe, công suất 20.000m³/h, tích hợp hút khói phòng cháy.',
    category: 'Điều hòa',
    price: 43990000,
    dimensions: 'A1',
    sqft: 0,
    imageUrl: '/src/components/New folder/4.png'
  },
];

export const categories: Array<{ name: string; value: Category | 'All' }> = [
  { name: 'Tất cả bản vẽ', value: 'All' },
  { name: 'Cơ khí', value: 'Cơ khí' },
  { name: 'Điện', value: 'Điện' },
  { name: 'Xây dựng', value: 'Xây dựng' },
  { name: 'Điều hòa', value: 'Điều hòa' },
  { name: 'Cấp thoát nước', value: 'Cấp thoát nước' },
  { name: 'Điện tử', value: 'Điện tử' },
  { name: 'Robot', value: 'Robot' },
  { name: 'Nội thất', value: 'Nội thất' }
];
